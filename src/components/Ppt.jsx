import React from "react";
import "./Ppt.css";
import { Link } from "react-router-dom";
function Ppt() {
  return (
    <div id="ppt" className=" relative  sm:-mt-10 pb-96 z-30">
      <div className="text-black">
        <section className="mx-2 md:mx-10 h-auto   bg-[#0038c7] relative  ">
          {/* Background Image */}
          <div className="relative overflow-hidden">
            <img className="" src="/gridd.png" alt="" />
          </div>

          <div className="absolute top-5 sm:top-44 flex flex-col ">
            <div class="main-container ">
              <div class="card-container-01">
                <div class=" card-even mr-[2px] md:mr-[3px]">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10"
                    src="/ppt1.jpg"
                    alt=""
                  />
                </div>

                <div class=" card-odd mr-[2px] md:mr-[3px]">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10"
                    src="/ppt2.jpg"
                    alt=""
                  />
                </div>

                <div class=" card-even mr-[2px] md:mr-[3px]">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10"
                    src="/ppt3.jpg"
                    alt=""
                  />
                </div>

                <div class=" card-odd mr-[2px] md:mr-[3px]">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10"
                    src="/ppt4.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div class="card-container-01">
                {/* <div class="card-even mr-[2px] md:mr-[3px]">
      <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt5.jpg" alt="" />
    </div>

    <div class="card-odd mr-[2px] md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt1.jpg" alt="" />

    </div> */}

                {/* <div class="card-even mr-[2px] md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt2.jpg" alt="" />

    </div>

    <div class="card-odd mr-[2px] md:mr-[3px] hidden md:visible ">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt3.jpg" alt="" />

    </div> */}
              </div>
            </div>

            <div class="tag text-sm md:text-auto">
              <div className="text-lg md:text-6xl mr-5 md:mr-32">PPTs</div>
              <div className="text-lg md:text-6xl mr-5 md:mr-32">PPTs</div>
              <div className="text-lg md:text-6xl mr-5 md:mr-32">PPTs</div>
              <div className="text-lg md:text-6xl mr-5 md:mr-32">PPTs</div>
            </div>

            <div class="main-container">
              <div class="card-container-02 md:mt-52">
                <div class="card-odd mr-[2px] md:mr-[3px]">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]"
                    src="/ppt6.jpg"
                    alt=""
                  />
                </div>

                <div class="card-even mr-[2px] md:mr-[3px]">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]"
                    src="/ppt7.jpg"
                    alt=""
                  />
                </div>

                <div class="card-odd mr-[2px] md:mr-[3px]">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]"
                    src="/ppt8.jpg"
                    alt=""
                  />
                </div>

                <div class="card-even mr-[2px] md:mr-[3px]">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]"
                    src="/ppt9.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div class="card-container-02">
                {/* <div class="card-odd md:mr-[3px] ">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt6.jpg" alt="" />

    </div>

    <div class="card-even md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt7.jpg" alt="" />

    </div> */}

                {/* <div class="card-odd md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt8.jpg" alt="" />

    </div>

    <div class="card-even md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt9.jpg" alt="" />

    </div> */}
              </div>
            </div>
          </div>

          <Link to={"/ppt"}>
            <div className="flex justify-center items-center">
              <button className=" group absolute  top-[130%] sm:top-[140%] px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-[#a7ff00]">
                <span>Check’em All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-8 group-hover:scale-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Ppt;
