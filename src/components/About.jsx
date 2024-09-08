import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div id="about" className="h-auto">
      <div className=" text-white h-auto">
        <section className="mx-5 md:mx-10 min-h-[600px] bg-[#0038c7] relative ">
          <div className="relative">
            <img
              className="min-h-[600px]"
              src="/gridd.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 top-16 sm:top-2 flex flex-col justify-start items-center text-black ">
            <div className="text-center">
              <div className="font-brasika text-3xl sm:text-6xl md:text-8xl text-white">you may be thinkin</div>
              <div className="font-brasika text-3xl sm:text-6xl md:text-8xl text-white">who the <span className="text-lime-500">hell</span> we are?</div>
            </div>
            <div className="relative ml-28 sm:ml-32 mt-5">
                <div className="bg-lime-500 rounded-xl border-[2px] border-black h-28 w-40 sm:h-40 sm:w-80 absolute top-20 -left-[110px] sm:-left-52 -z-1 text-md sm:text-4xl p-2 sm:p-5">we are the providers <br/>of <span className="text-white">CaaS</span></div>
                <div className="relative z-40"><img className="-ml-3 sm:-ml-0 w-4/6 sm:w-5/6" src="/statue2.png" alt="" /></div>
                <div className="absolute top-44 left-[90px] sm:top-60 sm:left-40 bg-lime-500 rounded-xl border-[2px] border-black h-20 w-28 sm:h-32 sm:w-60 text-xs sm:text-xl pl-3 sm:pl-20 text-end p-2 flex flex-col justify-center items-center">we build your <span className="text-white">social media presence</span></div>
                <div className="absolute bg-lime-500 rounded-xl border-[2px] border-black h-20 w-32 sm:h-40 sm:w-60 top-[200px] sm:top-[360px] -left-20 sm:-left-48 text-xs sm:text-2xl p-2 flex flex-col justify-center ">that too at <span className="text-white">a non- <br /> competitive  price</span></div>
            </div>
            <Footer/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
