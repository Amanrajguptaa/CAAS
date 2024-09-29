import React from 'react';
import PostCarousel from './PostCarousel.jsx';
import { Link } from 'react-router-dom';

function FullCarousel() {
  return (
    <div id='carousels' className="relative -mt-52 sm:-mt-80 overflow-hidden z-0">
      <div className="text-white">
        <section className="mx-2 md:mx-10 sm:pb-28 bg-[#0038c7] relative  ">
          {/* Background Image */}
          <div className="relative overflow-hidden">
            <img
              className=""
              src="/gridd.png"
              alt=""
            />
          </div>
          

          {/* Carousel Header */}
          <div className="absolute inset-0  flex  justify-start items-center -mt-16 md:-mt-0 overflow-hidden  ">
            
            <div className="absolute top-[15%] justify-center items-center bg-[#a7ff00] text-black py-5 -rotate-[6deg] flex border-[2px] border-black w-full overflow-hidden">
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="hidden sm:block text-black font-brasika text-xs sm:text-2xl md:text-5xl">Carousels</span>
            </div>
            
          </div>

          {/* Carousel Component */}
          <div className="relative z-10 -mt-[45%] sm:-mt-[50%] md:-mt-[52%] min-h-[400px] -rotate-6 overflow-hidden">
            <PostCarousel/>
          </div>

          {/* Carousel Footer (Duplicate Header) */}
          <div className="absolute inset-0 flex  justify-center items-center -mt-[145%] sm:-mt-44 md:-mt-56 overflow-hidden">
            <div className="absolute top-[74%] sm:top-[70%] justify-center items-center bg-[#a7ff00] text-black py-5 -rotate-[6deg] flex border-[2px] border-black w-full overflow-hidden">
            <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="hidden sm:block text-black font-brasika text-xs sm:text-2xl md:text-5xl">Carousels</span>
            </div>
            {/* <button className="  px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105">Check’em All</button> */}
            <Link to={'/carousels'}>
            <button className="group z-30 mt-[700px] sm:mt-[700px] px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-[#a7ff00]">
             
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

export default FullCarousel;
