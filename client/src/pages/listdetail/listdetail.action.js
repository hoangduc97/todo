import listDetail from './listdetail.constant';

const actions = {
    addTask: function (task) {
        return {
            type: listDetail.ADD_TASK,
            payload: task,
        };
    },
    updateTask: function (task) {
        return {
            type: listDetail.UPDATE_TASK,
            payload: task,
        };
    },
    deleteTask: function (id) {
        return {
            type: listDetail.DELETE_TASK,
            payload: id,
        };
    },
};

export default actions;
