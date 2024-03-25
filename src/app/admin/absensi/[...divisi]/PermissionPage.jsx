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


const PermissionPage = ({ param }) => {

    return (
        <AdminPage selected="absensi">
            <AbsensiPage param={param}>
                <div className="px-0 md:px-6 py-3 overflow-y-auto flex-1 flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-2 items-start xl:items-center lg:justify-start lg:items-center">
                        <div className="flex flex-row xl:flex-row flex-1  gap-3 text-sm items-center">
                            <label htmlFor="sortDate">Sort Date By</label>
                            <div className="bg-slate-200">
                                <input className="bg-transparent px-2 py-1" type="date" name="" id="sortDate" />
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-row mt-4 lg:mt-0 md:w-full  items-center lg:items-end gap-3 text-white w-full lg:w-fit text-sm justify-end md:justify-start lg:justify-end">
                            <button className="bg-[#5FBE69] w-full flex-1 md:flex-none md:w-fit px-3 py-1 rounded-[5px]">Accept</button>
                            <button className="bg-[#E75555] w-full flex-1 md:flex-none md:w-fit px-3 py-1 rounded-[5px]">Decline</button>
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

export default PermissionPage