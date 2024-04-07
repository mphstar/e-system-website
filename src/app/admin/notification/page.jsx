import CardNotification from "@/components/molecules/CardNotification";
import AdminPage from "@/components/templates/AdminPage";
import React from "react";

const data = [
  {
    title: "Approval Finished",
    description: "Dokumen Anggaran Terbaru.PDF",
    date: "12-October-2023",
    time: "13:00 AM",
  },
  {
    title: "Transfer To Your M-Banking",
    description: "LSP Tahunan.XML",
    date: "12-October-2023",
    time: "13:00 AM",
  },
  {
    title: "Approval rejected",
    description: "Pajak SPT.PDF",
    date: "12-October-2023",
    time: "13:00 AM",
  },
  {
    title: "Ningrum",
    description: "Pajak SPT.PDF",
    date: "12-October-2023",
    time: "13:00 AM",
  },
];

const page = () => {
  return (
    <AdminPage selected="notification" title={"Notification"}>
      <div className="flex flex-col gap-2">
        {data.map((item, i) => (
          <CardNotification key={i} title={item.title} description={item.description} date={item.date} time={item.time} />
        ))}
      </div>
    </AdminPage>
  );
};

export default page;
