
import AdminPage from '@/components/templates/AdminPage'

const CardEarsipMonitoring = ({ usedSize = 55, freeSize = 0, totalSize = 0, name, }) => {

    return (
        <label htmlFor={`checkData${name}`} className='flex flex-col px-3 py-2 bg-[#4058FF] text-white relative'>
            <h1 className='w-full pr-8'>{name}</h1>
            <input className='absolute top-2 right-2' type="checkbox" name="" id={`checkData${name}`} />

            <div className='flex flex-col bg-[#D9D9D9] w-full h-[30px] mt-2'>
                <div style={{
                    width: `${usedSize}%`,
                    backgroundColor: usedSize > 70 ? usedSize < 90 ? '#F2EC59' : '#E75555' : '#5FBE69',
                }} className='flex h-full'>

                </div>
            </div>
            <div className='flex flex-col text-sm mt-6'>
                <div className='flex flex-row items-center'>
                    <span className='w-[100px]'>Used Space</span>
                    <span>:</span>
                    <span className='flex-1 pl-3'>{usedSize} GB</span>
                </div>
                <div className='flex flex-row items-center'>
                    <span className='w-[100px]'>Free Space</span>
                    <span>:</span>
                    <span className='flex-1 pl-3'>{freeSize} GB</span>
                </div>
                <div className='flex flex-row items-center'>
                    <span className='w-[100px]'>Total Space</span>
                    <span>:</span>
                    <span className='flex-1 pl-3'>{totalSize} GB</span>
                </div>

            </div>
        </label>
    )
}

const UserData = [
    {
        id: 1,
        name: 'Management',
        usedSize: 85,
        totalSize: 100,
        freeSize: 45
    },
    {
        id: 2,
        name: 'HRD',
        usedSize: 55,
        totalSize: 100,
        freeSize: 45
    },
    {
        id: 3,
        name: 'Finance',
        usedSize: 55,
        totalSize: 100,
        freeSize: 45
    },
    {
        id: 4,
        name: 'Marketting',
        usedSize: 92,
        totalSize: 100,
        freeSize: 45
    },
    {
        id: 5,
        name: 'Operational',
        usedSize: 95,
        totalSize: 100,
        freeSize: 45
    }

]

const page = () => {
    return (
        <AdminPage selected='userDatabase' title={'E-Arsip Monitoring'}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5 w-full h-full gap-4'>
                {UserData.map((item, index) => <CardEarsipMonitoring key={index} name={item.name} usedSize={item.usedSize} freeSize={item.freeSize} totalSize={item.totalSize} />)}
            </div>
            <div className='flex flex-row flex-wrap gap-3 items-center mt-4'>
                <button className='bg-[#5FBE69] hover:bg-[#489450] px-5 py-2 rounded-[5px] text-white'>Add Partition</button>
                <button className='bg-[#6072EE] hover:bg-[#5060cc] px-5 py-2 rounded-[5px] text-white'>Edit Partition</button>
                <button className='bg-[#E75555] hover:bg-[#d14b4b] px-5 py-2 rounded-[5px] text-white'>Format Partition</button>
                <button className='bg-[#E75555] hover:bg-[#d14b4b] px-5 py-2 rounded-[5px] text-white'>Remove Partition</button>
            </div>
        </AdminPage>
    )
}

export default page