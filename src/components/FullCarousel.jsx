import React from "react";
import PostCarousel from "./PostCarousel.jsx";
import { Link } from "react-router-dom";

const TitleStrip = () => (
  <div className="bg-[#a7ff00] text-black py-5 -rotate-[6deg] flex border-[2px] border-black w-full overflow-hidden justify-center">
    {Array(4)
      .fill("Carousels")
      .map((text, i) => (
        <span
          key={i}
          className={`text-black font-brasika ${
            i === 3 ? "hidden sm:block text-xs sm:text-2xl md:text-5xl" : "text-md sm:text-2xl md:text-5xl"
          } mr-6`}
        >
          {text}
        </span>
      ))}
  </div>
);

function FullCarousel() {
  return (
    <div id="carousels">
     
        <div className="pt-20 md:pt-28">
        <TitleStrip />

        <div className="-rotate-6 overflow-hidden">
          <PostCarousel />
        </div>

          <TitleStrip />

          </div>

        <div className="flex justify-center mt-16">
          <Link onClick={()=>scrollTo(0,0)} to="/carousels">
            <button className="group px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-[#a7ff00]">
              <span>Check’em All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
    </div>
  );
}

export default FullCarousel;
