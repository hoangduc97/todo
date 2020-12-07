import listDetail from './listdetail.constant';
const initialState = [];

const ListDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case listDetail.LOAD_TASK:
            return [...state, payload];
        case listDetail.ADD_TASK:
            return [...state, payload];
        case listDetail.UPDATE_TASK:
            return [...state.filter((t) => t._id != payload._id), payload];
        case listDetail.DELETE_TASK:
            return [...state.filter((t) => t._id != payload)];
        default:
            return state;
    }
};

export default ListDetailReducer;
