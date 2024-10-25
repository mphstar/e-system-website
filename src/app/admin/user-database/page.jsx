import AdminPage from "@/components/templates/AdminPage";
import Link from "next/link";

const CardDivisi = ({ name }) => {
  return (
    <div className="flex flex-col min-h-[130px] bg-[#92E3A9] shadow-md px-4 py-6 cursor-pointer">
      <h1 className="text-[#49A374]">{name}</h1>
    </div>
  );
};

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

const page = () => {
  return (
    <AdminPage selected="userDatabase" title={"User Management"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 w-full h-full gap-4">
        {divisi.map((item, index) => (
          <Link
            href={"/admin/user-database/" + item.name.toLowerCase() + ""}
            key={index}
          >
            <CardDivisi name={item.name} />
          </Link>
        ))}
      </div>
    </AdminPage>
  );
};

export default page;
