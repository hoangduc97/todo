import homeConst from './home.constant';
const initialState = {
    lists: [],
};

const HomeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case homeConst.GET_SUCCESS:
            return {
                lists: payload,
            };
        case homeConst.GET_FAILURE:
            return {
                err: payload,
            };
        case homeConst.CREATE_SUCCESS:
            return {
                lists: [...state.lists, payload],
            };
        case homeConst.CREATE_FAILURE:
            return {
                ...state,
                err: payload,
            };
        case homeConst.UPDATE_SUCCESS:
            return {
                lists: [
                    ...state.lists.filter((l) => l._id != payload._id),
                    payload,
                ],
            };
        case homeConst.UPDATE_FAILURE:
            return {
                ...state,
                err: payload,
            };
        case homeConst.DELETE_SUCCESS:
            return {
                lists: [...state.lists.filter((l) => l._id != payload)],
            };
        case homeConst.DELETE_FAILURE:
            return {
                ...state,
                err: payload,
            };
        default:
            return state;
    }
};

export default HomeReducer;
