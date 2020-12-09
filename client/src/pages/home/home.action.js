import { listApi } from '../../api';
import homeConst from './home.constant';

const getAllList = () => (dispatch) => {
    dispatch({ type: homeConst.GET_REQUEST });
    listApi
        .getAll()
        .then((res) => {
            dispatch({ type: homeConst.GET_SUCCESS, payload: res.data.data });
        })
        .catch((err) => {
            dispatch({ type: homeConst.GET_FAILURE, payload: err.response.message });
        });
};

const addList = (task) => (dispatch) => {
    dispatch({ type: homeConst.CREATE_REQUEST });
    listApi
        .create(task)
        .then((res) => {
            dispatch({ type: homeConst.CREATE_SUCCESS, payload: res.data.data });
        })
        .catch((err) => {
            dispatch({ type: homeConst.CREATE_FAILURE, payload: err.response.message });
        });
};

const updateList = (task) => (dispatch) => {
    dispatch({ type: homeConst.UPDATE_REQUEST });
    listApi
        .update(task)
        .then((res) => {
            dispatch({ type: homeConst.UPDATE_SUCCESS, payload: res.data.data });
        })
        .catch((err) => {
            dispatch({ type: homeConst.UPDATE_FAILURE, payload: err.response.message });
        });
};
const deleteList = (id) => (dispatch) => {
    dispatch({ type: homeConst.DELETE_REQUEST });
    listApi
        .create(id)
        .then((res) => {
            dispatch({ type: homeConst.DELETE_SUCCESS, payload: res.data.data });
        })
        .catch((err) => {
            dispatch({ type: homeConst.DELETE_FAILURE, payload: err.response.message });
        });
};

export { getAllList, addList, updateList, deleteList };
