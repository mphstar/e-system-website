import AdminPage from '@/components/templates/AdminPage'
import SettingPage from '@/components/templates/SettingPage'
import React from 'react'

const page = () => {
    return (
        <AdminPage selected='setting' title={'Account Setting'}>
            <SettingPage selected={'information'}>
                <div className='flex flex-col bg-slate-200 px-6 lg:px-16 py-12 h-full'>
                    <div className='flex flex-col gap-2 py-2'>
                        <label htmlFor="bio">Bio</label>
                        <textarea placeholder='Update Your Biography here.' className='flex px-2 py-1 h-[120px] rounded-[5px] outline-none' type="text" name="" id="bio"></textarea>
                    </div>
                    <div className='grid grid-cols-2 gap-4 items-center'>
                        <div className='flex flex-col gap-2 py-2 w-full'>
                            <label htmlFor="birthday">Birthday</label>
                            <input className='flex px-2 py-1 rounded-[5px] outline-none appearance-none w-full' type="date" name="" id="birthday" />
                        </div>
                        <div className='flex flex-col gap-2 py-2 w-full'>
                            <label htmlFor="country">Country</label>
                            <select className='flex px-2 py-2 rounded-[5px] outline-none w-full' name="" id="country">
                                <option value="">Indonesia</option>
                                <option value="">Inggris</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 py-2'>
                        <label htmlFor="website">Website</label>
                        <input className='flex px-2 py-1 rounded-[5px] outline-none' type="text" name="" id="website" />
                    </div>
                    <div className='flex flex-col gap-2 py-2'>
                        <label htmlFor="phone">Phone</label>
                        <input className='flex px-2 py-1 rounded-[5px] outline-none' type="text" name="" id="phone" />
                    </div>
                    <button className='bg-primary px-4 py-2 w-fit text-white rounded-[5px] mt-6'>Save</button>
                </div>
            </SettingPage>
        </AdminPage>
    )
}

export default page