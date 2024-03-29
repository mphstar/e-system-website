import AdminPage from '@/components/templates/AdminPage'
import Link from 'next/link'
import React from 'react'

const CardAbsensi = ({ name }) => {
    return (
        <div className='flex flex-col min-h-[130px] bg-[#92E3A9] shadow-md px-4 py-6 cursor-pointer'>
            <h1 className='text-[#49A374]'>{name}</h1>
        </div>
    )
}

const divisi = [
    {
        id: 1,
        name: 'Management'
    },
    {
        id: 2,
        name: 'HRD'
    },
    {
        id: 3,
        name: 'Finance'
    },
    {
        id: 4,
        name: 'Marketting'
    },
    {
        id: 5,
        name: 'Operational'
    }
]

const page = () => {
    return (
        <AdminPage selected='absensi' title={'Absensi Result'}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 w-full h-full gap-4'>
                {divisi.map((item, index) => <Link key={index} href={`/admin/absensi/inout/${item.name.toLowerCase()}`}><CardAbsensi name={item.name} /></Link>)}
            </div>
        </AdminPage>
    )
}

export default page