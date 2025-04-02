import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
const Sidebar = () => {
    const navigationIcons = [
        {
            id:1,
            icons:<FaHome/>
         },

         {
            id:2,
            icons:<FiMessageCircle />
         },
        {
            id:3,
            icons:<FaRegBell />
         },
         {
            id:4,
            icons:<GoGear  />
         },

         {
            id:5,
            icons:<IoLogOutOutline />
         },
      
    ]
  return (

    <div className='w-[130px]  bg-green-500 '>
    <div className='flex justify-center '>
    <div className='w-[70px] h-[70px] rounded-full relative  mt-10 cursor-pointer group'>
       <picture>
        <img src="src/assets/pexels-photo-2379004.jpeg" alt='profile_image' className='w-full h-full object-fit-cover rounded-full'/>
        </picture> 
        <span className='absolute hidden group-hover:block left-1/3 top-1/2 -translate-y-1/2 text-white text-2xl '><IoCloudUploadOutline /></span>
    </div> 
    </div>
    {/* navigation icons */}
    <div className='flex flex-col justify-center items-center gap-y-10 mt-10'>
        
        
        {navigationIcons?.map((item,index)=>(
           
          navigationIcons.length -1 == index?( <span className='text-[50px] active mt-10 text-white'key ={item.id}>{item.icons}</span>
          ):( <span className='text-[50px] text-white'key ={item.id}>{item.icons}</span>
          )          
        ))}
    </div>
    </div>
  )
}

export default Sidebar
