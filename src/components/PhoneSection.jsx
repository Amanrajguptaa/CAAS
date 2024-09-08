import React from "react";

function PhoneSection() {
  return (
    <div id="reels" className="h-auto -mt-40 sm:-mt-0 ">
      <div className="text-white h-auto">
        <section className="mx-3 md:mx-10 h-auto bg-[#0038c7] relative">
          <div className="relative">
            <img
              className="border rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 top-5 flex flex-col justify-center items-center">
            <div className="absolute top-[10%] md:top-[5%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-screen">
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-24">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-24">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-24">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-24">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl">Reels</span>
            </div>

            <div className="absolute top-[45%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-screen">
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-20">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-20">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-20">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-24">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl">Reels</span>
            </div>

            <div className="absolute top-[88%] sm:top-[82%] bg-[#a7ff00] text-black py-2 md:py-5 flex items-center justify-center border-[2px] border-black w-screen">
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-20">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-20">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-20">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl mr-8 md:mr-24">Reels</span>
              <span className="text-black font-brasika text-md sm:text-3xl md:text-6xl">Reels</span>
            </div>

 
            
            <div className="relative flex justify-center items-center mt-10 md:mt-0 space-x-4">
              <div className="relative w-[60px] h-[120px] sm:w-[100px] sm:h-[200px] md:w-56 md:h-[440px] translate-x-2/3 z-4">
                {/* Video as the background */}
                <video className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0" src="/video4.mp4" autoPlay loop muted />
                {/* Phone image overlay */}
                <img className="absolute inset-0 w-full h-full object-contain z-10" src="/phone.png" alt="Phone" />
              </div>

              <div className="relative w-[70px] h-[140px] sm:w-[120px] sm:h-[240px] md:w-64 md:h-[510px] translate-x-1/3 z-30">
                {/* Video as the background */}
                <video className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0" src="/video2.mp4" autoPlay loop muted />

                {/* Phone image overlay */}
                <img className="absolute inset-0 w-full h-full object-contain z-10" src="/phone.png" alt="Phone" />
              </div>

              <div className="relative w-[80px] h-[160px] sm:w-[140px] sm:h-[280px] md:w-72 md:h-[570px] z-50">
                {/* Video as the background */}
                <video className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0" src="/video5.mp4" autoPlay loop muted />
                {/* Phone image overlay */}
                <img className="absolute inset-0 w-full h-full object-contain z-10" src="/phone.png" alt="Phone" />
              </div>

              <div className="relative w-[70px] h-[140px] sm:w-[120px] sm:h-[240px] md:w-64 md:h-[510px] -translate-x-1/3 z-30">
                {/* Video as the background */}
                <video className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0" src="/video3.mp4" autoPlay loop muted />
                
                {/* Phone image overlay */}
                <img className="absolute inset-0 w-full h-full object-contain z-10" src="/phone.png" alt="Phone" />
              </div>

              <div className="relative w-[60px] h-[120px] sm:w-[100px] sm:h-[200px] md:w-56 md:h-[450px] -translate-x-2/3 z-4">
                {/* Video as the background */}
                <video className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0" src="/hanumanVideo.mp4" autoPlay loop muted />
                {/* Phone image overlay */}
                <img className="absolute inset-0 w-full h-full object-contain z-10" src="/phone.png" alt="Phone" />
              </div>
              </div>




          </div>
        </section>
      </div>
    </div>
  );
}

export default PhoneSection;