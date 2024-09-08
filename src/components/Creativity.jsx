import React from "react";
import TypingWords from "./TypingWords.jsx";

function Creativity() {
  const words = ["illegal", "違法", "अवैध", "غير قانوني"];
  return (
    <div className="min-h-[500px] -mt-16 md:-mt-80">
      <div className="text-white h-auto">
        <section className="mx-3 md:mx-10 h-auto bg-[#0038c7] relative">
          <div className=" relative">
            <img
              className="min-h-[600px] border rounded-[30px] md:rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-start md:justify-start items-center ">
            <div className="w-full bg-[#a7ff00] rounded-xl md:rounded-2xl py-5  md:py-10 text-center flex flex-col">
              <div className="font-brasika text-black text-[22px] sm:text-[46px] md:text-7xl">
                do not believe what they say,
              </div>
              <div className="font-brasika text-[28px] sm:text-[46px] md:text-8xl -mt-3 sm:-mt-5 md:-mt-3">
                see the creativity
              </div>
            </div>

            <div className="flex mt-10 md:mt-16 border-[2px] border-white rounded-[30px] md:rounded-[50px] px-2 md:px-[80px] py-1 gap-[4px] md:gap-[20px]">
              {/* {Array(6).fill(1).map((_, i) => (
                <div key={i} className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-16 md:w-16 flex justify-center items-center">
                </div>
              ))} */}
              <a href="#posts">
              <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-16 md:w-16 flex justify-center items-center">
              <img className='h-1/2 md:h-1/2' src={`/Icon0.png`} alt="" />
              </span>
              </a>

              <a href="#carousels">
              <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-16 md:w-16 flex justify-center items-center">
              <img className='h-1/2 md:h-1/2' src={`/Icon1.png`} alt="" />
              </span>
              </a>

              <a href="#reels">
              <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-16 md:w-16 flex justify-center items-center">
              <img className='h-1/2 md:h-1/2' src={`/Icon2.png`} alt="" />
              </span>
              </a>

              <a href="#home">
              <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-16 md:w-16 flex justify-center items-center">
              <img className='h-1/2 md:h-1/2' src={`/Icon3.png`} alt="" />
              </span>
              </a>


              <a href="#ppt">
              <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-16 md:w-16 flex justify-center items-center">
              <img className='h-1/2 md:h-1/2' src={`/Icon4.png`} alt="" />
              </span>
              </a>


              <a href="#contact">
              <span className="bg-white rounded-full border-2 border-black h-12 w-12 md:h-16 md:w-16 flex justify-center items-center">
              <img className='h-1/2 md:h-1/2' src={`/Icon5.png`} alt="" />
              </span>
              </a>
            </div>

            <div className="flex flex-col justify-center items-center text-center mt-10 md:mt-32">
              <div className="font-brasika text-3xl sm:text-6xl md:text-8xl">
                we create anything
              </div>
              <div className="font-brasika text-3xl sm:text-6xl md:text-8xl pb-3 sm:pb-0">
                that is not
              </div>
              <div className="flex justify-center items-center">
                <div className="font-brasika text-[#a7ff00] text-5xl sm:text-7xl md:text-7xl">
                  <TypingWords
                    words={words}
                    speed={120}
                    pause={50}
                    loop={true}
                  />
                </div>
                <div className="text-5xl md:text-8xl font-brasika">*</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Creativity;
