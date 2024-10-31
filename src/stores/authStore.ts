import { IUserRegisterFormData } from "@/types/User/registerUserType";
import { create } from "zustand";

interface AuthState {
    user: IUserRegisterFormData | null;
    accessToken: string | null;
    refreshToken: string | null;
    setAuthData: (user: User, accessToken: string, refreshToken: string) => void;
}

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

const useAuthStore = create<AuthState>()((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    setAuthData: (user, accessToken, refreshToken) => {
        set({ user, accessToken, refreshToken });
        localStorage.setItem('token', accessToken); // Optionally store token
    },
}));

export default useAuthStore;
