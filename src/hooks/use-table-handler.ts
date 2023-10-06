import { create } from "zustand"

interface useTableHandlerStore {
  sortColumn: string
  sortColumnOrder: string
  setSortColumn: (indexId: string) => void
  setSortColumnOrder: (indexId: string) => void
}

export const useTableHandler = create<useTableHandlerStore>((set) => ({
  sortColumn: "",
  sortColumnOrder: "",
  setSortColumn: (sortId: string) => set(() => ({ sortColumn: sortId })),
  setSortColumnOrder: (sortOrderId: string) =>
    set(() => ({ sortColumnOrder: sortOrderId })),
}))
