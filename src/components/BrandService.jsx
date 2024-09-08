import React from "react";

function BrandService() {
  return (
    <div className="w-full z-10">
      <div className="min-h-[400px] -mt-8 md:-mt-24 text-white">
        <section className="mx-3 md:mx-10 h-auto bg-[#0038c7] relative">
          <div className="relative">
            <img className="min-h-[400px]" src="/gridd.png" alt="" />
          </div>

          <div className="absolute inset-0 top-16 md:top-12 flex flex-col justify-center items-center  mt-0 md:mt-40">
            <div className="flex flex-col justify-center items-center">
              <div className="transform rotate-[10deg] sm:rotate-[5deg]">
                <div className="font-brasika text-xl sm:text-4xl md:text-7xl z-50 ml-7 md:ml-12">
                  brands that got
                </div>
                <div className="relative bg-[#a7ff00] text-black py-3 md:py-5 flex items-center justify-center border-[2px] border-black w-screen -z-10">
                  <marquee >
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo1.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo2.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo3.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo4.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo5.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo6.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo7.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo8.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo9.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo10.png" alt="" />

                  </marquee>
                </div>
              </div>

              <div className="transform -rotate-[18deg] sm:-rotate-[12deg] -mt-16 md:-mt-24 z-0">
                <div className="flex  justify-end font-brasika text-[11px] sm:text-2xl md:text-4xl z-10 mr-5 md:mr-24">
                  creativity as a service
                </div>
                <div className="relative bg-[#a7ff00] text-black py-3 md:py-5 flex items-center justify-center border-[2px] border-black w-screen -z-10">
                <marquee >
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo1.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo2.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo3.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo4.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo5.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo6.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo7.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo8.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo9.png" alt="" />
                    <img className="inline-block h-[30px] w-[100px]  md:h- md:w-[100px] mr-28" src="/logo10.png" alt="" />

                  </marquee>
                </div>
              </div>
              <div className="mt-4 md:mt-8">
                <img className="h-24 md:h-20" src="/downarrow.png" alt="" />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-2 md:mt-10">
              <div className="font-brasika text-3xl md:text-8xl text-center">this is what they</div>
              <div className="font-brasika text-3xl md:text-8xl text-center">
                wanna say <span className="text-[#a7ff00]">out loud</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BrandService;
