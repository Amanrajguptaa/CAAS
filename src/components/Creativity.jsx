import React from "react";
import TypingWords from "./TypingWords.jsx";

const words = [
  "illegal",
  "अवैध",
  "ਗੈਰਕਾਨੂੰਨੀ",
  "違法",
  "غير قانوني",
  "illegale",
  "незаконный",
  "illégal",
  "불법",
  "ilegal",
  "unlawful",
  "proibido",
];

function Creativity() {
  return (
    <div>
      <div className="flex flex-col justify-start md:justify-start items-center ">
        <div className="w-full bg-[#a7ff00] rounded-xl md:rounded-2xl py-5  md:py-10 text-center flex flex-col">
          <div className="font-brasika text-black text-[22px] sm:text-[46px] md:text-[40px] lg:text-7xl">
            do not believe what they say,
          </div>
          <div className="font-brasika text-[28px] sm:text-[46px] md:text-5xl lg:text-8xl -mt-3 sm:-mt-5 md:-mt-3">
            see the creativity
          </div>
        </div>

        <div className="flex mt-10 md:mt-16 border-[2px] border-white rounded-[30px] md:rounded-[50px] px-2 md:px-[80px] py-3 gap-[4px] md:gap-[20px]">
          <a href="#home">
            <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-13 md:w-13 flex justify-center items-center hover:bg-[#a7ff00] transorm transition-all duration-300">
              <img className="h-1/2 md:h-1/2" src={`/Icon3.png`} alt="" />
            </span>
          </a>

          <a href="#posts">
            <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-13 md:w-13 flex justify-center items-center hover:bg-[#a7ff00] transorm transition-all duration-300">
              <img className="h-1/2 md:h-1/2" src={`/Icon0.png`} alt="" />
            </span>
          </a>

          <a href="#carousels">
            <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-13 md:w-13 flex justify-center items-center hover:bg-[#a7ff00] transorm transition-all duration-300">
              <img className="h-1/2 md:h-1/2" src={`/Icon1.png`} alt="" />
            </span>
          </a>

          <a href="#reels">
            <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-13 md:w-13 flex justify-center items-center hover:bg-[#a7ff00] transorm transition-all duration-300">
              <img className="h-1/2 md:h-1/2" src={`/Icon2.png`} alt="" />
            </span>
          </a>

          <a href="#ppt">
            <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-13 md:w-13 flex justify-center items-center hover:bg-[#a7ff00] transorm transition-all duration-300">
              <img className="h-1/2 md:h-1/2" src={`/Icon4.png`} alt="" />
            </span>
          </a>

          <a href="#contact">
            <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-13 md:w-13 flex justify-center items-center hover:bg-[#a7ff00] transorm transition-all duration-300">
              <img className="h-1/2 md:h-1/2" src={`/Icon5.png`} alt="" />
            </span>
          </a>
        </div>

        <div className="flex flex-col justify-center items-center text-center mt-10 md:mt-16">
          <div className="font-brasika text-[32px] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            we create anything
          </div>
          <div className="font-brasika text-3xl sm:text-5xl md:text-6xl xl:text-8xl pb-3 sm:pb-0">
            that is not
          </div>
          <div className="flex justify-center items-center">
            <div className="font-brasika text-[#a7ff00] text-5xl sm:text-7xl md:text-7xl">
              <TypingWords words={words} speed={120} pause={50} loop={true} />
            </div>
            <div className="text-5xl md:text-8xl font-brasika">*</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creativity;
