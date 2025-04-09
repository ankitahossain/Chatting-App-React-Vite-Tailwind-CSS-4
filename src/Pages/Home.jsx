import React from 'react'
import Searchbar from '../components/Searchbar'
import Grouplist from '../components/Grouplist'
import Friendlist from '../components/Friendlist'
import Friends from '../components/Friends'
import Group from '../components/Group'
import Userlist from '../components/Userlist'
import BlockedUsers from '../components/BlockedUsers'

const Home = () => {
  return (
   <div className='flex justify-between'>
     <div className='flex flex-col'>
      <Searchbar />
      <Grouplist/>
      <Friendlist/>
    </div>
    <div className='flex flex-col'>
      <Friends/>
      <Group/>
    </div>
    <div className='flex flex-col'>
      <Userlist/>
      <BlockedUsers/>
    </div>

   </div>
  )
}

export default Home
