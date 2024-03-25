import Link from "next/link"

const AbsensiPage = ({ children, param }) => {

    const { params } = param;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col w-full">
                <div className="flex flex-col sticky top-20 left-0 md:h-[200px] gap-1 justify-start items-start">
                    <Link className={`${params.divisi[0] === 'inout' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/absensi/inout/${params.divisi[1]}`}>
                        <button className="text-start">In & Out</button>
                    </Link>
                    <Link className={`${params.divisi[0] === 'permission' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/absensi/permission/${params.divisi[1]}`}>
                        <button className="text-start">Employee Permission</button>
                    </Link>
                </div>
            </div>
            <div className="md:col-span-3">
                {children}
            </div>
        </div>
    )
}

export default AbsensiPage