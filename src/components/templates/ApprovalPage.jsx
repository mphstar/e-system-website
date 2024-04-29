import Link from "next/link"

const ApprovalPage = ({ children, selected = "" }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:mt-8">
            <div className="flex flex-col w-full">
                <div className="flex flex-col sticky top-20 left-0 md:h-[200px] gap-1 justify-start items-start">
                    <Link className={`${selected === 'management' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/approval/management`}>
                        <button className="text-start">Management</button>
                    </Link>
                    <Link className={`${selected === 'hrd' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/approval/hrd`}>
                        <button className="text-start">HRD</button>
                    </Link>
                    <Link className={`${selected === 'finance' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/approval/finance`}>
                        <button className="text-start">Finance</button>
                    </Link>
                    <Link className={`${selected === 'operation' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/approval/operation`}>
                        <button className="text-start">Operation</button>
                    </Link>
                </div>
            </div>
            <div className="md:col-span-3">
                {children}
            </div>
        </div>
    )
}

export default ApprovalPage