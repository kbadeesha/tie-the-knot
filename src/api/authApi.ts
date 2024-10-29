import { IUserRegisterFormData } from "@/types/User/registerUserType";

export const register = async (userData:IUserRegisterFormData) => {
    const response = await fetch('/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to register user');
    }
  
    return response.json();
  };