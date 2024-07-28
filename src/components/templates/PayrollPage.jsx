import Link from "next/link"

const PayrollPage = ({ children, selected = "" }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:mt-8">
            <div className="flex flex-col w-full">
                <div className="flex flex-col sticky top-20 left-0 md:h-[200px] gap-1 justify-start items-start">
                    <Link className={`${selected === 'payroll' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/payroll`}>
                        <button className="text-start">Payroll</button>
                    </Link>
                    <Link className={`${selected === 'reimbursement' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/payroll/reimbursement`}>
                        <button className="text-start">Reimbursement</button>
                    </Link>
                    <Link className={`${selected === 'overtime' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/payroll/overtime`}>
                        <button className="text-start">Overtime</button>
                    </Link>
                    <Link className={`${selected === 'cashreceipt' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/payroll/cashreceipt`}>
                        <button className="text-start">Cash Receipt</button>
                    </Link>
                </div>
            </div>
            <div className="md:col-span-3">
                {children}
            </div>
        </div>
    )
}

export default PayrollPage