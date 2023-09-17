"use client"

import { useSidebarHandler } from "@/hooks/use-sidebar-handler"

export default function Sidebar() {
  const { open, subMenuOpen, indexNumber, setSubMenuOpen, setIndexNumber } =
    useSidebarHandler()
  const Menus = [
    {
      title: "Dashboard",
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 8.75V19"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 8.25H19"
          ></path>
        </svg>
      ),
    },
    {
      title: "M2M",
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M18 9.25H13.75V5"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 15.25H14.25"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 12.25H14.25"
          ></path>
        </svg>
      ),
      submenu: true,
      submenuItems: [
        { title: "Inventory" },
        { title: "Bulk Change" },
        { title: "Carrier Rate Plans" },
        { title: "Customer Rate Plans" },
        { title: "Customer Rate Pools" },
        { title: "Revenue Assurance" },
        { title: "Reports" },
      ],
    },
    {
      title: "Mobility",
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      submenu: true,
      submenuItems: [
        { title: "Inventory" },
        { title: "Bulk Change" },
        { title: "Carrier Rate Plans" },
        { title: "Customer Rate Plans" },
        { title: "Customer Rate Pools" },
        { title: "Revenue Assurance" },
        { title: "Reports" },
      ],
    },
    {
      title: "Optimization",
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 8.75V19"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 8.25H19"
          ></path>
        </svg>
      ),
    },
    {
      title: "Customer Charges",
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 8.75V19"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 8.25H19"
          ></path>
        </svg>
      ),
    },
    {
      title: "People",
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      submenu: true,
      submenuItems: [{ title: "Users" }],
    },
    {
      title: "Settings",
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      submenu: true,
      submenuItems: [
        { title: "Provider Charge Mapping" },
        { title: "Partners" },
      ],
    },
    {
      title: "Device Management",
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      submenu: true,
      submenuItems: [
        { title: "Inventory" },
        { title: "Provisioning" },
        { title: "Reports" },
        { title: "Revenue Assurance" },
      ],
    },
  ]
  return (
    <div
      className={`fixed mt-16 bg-white h-[calc(100vh-105px)] rounded-xl  ${
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
                    <a href="#" className="inline-block w-full py-2 pl-8 pr-4">
                      {menu.title}
                    </a>
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
                          <a
                            href="#"
                            className="inline-block w-full px-4 py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
                            // className="inline-block w-full px-4 py-2 rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
                          >
                            {submenuItem.title}
                          </a>
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
