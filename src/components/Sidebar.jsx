import React, { useEffect } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
const Sidebar = () => {
   const navigationIcons = [
      {
         id: 1,
         icons: <FaHome />,
         path: "/home",
      },

      {
         id: 2,
         icons: <FiMessageCircle />,
         path: "/messages",
      },
      {
         id: 3,
         icons: <FaRegBell />,
         path: "/notifications",
      },
      {
         id: 4,
         icons: <GoGear />,
         path: "/settings",
      },

      {
         id: 5,
         icons: <IoLogOutOutline />
      },

   ]
   const navigate = useNavigate("");
   const location = useLocation("");
   const [count,setCount]=useState(0);

   const handleNavigationItem = (path = '/') => {
      navigate(path)
   }

   const handleUpload=()=>{
      cloudinary.openUploadWidget({
         cloudName:"davegoals",
         uploadPreset: 'chattingapp',
         sources: [ 'local', 'url', 'image_search','unsplash','camera','dropbox','google_drive'],
         googleApiKey:"AIzaSyBeqHm4K_FCEhEccfElu41F6rY7omrWnDE",
         searchBySites:"all,cloudinary.com",
         searchByRights:true
      },(error,result)=>{
         if(error){
            console.log("Upload error",error)
         }
         else{
            console.log("Upload result",result)
         }
      })
      
   }
   const handleIncrement=()=>{
      // setCount(count+1)
      setCount((prev)=>{
         return prev+1
      }
       
      )
   }

   useEffect(()=>{
      const script = document.createElement("script")
      script.src="https://upload-widget.cloudinary.com/latest/global/all.js"
      script.async= true
      document.body.appendChild(script)
   })
   
   return (

      <div className='w-[130px] h-[100dvh]  bg-secondary_color '>
         <div className='flex justify-center '>
            <div className='w-[70px] h-[70px] rounded-full relative  mt-10 cursor-pointer group'>
               <picture>
                  <img src="src/assets/pexels-photo-2379004.jpeg" alt='profile_image' className='w-full h-full object-fit-cover rounded-full' />
               </picture>
               <span className='absolute hidden group-hover:block left-1/3 top-1/2 -translate-y-1/2 text-white text-2xl ' onClick={handleUpload}><IoCloudUploadOutline /></span>
               <span>{count}</span>
               <button className='bg-red-500' onClick={handleIncrement}>+</button>
            </div>
         </div>
         {/* navigation icons */}
         <div className='flex flex-col justify-center items-center gap-y-10 mt-10'>


            {navigationIcons?.map((item, index) => (

               navigationIcons.length - 1 == index ? (<div className={ 'text-[50px] cursor-pointer mt-12 text-white'} key={item.id}>{item.icons}</div>
               ) : 
               (<div className={location.pathname == item.path ? 'text-[50px] active cursor-pointer  text-secondary_color' : 'text-[50px] cursor-pointer  text-white'} key={item.id} onClick={() => handleNavigationItem(item.path)}>{item.icons}</div>
               )
            ))}
         </div>
      </div>
   )
}

export default Sidebar
