"use client";
import { useState } from "react";
import HeaderAdmin from "../organisms/HeaderAdmin";
import SidebarAdmin from "../organisms/SidebarAdmin";
import ModalLayout from "../organisms/ModalLayout";

const AdminPage = ({ children, selected = "", title }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = (e) => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ModalLayout />
      <SidebarAdmin
        selected={selected}
        showSidebar={showSidebar}
        handleSidebar={handleSidebar}
      />
      <div className="md:pl-[300px] w-full flex flex-col duration-300 ease-in-out h-full flex-1 ">
        <HeaderAdmin title={title} handleSidebar={handleSidebar} />
        <div className="px-6 w-full  h-full flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default AdminPage;
