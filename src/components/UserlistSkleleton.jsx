import React from 'react'

const UserlistSkleleton = () => {
  return (
    <div>
      <div className='bg-white w-[25dvw] h-[48dvh] flex flex-col rounded-xl border-gray-200 shadow-xl overflow-hidden'>
  {/* Header Skeleton */}
  <div className='flex justify-between items-center px-6 py-3'>
    <div className='h-4 w-24 bg-gray-300 rounded animate-pulse'></div>
    <div className='h-6 w-6 bg-gray-300 rounded-full animate-pulse'></div>
  </div>

  {/* Groups Skeleton */}
  <div className='w-full h-full overflow-y-auto px-4'>
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className={`flex justify-around items-center py-3 ${index !== 3 ? 'border-b-2 border-gray-200' : ''}`}
      >
        <div className='flex items-start'>
          {/* Avatar */}
          <div className='w-[50px] h-[50px] rounded-full bg-gray-300 animate-pulse ml-2'></div>
          {/* Texts */}
          <div className='ml-6 mt-1'>
            <div className='h-4 w-28 bg-gray-300 rounded mb-2 animate-pulse'></div>
            <div className='h-3 w-20 bg-gray-200 rounded animate-pulse'></div>
          </div>
        </div>
        {/* Button Skeleton */}
        <div className='w-16 h-8 bg-gray-300 rounded mt-3 animate-pulse'></div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default UserlistSkleleton
