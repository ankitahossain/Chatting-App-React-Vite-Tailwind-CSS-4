import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";



const Searchbar = () => {
  return (
    <div>
      
<form class="flex items-center max-w-lg mx-auto">   
    <div class="relative w-full">
    <label for="voice-search" class="sr-only">Search</label>
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           <span><FaSearch /></span> </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
        <p class="absolute inset-y-0 end-0 flex items-center pe-3">
      <span> <FaEllipsisVertical /></span>
        </p>
    </div>

   
</form>

      
      



    </div>
  )
}

export default Searchbar

