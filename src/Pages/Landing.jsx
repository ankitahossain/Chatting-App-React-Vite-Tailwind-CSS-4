import React from 'react'
import { Link } from 'react-router'

const Landing = () => {
  return (
    <div className='bg-[url(C:\Users\USER\Desktop\chating_app_react\src\assets\abstract-background-with-flowing-waves.jpg)] bg-center bg-no-repeat bg-cover h-[100vh] w-full'>
      <div className='flex justify-center items-center h-[100vh]'>
        
<Link to={"/signup"} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Started</Link>

      </div>
    </div>
  )
}

export default Landing
