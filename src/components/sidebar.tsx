"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useSidebarHandler } from "@/hooks/use-sidebar-handler"
import Menus from "@/constants/submenuList"

export default function Sidebar() {
  const { open, subMenuOpen, indexNumber, setSubMenuOpen, setIndexNumber } =
    useSidebarHandler()
  return (
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
                    className={`text-xs flex-1 font-bold ${!open && "scale-0"}`}
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
              {indexNumber === index && subMenuOpen && menu.submenu && open ? (
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
  )
}
