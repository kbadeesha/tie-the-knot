import axios from 'axios';

const BASE_URL = 'https://tietheknot-api.onrender.com/v1';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
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
    (response) => response, // If everything is fine, return the response
    async (error) => {
        const originalRequest = error.config;

        // If error is 401 (Unauthorized) and hasn't been retried yet
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (!refreshToken) {
                    throw new Error('Refresh token not available');
                }

                // Call the refresh token endpoint
                const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
                    refreshToken, // Send the refresh token
                });

                // Get the new refresh token from the response
                const { refreshToken: newRefreshToken } = response.data;

                // Save the new refresh token to localStorage
                localStorage.setItem('refreshToken', newRefreshToken);

                // Retry the original request with the new refresh token (no access token)
                return axiosInstance(originalRequest);
            } catch (err) {
                // Handle the error (e.g., token is invalid, force logout)
                console.error('Token refresh failed:', err);
                return Promise.reject(err);
            }
        }

        // Return other errors
        return Promise.reject(error);
    }
);

export default axiosInstance;
