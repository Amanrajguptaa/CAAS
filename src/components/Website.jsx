import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
};

function Website() {
  return (
    <div className=''>
      <section className="mx-2 md:mx-10 -my-5 md:-my-1 bg-[#0038c7] relative ">
        <div className="relative">
          <img
            className="min-h-96 rounded-[30px] md:rounded-[50px] border-none w-full"
            src="/gridd.png"
            alt="background"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center w-full px-10">
        <div className="absolute top-[4%] md:top-[3%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-full overflow-">
              
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Websites
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Websites
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Websites
              </span>
              
            </div>

            <div className="absolute top-[45%] sm:top-[35%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-full">
             
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Websites
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Websites
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-24">
                Websites
              </span>
              
            </div>

            <div className="absolute top-[85%]   sm:top-[70%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-full">
              
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Websites
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20">
                Websites
              </span>
              <span className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-24">
                Websites
              </span>
              
            </div>

          <div className='relative top-[10%] rounded-[25px] md:rounded-[50px] w-[320px] md:w-full h-[300px] md:h-[500px] bg-white flex justify-center items-center'>
            <div className="w-full h-full flex justify-center items-center px-1">
              <Slider {...settings} className="w-full h-full flex justify-center items-center">
                 <div className="w-[300px] md:w-full h-[270px] md:h-[400px] flex justify-center items-center px-1 md:px-10">
                  <iframe 
                    className="w-full h-full border-none"
                    src="https://nishbworks.wixsite.com/my-site-2"
                    title="Slide 1"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="w-[300px] md:w-full h-[270px] md:h-[400px] flex justify-center items-center px-1 md:px-10">
                  <iframe 
                    className="w-full h-full border-none"
                    src="https://scribesavvy.com/elementor-11/"
                    title="Slide 1"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* <div className="w-[300px] md:w-full h-[270px] md:h-[400px] flex justify-center items-center px-1 md:px-10">
                  <iframe 
                    className="w-full h-full border-none"
                    src="https://caasf.vercel.app/"
                    title="Slide 1"
                    allowFullScreen
                  ></iframe>
                </div>  */}
              
               </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Website;
