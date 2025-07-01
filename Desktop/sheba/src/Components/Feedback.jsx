import React from 'react'
import {memo} from 'react'
import quotes from '../assets/Images/Quotes.svg'
import client_1 from '../assets/Images/client_1.png'
import client_2 from '../assets/Images/client_2.png'

const Feedback = () => {
  return (
    <div className='px-3 py-6 bg-amber-300'>
      <div className='px-4 py-6 bg-pink-700 flex flex-col items-center gap-4'>
        <p className='font-lato font-bold text-3xl md:text-4xl text-black'>
          CLIENT FEEDBACK'S
        </p>
        <p className="font-open-sans text-center text-base md:text-lg text-font_color max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.
        </p>

        <div className='flex justify-between items-center gap-x-20 mt-12'>

          {/* Feedback 1 */}
          <div className='px-1 py-2 bg-green-300 flex'>
            <p className='font-inter font-regular text-[16px] text-font_color mr-100'>
              Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
            </p>
            <div>
              <img src={quotes} alt="quotes" className='w-full h-full object-contain'/>
            </div>
          </div>

          {/* Feedback 2 */}
          <div className='bg-amber-300 max-w-7xl mx-auto flex justify-between items-center gap-4 '>
            <div>
              <img src={client_2} alt="client_2" className='w-full h-full object-contain'/>
            </div>
            <div className='flex flex-col items-start gap-4'>
              <div>
                <img src={quotes} alt="quotes" className='w-full object-contain'/>
              </div>
              <p className='font-font-open-sans font-regular text-[16px] text-font_color'>
                Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.
              </p>
              <h3 className='font-font-inter font-bold text-[16px] text-black_color'>Kyle Merwin</h3>
              <h1 className='font-font-inter font-regular text-[14px] text-font_color'>CO-owner</h1>
            </div>
          </div>

          {/* Client image */}
          <div>
            <img src={client_1} alt='client_1' className='w-full object-contain'/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default memo(Feedback)
