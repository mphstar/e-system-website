import Link from 'next/link'
import React from 'react'

const SettingPage = ({ children, selected }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4  ">
            <div className="flex flex-col w-full">
                <div className="flex flex-col sticky top-20 left-0 md:h-[200px] gap-1 justify-start items-start">
                    <Link className={`${selected === 'general' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/setting/general`}>
                        <button className="text-start">General</button>
                    </Link>
                    <Link className={`${selected === 'password' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/setting/password`}>
                        <button className="text-start">Change Password</button>
                    </Link>
                    <Link className={`${selected === 'information' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/setting/information`}>
                        <button className="text-start">Information</button>
                    </Link>
                    <Link className={`${selected === 'notification' ? 'bg-slate-200' : ''} w-full text-left px-3 py-1`} href={`/admin/setting/notification`}>
                        <button className="text-start">Notification</button>
                    </Link>
                </div>
            </div>
            <div className="md:col-span-3">
                {children}
            </div>
        </div>
    )
}

export default SettingPage