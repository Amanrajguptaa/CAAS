import React from "react";
import "./Ppt.css";
import { Link } from "react-router-dom";

function Ppt() {
  return (
    <div id="ppt" className="relative mt-16 md:mt-0">
       
          <div className="pt-10 flex flex-col items-center justify-center w-full">
            {/* Top Scrolling Row */}
            <div className="main-container">
              <div className="card-container-01">
                <div className="card-even">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl"
                    src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631475/CAAS/ppt1_zcmjgw.jpg"
                    alt=""
                  />
                </div>
                <div className="card-odd">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl"
                    src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631467/CAAS/ppt2_tw9umy.jpg"
                    alt=""
                  />
                </div>
                <div className="card-even">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl"
                    src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631467/CAAS/ppt3_i32kqr.jpg"
                    alt=""
                  />
                </div>
                <div className="card-odd">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl"
                    src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631468/CAAS/ppt4_ze903v.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Tag Row */}
            <div className="tag font-brasika text-black text-xs sm:text-3xl md:text-6xl">
              <div>PPTs</div>
              <div>PPTs</div>
              <div>PPTs</div>
              <div>PPTs</div>
            </div>

            {/* Bottom Scrolling Row */}
            <div className="main-container">
              <div className="card-container-02">
                <div className="card-odd">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl"
                    src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631469/CAAS/ppt6_ece6b1.jpg"
                    alt=""
                  />
                </div>
                <div className="card-even">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl"
                    src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631472/CAAS/ppt7_aamq1p.jpg"
                    alt=""
                  />
                </div>
                <div className="card-odd">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl"
                    src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631470/CAAS/ppt8_jjnw1s.jpg"
                    alt=""
                  />
                </div>
                <div className="card-even">
                  <img
                    className="object-cover w-full h-full rounded-[3px] sm:rounded-xl"
                    src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631491/CAAS/ppt9_q7lzyo.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <Link onClick={()=>scrollTo(0,0)} to="" className="mt-8 flex justify-center">
              <button className="group px-12 py-2 border-2 border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105 hover:bg-black hover:text-[#a7ff00]">
                <span>Check’em All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2"
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
            </Link>
          </div>
      </div>
  );
}

export default Ppt;
