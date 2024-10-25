"use client";
import { useEffect, useState } from "react";
import ItemSidebar from "../molecules/ItemSidebar";
import Image from "next/image";
import Link from "next/link";

const SidebarAdmin = ({ showSidebar, handleSidebar, selected = "" }) => {
  const [menuDropdown, setMenuDropdown] = useState(false);

  useEffect(() => {
    if (
      selected === "absensi" ||
      selected === "approval" ||
      selected === "divchat" ||
      selected === "arsip" ||
      selected === "payroll"
    )
      setMenuDropdown(true);

    return () => {
      setMenuDropdown(false);
    };
  }, []);

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
          <Link href="/admin/home">
            <ItemSidebar
              selected={selected === "home"}
              title={"Home"}
              image={"/assets/icons/ic_home.svg"}
            />
          </Link>
          <ItemSidebar
            isDropdown
            setDropdown={menuDropdown}
            onClick={handleMenu}
            title={"Menu"}
            image={"/assets/icons/ic_menu.svg"}
          />
          <ul
            className={`flex flex-col text-white cursor-pointer duration-300 ease-in-out overflow-hidden ${
              !menuDropdown ? "h-0" : "h-[220px]"
            }`}
          >
            <Link href="/admin/absensi">
              <li
                className={`px-2 py-2 pl-20 ${
                  selected === "absensi" ? "bg-[#354DF4]" : ""
                }`}
              >
                Absensi
              </li>
            </Link>
            <Link href="/admin/approval/management">
              <li
                className={`px-2 py-2 pl-20 ${
                  selected === "approval" ? "bg-[#354DF4]" : ""
                }`}
              >
                Approvall
              </li>
            </Link>
            <Link href={"/admin/div-chat"}>
              <li
                className={`px-2 py-2 pl-20 ${
                  selected === "divchat" ? "bg-[#354DF4]" : ""
                }`}
              >
                Div Chat
              </li>
            </Link>
            <Link href={"/admin/e-arsip"}>
              <li
                className={`px-2 py-2 pl-20 ${
                  selected === "arsip" ? "bg-[#354DF4]" : ""
                }`}
              >
                E-Arsip
              </li>
            </Link>
            <Link href={"/admin/payroll"}>
              <li
                className={`px-2 py-2 pl-20 ${
                  selected === "payroll" ? "bg-[#354DF4]" : ""
                }`}
              >
                Payroll
              </li>
            </Link>
          </ul>
          <Link href={"/admin/chat"}>
            <ItemSidebar
              title={"Chat"}
              isNotif
              selected={selected === "chat"}
              image={"/assets/icons/ic_chat.svg"}
            />
          </Link>
          <Link href={"/admin/notification"}>
            <ItemSidebar
              title={"Notifikasi"}
              selected={selected === "notification"}
              image={"/assets/icons/ic_notif.svg"}
              isNotif
            />
          </Link>
          <Link href="/admin/user-database">
            <ItemSidebar
              selected={selected === "userDatabase"}
              title={"User Database"}
              image={"/assets/icons/ic_user.svg"}
            />
          </Link>

          <Link href="/admin/division">
            <ItemSidebar
              title={"Division"}
              image={"/assets/icons/ic_divisi.svg"}
              selected={selected === "division"}
            />
          </Link>

          <Link href="/admin/setting/general">
            <ItemSidebar
              title={"Setting"}
              selected={selected === "setting"}
              image={"/assets/icons/ic_setting.svg"}
            />
          </Link>
        </div>
        <div className="text-white px-3 py-2 justify-center text-center mb-4 text-xs mt-6">
          powered by @diprojectin.tech
        </div>
      </div>
      <div
        onClick={handleSidebar}
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
