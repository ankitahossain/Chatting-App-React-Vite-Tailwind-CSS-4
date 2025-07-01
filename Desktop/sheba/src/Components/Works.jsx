import React from 'react'
import Work_1 from '../assets/Images/Work-1.png'
import Work_2 from '../assets/Images/Work-2.png'
import Work_3 from '../assets/Images/Work-3.png'
import Work_4 from '../assets/Images/Work-4.png'
import Works_Image from '../assets/Images/Works.png'

const Works = () => {
  return (
    <div className="px-2 py-6 bg-bg_color relative">
      <div className="px-2 py-6 relative">

        {/* Background image */}
        <img
          src={Works_Image}
          alt="Works_Image"
          className="w-full h-full object-contain absolute inset-0"
        />

        {/* Heading and description */}
        <div className="relative z-10 flex flex-col gap-4 items-center mt-9">
          <h2 className="font-font-lato text-5xl font-bold text-gray-900 mb-4">
            HOW IT WORKS
          </h2>
          <p className="font-font-open-sans text-lg text-font_color max-w-2xl mx-auto leading-relaxed text-center">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in some.
          </p>
        </div>

        {/* Cards container */}
        <div className="relative z-10 flex justify-center gap-x-36 mt-20 flex-wrap">

          {/* Left column */}
          <div className="flex flex-col gap-36 items-center">

            {/* Card 1 */}
            <div className="w-[426px] h-[286px] flex flex-col justify-center items-center gap-4 rounded-2xl bg-white_color shadow-xl mr-[58%]">
              <img src={Work_1} alt="Work_1" className="w-[200px] h-[120px] object-contain" />
              <h3 className="font-lato font-semibold text-[24px] text-black_color text-center">LOREM IPSUM</h3>
              <p className="font-font-open-sans text-[16px] text-font_color text-center px-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-[426px] h-[286px] flex flex-col justify-center items-center gap-4 rounded-2xl bg-white_color shadow-xl mr-[58%] mt-[24%] ">
              <img src={Work_2} alt="Work_2" className="w-[200px] h-[120px] object-contain" />
              <h3 className="font-lato font-semibold text-[24px] text-black_color text-center">LOREM IPSUM</h3>
              <p className="font-font-open-sans text-[16px] text-font_color text-center px-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </p>
            </div>

          </div>

          {/* Right column */}
          <div className="flex flex-col gap-36 items-center">

            {/* Card 3 */}
            <div className="w-[426px] h-[286px] flex flex-col justify-center items-center gap-4 rounded-2xl bg-white_color shadow-xl mt-40 ml-[50%]">
              <img src={Work_3} alt="Work_3" className="w-[200px] h-[120px] object-contain" />
              <h3 className="font-lato font-semibold text-[24px] text-black_color text-center">LOREM IPSUM</h3>
              <p className="font-font-open-sans text-[16px] text-font_color text-center px-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </p>
            </div>

            {/* Card 4 */}
            <div className="w-[426px] h-[286px] flex flex-col justify-center items-center gap-4 rounded-2xl bg-white_color shadow-xl mt-[28%] ml-[50%]">
              <img src={Work_4} alt="Work_4" className="w-[200px] h-[120px] object-contain" />
              <h3 className="font-lato font-semibold text-[24px] text-black_color text-center">LOREM IPSUM</h3>
              <p className="font-font-open-sans text-[16px] text-font_color text-center px-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </p>
            </div>

          </div>
        </div>

        {/* Arrows */}

       {/* Card-1 → Card-3 */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            className="hidden lg:block absolute top-[7%] left-[31%] w-[500px] h-[600px]"
          >
            <g
              strokeWidth="10"
              stroke="hsl(231, 100%, 64%)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="31.5 50"
            >
              <path
                d="M250 250Q450 350 550 550 "
                markerEnd="url(#SvgjsMarker1006)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="5"
                markerHeight="5"
                refX="2.5"
                refY="2.5"
                viewBox="0 0 5 5"
                orient="auto"
                id="SvgjsMarker1006"
              >
                <polygon
                  points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                  fill="hsl(231, 100%, 64%)"
                ></polygon>
              </marker>
            </defs>
          </svg>

        {/* Card-3 → Card-2 */}
       <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            className="hidden lg:block absolute top-[37%] left-[30%] w-[500px] h-[600px]"
          >
            <g
              strokeWidth="10"
              stroke="hsl(231, 100%, 64%)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="31.5 50"
              transform="rotate(95, 400, 400)"
            >
              <path
                d="M250 250Q450 350 550 550 "
                markerEnd="url(#SvgjsMarker1031)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="5"
                markerHeight="5"
                refX="2.5"
                refY="2.5"
                viewBox="0 0 5 5"
                orient="auto"
                id="SvgjsMarker1031"
              >
                <polygon
                  points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                  fill="hsl(231, 100%, 64%)"
                ></polygon>
              </marker>
            </defs>
          </svg>


        {/* Card-2 → Card-4 */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            className="hidden lg:block absolute top-[65%] left-[29%] w-[500px] h-[500px]"
          >
            <g
              strokeWidth="10"
              stroke="hsl(231, 100%, 64%)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="31.5 50"
              transform="matrix(1,0,0,1,44,-60)"
            >
              <path
                d="M250 250Q450 350 550 550 "
                markerEnd="url(#SvgjsMarker1186)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="5"
                markerHeight="5"
                refX="2.5"
                refY="2.5"
                viewBox="0 0 5 5"
                orient="auto"
                id="SvgjsMarker1186"
              >
                <polygon
                  points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                  fill="hsl(231, 100%, 64%)"
                ></polygon>
              </marker>
            </defs>
          </svg>

        

      </div>
    </div>
  )
}

export default Works
