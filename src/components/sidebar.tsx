"use client"

//circle sidebar
import { useSidebarHandler } from "@/hooks/use-sidebar-handler"
import Menus from "@/constants/submenuList"
import Link from "next/link"

export default function Sidebar() {
  const { open, subMenuOpen, indexNumber, setSubMenuOpen, setIndexNumber } =
    useSidebarHandler()
  return (
    <div
      className={`fixed mt-16 h-[calc(100vh-105px)] rounded-xl  ${
        open ? "w-60" : "w-0"
      }  overflow-y-auto no-scrollbar`}
    >
      <div>
        <div className="p-4">
          <h1 className="text-center font-bold text-2xl pt-3">Logo</h1>
        </div>
        <div className="px-6 pt-4">
          <hr className="border-gray-200" />
        </div>
        <div className="px-6 pt-4">
          <ul className="flex flex-col space-y-2">
            {Menus.map((menu, index) => (
              <li key={index}>
                <div
                  className="relative flex justify-between hover:text-white focus-within:text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800 focus-within:bg-gray-800"
                  onClick={() => {
                    menu.submenu && setSubMenuOpen()
                    setIndexNumber(index)
                  }}
                >
                  <div className="flex items-center w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                      {menu.icon}
                    </div>
                    {/* {!menu.submenu && ( */}
                    <Link
                      href={`${menu.submenu ? "" : menu.url}`}
                      className="inline-block w-full py-2 pl-8 pr-4"
                    >
                      {menu.title}
                    </Link>
                    {/* )} */}
                  </div>
                  {menu.submenu ? (
                    <div className="absolute right-0 flex items-center p-1">
                      <svg
                        className="w-8 h-8 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M15.25 10.75L12 14.25L8.75 10.75"
                        ></path>
                      </svg>
                    </div>
                  ) : null}
                </div>
                {indexNumber === index && subMenuOpen && menu.submenu ? (
                  <div className="pt-2 pl-4">
                    <ul className="flex flex-col pl-2 border-l border-gray-200">
                      {menu.submenuItems.map((submenuItem, index) => (
                        <li
                          key={index}
                          className="hover:text-white focus-within:text-white pb-1"
                        >
                          <Link
                            href={menu.url}
                            className="inline-block w-full px-4 py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
                          >
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
