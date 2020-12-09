import { taskApi } from '../../api';
import listDetailConst from './listdetail.constant';

const getAllTask = (listId) => (dispatch) => {
    dispatch({ type: listDetailConst.GET_REQUEST });
    taskApi
        .getAll(listId)
        .then((res) => {
            dispatch({
                type: listDetailConst.GET_SUCCESS,
                payload: res.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: listDetailConst.GET_FAILURE,
                payload: err.response.message,
            });
        });
};

const addTask = (listId, task) => (dispatch) => {
    dispatch({ type: listDetailConst.CREATE_REQUEST });
    taskApi
        .create(listId, task)
        .then((res) => {
            dispatch({
                type: listDetailConst.CREATE_SUCCESS,
                payload: res.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: listDetailConst.CREATE_FAILURE,
                payload: err.response.message,
            });
        });
};

const updateTask = (task) => (dispatch) => {
    dispatch({ type: listDetailConst.UPDATE_REQUEST });
    taskApi
        .update(task)
        .then((res) => {
            dispatch({
                type: listDetailConst.UPDATE_SUCCESS,
                payload: res.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: listDetailConst.UPDATE_FAILURE,
                payload: err.response.message,
            });
        });
};
const deleteTask = (id) => (dispatch) => {
    dispatch({ type: listDetailConst.DELETE_REQUEST });
    taskApi
        .delete(id)
        .then((res) => {
            dispatch({
                type: listDetailConst.DELETE_SUCCESS,
                payload: res.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: listDetailConst.DELETE_FAILURE,
                payload: err.response.message,
            });
        });
};

export { getAllTask, addTask, updateTask, deleteTask };
