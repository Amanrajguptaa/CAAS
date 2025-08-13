import React from "react";
import { Link } from "react-router-dom";

const TitleStrip = ({ className = "" }) => (
  <div
    className={`bg-[#a7ff00] text-black py-5 flex items-center justify-center border-[2px] border-black overflow-hidden w-full`}
  >
    {Array(5)
      .fill("Reels")
      .map((text, i) => (
        <span
          key={i}
          className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20"
        >
          {text}
        </span>
      ))}
  </div>
);

const phoneData = [
  {
    video:
      "https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631512/CAAS/video4_flbd2y.webm",
    size: "w-[110px] h-[220px] sm:w-[140px] sm:h-[280px] md:w-72 md:h-[440px]",
    offset: "translate-x-2/3 z-4",
  },
  {
    video:
      "https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.webm",
    size: "w-[120px] h-[200px] sm:w-[160px] sm:h-[320px] md:w-80 md:h-[510px]",
    offset: "translate-x-1/3 z-30",
  },
  {
    video:
      "https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631520/CAAS/video5_lmvhv6.webm",
    size: "w-[130px] h-[230px] sm:w-[180px] sm:h-[360px] md:w-96 md:h-[590px]",
    offset: "z-50",
  },
  {
    video:
      "https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631518/CAAS/video3_s9a1a2.webm",
    size: "w-[120px] h-[200px] sm:w-[160px] sm:h-[320px] md:w-80 md:h-[510px]",
    offset: "-translate-x-1/3 z-30",
  },
  {
    video:
      "https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631248/CAAS/hanumanVideo_uud0a5.webm",
    size: "w-[110px] h-[220px] sm:w-[140px] sm:h-[280px] md:w-72 md:h-[450px]",
    offset: "-translate-x-2/3 z-4",
  },
];

function PhoneSection() {
  return (
    <div id="reels">
      <div className="relative">
        <div className="absolute -top-[3%] md:-top-[9%] w-full">
          <TitleStrip />
        </div>
        <div className="absolute top-[40%] sm:top-[40%] w-full">
          <TitleStrip />
        </div>
        <div className="absolute top-[89%] sm:top-[94%] w-full">
          <TitleStrip />
        </div>

        <div className="relative flex justify-center items-center mt-16 md:mt-40 space-x-4 z-50">
          {phoneData.map(({ video, size, offset }, idx) => (
            <div
              key={idx}
              className={`relative ${size} ${offset} ${
                idx === 0 || idx === phoneData.length - 1
                  ? "hidden sm:block"
                  : ""
              }`}
            >
              <div className="absolute top-[6%] left-[7%] w-[86%] h-[88%] rounded-xl md:rounded-[24px] overflow-hidden z-0">
                <video
                  className="w-full h-full object-cover"
                  src={video}
                  autoPlay
                  loop
                  muted
                />
              </div>
              <img
                className={`w-full h-full object-contain relative md:scale-125 lg:scale-100`}
                src="/phone.png"
                alt="Phone"
              />
            </div>
          ))}
        </div>
        
      </div>
      <div className="flex justify-center mt-20 md:mt-36">
        <Link onClick={() => scrollTo(0, 0)} to="/reels">
          <button className="group px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-[#a7ff00]">
            <span>Check’em All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125"
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

export default PhoneSection;
