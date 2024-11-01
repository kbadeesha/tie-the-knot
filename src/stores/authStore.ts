import { create } from "zustand";
import { createSelectors } from "./create-selector";


export interface AuthStoreState {
    accessToken: string | null;
    refreshToken: string | null;
    user: any ;
    setAuth: (accessToken: string | null, refreshToken: string | null, user: any) => void;
    clearAuth: () => void;
}

 const useAuthStore = create<AuthStoreState>((set) => ({
    accessToken: null,
    refreshToken: null,
    user: null,
    setAuth: (accessToken, refreshToken, user) => set({ accessToken, refreshToken, user }),
    clearAuth: () => set({ accessToken: null, refreshToken: null, user: null }),
}));

export const useAuthSelectors = createSelectors(useAuthStore);
export default useAuthStore;

