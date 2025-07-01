import React, { useState } from 'react';
import safety from '../assets/Images/safety.png';

const YourSafety = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const accordionData = [
    { id: 1, question: "Ensuring Mask", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 2, question: "Sanitizing Hand & Equipment", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 3, question: "24/7 Support", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 4, question: "Ensuring Gloves", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  ];

  return (
    <div className="bg-transparent px-4 sm:px-6 py-10 md:py-14">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch gap-0">

        {/*============== left image====================== */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
          <img 
            src={safety} 
            alt="Your Safety" 
            className="w-full max-w-lg h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* ==================right content==================*/}
        <div className="w-full lg:w-1/2 bg-saftey_color rounded-2xl shadow-xl p-6 lg:p-8 flex flex-col justify-between order-1 lg:order-2">

       
          <div>
            <p className="font-lato text-[14px] font-normal leading-[17px] text-black mb-2">
              WHY CHOOSE Us
            </p>
            <h2 className="font-lato font-bold text-[32px] sm:text-[42px] lg:text-[46px] leading-tight mt-1 mb-3">
              We Care About Your Safety
            </h2>
            <p className="font-main font-light text-[15px] sm:text-[16px] leading-relaxed sm:leading-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/*======================== accordion================================= */}
          <div className="mt-6 sm:mt-8 space-y-4">
            {accordionData.map((item) => (
              <div key={item.id} className="border-b border-gray-300">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-4 text-left text-gray-700 font-medium hover:text-black transition-colors duration-200"
                  onClick={() => toggle(item.id)}
                  aria-expanded={open === item.id}
                >
                  <span className="text-[15px] sm:text-base">{item.question}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      open === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-3 text-gray-600 font-light text-[15px]">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default YourSafety;
