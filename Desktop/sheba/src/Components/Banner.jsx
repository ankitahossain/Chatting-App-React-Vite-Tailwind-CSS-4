import React from 'react'
import Button from '../Components/Button';
import image_1 from '../assets/Images/image_1.png'
import image_2 from '../assets/Images/image_2.png'
import image_3 from '../assets/Images/image_3 (2).png'
import image_4 from '../assets/Images/image_4.png'
import banner from '../assets/Images/banner (4).png'
import { IoLocationOutline, IoSearch } from "react-icons/io5";

const Banner = () => {
  return (
    <div className='px-30 pl-3'>
      <div className="bgBanner px-12 py-8 rounded-2xl flex flex-col justify-center relative">
        
        {/*banner image */}
        <div >
          <img src={banner} alt="banner" className='w-full h-full object-contain rounded-xl'/>
        </div>

        <div className='flex justify-between items-start gap-x-16 bg-transparent absolute top-[10%]'>
          {/*=====================banner left part===================*/}
          <div className='w-1/2 pl-12'>
            <h1 className='font-bold text-[48px] md:text-[58px] font-lato text-white_color'>
              Simplify Your World<br />Achieve More
            </h1>
            <p className='mt-7 font-open-sans text-[20px] leading-[162%] text-white_color'>
              Streamline tasks, manage schedules, and access smart solutions designed to simplify your life.
              Boost productivity effortlessly with a personal assistant that keeps you organized, focused, and always one step ahead.
            </p>

            <div className='flex gap-4 pt-8 flex-wrap'>
              <button
                type="button"
                className="text-gray-900 bg-white hover:bg-[#130b0b82] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center btn"
              >
                <IoLocationOutline className="me-2" />
                <span>Location</span>
              </button>

              <button
                type="button"
                className="text-gray-900 bg-white hover:bg-[#130b0b82]/80 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center btn"
              >
                <span className="me-10">Service Search...</span>
                <IoSearch className="bg-black text-white_color rounded p-1" />
              </button>
            </div>
        
            <div className='pt-6 flex gap-3 flex-wrap mt-4'>
              <span className='font-inter font-medium text-[16px] text-white_color '>Popular Searches :   
                  <button className='bg-black_color text-white_color font-open-sans text-[16px] py-2 px-5 rounded-3xl btn ml-4'>
                Shifting
              </button></span>
              <button className='bg-black_color text-white_color font-open-sans text-[16px] py-2 px-7 rounded-3xl btn'>
                Beauty
              </button>
              <button className='bg-black_color text-white_color font-open-sans text-[16px] py-2 px-10 rounded-3xl btn'>
                Home Service
              </button>
            </div>

            
          </div>

          {/*=================banner right part==================== */}
          <div className="w-1/2 grid grid-cols-2 gap-4 self-start mb-20">
            <div className="flex flex-col gap-4">
              <div className="w-full h-[140px] md:h-[180px] lg:h-[200px] xl:h-[230px] overflow-hidden rounded">
                <img src={image_1} className="w-full h-full object-cover" alt="Service 1"/>
              </div>
              <div className="w-full h-[170px] md:h-[220px] lg:h-[240px] xl:h-[270px] overflow-hidden rounded">
                <img src={image_3} className="w-full h-full object-cover" alt="Service 3"/>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <div className="w-full h-[170px] md:h-[220px] lg:h-[240px] xl:h-[270px] overflow-hidden rounded">
                <img src={image_2} className="w-full h-full object-cover" alt="Service 2"/>
              </div>
              <div className="w-full h-[140px] md:h-[180px] lg:h-[200px] xl:h-[230px] overflow-hidden rounded">
                <img src={image_4} className="w-full h-full object-cover" alt="Service 4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
