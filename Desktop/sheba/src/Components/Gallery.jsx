import React, { useState, useEffect, memo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img_1 from "../assets/images/gallery_1.png";
import img_2 from "../assets/images/gallery_2.png";
import img_3 from "../assets/images/gallery_3.png";
import img_4 from "../assets/images/gallery_4.png";
import img_5 from "../assets/images/gallery_5.png";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const gallery = [
    { id: 1, image: img_1, title: "Moving Service 1" },
    { id: 2, image: img_2, title: "Moving Service 2" },
    { id: 3, image: img_3, title: "Moving Service 3" },
    { id: 4, image: img_4, title: "Moving Service 4" },
    { id: 5, image: img_5, title: "Moving Service 5" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const getImageStyle = (index) => {
    const base = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "24px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      cursor: index !== activeIndex ? "pointer" : "default",
      overflow: "hidden",
      zIndex: 1,
      opacity: 1,
    };

    const total = gallery.length;
    let rel = index - activeIndex;
    if (rel < -Math.floor(total / 2)) rel += total;
    if (rel > Math.floor(total / 2)) rel -= total;

    if (rel === -2 || rel === 3) {
      return {
        ...base,
        width: "160px",
        height: "240px",
        left: "-40px",
        transform: "translateY(-50%) scale(0.8)",
        opacity: 0.6,
        clipPath: "inset(0 40% 0 0)",
      };
    }
    if (rel === -1 || rel === 4) {
      return {
        ...base,
        width: "220px",
        height: "320px",
        left: "15%",
        transform: "translateY(-50%) scale(0.9)",
        zIndex: 2,
        opacity: 0.8,
      };
    }
    if (rel === 0) {
      return {
        ...base,
        width: "300px",
        height: "420px",
        left: "50%",
        transform: "translate(-50%, -50%) scale(1)",
        zIndex: 3,
        opacity: 1,
        boxShadow: "0 12px 48px rgba(0,0,0,0.2)",
      };
    }
    if (rel === 1 || rel === -4) {
      return {
        ...base,
        width: "220px",
        height: "320px",
        right: "15%",
        left: "auto",
        transform: "translateY(-50%) scale(0.9)",
        zIndex: 2,
        opacity: 0.8,
      };
    }
    if (rel === 2 || rel === -3) {
      return {
        ...base,
        width: "160px",
        height: "240px",
        right: "-40px",
        left: "auto",
        transform: "translateY(-50%) scale(0.8)",
        opacity: 0.6,
        clipPath: "inset(0 0 0 40%)",
      };
    }
    return { display: "none" };
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-font_color max-w-2xl mx-auto leading-relaxed">
            Discover tailored categories designed to simplify your search, explore diverse options, 
            and find exactly what you need effortlessly
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative h-[460px] overflow-hidden">
            {gallery.map((item, index) => (
              <div
                key={item.id}
                style={getImageStyle(index)}
                onClick={() => setActiveIndex(index)}
                className="group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                />
              </div>
            ))}

            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 
              bg-white p-4 rounded-full shadow-xl hover:scale-110 transition"
              aria-label="Previous"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 
              bg-white p-4 rounded-full shadow-xl hover:scale-110 transition"
              aria-label="Next"
            ><FiChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-teal-500 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-6 text-gray-500 font-medium">
            {activeIndex + 1} / {gallery.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Gallery);
