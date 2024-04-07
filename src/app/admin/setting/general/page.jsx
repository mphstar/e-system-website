import AdminPage from '@/components/templates/AdminPage'
import SettingPage from '@/components/templates/SettingPage'
import React from 'react'

const page = () => {
    return (
        <AdminPage selected='setting' title={'Account Setting'}>
            <SettingPage selected={'general'}>
                <div className='flex flex-col bg-slate-200 px-6 lg:px-16 py-12 h-full'>
                    <div className='flex flex-col md:flex-row gap-3 mb-4'>
                        <div className='size-28 object-cover bg-white truncate'>

                        </div>
                        <div className='flex flex-col gap-2 mt-3 flex-1'>
                            <div className='flex flex-row gap-3'>
                                <div className=''>
                                    <button className='bg-primary px-3 py-1 text-white rounded-[5px]'>Upload</button>
                                </div>
                                <div className=''>
                                    <button className='bg-white px-3 py-1 rounded-[5px]'>Reset</button>
                                </div>
                            </div>
                            <span className='text-xs'>Image Format JPG, PNG, JPEG Max Size Of 1MB</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 py-2'>
                        <label htmlFor="username">Username</label>
                        <input className='flex px-2 py-1 rounded-[5px] outline-none' type="text" name="" id="username" />
                    </div>
                    <div className='flex flex-col gap-2 py-2'>
                        <label htmlFor="email">Email</label>
                        <input className='flex px-2 py-1 rounded-[5px] outline-none' type="text" name="" id="username" />
                    </div>
                    <div className='flex flex-col gap-2 py-2'>
                        <label htmlFor="company">Company</label>
                        <input className='flex px-2 py-1 rounded-[5px] outline-none' type="text" name="" id="username" />
                    </div>
                    <button className='bg-primary px-4 py-2 w-fit text-white rounded-[5px] mt-6'>Save</button>
                </div>
            </SettingPage>
        </AdminPage>
    )
}

export default page