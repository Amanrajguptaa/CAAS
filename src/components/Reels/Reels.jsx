import React from "react";
import Navbar from "../Navbar.jsx";
import ReelsCard from "./ReelsCard.jsx";
function Reels() {
  return (
    <div className="pt-5 font-brasika text-white overflow-hidden 2xl:max-w-7xl mx-auto">
      <div
        className="mx-2 md:mx-10 rounded-t-[30px] md:rounded-t-[50px] bg-[#0038c7]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      >
        {" "}
        <Navbar className="w-full" />
        <div className="flex flex-col justify-center items-center">
          <div className="text-[45px] sm:text-[100px] md:text-[90px] lg:text-[120px]  font-brasika text-white">
            get reels that
          </div>
          <div className="text-[40px] sm:text-[70px] md:text-[70px] lg:text-[90px] xl:text-[130px] -mt-6 sm:-mt-16 md:-mt-12 lg:-mt-20 md:ml-12 font-brasika text-[#a7ff00]">
            stop the scroll!
          </div>
        </div>
        <div className="mt-5 md:mt-7  flex justify-center items-center ">
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
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-6 md:gap-12 py-20 px-2 md:px-7">
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124387/CAAS/reels/Strawberry_Breakfast_Rolls_blzolu.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124383/CAAS/reels/Banana_Lentil_Muffins_xsxxnc.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124367/CAAS/reels/5_Healthy_Teeth_Habits_gyo4db.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124388/CAAS/reels/Physio_therapy_j9nubi.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124384/CAAS/reels/Myths_vs._Reality_1_hu01n9.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124377/CAAS/reels/Rings_Collection_1_liesiu.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124375/CAAS/reels/Ganesh_Ji_1_uyargm.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124377/CAAS/reels/MSc-IT_pwj6vy.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631523/CAAS/video2_g0yulw.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631518/CAAS/video3_s9a1a2.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1728124371/CAAS/reels/admissions_open_3_qydszd.mp4"
            }
          />
          <ReelsCard
            src={
              "https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631248/CAAS/hanumanVideo_uud0a5.mp4"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Reels;
