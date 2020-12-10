import listDetailConst from './listdetail.constant';
const initialState = {
    tasks: [],
};

const ListDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case listDetailConst.GET_SUCCESS:
            return {
                tasks: payload,
            };
        case listDetailConst.GET_FAILURE:
            return {
                err: payload,
            };
        case listDetailConst.CREATE_SUCCESS:
            return {
                tasks: [...state.tasks, payload],
            };
        case listDetailConst.CREATE_FAILURE:
            return {
                ...state,
                err: payload,
            };
        case listDetailConst.UPDATE_SUCCESS:
            return {
                tasks: [
                    ...state.tasks.filter((l) => l._id !== payload._id),
                    payload,
                ],
            };
        case listDetailConst.UPDATE_FAILURE:
            return {
                ...state,
                err: payload,
            };
        case listDetailConst.DELETE_SUCCESS:
            return {
                tasks: [...state.tasks.filter((t) => t._id !== payload._id)],
            };
        case listDetailConst.DELETE_FAILURE:
            return {
                ...state,
                err: payload,
            };
        default:
            return state;
    }
};

export default ListDetailReducer;
