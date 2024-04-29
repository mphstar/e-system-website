"use client";

import AdminPage from "@/components/templates/AdminPage";
import React, { useState } from "react";
import { IoArrowBack, IoCreateOutline, IoSearchSharp } from "react-icons/io5";
import { MdOutlineSort } from "react-icons/md";
import { CiMenuKebab, CiSearch } from "react-icons/ci";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

const page = () => {
  const [showChat, setShowChat] = useState({
    status: false,
    selected: undefined,
  });

  return (
    <AdminPage selected="chat" title={"CS Support Chat"}>
      <div className="flex flex-col mb-6 md:flex-row  gap-2">
        <div className="bg-abu  rounded-md relative h-full lg:h-[85dvh] overflow-y-auto scrollbar-hide lg:w-[400px] flex flex-col py-6 px-4">
          <div className="flex flex-row items-center py-2">
            <p className="flex-1 text-blue-main font-semibold">Chat</p>
            <div className="flex flex-row items-center gap-2">
              <IoCreateOutline size={20} />
              <MdOutlineSort size={20} />
            </div>
          </div>
          <div className="bg-white rounded-xl flex px-6 py-2 items-center gap-3 text-sm">
            <input
              placeholder="Search.."
              type="text"
              className="bg-transparent outline-none border-none flex-1 w-full"
            />
            <CiSearch />
          </div>
          <div className="flex flex-col mt-6 gap-2 w-full">
            {Array.from({length: 12}).map((_, i) => (
              <CardChat
                isSelected={showChat.selected === i}
                key={i}
                handleClick={() =>
                  setShowChat({
                    status: true,
                    selected: i,
                  })
                }
              />
            ))}
          </div>
        </div>

        <div
          className={`fixed h-[100%] lg:h-[85dvh]  overflow-y-auto scrollbar-hide ${
            !showChat.status ? "translate-x-[100%]" : "translate-x-0"
          } duration-300 ease-in-out w-full lg:sticky lg:translate-x-0 top-0 left-0 z-[200] lg:z-0  flex lg:flex-1  flex-col lg:w-[400px]`}
        >
          {!showChat.status ? (
            <div className="flex items-center justify-center h-full">
              <p>No Message here</p>
            </div>
          ) : (
            <>
              <div className="flex sticky z-10 items-center px-6 py-3 bg-abu top-0 left-0  rounded-md">
                <div className="flex flex-row items-center flex-1 gap-4">
                  <div
                    onClick={() =>
                      setShowChat({
                        status: false,
                        selected: undefined,
                      })
                    }
                    className="p-1 hover:bg-slate-200 flex lg:hidden"
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
              <div className="flex sticky flex-col  px-4 py-6 w-full gap-3 bg-white">
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

const CardChat = ({ handleClick, isSelected }) => {
  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-3 w-full cursor-pointer  px-2 py-2 ${isSelected ? 'bg-primary text-white' : 'hover:bg-blue-100'}`}
    >
      <ProfileCard />
      <div className="flex items-center flex-1">
        <div className="flex flex-col flex-1">
          <h1 className="font-semibold text-base">Mphstar</h1>
          <p className="line-clamp-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            eaque?
          </p>
        </div>
        <div className="flex flex-col items-center text-xs">
          <span className="text-gray-400">17.30</span>
          <div className="bg-red-500 rounded-full text-white text-[8px] px-2">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div className="rounded-full overflow-hidden size-12">
      <Image
        width={200}
        height={200}
        alt="Profile"
        src={"https://picsum.photos/200/300"}
      />
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

export default page;
