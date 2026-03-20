import { create } from "zustand"


const useTokenStore= create((set) => ({
    token: null,
    setToken: (token) => set({ token }),
    resetToken: () => set({ token: null }),
}))

export default useTokenStore