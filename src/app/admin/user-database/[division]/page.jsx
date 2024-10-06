"use client";
import AdminPage from "@/components/templates/AdminPage";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";

const CardView = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col sm:flex-row items-center bg-[#ECEEFD] px-6 py-4 gap-4 border-b-[1px] border-b-black"
    >
      <div className="flex items-center gap-3 flex-1">
        <img
          className="object-cover aspect-square w-[70px] h-[70px]"
          src="https://picsum.photos/200/300"
          alt="photo"
        />
        <div className="flex flex-col text-xs md:text-sm">
          <p>Name : Shintia Caroline</p>
          <p>Division : Management</p>
          <p>Permission Type : Sick</p>
        </div>
      </div>
      <button className="">
        <AiOutlineEdit size={24} />
      </button>
    </div>
  );
};

const page = ({ params }) => {
  return (
    <AdminPage selected="userDatabase" title={"Management User Profile"}>
      <div className="flex flex-col lg:flex-row gap-2 items-start xl:items-center lg:justify-start lg:items-start">
        <div className="flex flex-row lg:flex-col xl:flex-row flex-1 xl:items-center gap-3 text-sm flex-wrap items-start">
          {/* <label htmlFor="sortDate">Sort Date By</label> */}
          <div className="bg-slate-200 flex items-center gap-2">
            <input
              className="bg-transparent px-2 py-1 outline-none grow"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
            <div className="px-2">
              <IoSearchSharp className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col xl:flex-row items-center lg:items-end gap-3 w-full text-sm justify-end md:justify-start lg:justify-end">
          <button className="bg-[#92b1e3] w-full flex-1 md:flex-none md:w-fit text-[#0068a5] px-3 py-1 rounded-[5px]">
            Import Contact
          </button>
          <button className="bg-[#92E3A9] w-full flex-1 md:flex-none md:w-fit text-[#00A556] px-3 py-1 rounded-[5px]">
            Export Contact
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <Link href={"/admin/user-database/hrd/edit"}>
          <CardView />
        </Link>
        <Link href={"/admin/user-database/hrd/edit"}>
          <CardView />
        </Link>
        <Link href={"/admin/user-database/hrd/edit"}>
          <CardView />
        </Link>
      </div>
    </AdminPage>
  );
};

export default page;
