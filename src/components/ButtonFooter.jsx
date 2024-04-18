import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ButtonFooter = () => {
  const [isHovered, setIsHovered] = useState(false);

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
          className={`xs:w-8 xs:h-14 sm:w-16 sm:h-52 bg-white rounded-tr-full rounded-tl-full flex items-center justify-center shadow-md ${isHovered ? 'bg-neutral-300 shadow-black ' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-stone-600 text-2xl xs:mb-13 sm:mb-32">
            <FontAwesomeIcon icon={faArrowUp} className={isHovered ? 'text-black text-4xl' : 'text-stone-700 '} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ButtonFooter;
