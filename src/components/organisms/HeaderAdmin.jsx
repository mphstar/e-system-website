"use client"
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderAdmin = ({handleSidebar}) => {
  return (
    <div className="px-4 py-6 flex flex-row gap-3 items-center">
        <div onClick={handleSidebar} className="p-2 flex md:hidden">
            <RxHamburgerMenu />
        </div>
        <h1 className="text-blue-500 font-bold">Dashboard</h1>
    </div>
  )
}

export default HeaderAdmin