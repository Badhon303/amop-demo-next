"use client"

import { UserNav } from "./user-nav"
import { ChevronLeft } from "lucide-react"
import { useSidebarHandler } from "@/hooks/use-sidebar-handler"

export default function Header() {
  const { open, setOpen } = useSidebarHandler()
  return (
    <div className="fixed w-[calc(100vw-36px)] h-12 z-50 page-header">
      <div className="flex h-full bg-white items-center rounded-xl justify-between px-10">
        <ChevronLeft
          className={`${!open && "rotate-180"}`}
          onClick={() => setOpen()}
        />
        <h1 className="ps-5">Header</h1>
        <UserNav />
      </div>
    </div>
  )
}
