import AbsensiPage from "@/components/templates/AbsensiPage"
import AdminPage from "@/components/templates/AdminPage"


const CardInOut = () => {
    return (
        <div className="flex flex-row items-center bg-[#ECEEFD] px-6 py-4 gap-4 border-b-[1px] border-b-black">
            <img className="object-cover aspect-square w-[70px] h-[70px]" src="https://picsum.photos/200/300" alt="photo" />
            <div className="flex flex-col text-xs md:text-sm">
                <p>Name : Shintia Caroline</p>
                <p>Division : Management</p>
                <p>Sign In : 09:00 AM</p>
                <p>Location : Jl. Perak no. 33 Palu North Australian</p>
            </div>
        </div>
    )
}


const InOutPage = ({ param }) => {

    return (
        <AdminPage selected="absensi">
            <AbsensiPage param={param}>
                <div className="px-0 md:px-6 py-3 overflow-y-auto flex-1 flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-2 items-start xl:items-center lg:justify-start lg:items-start">
                        <div className="flex flex-row lg:flex-col xl:flex-row flex-1 xl:items-center gap-3 text-sm flex-wrap items-start">
                            <label htmlFor="sortDate">Sort Date By</label>
                            <div className="bg-slate-200">
                                <input className="bg-transparent px-2 py-1" type="date" name="" id="sortDate" />
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-col xl:flex-row items-center lg:items-end gap-3 w-full text-sm justify-end md:justify-start lg:justify-end">
                            <button className="bg-[#92E3A9] w-full flex-1 md:flex-none md:w-fit text-[#00A556] px-3 py-1 rounded-[5px]">Download Result .pdf</button>
                            <button className="bg-[#92E3A9] w-full flex-1 md:flex-none md:w-fit text-[#00A556] px-3 py-1 rounded-[5px]">Download Result .csv</button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-6">
                        <CardInOut />
                        <CardInOut />
                        <CardInOut />
                        <CardInOut />
                        <CardInOut />
                        <CardInOut />
                        <CardInOut />
                    </div>
                </div>
            </AbsensiPage>
        </AdminPage>
    )
}

export default InOutPage