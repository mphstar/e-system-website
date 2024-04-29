import AdminPage from "@/components/templates/AdminPage";
import ApprovalPage from "@/components/templates/ApprovalPage";
import React from "react";

const page = () => {
  return (
    <AdminPage selected="approval" title={"Approval Menu"}>
      <ApprovalPage selected="operation">
        <div className="px-0 md:px-6 py-3 overflow-y-auto flex-1 flex flex-col">
          <div className="flex flex-col gap-3 bg-abu px-4 md:px-10 rounded-[5px] py-6 md:py-12">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>
      </ApprovalPage>
    </AdminPage>
  );
};

const BadgeStatus = () => {
    return (
        <div className="px-4 py-2 bg-[#b7bfff] text-blue-main text-xs rounded-md">
            Pending
        </div>
    )
}

const CardItem = () => {
  return (
    <div className="flex flex-row border-b-[1px] border-black items-center pb-3">
      <div className="flex flex-col flex-1">
        <h1 className="font-bold text-sm md:text-base">Ningrum</h1>
        <p className="text-xs md:text-sm">Operational</p>
        <p className="text-xs md:text-sm">12-October-2023</p>
        <p className="text-xs md:text-sm">13:00 AM</p>
      </div>
      <BadgeStatus />
    </div>
  );
};

export default page;
