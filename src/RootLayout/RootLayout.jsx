import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'
const RootLayout = () => {
    return (
        <div>
            <div className='p-3 gap-x-4 flex justify-between'>
                <div>
                    <Sidebar />
                </div>
                <div className='bg-white w-full h-[100dvh] rounded-2xl'>
                    <Outlet />
                    
                    
                    </div>
            </div>
        </div>
    )
}

export default RootLayout

