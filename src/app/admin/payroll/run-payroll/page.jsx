import AdminPage from "@/components/templates/AdminPage";
import PayrollPage from "@/components/templates/PayrollPage";
import React from "react";

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

const CardView = ({ name }) => {
  return (
    <label className="flex flex-col min-h-[130px] bg-[#92E3A9] shadow-md px-4 py-6 cursor-pointer relative">
      <input className="absolute top-3 right-3" type="checkbox" name="" id="" />
      <h1 className="text-[#49A374]">{name}</h1>
    </label>
  );
};

const page = () => {
  return (
    <AdminPage selected="payroll" title={"Payroll"}>
      <PayrollPage selected="payroll">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {divisi.map((item, index) => (
              <div key={index}>
                <CardView name={item.name} />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="p-3 rounded-md bg-green-500 hover:bg-green-600 text-white">Run Payroll</button>
          </div>
        </div>
      </PayrollPage>
    </AdminPage>
  );
};

export default page;
