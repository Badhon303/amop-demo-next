import { create } from "zustand"

interface useSidebarHandlerStore {
  open: boolean
  subMenuOpen: boolean
  indexNumber: number
  setOpen: () => void
  setSubMenuOpen: () => void
  setIndexNumber: (indexId: number) => void
}

export const useSidebarHandler = create<useSidebarHandlerStore>((set) => ({
  open: true,
  subMenuOpen: false,
  indexNumber: 0,
  setOpen: () => set((state) => ({ open: !state.open })),
  setSubMenuOpen: () => set((state) => ({ subMenuOpen: !state.subMenuOpen })),
  setIndexNumber: (indexId: number) => set(() => ({ indexNumber: indexId })),
}))
