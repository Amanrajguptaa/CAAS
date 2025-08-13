import React from "react";
import CardStack from "./CardStack";
import { Link } from "react-router-dom";

function StackCards() {
  return (
    <div id="posts">
             <div className="flex flex-col justify-start sm:justify-start items-center pt-20 lg:pt-28">
          <CardStack />
          <div className="bg-[#a7ff00] text-black py-5 rotate-0 sm:rotate-6  flex items-center justify-center border-[2px] border-black w-full mx-5 -mt-48 ">
            <span className="text-black font-brasika text-[10px] sm:text-2xl md:text-3xl lg:text-5xl mr-32 md:mr-28 ">
              Social Media Posts
            </span>{" "}
            <span className="text-black font-brasika text-[10px] sm:text-2xl md:text-3xl lg:text-5xl ">
              Social Media Posts
            </span>
          </div>
        </div>
        <div className="mt-44 sm:mt-48 flex justify-center items-center">
          <Link onClick={()=>scrollTo(0,0)} to={"/posts"}>
            <button className="group px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-[#a7ff00]">
              <span>Check’em All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-8 group-hover:scale-150"
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

export default StackCards;
