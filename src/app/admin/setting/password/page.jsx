"use client";
import AdminPage from '@/components/templates/AdminPage'
import SettingPage from '@/components/templates/SettingPage'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { RxEyeClosed } from 'react-icons/rx';

const page = () => {

    const [showOldPassword, setOldPassword] = useState(false)
    const [showNewPassword, setNewPassword] = useState(false)
    const [showConfirmPassword, setConfirmPassword] = useState(false)


    return (
        <AdminPage selected='setting' title={'Account Setting'}>
            <SettingPage selected={'password'}>
                <div className='flex flex-col bg-slate-200 px-6 lg:px-16 py-12 h-full'>

                    <div className='flex flex-col gap-2 py-2 w-full'>
                        <label htmlFor="oldpassword">Old Password</label>
                        <div className='relative w-full'>
                            <input className='flex px-4 py-1 rounded-[5px] outline-none w-full pr-16' type={showOldPassword ? 'text' : 'password'} name="" id="oldpassword" />
                            <div onClick={() => setOldPassword(!showOldPassword)} className='absolute right-0 top-0 h-full px-3 items-center flex'>
                                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 py-2 w-full'>
                        <label htmlFor="newpassword">New Password</label>
                        <div className='relative w-full'>
                            <input className='flex px-4 py-1 rounded-[5px] outline-none w-full pr-16' type={showNewPassword ? 'text' : 'password'} name="" id="newpassword" />
                            <div onClick={() => setNewPassword(!showNewPassword)} className='absolute right-0 top-0 h-full px-3 items-center flex'>
                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 py-2 w-full'>
                        <label htmlFor="confirmnewpassword">Confirm New Password</label>
                        <div className='relative w-full'>
                            <input className='flex px-4 py-1 rounded-[5px] outline-none w-full pr-16' type={showConfirmPassword ? 'text' : 'password'} name="" id="confirmnewpassword" />
                            <div onClick={() => setConfirmPassword(!showConfirmPassword)} className='absolute right-0 top-0 h-full px-3 items-center flex'>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <span className='text-xs'>Combination your password Number Alphabeth and Caracter</span>
                    </div>

                    <button className='bg-primary px-4 py-2 w-fit text-white rounded-[5px] mt-6'>Save</button>
                </div>
            </SettingPage>
        </AdminPage>
    )
}

export default page