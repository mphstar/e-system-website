import AdminPage from "@/components/templates/AdminPage";
import PayrollPage from "@/components/templates/PayrollPage";
import React from "react";

const CardView = ({ name }) => {
  return (
    <div className="w-full bg-primary h-[150px] p-4 text-white justify-end flex flex-col">
      <h1>{name}</h1>
    </div>
  );
};

const page = () => {
  return (
    <AdminPage selected="payroll" title={"Payroll"}>
      <PayrollPage selected="payroll">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <CardView name="Run Payroll" />
                <CardView name="History Payroll" />
                <CardView name="Setting" />
          </div>
        </div>
      </PayrollPage>
    </AdminPage>
  );
};

export default page;
