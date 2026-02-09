import { create } from "zustand";

type UseAuthstore = {
    username: string;
    role: string;
    setAuth: ({ username, role }: { username: string; role: string; }) => void;
};

const useAuthStore = create<UseAuthstore>((set) => ({
    username: '',
    role: '',
    setAuth: ({ username, role }: Pick<UseAuthstore, 'username' | 'role'>) => {
        set({ username, role });
    }
}));

export default useAuthStore;