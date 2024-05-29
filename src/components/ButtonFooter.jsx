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
        className="absolute bottom-11 bg-gray-700 text-white p-2 rounded-md focus:outline-none right-1 xs400:right-5  lg:right-[200px] xl:right-[300px] "
      >
        <div
          className={`xs:w-8 xs:h-14 lg:w-16 lg:h-48 bg-white rounded-tr-full rounded-tl-full flex items-center justify-center shadow-md`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-stone-600 text-2xl xs:mb-13 lg:mb-32">
            <ArrowUp className= 'hover:text-4xl hover:text-secondary'/>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ButtonFooter;
