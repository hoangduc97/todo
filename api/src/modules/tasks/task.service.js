import Task from './task.model';
import List from '../lists/list.model';
import {validationResult} from 'express-validator';
import {ErrorHandler} from '../../utils/error.util';
import {apiStatus} from '../../utils/constants';

const _get = async (req, res, next) => {
    try {
        const filter = {list: req.params['list_id']};
        Task.find(filter)
            .then((tasks) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data Found',
                    data: tasks,
                });
            })
            .catch((error) => {
                throw new ErrorHandler(
                    apiStatus.GET_FAILURE,
                    'Data not found',
                    1105
                );
            });
    } catch (error) {
        next(error);
    }
};
const _create = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ErrorHandler(
                apiStatus.CREATE_FAILURE,
                errors.toString(),
                1302
            );
        }
        const list = req.params['list_id'];
        const new_task = {
            title: req.body.title,
            completed: req.body.completed,
            note: req.body.note,
            priority: req.body.priority,
            due_date: req.body.due_date,
            list: list,
        };
        const found = await List.findById({_id: new_task.list});
        if (found) {
            const task = new Task(new_task);
            task.save()
                .then(async (task_data) => {
                    await List.findByIdAndUpdate(
                        {_id: task_data.list},
                        {$push: {tasks: task_data._id}}
                    );
                    return res.status(apiStatus.CREATE_SUCCESS).json({
                        success: true,
                        message: 'Created successful',
                        data: task_data,
                    });
                })
                .catch((error) => {
                    throw new ErrorHandler(
                        apiStatus.CREATE_FAILURE,
                        'Create failure',
                        1105
                    );
                });
        } else {
            throw new ErrorHandler(
                apiStatus.CREATE_FAILURE,
                'List not existed',
                1105
            );
        }
    } catch (error) {
        next(error);
    }
};
const _update = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ErrorHandler(
                apiStatus.UPDATE_FAILURE,
                errors.toString(),
                1302
            );
        }
        const filter = {
            _id: req.params['id'],
        };
        const update_task = {
            title: req.body.title,
            completed: req.body.completed,
            note: req.body.note,
            priority: req.body.priority,
            due_date: req.body.due_date,
        };

        await Task.findOneAndUpdate(filter, update_task, {"new": true})
            .exec()
            .then((task_data) => {
                return res.status(apiStatus.CREATE_SUCCESS).json({
                    success: true,
                    message: 'Updated successful',
                    data: task_data,
                });
            })
            .catch((error) => {
                throw new ErrorHandler(
                    apiStatus.CREATE_FAILURE,
                    'Update failure',
                    1105
                );
            });
    } catch (error) {
        next(error);
    }
};
const _delete = async (req, res, next) => {
    try {
        const filter = {
            _id: req.params['id'],
        };
        await Task.findOneAndDelete(filter)
            .then(async (task_data) => {
                return res.status(apiStatus.DELETE_SUCCESS).json({
                    success: true,
                    message: 'Deleted successful',
                    data: task_data,
                });
            })
            .catch((error) => {
                throw new ErrorHandler(
                    apiStatus.DELETE_FAILURE,
                    'Deleted failure',
                    1105
                );
            });
    } catch (error) {
        next(error);
    }
};

const TaskService = {
    _get,
    _create,
    _update,
    _delete,
};

export default TaskService;
