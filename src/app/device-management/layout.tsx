// "use client"
// import { useSidebarHandler } from "@/hooks/use-sidebar-handler"

// export default function DeviceLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const { open } = useSidebarHandler()
//   return (
//     <div
//       className={`mt-16 ${
//         open ? "ml-[260px]" : "ml-0"
//       }  overflow-y-auto no-scrollbar duration-300`}
//     >
//       <div className="p-8 rounded-2xl">
//         <h1 className="text-xl font-bold mb-5">Device Management Inventory</h1>
//         {children}
//       </div>
//     </div>
//   )
// }

"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Menu, User2 } from "lucide-react"
import DeviceManagement from "@/app/device-management/page"
import { useSidebarHandler } from "@/hooks/use-sidebar-handler"
import Menus from "@/constants/submenuList"

export default function DemoTest({ children }: { children: React.ReactNode }) {
  const {
    open,
    subMenuOpen,
    indexNumber,
    setSubMenuOpen,
    setIndexNumber,
    setOpen,
  } = useSidebarHandler()

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-[219px]" : "w-[70px]"
        } border-r-[1px] border-[#eaeaea] h-screen duration-300`}
      >
        <div className={`${open ? "px-[25px]" : "px-[15px]"}  py-[21px]`}>
          {open ? (
            <Image
              src="/logo_header_detailed_management_300.png"
              alt="logo"
              width={169}
              height={31}
            />
          ) : (
            <h1 className="font-bold text-xs">AMOP</h1>
          )}
        </div>
        <div>
          <ul className="">
            {Menus.map((menu, index) => (
              <div key={index}>
                <li className="">
                  <Link
                    href={`${menu.submenu ? "" : menu.url}`}
                    className="pl-[25px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3] flex items-center gap-x-2 cursor-pointer"
                    onClick={() => {
                      menu.submenu && setSubMenuOpen()
                      setIndexNumber(index)
                    }}
                  >
                    <span className="block float-left">
                      <div className="w-3 h-3">{menu.icon}</div>
                    </span>
                    <span
                      className={`text-xs flex-1 font-bold ${
                        !open && "scale-0"
                      }`}
                    >
                      {menu.title}
                    </span>
                    {menu.submenu ? (
                      <ChevronRight
                        className={`w-3 h-3 ${
                          subMenuOpen && indexNumber === index && "rotate-90"
                        } `}
                      />
                    ) : null}
                  </Link>
                </li>
                {indexNumber === index &&
                subMenuOpen &&
                menu.submenu &&
                open ? (
                  <div className="bg-[#f7f9fa]">
                    <ul className="">
                      {menu.submenuItems.map((submenuItem, index) => (
                        <li
                          key={index}
                          className="pl-[52px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3]"
                        >
                          <Link
                            href={`${submenuItem.url}`}
                            className="flex items-center gap-x-2 cursor-pointer"
                          >
                            <span
                              className={`text-xs font-bold ${
                                !open && "scale-0"
                              }`}
                            >
                              {submenuItem.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 h-[76px] border-b-[1px] border-[#eaeaea]">
        <div className="flex h-full items-center justify-between">
          <div className="flex px-10">
            <button
              className="flex justify-center items-center rounded-lg w-10 h-8 bg-[#00c2f3]"
              onClick={() => setOpen()}
            >
              <Menu className="w-4 h-4 text-[#fff]" />
            </button>
            <h1 className="ml-4 text-2xl">Inventory</h1>
          </div>
          <div className="flex items-center px-10">
            <div className="mr-1">
              <h1 className="font-bold text-xs text-[#00c2f3]">
                Admin@admin.com
              </h1>
              <h1 className="text-right text-xs text-[#00c2f3]">Super Admin</h1>
            </div>
            <button className="flex justify-center items-center">
              <User2 className="w-8 h-8 text-[#00c2f3]" />
            </button>
            <div className="ml-24 w-6 h-6 text-center rounded-full ring-2 ring-[#00c2f3]">
              <h1 className=" text-[#00c2f3] text-2xl font-bold">?</h1>
            </div>
          </div>
        </div>
        <div className="p-3">{children}</div>
      </div>
    </div>
  )
}
