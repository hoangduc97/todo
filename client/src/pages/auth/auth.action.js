import authConst from './auth.constant';
import { userApi } from '../../api/index';

const login = (user) => (dispatch) => {
    dispatch({ type: authConst.LOGIN_REQUEST });
    userApi
        .login(user)
        .then((user) => {
            dispatch({
                type: authConst.LOGIN_SUCCESS,
                payload: user.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: authConst.LOGIN_FAILURE,
                payload: err.response.data,
            });
        });
};

const register = (user) => (dispatch) => {
    dispatch({ type: authConst.REGISTER_REQUEST });
    userApi
        .register(user)
        .then((user) => {
            dispatch({
                type: authConst.REGISTER_SUCCESS,
                payload: user.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: authConst.REGISTER_FAILURE,
                payload: err.response.data,
            });
        });
};

const logout = () => (dispatch) => {
    dispatch({ type: authConst.LOGOUT });
};

export { login, register, logout };
