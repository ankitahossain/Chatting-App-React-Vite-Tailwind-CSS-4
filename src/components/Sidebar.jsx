import React, { useEffect } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { getAuth, signOut } from "firebase/auth"
import { getDatabase, ref, onValue, update } from "firebase/database";
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
   const [count, setCount] = useState(0);

   const handleNavigationItem = (path = '/') => {
      navigate(path)
   }

   const handleLogout = () => {
      // alert("hi")
      const auth = getAuth()
      signOut(auth).then((result) => {
         console.log("Result", result)
         navigate("/signin")
      }).catch((error) => {
         console.log(`Error from sign out function :${error}`)
      })
   }
   const handleUpload = () => {
      const db = getDatabase()
      // alert("hi")
      if (window.cloudinary) {
         window.cloudinary.openUploadWidget(
            {
               cloudName: "davegoals",
               uploadPreset: 'chattingapp',
               sources: [
                  "local",
                  "url",
                  "camera",
                  "dropbox",
                  "gettyimages",
                  "unsplash",
                  "google_drive",
                  "image_search",
               ],
               googleApiKey: "AIzaSyBeqHm4K_FCEhEccfElu41F6rY7omrWnDE",
               searchBySites: "all,cloudinary.com",
               searchByRights: true
            },
            (error, result) => {
               if (error) {
                  console.error("Upload Error:", error);
                  return;
               }
               if (result && result.event === "success") {
                  console.log("Uploaded Image URL:", result.info.secure_url); // ← Log the secure URL here

                  //profile pic update
                  update(ref(db, `users/${userdata.userKey}`), {
                     profile_picture: result?.info?.secure_url
                  });
               }
            }
         );
      } else {
         alert("Upload widget not ready yet. Please wait...");
      }
   };

   console.log(window.cloudinary);

   //tod
   const handleIncrement = () => {
      // setCount(count+1)
      setCount((prev) => {
         return prev + 1
      }

      )
   }

   //fetch the userdata from user database

   const [userdata, setuserdata] = useState(null);

   useEffect(() => {
      const auth = getAuth();
      const db = getDatabase()
      const fetchData = () => {
         const UserRef = ref(db, "users/");
         onValue(UserRef, (snapshot) => {
            let userblankinfo = null; // changed from const to let
            snapshot.forEach((item) => {
               if (item.val().userUid === auth.currentUser.uid) {
                  userblankinfo = { ...item.val(), userKey: item.key };
               }
            });
            setuserdata(userblankinfo);
         });
      };
      fetchData();
   }, []);

   console.log("====================");
   console.log(userdata);


   return (

      <div className='w-[130px] h-[100dvh]  bg-secondary_color '>
         <div className='flex justify-center '>
            <div className='w-[70px] h-[70px] rounded-full relative  mt-10 cursor-pointer group'>
               <picture>
                  <img src={userdata?(userdata.profile_picture):("src/assets/pexels-photo-2379004.jpeg")} alt='profile_image' className='w-full h-full object-fit-cover rounded-full' />
               </picture>
               <span className='absolute hidden group-hover:block left-1/3 top-1/2 -translate-y-1/2 text-white text-2xl ' onClick={handleUpload}><IoCloudUploadOutline /></span>

               <p className="font-roboto_font text-white text-[18px] ml-1">
              {userdata ? userdata.username : "missing"}
            </p>

               {/* <span>{count}</span>
               <button className='bg-red-500' onClick={handleIncrement}>+</button> */}
            </div>
         </div>
         {/* navigation icons */}
         <div className='flex flex-col justify-center items-center gap-y-10 mt-10'>


            {navigationIcons?.map((item, index) => (

               navigationIcons.length - 1 == index ? (<div className={'text-[50px] cursor-pointer mt-12 text-white'} key={item.id} onClick={handleLogout}>{item.icons}</div>
               ) :
                  (<div className={location.pathname == item.path ? 'text-[50px] active cursor-pointer  text-secondary_color' : 'text-[50px] cursor-pointer  text-white'} key={item.id} onClick={() => handleNavigationItem(item.path)}>{item.icons}</div>
                  )
            ))}
         </div>
      </div>
   )
}

export default Sidebar
