import { create } from "zustand";

export const projectStore = create<ProjectStore>((set) => ({
  moreInfo: false,
  setMoreInfo: (bool) => set({ moreInfo: bool }),
}));
