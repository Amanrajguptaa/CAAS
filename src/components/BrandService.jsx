import React from "react";

function BrandService() {
  const logos = [
    { src: "/logo1.png" },
    { src: "/logo2.png" },
    { src: "/logo3.png" },
    { src: "/logo4.png" },
    { src: "/logo5.png" },
    { src: "/logo6.png" },
    { src: "/logo7.png" },
    { src: "/logo8.png" },
    { src: "/logo9.png" },
    { src: "/logo10.png" },
    { src: "/logo11.png" },
    { src: "/logo12.png" },
    { src: "/logo13.png" },
    { src: "/logo14.png" },
    { src: "/logo15.png" },
    { src: "/logo16.png" },
  ];

  const renderLogos = () =>
    logos.map((logo, index) => (
      <img
        key={index}
        className={`inline-block h-20 w-28 md:w-auto mr-12`}
        src={logo.src}
        alt={`logo-${index + 1}`}
      />
    ));

  return (
    <div id="brands">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Desktop big version */}
        <div className="flex flex-col justify-center items-center mt-20 md:mt-32 lg:mt-40">
          <div className="hidden lg:block transform rotate-[10deg] sm:rotate-[5deg]">
            <div className="font-brasika text-xl sm:text-4xl md:text-5xl lg:text-7xl z-50 ml-7 md:ml-12">
              brands that got
            </div>
            <div className="relative bg-[#a7ff00] text-black py-3 flex items-center justify-center border-[2px] border-black w-full -z-10">
              <marquee>{renderLogos()}</marquee>
            </div>
          </div>

          <div className="hidden lg:block transform -rotate-[18deg] sm:-rotate-[18deg] -mt-16 md:-mt-24 z-0 w-full">
            <div className="flex  justify-end font-brasika text-[10px] sm:text-2xl md:text-3xl lg:text-4xl z-10 mr-5 md:mr-10">
              creativity as a service
            </div>
            <div className="relative bg-[#a7ff00] text-black py-3 flex items-center justify-center border-[2px] border-black w-full -z-10">
              <marquee>{renderLogos()}</marquee>
            </div>
          </div>

          {/* Mobile version */}
          <div className="block lg:hidden transform rotate-[0deg]">
            <div className="font-brasika text-[27px] md:text-5xl  text-center mb-3">
              brands that got
              <div>creativity as a service</div>
            </div>
            <div className="relative bg-[#a7ff00] text-black py-3 md:py-5 flex items-center justify-center border-[2px] border-black w-full -z-10">
              <marquee>{renderLogos()}</marquee>
            </div>
          </div>

          <div className="mt-4 md:mt-8">
            <img className="h-24 md:h-36" src="/downarrow.png" alt="" />
          </div>
        </div>

        {/* Heading below */}
        <div className="flex flex-col justify-center items-center mt-2 md:mt-10 mb-6 sm:mb-16">
          <div className="font-brasika text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
            this is what they
          </div>
          <div className="font-brasika text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
            wanna say <span className="text-[#a7ff00]">out loud</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandService;
