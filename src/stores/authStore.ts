import { create } from "zustand";


export interface AuthStoreState {
    accessToken: string | null;
    refreshToken: string | null;
    user: any;
    setAuth: (accessToken: string, refreshToken: string, user: any) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
    accessToken: null,
    refreshToken: null,
    user: null,
    setAuth: (accessToken, refreshToken, user) => set({ accessToken, refreshToken, user }),
    clearAuth: () => set({ accessToken: null, refreshToken: null, user: null }),
}));

