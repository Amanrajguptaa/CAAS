import React from "react";
import CardStack from "./CardStack";

function StackCards() {
  return (
    <div id="posts" className='h-auto '>
            <div className=" text-white h-auto">
        <section className=" mx-3 md:mx-10  min-h-[380px] bg-[#0038c7] relative  ">
        <div className='relative'><img className=" min-h-[380px] border rounded-[50px]  border-none" src="/gridd.png" alt="" /></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center -mt-40 sm:-mt-0">
            <CardStack/>
            <div className="absolute top-[30%] md:top-[40%]  bg-[#a7ff00] text-black py-5 rotate-6  flex items-center justify-center border-[2px] border-black w-screen ">
              <span className="text-black font-brasika text-[10px] sm:text-2xl md:text-6xl mr-32 md:mr-20 ">Social Media Posts</span> <span className="text-black font-brasika text-[10px] sm:text-2xl md:text-6xl ">Social Media Posts</span> 
            </div>

            <button className=" mt-10 sm:mt-20 px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105">Check’em All</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StackCards;
