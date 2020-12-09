import axios from 'axios';
const BASE_URL = 'http://localhost:3000/api/v1';

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
