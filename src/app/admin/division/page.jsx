"use client";

import AdminPage from "@/components/templates/AdminPage";
import useGlobalAdmin from "@/stores/useGlobalAdmin";
import { useEffect } from "react";

const KontenModal = () => {
  const store = useGlobalAdmin();

  return (
    <div className="flex flex-col gap-3">
      <label className="flex flex-col gap-2">
        <p>Division Name</p>
        <input
          className="p-2 border-[2px] rounded-md"
          type="text"
          name=""
          id=""
        />
      </label>
      <label className="flex flex-col gap-2">
        <p>Space</p>
        <div className="flex gap-2 items-center">
          <input
            className="p-2 border-[2px] rounded-md flex-1"
            type="text"
            name=""
            id=""
          />
          <p>MB</p>
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <p>Company</p>
        <input
          className="p-2 border-[2px] rounded-md"
          type="text"
          name=""
          id=""
        />
      </label>
      <div className="mt-5 flex flex-row gap-2 w-fit">
        <button className="bg-green-500 hover:bg-green-600 text-white w-fit rounded-md p-2">
          Save
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white w-fit rounded-md p-2">
          Remove
        </button>
      </div>
    </div>
  );
};

const CardDivisi = ({ name }) => {
  return (
    <div className="flex flex-col min-h-[130px] bg-[#92E3A9] shadow-md px-4 py-6 cursor-pointer">
      <h1 className="text-[#49A374]">{name}</h1>
    </div>
  );
};

const divisi = [
  {
    id: 1,
    name: "Management",
  },
  {
    id: 2,
    name: "HRD",
  },
  {
    id: 3,
    name: "Finance",
  },
  {
    id: 4,
    name: "Marketting",
  },
  {
    id: 5,
    name: "Operational",
  },
];

const page = () => {
  const store = useGlobalAdmin();

  useEffect(() => {
    store.setTitleModal("Division");
    store.setBodyModal(<KontenModal />);
    store.setClassNameModal("max-w-[320px]");

    return () => {
      store.setClassNameModal("");
    };
  }, []);

  return (
    <AdminPage selected="division" title={"Division Database"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 w-full h-full gap-4">
        {divisi.map((item, index) => (
          <div onClick={() => store.handleModal()} key={index}>
            <CardDivisi name={item.name} />
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-3 items-center mt-8">
        <button
          onClick={() => store.handleModal()}
          className="bg-[#5FBE69] hover:bg-[#489450] px-5 py-2 rounded-[5px] text-white"
        >
          Add Division
        </button>
        {/* <button className="bg-[#6072EE] hover:bg-[#5060cc] px-5 py-2 rounded-[5px] text-white">
          Edit Division
        </button>
        <button className="bg-[#E75555] hover:bg-[#d14b4b] px-5 py-2 rounded-[5px] text-white">
          Remove Division
        </button> */}
      </div>
    </AdminPage>
  );
};

export default page;
