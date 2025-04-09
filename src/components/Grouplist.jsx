import React from 'react'
import Button from '../components/Button'
import { FaEllipsisVertical } from "react-icons/fa6";
const Grouplist = () => {
  const groups = [
    {
      id: 1,
      name: "Friends Reunion",
      text: "Hi Guys, Wassup!",
      group_img:
        "https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Friends Forever",
      text: "Good to see you.",
      group_img:
        "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Crazy Cousins",
      text: "What plans today?",
      group_img:
        "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Uni Reunion",
      text: "uniFriends!",
      group_img:
        "https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "SchoolMates",
      text: "school friends",
      group_img:
        "https://images.pexels.com/photos/1037989/pexels-photo-1037989.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Collegues love",
      text: "Living with them",
      group_img:
        "https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "Neigbours Fun",
      text: "my Neigbours",
      group_img:
        "https://images.pexels.com/photos/1267693/pexels-photo-1267693.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "gym buddies",
      text: "Hi gym buddies!",
      group_img:
        "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      name: "jokes all time",
      text: "Hi Guys, Wassup!",
      group_img:
        "https://images.pexels.com/photos/1139370/pexels-photo-1139370.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      name: "meems friend",
      text: "Hi Guys, Wassup!",
      group_img:
        "https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div>
      <div className='bg-white w-[30dvw] h-[38dvh] flex flex-col rounded-xl border-gray-200 shadow-xl overflow-hidden mt-7'>
        <div className='flex'>
          <p className='ml-6 mt-2 font-semibold '>Groups List({groups.length})</p>
          <span className='mt-3 ml-68 text-secondary_color font-bold text-[22px]' ><FaEllipsisVertical /></span>

        </div>
        {/* groups */}
        <div className='w-full h-full scrollbar'>
          {groups?.map((item) => (


            <div className='item.id === groups.length?(flex  justify-around pb-3 mt-2 cursor-pointer):(flex justify-around pb-2 mt-2 border-b-2 border-gray-300 cursor-pointer)' key={item.id}>
              <div className='flex'>
                <div className='w-[50px] h-[50px] rounded-full'>
                  <picture>
                    <img src={item.group_img} alt="img" className='w-full h-full object-cover rounded-full ml-6 mt-2 ' />
                  </picture>

                </div>
                <div>
                  <p className='font-roboto_font font-semibold mr-7 ml-14 mt-3'>{item.name}</p>
                  <p className='font-roboto_font font-normal text-[13px] text-gray-500 mr-7 ml-14 mt-1'>{item.text}</p>

                </div>
                <Button design="px-8 py-1 bg-secondary_color text-white rounded mt-4 cursor-pointer text-lg ml-18" content="Join" />
              </div>

            </div>


          ))}
        </div>
        {/* groups */}
      </div>


    </div>

  )
}

export default Grouplist