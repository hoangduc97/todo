import List from './list.model';
import { validationResult } from 'express-validator';
import { ErrorHandler } from '../../utils/error.util';
import { apiStatus } from '../../utils/constants';
import { retrieveToken } from '../../utils/auth.util';

const _getAll = async (req, res, next) => {
    try {
        const _author = await retrieveToken(req.headers);
        const filter = {
            user_id: _author.id,
        };
        List.find(filter)
            .populate('tasks')
            .then((lists) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data Found',
                    data: lists,
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

const _getOne = async (req, res, next) => {
    try {
        const filter = {
            _id: req.params['id'],
        };
        List.find(filter)
            .populate('tasks')
            .then((lists) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data Found',
                    data: lists,
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
        const new_list = {
            user_id: _author.id,
            title: req.body.title,
            tasks: [],
        };

        const list = new List(new_list);
        list.save()
            .then((task_data) => {
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
    } catch (error) {
        next(error);
    }
};
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
        const filter = {
            _id: req.params['id'],
        };
        const update_task = {
            title: req.body.title,
        };

        await List.findOneAndUpdate(filter, update_task)
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ErrorHandler(
            apiStatus.DELETE_FAILURE,
            errors.toString(),
            1302
        );
    }

    try {
        const filter = {
            _id: req.params['id'],
        };
        await List.findOneAndDelete(filter, update_task)
            .then((task_data) => {
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
    _getAll,
    _getOne,
    _create,
    _update,
    _delete,
};

export default TaskService;
