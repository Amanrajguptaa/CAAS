import React from "react";
import ReelNavbar from "../ReelNavbar";

function Reels() {
  return (
    <div id="AllReels">
      <div  className="text-white w-full py-5 z-20">
        <section className="mx-2 md:mx-10 h-auto  md:pb-0 rounded-[30px] md:rounded-[50px] bg-[#0038c7] relative min-h-96">
          <div className="relative">
            <img
              className="min-h-screen md:h-[1000px] object- rounded-[30px] md:rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt="background"
            />
          </div>
          <div className="relative -mt-0.5">
            <img
              className="min-h-[550px] md:h-[1000px] rounded-b-[30px] md:rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt="background"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center w-full">
            <ReelNavbar className="w-full" />

            <div className="flex flex-col justify-center items-center">
              <div className="text-[55px] sm:text-[120px] md:text-[150px]  font-brasika text-[#a7ff00]">
                want reels
              </div>
              <div className="text-[35px] sm:text-[80px] md:text-[70px] lg:text-[105px] -mt-8 sm:-mt-16 md:-mt-24 md:ml-12 font-brasika">
                for your brands?
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
              {/* <a href="#contact z-30">
              <div className="bg-[#a7ff00] rounded-3xl px-6 py-2 md:px-10 lg:px-12 text-black  text-2xl md:text-2xl lg:text-3xl border-[3px] border-white hover:bg-[#74a220] z-50">
                Book a Demo
              </div>
            </a> */}
              <a href="#about" className="hover:text-lime-400 z-50">
                <div className="bg-[#a7ff00] rounded-3xl px-6 py-2 md:px-10 lg:px-12 text-black  text-2xl md:text-2xl lg:text-3xl border-[3px] border-white hover:bg-[#000000] hover:text-[#a7ff00] transform transition-all duration-300 z-50">
                  Book a Demo
                </div>
              </a>
            </div>

            <div className="my-16 md:my-20 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
              <div className="relative w-[125px] h-[250px]  md:w-[285px] md:h-[570px] z-50">
                {/* Video as the background */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.mp4"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10 "
                  src="/phone.png"
                  alt="Phone"
                />
              </div>
              <div className="relative w-[125px] h-[250px]  md:w-[285px] md:h-[570px] z-50">
                {/* Video as the background */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.mp4"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10 "
                  src="/phone.png"
                  alt="Phone"
                />
              </div>
              <div className="relative w-[125px] h-[250px]  md:w-[285px] md:h-[570px] z-50">
                {/* Video as the background */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.mp4"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10 "
                  src="/phone.png"
                  alt="Phone"
                />
              </div>
              <div className="relative w-[125px] h-[250px]  md:w-[285px] md:h-[570px] z-50">
                {/* Video as the background */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.mp4"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10 "
                  src="/phone.png"
                  alt="Phone"
                />
              </div>
              <div className="relative w-[125px] h-[250px]  md:w-[285px] md:h-[570px] z-50">
                {/* Video as the background */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.mp4"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10 "
                  src="/phone.png"
                  alt="Phone"
                />
              </div>
              <div className="relative w-[125px] h-[250px]  md:w-[285px] md:h-[570px] z-50">
                {/* Video as the background */}
                <video
                  className="p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0"
                  src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.mp4"
                  autoPlay
                  loop
                  muted
                />
                {/* Phone image overlay */}
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10 "
                  src="/phone.png"
                  alt="Phone"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Reels;
