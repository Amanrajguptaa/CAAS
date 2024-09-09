import React from "react";

function Buttn() {
  return (


          <div className="absolute inset-0 top-5 flex justify-center items-center">
          <button className="group px-10 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black flex items-center justify-center space-x-2 transform transition-all duration-300 hover:scale-105">
  <span>Check’em All</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-8 group-hover:scale-150"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</button>

    </div>
 
  );
}

export default Buttn;
