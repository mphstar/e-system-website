"use client";

import AbsensiPage from "@/components/templates/AbsensiPage";
import AdminPage from "@/components/templates/AdminPage";
import useGlobalAdmin from "@/stores/useGlobalAdmin";
import { useEffect } from "react";
import Swal from "sweetalert2";
// import sweetalert2 css


const CardInOut = ({ onClick }) => {
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
      <button className="text-primary text-sm">View & Download</button>
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
        <h1>Permission Type :</h1>
        <p className="text-gray-500">Sick</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Document :</h1>
        <img
          className="h-52 object-cover rounded"
          src="https://picsum.photos/200/300"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1>Description :</h1>
        <p className="text-gray-500">Sakit Demam</p>
      </div>
      <div className="flex w-full justify-center">
        <button className="bg-green-500 px-3 py-1 rounded text-white">
          Download
        </button>
      </div>
    </div>
  );
};

const PermissionPage = ({ param }) => {
  const store = useGlobalAdmin();

  useEffect(() => {
    store.setTitleModal("Detail");
    store.setBodyModal(<KontenModal />);
  }, []);

  return (
    <AdminPage selected="absensi" title={"Absensi Result"}>
      <AbsensiPage param={param}>
        <div className="px-0 md:px-6 py-3 overflow-y-auto flex-1 flex flex-col">
          <div className="flex flex-col lg:flex-row gap-2 items-start xl:items-center lg:justify-start lg:items-center">
            <div className="flex flex-row xl:flex-row flex-1  gap-3 text-sm items-center">
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
            <div className="flex flex-row lg:flex-row mt-4 lg:mt-0 md:w-full  items-center lg:items-end gap-3 text-white w-full lg:w-fit text-sm justify-end md:justify-start lg:justify-end">
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Accept",
                    text: "Are your sure want to accept",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Accepted!",
                        text: "Has been accepted.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                      });
                    }
                  });
                }}
                className="bg-[#5FBE69] w-full flex-1 md:flex-none md:w-fit px-3 py-1 rounded-[5px]"
              >
                Accept
              </button>
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Accept",
                    text: "Are your sure want to decline",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Declined!",
                        text: "Has been declined.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                      });
                    }
                  });
                }}
                className="bg-[#E75555] w-full flex-1 md:flex-none md:w-fit px-3 py-1 rounded-[5px]"
              >
                Decline
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <CardInOut
              onClick={() => {
                store.handleModal();
              }}
            />
            <CardInOut
              onClick={() => {
                store.handleModal();
              }}
            />
            <CardInOut
              onClick={() => {
                store.handleModal();
              }}
            />
            <CardInOut
              onClick={() => {
                store.handleModal();
              }}
            />
            <CardInOut
              onClick={() => {
                store.handleModal();
              }}
            />
            <CardInOut
              onClick={() => {
                store.handleModal();
              }}
            />
            <CardInOut
              onClick={() => {
                store.handleModal();
              }}
            />
          </div>
        </div>
      </AbsensiPage>
    </AdminPage>
  );
};

export default PermissionPage;
