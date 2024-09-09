import React from 'react';
import PostCarousel from './PostCarousel.jsx';

function FullCarousel() {
  return (
    <div id='carousels' className="relative -mt-60 sm:-mt-0 ">
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
          <div className="absolute inset-0 flex  justify-start items-center -mt-16 md:-mt-32">
            
            <div className="absolute top-[20%] justify-center items-center bg-[#a7ff00] text-black py-5 -rotate-[6deg] flex border-[2px] border-black w-full">
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="hidden sm:block text-black font-brasika text-xs sm:text-2xl md:text-5xl">Carousels</span>
            </div>
            
          </div>

          {/* Carousel Component */}
          <div className="relative z-10 -mt-[40%] sm:-mt-[50%] md:-mt-[58%] min-h-[400px] -rotate-6">
            <PostCarousel/>
          </div>

          {/* Carousel Footer (Duplicate Header) */}
          <div className="absolute inset-0 flex  justify-center items-center -mt-[145%] sm:-mt-44 md:-mt-56">
            <div className="absolute top-[74%] sm:top-[68%] justify-center items-center bg-[#a7ff00] text-black py-5 -rotate-[6deg] flex border-[2px] border-black w-full">
            <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="text-black font-brasika text-md sm:text-2xl md:text-5xl mr-6">Carousels</span>
              <span className="hidden sm:block text-black font-brasika text-xs sm:text-2xl md:text-5xl">Carousels</span>
            </div>
            <button className=" mt-[700px] sm:mt-[700px] px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105">Check’em All</button>

          </div>
        </section>
      </div>
    </div>
  );
}

export default FullCarousel;
