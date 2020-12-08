import Axios from 'axios';
const BASE_URL = 'http://localhost:3000/api/v1';
const user = localStorage.getItem('user');

const api = new Axios({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user['token'],
    },
});

export default api;
