import api from '../configs/api.config';

export const userApi = {
    login: async function (user) {
        return await api.post('/login', user).then((res) => res);
    },
    register: async function (user) {
        return await api.post('/register', user).then((res) => res);
    },
};

export const taskApi = {
    
}