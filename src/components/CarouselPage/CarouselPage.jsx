import React from "react";
import Navbar from "../Navbar.jsx";
import CarouselCard from "./CarouselCard.jsx";
function CarouselPage() {
  return (
    <div>
      <div id="home" className="text-white w-full py-5 z-20">
        <section className="mx-2 md:mx-10 h-auto md:h-[1200px] md:pb-0 rounded-[30px] md:rounded-[50px] bg-[#0038c7] relative min-h-96">
          <div className="relative">
            <img
              className="min-h-screen md:h-[1200px] object- rounded-[30px] md:rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt="background"
            />
          </div>
          <div className="relative bloack md:hidden">
            <img
              className="min-h-[350px] md:h-auto rounded-b-[30px] md:rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt="background"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center w-full">
            <Navbar className="w-full" />

            <div className="flex flex-col justify-center items-center">
              <div className="text-[45px] md:text-[130px]  font-brasika text-white]">
                need users to
              </div>
              <div className="text-[30px] sm:text-[80px] md:text-[60px] lg:text-[100px] -mt-5 sm:-mt-16 md:-mt-20 md:ml-12 font-brasika">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 my-20 px-2 md:px-0">
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
        </section>
      </div>
    </div>
  );
}

export default CarouselPage;
