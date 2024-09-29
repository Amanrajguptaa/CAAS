import React from "react";
import CardStack from "./CardStack";
import Buttn from "./Buttn";
import { Link } from "react-router-dom";

function StackCards() {
  return (
    <div id="posts" className='h-auto z-20 -mt-20 sm:-mt-1'>
            <div className=" text-white h-auto">
        <section className=" mx-2 md:mx-10  min-h-[300px] bg-[rgb(0,56,199)] relative  ">
        <div className='relative'><img className=" min-h-[300px] border rounded-[50px]  border-none" src="/gridd.png" alt="" /></div>

          <div className="absolute inset-0 flex flex-col justify-start sm:justify-center items-center -mt-80 sm:-mt-82">
            <CardStack/>
            <div className="absolute top-[10%] md:top-[40%]  bg-[#a7ff00] text-black py-5 rotate-0 sm:rotate-6  flex items-center justify-center border-[2px] border-black w-full mx-5 ">
              <span className="text-black font-brasika text-[10px] sm:text-2xl md:text-5xl mr-32 md:mr-20 ">Social Media Posts</span> <span className="text-black font-brasika text-[10px] sm:text-2xl md:text-6xl ">Social Media Posts</span> 
            </div>
            
            <Link to={'/posts'}>

            <button className="group mt-5 sm:mt-16 px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-[#a7ff00]">
            <span>Check’em All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-8 group-hover:scale-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</button>
</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StackCards;
