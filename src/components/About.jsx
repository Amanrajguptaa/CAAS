import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div id="about" className="h-auto">
      <div className=" text-white h-auto">
        <section className="mx-2 md:mx-10 min-h-[600px] sm:min-h-[900px] bg-[#0038c7] relative ">
          <div className="relative">
            <img
              className="min-h-[600px] sm:min-h-[900px]"
              src="/gridd.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 top-5 sm:top-20 flex flex-col justify-start  items-center text-black ">
            <div className="text-center">
              <div className="font-brasika text-3xl sm:text-6xl md:text-8xl text-white">you may be thinkin</div>
              <div className="font-brasika text-3xl sm:text-6xl md:text-8xl text-white">who the <span className="text-lime-500">hell</span> we are?</div>
            </div>
            <div className="relative ml-28 sm:ml-32 mt-5 pb-0 sm:pb-10">
                <div className="bg-lime-500 rounded-xl border-[2px] border-black h-28 w-40 sm:h-40 sm:w-80 absolute top-20 -left-[100px] sm:-left-52 -z-1 text-md sm:text-4xl p-2 sm:p-5">we are the providers <br/>of <span className="text-white">CaaS</span></div>
                <div className="relative z-40"><img className="-ml-[6px] sm:-ml-0 w-4/6 sm:w-5/6" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631504/CAAS/statue2_gyar9i.png" alt="" /></div>
                <div className="absolute top-40 left-[100px] sm:top-60 sm:left-40 bg-lime-500 rounded-xl border-[2px] border-black h-20 w-28 sm:h-32 sm:w-60 text-xs sm:text-xl pl-3 pr-2  sm:pl-20 text-end py-1  flex flex-col sm:justify-center items-center">we build your <span className="text-white">social media presence</span></div>
                <div className="absolute bg-lime-500 rounded-xl border-[2px] border-black h-20 w-32 sm:h-40 sm:w-60 top-[200px] sm:top-[400px] -left-[90px] sm:-left-40 text-xs sm:text-2xl p-2 flex flex-col justify-center ">that too at <span className="text-white">a non- <br /> competitive  price</span></div>
            </div>
            <Footer/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
