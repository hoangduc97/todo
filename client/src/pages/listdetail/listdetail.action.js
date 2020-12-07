import listDetail from './listdetail.constant';

const actions = {
    addTask: function (task) {
        return {
            type: listDetail.ADD_TASK,
            payload: task,
        };
    },

    
};

export default actions;
