
import useAuthStore from '@/stores/authStore';
import axiosInstance from './axiosInstance'; // Adjust the path as necessary
import { ILoginUserPayload, IUserRegisterPayload } from '@/types/User/registerUserType';



export const registerUser = async (userData: IUserRegisterPayload) => {
    console.log(userData)
    try {
        const response = await axiosInstance.post<any>('/auth/register',  userData );
        return response.data; // Return response if needed
    } catch (error) {
        console.error('Registration error:', error);
        throw error; // Propagate error
    }
};

export const loginUser = async (payload:ILoginUserPayload)=>{
    console.log(payload, "ILoginUserPayload")
    try {
        const response = await axiosInstance.post<any>('/auth/login',  payload );
        const{setAuth} = useAuthStore.getState()
        setAuth(response.data.accessToken, response.data.refreshToken, response.data.user)
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return response.data; 
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Propagate error
    }
}

export const logoutUser = async ()=>{
    try {
        const response = await axiosInstance.post<any>('/auth/logout');
        const{setAuth} = useAuthStore.getState()
        setAuth(null, null, null)
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        return response.data;
    } catch (error) {
        console.error('Logout error:', error);
        throw error; // Propagate error
    }
}

export const googleLogin = async () => {
    try {
        const response = await axiosInstance.get<any>('/auth/google-login');
        return response.data;
    } catch (error) {
        console.error('Google login error:', error);
        throw error; // Propagate error
    }
};