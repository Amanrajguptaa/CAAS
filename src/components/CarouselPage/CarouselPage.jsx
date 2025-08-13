import React from "react";
import Navbar from "../Navbar.jsx";
import CarouselCard from "./CarouselCard.jsx";
function CarouselPage() {
  return (
<div className="pt-5 font-brasika text-white overflow-hidden 2xl:max-w-7xl mx-auto">
        <div
          className="mx-2 md:mx-10 rounded-t-[30px] md:rounded-t-[50px] bg-[#0038c7]"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        >
            <Navbar className="w-full" />

            <div className="flex flex-col justify-center items-center">
            <div className="text-[45px] sm:text-[120px] md:text-[90px] lg:text-[120px] xl:text-[130px]">
                need users to
              </div>
              <div className="text-[30px] sm:text-[80px] md:text-[60px] lg:text-[80px] xl:text-[90px] -mt-5 sm:-mt-16 md:-mt-12 lg:-mt-20 md:ml-12 font-brasika">
              <span className="text-[#a7ff00]">stay</span> on your page?
              </div>
            </div>

            <div className="mt-5  flex justify-center items-center ">
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

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6 md:gap-8 py-20 px-2 md:px-7">
            <CarouselCard src={'https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631244/CAAS/carousel1_qrbt6h.mp4'}/>
        <CarouselCard src={'https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631245/CAAS/carousel2_m1uj8u.mp4'}/>
        <CarouselCard src={'https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631246/CAAS/carousel3_ile0xd.mp4'}/>
        <CarouselCard src={'https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631246/CAAS/carousel4_ydisdq.mp4'} />
        <CarouselCard src={'https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631245/CAAS/carousel5_qqujfw.mp4'}/>
        <CarouselCard src={'https://res.cloudinary.com/dwwd1oncs/video/upload/v1728122429/carousel6_gljbje.mp4'}/>
        <CarouselCard src={'https://res.cloudinary.com/dwwd1oncs/video/upload/v1728122530/7_Platforms_for_Freelance_Opportunities_Facebook_Video_u65w6s.mp4'}/>
        <CarouselCard src={'https://res.cloudinary.com/dwwd1oncs/video/upload/v1728122532/5_Websites_that_can_Autopilot_your_business_Facebook_Video_olelva.mp4'}/>
              </div>

          </div>
        </div>
  );
}

export default CarouselPage;
