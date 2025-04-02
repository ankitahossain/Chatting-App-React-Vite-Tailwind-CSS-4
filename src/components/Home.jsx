import React from 'react'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='p-5 flex justify-between'>

    <div>
    <Sidebar/>
    </div>
    <div className='bg-amber-400 w-full rounded'>right side</div>
    </div>
  )
}

export default Home
