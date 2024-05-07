import AdminPage from "@/components/templates/AdminPage";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const page = () => {
  return (
    <AdminPage selected="divchat" title={"Management Contact"}>
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
            <CardContact key={i} />
          ))}
        </div>
      </div>
    </AdminPage>
  );
};

const CardContact = () => {
  return (
    <div className="flex items-center gap-3 border-b-[2px] border-b-gray-400 pb-4 pt-3">
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
