import axios from 'axios';
const BASE_URL = 'http://52.74.246.145/v1';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? token : '';
    return config;
});
export default api;
