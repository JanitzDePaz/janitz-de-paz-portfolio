import { create } from "zustand";

export const headerMenu = create<HeaderMenu>((set) => ({
  openMenu: false,
  width: 0,
  toggleMenu: () => set((state) => ({ openMenu: !state.openMenu })),
  setWidth: (width) => set({ width: width }),
}));
