import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react'
import ValidationError from '../Pages/Validationerror/Validationerror'
const RootLayout = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const [isUserVerified, setIsUserVerified] = useState(null); // null = loading
    
    useEffect(() => {
        let intervalId;
    
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            await user.reload();
            if (user.emailVerified) {
              setIsUserVerified(true);
            } else {
              setIsUserVerified(false);
    
              // 🕒 Start polling every 5 seconds
              intervalId = setInterval(async () => {
                await user.reload();
                if (user.emailVerified) {
                  setIsUserVerified(true);
                  clearInterval(intervalId); // ✅ Stop polling when verified
                }
              }, 5000);
            }
          } else {
            navigate("/signin");
          }
        });
    
        return () => {
          unsubscribe();
          clearInterval(intervalId);
        };
      }, [auth, navigate]);
    
      if (isUserVerified === null) {
        return <div>Loading...</div>; // or spinner
      }
    
    
    return (
        <div>
            {isUserVerified?(<div className='p-3 gap-x-4 flex justify-between'>
                <div>
                    <Sidebar />
                </div>
                <div className='bg-white w-full h-[100dvh] rounded-2xl'>
                    <Outlet />
                    
                    
                    </div>
            </div>):(<ValidationError/>)}
        </div>
    )
}

export default RootLayout

