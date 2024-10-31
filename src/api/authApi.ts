
import useAuthStore from '@/stores/authStore';
import axiosInstance from './axiosInstance'; // Adjust the path as necessary
import { IUserRegisterPayload } from '@/types/User/registerUserType';



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


// import { IUserRegisterFormData } from "@/types/User/registerUserType";

// export const registerUser = async (userData:IUserRegisterFormData) => {
//     const response = await fetch('/v1/auth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
  
//     if (!response.ok) {
//       throw new Error('Failed to register user');
//     }
//   console.log("first",response.json())
//     // return response.json();
//   };