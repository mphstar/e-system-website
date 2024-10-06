"use client";

import AdminPage from "@/components/templates/AdminPage";
import Image from "next/image";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoArrowBack, IoSearchSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

const page = () => {
  const [showChat, setShowChat] = useState({
    status: false,
    selected: undefined,
  });

  return (
    <AdminPage selected="divchat" title={"Management Contact"}>
      <div
        className={`h-[100%] lg:h-[85dvh]  overflow-y-auto scrollbar-hide ${
          !showChat.status ? "translate-x-[100%]" : "translate-x-0"
        } duration-300 ease-in-out w-full  lg:translate-x-0 top-0 left-0 z-[200] lg:z-0  flex lg:flex-1  flex-col`}
      >
        {!showChat.status ? (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-3 items-center">
              <div className="flex items-center w-full lg:w-fit relative bg-abu px-4 py-2 rounded-[30px]">
                <FaSearch className="absolute right-4 text-gray-400" />
                <input
                  className="bg-transparent outline-none pr-12"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search..."
                />
              </div>
              <div className="flex items-center gap-2 flex-1 justify-end w-full">
                <button className="bg-[#7585F2] px-4 py-2 w-full lg:w-fit rounded-[5px] text-[#2D47FE]">
                  Import Contact
                </button>
                <button className="bg-[#92E3A9] px-4 py-2 w-full lg:w-fit rounded-[5px] text-[#00A556]">
                  Export Contact
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-abu px-4 py-3">
              {Array.from({ length: 10 }).map((_, i) => (
                <CardContact
                  onClick={() => {
                    setShowChat({
                      status: true,
                      selected: i,
                    });
                  }}
                  key={i}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="flex z-10 items-center px-6 py-3 bg-abu top-0 left-0  rounded-md">
              <div className="flex flex-row items-center flex-1 gap-4">
                <div
                  onClick={() =>
                    setShowChat({
                      status: false,
                      selected: undefined,
                    })
                  }
                  className="p-1 hover:bg-slate-200 flex"
                >
                  <IoArrowBack />
                </div>
                <ProfileChat />
                <p className="line-clamp-1">Mphstar</p>
              </div>
              <div className="flex items-center gap-0">
                <div className="hover:bg-slate-200 p-2">
                  <IoIosCall />
                </div>
                <div className="hover:bg-slate-200 p-2">
                  <IoSearchSharp />
                </div>
                <div className="hover:bg-slate-200 p-2">
                  <CiMenuKebab />
                </div>
              </div>
            </div>
            <div className="flex flex-1 overflow-y-auto flex-col  px-4 py-6 w-full gap-3 bg-white">
              <BubbleChat />
              <BubbleChat fromMe={true} />
              <BubbleChat />
              <BubbleChat fromMe={true} />
              <BubbleChat />
              <BubbleChat />
              <BubbleChat fromMe={true} />
              <BubbleChat />
              <BubbleChat fromMe={true} />
              <BubbleChat />
              <BubbleChat />
              <BubbleChat fromMe={true} />
              <BubbleChat />
              <BubbleChat fromMe={true} />
              <BubbleChat />
            </div>
            <div className="flex items-center bg-white py-2 sticky bottom-0 gap-3 px-4">
              <div className="bg-blue-main p-2 text-white rounded-full">
                <FaMicrophone />
              </div>
              <div className="flex items-center bg-gray-200 flex-1 h-full px-3 py-2">
                <input
                  type="text"
                  className="bg-transparent outline-none border-none w-full"
                />
              </div>
              <div className="flex bg-blue-main px-4 py-2 text-white rounded-md text-sm">
                Send
              </div>
            </div>
          </>
        )}
      </div>
    </AdminPage>
  );
};

const BubbleChat = ({ fromMe }) => {
  return (
    <div
      className={`w-full  flex flex-row ${
        fromMe ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex flex-row gap-3 max-w-[400px]">
        <div
          className={`rounded-full overflow-hidden size-12 ${
            fromMe ? "order-2" : "order-1"
          }`}
        >
          <Image
            width={200}
            height={200}
            alt="Profile"
            src={"https://picsum.photos/200/300"}
          />
        </div>
        <div
          className={`px-4 py-2 flex-1 rounded-md ${
            fromMe ? "order-1 bg-blue-main text-white" : "order-2 bg-gray-300"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius a
          consequuntur vero architecto voluptatibus eos culpa ipsum quia
          repudiandae quas!
        </div>
      </div>
    </div>
  );
};

const ProfileChat = () => {
  return (
    <div className="rounded-full overflow-hidden size-8">
      <Image
        width={200}
        height={200}
        alt="Profile"
        src={"https://picsum.photos/200/300"}
      />
    </div>
  );
};

const CardContact = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 border-b-[2px] border-b-gray-400 pb-4 pt-3"
    >
      <Image
        className="object-cover w-20 h-20"
        src={"https://picsum.photos/200/300"}
        width={300}
        height={300}
        alt="Photo"
      />
      <div className="flex flex-col flex-1 text-sm md:text-base">
        <p>Name : Shintia Caroline</p>
        <p>Division : Management</p>
        <p>Phone : +627879797979</p>
      </div>
      <MdOutlineMessage size={30} className="text-gray-400" />
    </div>
  );
};

export default page;
