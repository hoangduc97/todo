const initialState = [];

const ListDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: payload.id,
                    text: payload.text,
                },
            ];
        default:
            return state;
    }
};

export default ListDetailReducer;
