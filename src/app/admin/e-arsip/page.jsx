"use client";

import AdminPage from "@/components/templates/AdminPage";
import useGlobalAdmin from "@/stores/useGlobalAdmin";
import { useEffect } from "react";
import Swal from "sweetalert2";

const CardEarsipMonitoring = ({
  usedSize = 55,
  freeSize = 0,
  totalSize = 0,
  name,
  onClick,
}) => {
  return (
    <label
      onClick={onClick}
      htmlFor={`checkData${name}`}
      className="flex flex-col px-3 py-2 bg-[#4058FF] text-white relative"
    >
      <h1 className="w-full pr-8">{name}</h1>
      {/* <input className='absolute top-2 right-2' type="checkbox" name="" id={`checkData${name}`} /> */}

      <div className="flex flex-col bg-[#D9D9D9] w-full h-[30px] mt-2">
        <div
          style={{
            width: `${usedSize}%`,
            backgroundColor:
              usedSize > 70
                ? usedSize < 90
                  ? "#F2EC59"
                  : "#E75555"
                : "#5FBE69",
          }}
          className="flex h-full"
        ></div>
      </div>
      <div className="flex flex-col text-sm mt-6">
        <div className="flex flex-row items-center">
          <span className="w-[100px]">Used Space</span>
          <span>:</span>
          <span className="flex-1 pl-3">{usedSize} GB</span>
        </div>
        <div className="flex flex-row items-center">
          <span className="w-[100px]">Free Space</span>
          <span>:</span>
          <span className="flex-1 pl-3">{freeSize} GB</span>
        </div>
        <div className="flex flex-row items-center">
          <span className="w-[100px]">Total Space</span>
          <span>:</span>
          <span className="flex-1 pl-3">{totalSize} GB</span>
        </div>
      </div>
    </label>
  );
};

const UserData = [
  {
    id: 1,
    name: "Management",
    usedSize: 85,
    totalSize: 100,
    freeSize: 45,
  },
  {
    id: 2,
    name: "HRD",
    usedSize: 55,
    totalSize: 100,
    freeSize: 45,
  },
  {
    id: 3,
    name: "Finance",
    usedSize: 55,
    totalSize: 100,
    freeSize: 45,
  },
  {
    id: 4,
    name: "Marketting",
    usedSize: 92,
    totalSize: 100,
    freeSize: 45,
  },
  {
    id: 5,
    name: "Operational",
    usedSize: 95,
    totalSize: 100,
    freeSize: 45,
  },
];

const page = () => {
  const useGlobal = useGlobalAdmin();

  useEffect(() => {
    useGlobal.setTitleModal("Add Partition");
    useGlobal.setBodyModal(<KontenModal />);
  }, []);

  return (
    <AdminPage selected="arsip" title={"E-Arsip Monitoring"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5 w-full h-full gap-4">
        {UserData.map((item, index) => (
          <CardEarsipMonitoring
            key={index}
            name={item.name}
            usedSize={item.usedSize}
            freeSize={item.freeSize}
            totalSize={item.totalSize}
            onClick={() => useGlobal.handleModal()}
          />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-3 items-center mt-4">
        <button
          onClick={() => useGlobal.handleModal()}
          className="bg-[#5FBE69] hover:bg-[#489450] px-5 py-2 rounded-[5px] text-white"
        >
          Add Partition
        </button>
      </div>
    </AdminPage>
  );
};

const KontenModal = () => {
  const useGlobal = useGlobalAdmin();

  const FormatPartition = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure to Format This Partition ‘ Management’ ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          useGlobal.handleModal();
        });
      }
    });
  };
  const DeletePartition = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure to Delete This Partition ‘ Management’ ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          useGlobal.handleModal();
        });
      }
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="flex flex-col gap-2" htmlFor="">
        <span className="text-sm">Division Name</span>
        <input
          type="text"
          className="border border-gray-300 outline-none w-full rounded-[5px] p-2"
        />
      </label>
      <label className="flex flex-col gap-2" htmlFor="">
        <span className="text-sm">Space</span>
        <div className="flex items-center gap-3">
          <input
            type="number"
            className="border border-gray-300 outline-none w-full rounded-[5px] p-2 flex-1"
          />
          <span>MB</span>
        </div>
      </label>
      <label className="flex flex-col gap-2" htmlFor="">
        <span className="text-sm">Company</span>
        <input
          type="text"
          className="border border-gray-300 outline-none w-full rounded-[5px] p-2"
        />
      </label>
      <div className="flex flex-row mt-4 flex-wrap gap-2 w-full md:justify-between">
        <button className="hover:bg-green-600 text-white p-3 w-full md:w-fit rounded-md bg-green-500">
          Save
        </button>
        <div className="flex items-center flex-wrap gap-2 w-full md:w-fit">
          <button
            onClick={() => FormatPartition()}
            className="hover:bg-red-600 text-white p-3 w-full md:w-fit rounded-md bg-red-500"
          >
            Format Partition
          </button>
          <button
            onClick={() => DeletePartition()}
            className="hover:bg-red-600 text-white p-3 w-full md:w-fit rounded-md bg-red-500"
          >
            Delete Partition
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
