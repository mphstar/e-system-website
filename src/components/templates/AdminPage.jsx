"use client"
import { useState } from "react"
import HeaderAdmin from "../organisms/HeaderAdmin"
import SidebarAdmin from "../organisms/SidebarAdmin"

const AdminPage = ({children}) => {

    const [showSidebar, setShowSidebar] = useState(false)

    const handleSidebar = (e) => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <SidebarAdmin showSidebar={showSidebar} handleSidebar={handleSidebar} />
            <div className="md:pl-[300px] w-full flex flex-col duration-300 ease-in-out">
                <HeaderAdmin handleSidebar={handleSidebar} />
                <div className="px-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminPage