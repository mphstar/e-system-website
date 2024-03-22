"use client";
import { useState } from "react";
import ItemSidebar from "../molecules/ItemSidebar";
import Image from "next/image";

const SidebarAdmin = ({ showSidebar, handleSidebar }) => {
  const [menuDropdown, setMenuDropdown] = useState(false);

  const handleMenu = (e) => {
    setMenuDropdown(!menuDropdown);
  };
  return (
    <>
      <div
        className={`flex flex-col bg-primary w-[300px] fixed  ${
          showSidebar ? "translate-x-0" : "-translate-x-[300px]"
        } md:translate-x-0 duration-300 ease-in-out top-0 left-0 overflow-y-auto h-full scrollbar-hide z-[100]`}
      >
        <div className="flex flex-row gap-2 items-center px-4 mt-8 ">
          <Image
            width={100}
            height={100}
            src={"/assets/images/logo.svg"}
            alt="Logo"
            className="w-16"
          />
          <span className="text-white">E-System</span>
        </div>
        <div className="flex flex-col mt-6 flex-1">
          <ItemSidebar title={"Home"} image={"/assets/icons/ic_home.svg"} />
          <ItemSidebar
            isDropdown
            setDropdown={menuDropdown}
            onClick={handleMenu}
            title={"Menu"}
            image={"/assets/icons/ic_menu.svg"}
          />
          <ul
            className={`flex flex-col text-white cursor-pointer px-6 pl-16 duration-300 ease-in-out overflow-hidden ${
              !menuDropdown ? "h-0" : "h-[220px]"
            }`}
          >
            <li className="px-2 py-2">Absensi</li>
            <li className="px-2 py-2">Approvall</li>
            <li className="px-2 py-2">Div Chat</li>
            <li className="px-2 py-2">E-Arsip</li>
            <li className="px-2 py-2">Payroll</li>
          </ul>
          <ItemSidebar title={"Chat"} image={"/assets/icons/ic_chat.svg"} />
          <ItemSidebar
            title={"Notifikasi"}
            image={"/assets/icons/ic_notif.svg"}
          />
          <ItemSidebar
            title={"User Database"}
            image={"/assets/icons/ic_user.svg"}
          />
          <ItemSidebar
            title={"Division"}
            image={"/assets/icons/ic_divisi.svg"}
          />
          <ItemSidebar
            title={"Setting"}
            image={"/assets/icons/ic_setting.svg"}
          />
        </div>
        <div className="text-white px-3 py-2 justify-center text-center mb-4 text-xs mt-6">
          powered by @diprojectin.tech
        </div>
      </div>
      <div onClick={handleSidebar}
        className={`w-screen fixed top-0 left-0 h-screen bg-black ${
          showSidebar
            ? "opacity-30 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }  z-[99] duration-300 ease-in-out`}
      ></div>
    </>
  );
};

export default SidebarAdmin;
