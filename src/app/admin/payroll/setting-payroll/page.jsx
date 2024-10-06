"use client";

import AbsensiPage from "@/components/templates/AbsensiPage";
import AdminPage from "@/components/templates/AdminPage";
import PayrollPage from "@/components/templates/PayrollPage";
import useGlobalAdmin from "@/stores/useGlobalAdmin";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import sweetalert2 css

const CardInOut = ({ onClick, data }) => {
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
          <p>Name : {data.name}</p>
          <p>Division : {data.division}</p>
          <p>Active Payroll : {data.activePayroll.map((item) => item)}</p>
        </div>
      </div>
      <button className="text-primary text-sm">Add Addition</button>
    </div>
  );
};

const KontenModal = () => {
  const store = useGlobalAdmin();

  return (
    <div className="flex flex-col gap-3">
      <label className="flex flex-row gap-2 items-center">
        <input type="checkbox" name="" id="" />
        <p>BPJS Kesehatan</p>
      </label>
      <label className="flex flex-row gap-2 items-center">
        <input type="checkbox" name="" id="" />
        <p>BPJS Ketatanegaraan</p>
      </label>
      <label className="flex flex-row gap-2 items-center">
        <input type="checkbox" name="" id="" />
        <p>Bank Account</p>
      </label>
      <div className="mt-5 flex flex-row gap-2 w-full">
        <button className="border-[2px] border-green-500 hover:bg-green-500 hover:text-white text-green-500 rounded-md text-xs p-2 w-full">Manual</button>
        <button className="bg-green-500 hover:bg-green-600 text-white w-full rounded-md text-xs p-2">Run Auto</button>

      </div>
    </div>
  );
};

const CustomTab = ({ tabSelected, name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        tabSelected == name
          ? "bg-primary text-white border-primary"
          : "bg-transparent  border-primary text-primary"
      } border-[2px] p-2 rounded-md`}
    >
      {name}
    </button>
  );
};

const page = () => {
  const store = useGlobalAdmin();

  const data = [
    {
      name: "Shintia Caroline",
      division: "Management",
      activePayroll: ["BPJS Kesehatan", "BPJS Ketatanegaraan", "Bank Account"],
    },
    {
      name: "Shintia Caroline",
      division: "HRD",
      activePayroll: ["BPJS Kesehatan", "BPJS Ketatanegaraan", "Bank Account"],
    },

    {
      name: "Shintia Caroline",
      division: "Finance",
      activePayroll: ["BPJS Kesehatan", "BPJS Ketatanegaraan", "Bank Account"],
    },
    {
      name: "Shintia Caroline",
      division: "Marketting",
      activePayroll: ["BPJS Kesehatan", "BPJS Ketatanegaraan", "Bank Account"],
    },
    {
      name: "Shintia Caroline",
      division: "Operasional",
      activePayroll: ["BPJS Kesehatan", "BPJS Ketatanegaraan", "Bank Account"],
    },
  ];

  const [tabSelected, setTabSelected] = useState("All Division");

  useEffect(() => {
    store.setTitleModal("Additional Data");
    store.setBodyModal(<KontenModal />);
    store.setClassNameModal("max-w-[300px]")
  }, []);

  return (
    <AdminPage selected="absensi" title={"Absensi Result"}>
      <PayrollPage selected="payroll">
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
          </div>
          <div className="flex gap-2 items-center flex-nowrap overflow-y-auto py-2 mt-4">
            <CustomTab
              onClick={() => setTabSelected("All Division")}
              tabSelected={tabSelected}
              name="All Division"
            />
            <CustomTab
              onClick={() => setTabSelected("Management")}
              tabSelected={tabSelected}
              name="Management"
            />
            <CustomTab
              onClick={() => setTabSelected("HRD")}
              tabSelected={tabSelected}
              name="HRD"
            />
            <CustomTab
              onClick={() => setTabSelected("Finance")}
              tabSelected={tabSelected}
              name="Finance"
            />
            <CustomTab
              onClick={() => setTabSelected("Marketting")}
              tabSelected={tabSelected}
              name="Marketting"
            />
            <CustomTab
              onClick={() => setTabSelected("Operasional")}
              tabSelected={tabSelected}
              name="Operasional"
            />
          </div>
          <div className="flex flex-col mt-6">
            {data
              .filter((item) => {
                if (tabSelected == "All Division") {
                  return item;
                } else {
                  return item.division == tabSelected;
                }
              })
              .map((item, i) => (
                <CardInOut
                  key={i}
                  data={item}
                  onClick={() => {
                    store.handleModal();
                  }}
                />
              ))}
          </div>
        </div>
      </PayrollPage>
    </AdminPage>
  );
};

export default page;
