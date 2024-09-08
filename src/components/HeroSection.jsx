import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (

    <div id="home" className="text-white w-screen py-5 z-20">

      <section className="mx-3 md:mx-10 pb-52 md:pb-0 rounded-t-[30px] md:rounded-[50px] bg-[#0038c7] relative min-h-96">
        <div className="relative">
          <img
            className="min-h-96 rounded-[30px] md:rounded-[50px] border-none w-full"
            src="/gridd.png"
            alt="background"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-start text-center w-full">
        <Navbar className="w-full"/>

          <div className="flex flex-col justify-center items-center">
            <div className="text-[60px] sm:text-[120px] md:text-[120px] lg:text-[170px] font-brasika">
              creativity
            </div>
            <div className="text-[40px] sm:text-[80px] md:text-[70px] lg:text-[105px] -mt-9 sm:-mt-16 md:-mt-10 lg:-mt-24 font-brasika">
              as a <span className="text-[#a7ff00]">service</span>
            </div>
          </div>

          <div className="mt-5  flex justify-center items-center ">
            <div className="-mt-16">
              <img src="/arrow.png" alt="arrow" className="w-[50px] sm:w-[80px] md:w-[50px] lg:w-[60px]" />
            </div>
            <a href="#contact">
            <div className="bg-[#a7ff00] rounded-3xl px-6 py-2 md:px-10 lg:px-12 text-black font-bold text-2xl md:text-2xl lg:text-3xl border-[3px] border-white">
            Book a Demo
            </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
