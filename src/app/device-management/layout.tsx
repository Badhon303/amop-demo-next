"use client"
import { useSidebarHandler } from "@/hooks/use-sidebar-handler"

export default function DeviceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { open } = useSidebarHandler()
  return (
    <div
      className={`mt-16 ${
        open ? "ml-[260px]" : "ml-0"
      }  overflow-y-auto no-scrollbar duration-300`}
    >
      <div className="p-8 rounded-2xl">
        <h1 className="text-xl font-bold mb-5">Device Management Inventory</h1>
        {children}
      </div>
    </div>
  )
}
