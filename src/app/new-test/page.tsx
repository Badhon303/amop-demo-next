import Image from "next/image"
import Link from "next/link"
import { Home, ChevronRight, Menu, User2 } from "lucide-react"

export default async function DemoTest() {
  return (
    <div className="flex">
      <div className="w-[219px] border-r-[1px] border-[#eaeaea] h-screen">
        <div className="px-[25px] py-[21px]">
          <Image
            src="/logo_header_detailed_management_300.png"
            alt="logo"
            width={169}
            height={31}
          />
        </div>
        <div>
          <ul className="">
            <li className="pl-[25px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3]">
              <Link
                href=""
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <span className="block float-left">
                  <Home className="w-3 h-3" />
                </span>
                <span className="text-xs font-bold">Dashboard</span>
              </Link>
            </li>
            <li className="pl-[25px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3]">
              <Link
                href=""
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <span className="block float-left">
                  <Home className="w-3 h-3" />
                </span>
                <span className="text-xs flex-1 font-bold">Dashboard</span>
                <ChevronRight className="w-3 h-3 text-[#000]" />
              </Link>
            </li>
            <div className="bg-[#f7f9fa]">
              <ul className="">
                <li className="pl-[52px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3]">
                  <Link
                    href=""
                    className="flex items-center gap-x-2 cursor-pointer"
                  >
                    <span className="text-xs font-bold">Dashboard</span>
                  </Link>
                </li>
                <li className="pl-[52px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3]">
                  <Link
                    href=""
                    className="flex items-center gap-x-2 cursor-pointer"
                  >
                    <span className="text-xs flex-1 font-bold">Dashboard</span>
                  </Link>
                </li>
                <li className="pl-[52px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3]">
                  <Link
                    href=""
                    className="flex items-center gap-x-2 cursor-pointer"
                  >
                    <span className="text-xs flex-1 font-bold">Dashboard</span>
                  </Link>
                </li>
              </ul>
            </div>
            <li className="pl-[25px] pr-[35px] pt-[13px] pb-[12px] border-b-[1px] border-[#eaeaea] hover:text-white focus-within:text-white hover:bg-[#aec2cc] focus-within:bg-[#00c2f3]">
              <Link
                href=""
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <span className="block float-left">
                  <Home className="w-3 h-3" />
                </span>
                <span className="text-xs flex-1 font-bold">Dashboard</span>
                <ChevronRight className="w-3 h-3 text-[#000]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 h-[76px] border-b-[1px] border-[#eaeaea]">
        <div className="flex h-full items-center justify-between">
          <div className="flex px-10">
            <button className="flex justify-center items-center rounded-lg w-10 h-8 bg-[#00c2f3]">
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
        {/* <div className="h-14 px-[10px] pb-[20px]">Home Page</div> */}
      </div>
    </div>
  )
}
