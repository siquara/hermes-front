import React, { useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";
const ButtonFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative">
      <button
        onClick={scrollToTop}
        className="absolute bottom-11 right-5 bg-gray-700 text-white p-2 rounded-md focus:outline-none xs:bottom-[110px] xs:right-[-160px] sm:bottom-[110px] sm:right-[-170px] md:bottom-11 md:right-16 lg:bottom-11 lg:right-20 "
      >
        <div
          className={`xs:w-8 xs:h-14 sm:w-16 sm:h-52 bg-white rounded-tr-full rounded-tl-full flex items-center justify-center shadow-md`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-stone-600 text-2xl xs:mb-13 sm:mb-32">
            <ArrowUp className= 'hover:text-4xl hover:text-secondary'/>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ButtonFooter;
