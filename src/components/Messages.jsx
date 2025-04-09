import React from 'react'
import Searchbar from './Searchbar'
import { FaEllipsisVertical } from "react-icons/fa6";
import Friends from './message_page/Friends'
import Grouplist from './Grouplist'

const Messages = () => {
   return(
    <div>
        <div className='bg-yellow-300 h-[100dvh] flex'>

            <div className="left bg-pink-700 w-[30dvw] h-full flex flex-col">
           <Searchbar/>
           <Grouplist/>
           <Friends/>
            </div>
            <div className="right bg-blue-500 w-[40dvw]  h-full">
            <div className='flex bg-purple-400 shadow-xl border-b-2 border-gray-400'>
                <div className='w-[50px] h-[50px] rounded-full mt-6 ml-8'>
                    <picture>
                        <img src="src/assets/message.png" alt="src/assets/message.png" className='w-[full] h-[full] object-cover'/>
                    </picture>
                </div>
                <div className='flex flex-col mt-6 ml-6'>
                    <p className='font-semibold text-[24px] '>Swathi</p>
                    <p className='font-normal text-[14px]'>Online</p>
                </div>
                <span className='mt-6 ml-90 text-secondary_color'> <FaEllipsisVertical /></span>
            </div>
            </div>
        </div>
    </div>
    
    

    
   )
}

export default Messages
