"use client";

import AdminPage from "@/components/templates/AdminPage";
import SettingPage from "@/components/templates/SettingPage";
import React, { useState } from "react";

const page = () => {
  return (
    <AdminPage selected="setting" title={"Account Setting"}>
      <SettingPage selected={"notification"}>
        <div className="flex flex-col bg-slate-200 px-6 lg:px-16 py-12 h-full gap-3">
          <CardRadio title="Email me when someone comments onmy article" />
          <CardRadio title="News and announcements" />
          <CardRadio title="Weekly product updates" />
        </div>
      </SettingPage>
    </AdminPage>
  );
};

const CardRadio = ({ title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-4"
    >
      <div
        className={`flex ${
          checked ? "bg-[#2D47FE] justify-end" : "bg-[#BCC2C5] justify-start"
        } w-12 h-6 rounded-full relative p-1  cursor-pointer duration-300 ease-in-out`}
      >
        <div
          className={`${
            checked ? "bg-[#7382EC]" : "bg-[#8F8F8F]"
          } w-[50%] h-full rounded-full`}
        ></div>
      </div>
      <label>{title}</label>
    </div>
  );
};

export default page;
