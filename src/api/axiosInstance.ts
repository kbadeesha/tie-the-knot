import axios from 'axios';

const BASE_URL = 'https://tietheknot-api.onrender.com/v1';


const axiosInstance = axios.create({
    baseURL: BASE_URL, // Set your base URL
    // timeout: 10000, // Set a timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add interceptors for requests and responses
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
