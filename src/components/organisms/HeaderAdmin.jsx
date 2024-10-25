"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderAdmin = ({ handleSidebar, title = "Dashboard" }) => {
  return (
    <div className="px-4 py-6 flex flex-row gap-3 items-center sticky w-full top-0 z-[50] bg-white">
      <div onClick={handleSidebar} className="p-2 flex md:hidden">
        <RxHamburgerMenu />
      </div>
      <h1 className="text-blue-500 font-bold flex-1">{title}</h1>
      <div className="dropdown dropdown-end">
        <img
          src="/assets/images/header.png"
          tabIndex={0}
          role="button"
          className=""
        />
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
        >
          <li>
            <Link href={'/'}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderAdmin;
