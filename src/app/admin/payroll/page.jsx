import AdminPage from "@/components/templates/AdminPage";
import PayrollPage from "@/components/templates/PayrollPage";
import Link from "next/link";
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
            <Link href="/admin/payroll/run-payroll">
              <CardView name="Run Payroll" />
            </Link>
            <Link href="/admin/payroll/history-payroll">
              <CardView name="History Payroll" />
            </Link>
            <Link href="/admin/payroll/setting-payroll">
              <CardView name="Setting" />
            </Link>
          </div>
        </div>
      </PayrollPage>
    </AdminPage>
  );
};

export default page;
