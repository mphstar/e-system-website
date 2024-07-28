import AdminPage from "@/components/templates/AdminPage";

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
    <AdminPage selected="division" title={"Division Database"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 w-full h-full gap-4">
        {divisi.map((item, index) => (
          <div key={index}>
            <CardDivisi name={item.name} />
          </div>
        ))}
      </div>
      <div className='flex flex-row flex-wrap gap-3 items-center mt-8'>
                <button className='bg-[#5FBE69] hover:bg-[#489450] px-5 py-2 rounded-[5px] text-white'>Add Division</button>
                <button className='bg-[#6072EE] hover:bg-[#5060cc] px-5 py-2 rounded-[5px] text-white'>Edit Division</button>
                <button className='bg-[#E75555] hover:bg-[#d14b4b] px-5 py-2 rounded-[5px] text-white'>Remove Division</button>
            </div>
    </AdminPage>
  );
};

export default page;
