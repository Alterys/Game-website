import { create } from "zustand";

const useStore = create((set) => ({
  name: "",
  setName: (name) => set({ name }),
}));

export default useStore;
