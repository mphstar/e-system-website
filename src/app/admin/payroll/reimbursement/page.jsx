import AdminPage from "@/components/templates/AdminPage";
import PayrollPage from "@/components/templates/PayrollPage";

const CardView = ({ name }) => {
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
    <AdminPage selected="payroll" title={"Reimburesement"}>
      <PayrollPage selected="reimbursement">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 w-full h-fit gap-4">
          {divisi.map((item, index) => (
            <div key={index}>
              <CardView name={item.name} />
            </div>
          ))}
        </div>
      </PayrollPage>
    </AdminPage>
  );
};

export default page;
