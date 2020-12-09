import authConst from './auth.constant';

const token = localStorage.getItem('token');
const initialState = {
    token: token ? token : null,
    isAuthUser: token ? true : false,
    loading: false,
};

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authConst.LOGIN_REQUEST:
            return {
                loading: true,
            };
        case authConst.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                token: payload,
                isAuthUser: true,
                loading: false,
            };
        case authConst.LOGIN_FAILURE:
            return {
                err: payload,
                isAuthUser: false,
                loading: false,
            };
        case authConst.LOGOUT:
            localStorage.clear();
            return {
                token: null,
                isAuthUser: false,
                loading: false,
            };
        case authConst.REGISTER_REQUEST:
            return {
                loading: true,
            };
        case authConst.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                token: payload,
                isAuthUser: true,
                loading: false,
            };
        case authConst.REGISTER_FAILURE:
            return {
                err: payload,
                isAuthUser: false,
                loading: false,
            };
        default:
            return state;
    }
};

export default AuthReducer;
