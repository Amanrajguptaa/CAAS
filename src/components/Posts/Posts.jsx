import React from "react";
import Navbar from "../Navbar.jsx";
function Posts() {
  return (
    <div>
      <div id="home" className="text-white w-full py-5 z-20">
        <section className="mx-2 md:mx-10 h-screen md:h-auto md:pb-0 rounded-[30px] md:rounded-[50px] bg-[#0038c7] relative min-h-96">
          <div className="relative">
            <img
              className="min-h-screen object- rounded-[30px] md:rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt="background"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center w-full"></div>
        </section>
      </div>
    </div>
  );
}

export default Posts;
