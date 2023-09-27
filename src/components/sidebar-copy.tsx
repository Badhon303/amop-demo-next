"use client"

import Image from "next/image"
import Link from "next/link"
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
          <Image src="/amop-core.png" alt="logo" width={169} height={64} />
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
                  className="pl-[25px] pr-[33px] pt-[13px] pb-[10px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3] flex items-center gap-x-2 cursor-pointer"
                  onClick={() => {
                    menu.submenu && setSubMenuOpen()
                    setIndexNumber(index)
                  }}
                >
                  <span className="block float-left">
                    <div>{menu.icon}</div>
                  </span>
                  <span className={`text-xs font-bold`}>{menu.title}</span>
                </Link>
              </li>
              {/* {indexNumber === index && subMenuOpen && menu.submenu && open ? ( */}
              <div className="bg-[#f7f9fa] flex flex-shrink-0">
                <ul
                  className={`${
                    indexNumber === index && subMenuOpen && menu.submenu && open
                      ? "h-0"
                      : "h-auto"
                  } duration-300`}
                >
                  {menu.submenuItems.map((submenuItem, index) => (
                    <div key={index}>
                      <li className="pl-[52px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3]">
                        <Link
                          href={`${submenuItem.url}`}
                          className="flex items-center gap-x-2 cursor-pointer"
                        >
                          <span className={`text-xs font-bold`}>
                            {submenuItem.title}
                          </span>
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              {/* ) : null} */}
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
