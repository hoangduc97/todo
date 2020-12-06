import Task from './task.model';
import {validationResult} from "express-validator";
import {ErrorHandler} from "../../utils/error.util";
import {apiStatus} from "../../utils/constants";
import {retrieveToken} from "../../utils/auth.util";

const _get = async (req, res, next) => {
    try {
        const _author = await retrieveToken(req.headers);
        const filter = {
            user_id: _author.id,
        }
        Task.find(filter)
            .then((tasks) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data Found',
                    data: tasks
                })
            })
            .catch((error) => {
                throw new ErrorHandler(apiStatus.GET_FAILURE, 'Data not found', 1105)
            })

    } catch (error) {
        next(error);
    }
}
const _create = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ErrorHandler(
            apiStatus.CREATE_FAILURE,
            errors.toString(),
            1302
        );
    }

    try {
        const _author = await retrieveToken(req.headers);
        const new_task = {
            user_id: _author.id,
            title: req.body.title,
            note: req.body.note ? req.body.note : null,
            priority: req.body.priority ? req.body.priority : 0,
            due_date: req.body.due_date ? req.body.due_date : null
        }

        const task = new Task(new_task);
        task.save()
            .then((task_data) => {
                return res.status(apiStatus.CREATE_SUCCESS).json({
                    success: true,
                    message: 'Created successful',
                    data: task_data
                });
            })
            .catch((error) => {
                throw new ErrorHandler(apiStatus.CREATE_FAILURE, 'Create failure', 1105)
            })
    } catch (error) {
        next(error);
    }
}
const _update = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ErrorHandler(
            apiStatus.UPDATE_FAILURE,
            errors.toString(),
            1302
        );
    }

    try {
        const _author = await retrieveToken(req.headers);
        const new_task = {
            user_id: _author.id,
            title: req.body.title,
            note: req.body.note ? req.body.note : null,
            priority: req.body.priority ? req.body.priority : 0,
            due_date: req.body.due_date ? req.body.due_date : null
        }

        await Task.findOne
            .then((task_data) => {
                return res.status(apiStatus.CREATE_SUCCESS).json({
                    success: true,
                    message: 'Created successful',
                    data: task_data
                });
            })
            .catch((error) => {
                throw new ErrorHandler(apiStatus.CREATE_FAILURE, 'Create failure', 1105)
            })
    } catch (error) {
        next(error);
    }
}
const _delete = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ErrorHandler(
            apiStatus.DELETE_FAILURE,
            errors.toString(),
            1302
        );
    }

    try {

    } catch (error) {
        next(error);
    }
}

const TaskService = {
    _get,
    _create,
    _update,
    _delete
};

export default TaskService;