import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div id="home" className="h-screen">
      <div className="flex flex-col items-center justify-start text-center w-full">
        <Navbar className="w-full" />

        <div className="flex flex-col justify-center items-center">
          <div className="text-[65px] sm:text-[120px] md:text-[120px] lg:text-[170px] xl:text-[185px] font-brasika">
            creativity
          </div>
          <div className="text-[45px] sm:text-[80px] md:text-[70px] lg:text-[105px] -mt-9 sm:-mt-16 md:-mt-10 lg:-mt-24 font-brasika">
            as a <span className="text-[#a7ff00]">service</span>
          </div>
        </div>

        <div className="mt-5 flex justify-center items-center ">
          <div className="-mt-16">
            <img
              src="/arrow.png"
              alt="arrow"
              className="w-[50px] sm:w-[80px] md:w-[100px]"
            />
          </div>
          <a href="#about" className="hover:text-lime-400 z-50">
            <div className="bg-[#a7ff00] rounded-3xl px-6 py-2 md:px-10 lg:px-12 text-black  text-2xl md:text-2xl lg:text-3xl border-[3px] border-white hover:bg-[#000000] hover:text-[#a7ff00] transform transition-all duration-300 z-50">
              Book a Demo
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
