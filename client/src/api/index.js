import api from '../configs/api.config';

export const userApi = {
    login: (user) => {
        return api.post('/user/login', user);
    },
    register: (user) => {
        return api.post('/user/register', user);
    },
};

export const listApi = {
    getAll: () => {
        return api.get('/list');
    },
    create: (list) => {
        return api.post('/list', list);
    },
    update: (list) => {
        return api.put('/list/' + list._id, list);
    },
    delete: (id) => {
        return api.delete('/list/' + id);
    },
};

export const taskApi = {
    getAll: (listId) => {
        return api.get('/task/' + listId);
    },
    create: (listId, task) => {
        return api.post('/task/' + listId, task);
    },
    update: (task) => {
        return api.put('/task/' + task._id, task);
    },
    delete: (id) => {
        return api.delete('/task/' + id);
    },
};
