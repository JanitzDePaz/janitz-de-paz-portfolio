import { create } from "zustand";

export const headerMenu = create<HeaderMenu>((set) => ({
  openMenu: false,
  width: 0,
  mobileWidth: 768,
  toggleMenu: () => set((state) => ({ openMenu: !state.openMenu })),
  setMenu: (value) => set({openMenu: value}),
  setWidth: (width) => set({ width: width }),
}));
