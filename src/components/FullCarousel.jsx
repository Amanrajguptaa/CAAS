import React from 'react';
import PostCarousel from './PostCarousel.jsx';

function FullCarousel() {
  return (
    <div id='carousels' className="relative ">
      <div className="text-white">
        <section className="mx-3 md:mx-10 h-auto bg-[#0038c7] relative  ">
          {/* Background Image */}
          <div className="relative overflow-hidden">
            <img
              className=""
              src="/gridd.png"
              alt=""
            />
          </div>

          {/* Carousel Header */}
          <div className="absolute inset-0 flex  justify-center items-center -mt-16 md:-mt-32">
            <div className="absolute top-[20%] justify-center items-center bg-[#a7ff00] text-black py-5 -rotate-[6deg] flex border-[2px] border-black w-screen">
              <span className="text-black font-brasika text-xs sm:text-2xl md:text-5xl mr-7">Carousels</span>
              <span className="text-black font-brasika text-xs sm:text-2xl md:text-5xl mr-7">Carousels</span>
              <span className="text-black font-brasika text-xs sm:text-2xl md:text-5xl mr-7">Carousels</span>
              <span className="text-black font-brasika text-xs sm:text-2xl md:text-5xl">Carousels</span>
            </div>
          </div>

          {/* Carousel Component */}
          <div className="relative z-10 -mt-[40%] sm:-mt-[50%] md:-mt-[62%] min-h-[400px] -rotate-6">
            <PostCarousel/>
          </div>

          {/* Carousel Footer (Duplicate Header) */}
          <div className="absolute inset-0 flex  justify-center items-center -mt-[145%] sm:-mt-44 md:-mt-56">
            <div className="absolute top-[74%] sm:top-[76%] justify-center items-center bg-[#a7ff00] text-black py-5 -rotate-[6deg] flex border-[2px] border-black w-screen">
              <span className="text-black font-brasika text-xs sm:text-2xl md:text-5xl mr-7">Carousels</span>
              <span className="text-black font-brasika text-xs sm:text-2xl md:text-5xl mr-7">Carousels</span>
              <span className="text-black font-brasika text-xs sm:text-2xl md:text-5xl mr-7">Carousels</span>
              <span className="text-black font-brasika text-xs sm:text-2xl md:text-5xl">Carousels</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FullCarousel;
