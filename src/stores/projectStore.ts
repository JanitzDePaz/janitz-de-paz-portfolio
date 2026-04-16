import { create } from "zustand";

export const useProjectStore = create<ProjectStore>((set) => ({
  moreInfo: false,
  setMoreInfo: (bool) => set({ moreInfo: bool }),
}));
