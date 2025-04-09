import React from 'react'
import Button from '../components/Button'
import { FaEllipsisVertical } from "react-icons/fa6";

const Friendlist = () => {
    const groups = [
        {
          id: 1,
          name: "Taufik Islam",
          text: "Dinner?",
          time:"Today, 8:56pm",
          group_img:
            "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 2,
          name: "Azlina Arabi",
          text: "Sure!",
          time:"Yesterday, 1:56am",
          group_img:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 3,
          name: "Ankita Hossain",
          text: "Hi.....",
          time:"Today, 5:56pm",
          group_img:
            "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 4,
          name: "Aylin Hossain",
          text: "I will call him today.",
          time:"Tomorrow, 3:56pm",
          group_img:
            "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 5,
          name: "Anushka Hossain",
          text: "Life!",
          time:"Today, 7:50pm",
          group_img:
            "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 6,
            name: "Lawrance D'cruze",
            text: "Happy",
            time:"Today, 11:56pm",
            group_img:
              "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        {
          id: 7,
          name: "Tanjil Haque",
          text: "Handsome",
          time:"Today, 4:26pm",
          group_img:
            "https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 8,
          name: "John Henry",
          text: "Nature",
          time:"Yesterday, 2:00pm",
          group_img:
            "https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 9,
          name: "Robert Patinson",
          text: "Coding",
          time:"Today, 3:40pm",
          group_img:
            "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 10,
          name: "Jacob Cruise",
          text: "Hello..",
          time:"Today, 1:44pm",
          group_img:
            "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ];
    return (
        <div>
            <div className='bg-white w-[30dvw] h-[50dvh] flex flex-col rounded-xl border-gray-200 shadow-xl overflow-hidden mt-7'>
                <div className='flex'>
                    <p className='ml-6 mt-2 font-semibold '>Friend Request</p>
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
                 {/* groups */ }
            </div>


        </div>

    )
}

export default Friendlist

