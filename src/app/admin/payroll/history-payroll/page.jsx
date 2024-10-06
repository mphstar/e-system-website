"use client";

import AdminPage from "@/components/templates/AdminPage";
import PayrollPage from "@/components/templates/PayrollPage";
import useGlobalAdmin from "@/stores/useGlobalAdmin";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const divisi = [
  {
    id: 1,
    name: "Management",
    users: [
      {
        name: "Mphstar",
        status: "Published",
        avatar: "https://picsum.photos/200/300",
      },
      {
        name: "Raiden Shogun",
        status: "Published",
        avatar: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    id: 2,
    name: "HRD",
    users: [
      {
        name: "Mphstar",
        status: "Published",
        avatar: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    id: 3,
    name: "Finance",
    users: [
      {
        name: "Mphstar",
        status: "Published",
        avatar: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    id: 4,
    name: "Marketting",
    users: [
      {
        name: "Mphstar",
        status: "Published",
        avatar: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    id: 5,
    name: "Operational",
    users: [
      {
        name: "Mphstar",
        status: "Published",
        avatar: "https://picsum.photos/200/300",
      },
    ],
  },
];

const page = () => {
  const store = useGlobalAdmin();

  useEffect(() => {
    store.setTitleModal("Detail");
    store.setBodyModal(<KontenModal />);
  }, []);

  return (
    <AdminPage selected="payroll" title={"History Payroll"}>
      <PayrollPage selected="payroll">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-2 items-start xl:items-center lg:justify-start lg:items-start">
            <div className="flex flex-row lg:flex-col xl:flex-row flex-1 xl:items-center gap-3 text-sm flex-wrap items-start">
              <label htmlFor="sortDate">Sort Date By</label>
              <div className="bg-slate-200">
                <input
                  className="bg-transparent px-2 py-1"
                  type="date"
                  name=""
                  id="sortDate"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 bg-[#E3F0FB] p-4">
            <div className="flex flex-col  gap-4 rounded-md">
              {divisi.map((data, ke) => (
                <CardView data={data} key={ke} />
              ))}
            </div>
          </div>
        </div>
      </PayrollPage>
    </AdminPage>
  );
};
const CardView = ({ data }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const store = useGlobalAdmin();

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight + 30);
    }
  }, [data.users]);

  return (
    <div className="border-[1px] p-4 rounded-md border-black">
      <div
        onClick={() => setIsCollapse(!isCollapse)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <h1 className="flex-1">{data.name}</h1>
        <div
          className={`w-4 h-4 transition-transform duration-300 ${
            isCollapse ? "rotate-0" : "rotate-180"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 14l5-5 5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isCollapse ? `${contentHeight}px` : "0px" }}
      >
        <div ref={contentRef}>
          {data.users.map((user, i) => (
            <div className="flex gap-2 w-full items-center mt-4" key={i}>
              <img
                alt="avatar"
                src={user.avatar}
                className="w-[50px] h-[50px] aspect-square rounded-md object-cover"
              />
              <div className="flex flex-col flex-1">
                <h1 className="">{user.name}</h1>
                <div className="text-[#2D47FE] bg-[#b6bfff] w-fit p-2 rounded-md text-xs">
                  {user.status}
                </div>
              </div>
              <p
                onClick={() => {
                  store.handleModal();
                }}
                className="text-blue-500"
              >
                View
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const KontenModal = () => {
  const store = useGlobalAdmin();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h1>Name :</h1>
        <p className="text-gray-500">Shintia Caroline</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Division :</h1>
        <p className="text-gray-500">Management</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Sallary :</h1>
        <p className="text-gray-500">12.000.000</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Transfered :</h1>
        <p className="text-gray-500">10832092</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Transfered Via :</h1>
        <p className="text-gray-500">BCA</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Document :</h1>
        <img
          className="h-52 object-cover rounded"
          src="https://picsum.photos/200/300"
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
