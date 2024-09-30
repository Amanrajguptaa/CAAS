import React from "react";
import Navbar from "../Navbar.jsx";
import CarouselNavbar from "../CarouselNavbar.jsx";
function CarouselPage() {
  return (
    <div>
      <div id="home" className="text-white w-full py-5 z-20">
        <section className="mx-2 md:mx-10 h-auto md:h-[1200px] md:pb-0 rounded-[30px] md:rounded-[50px] bg-[#0038c7] relative min-h-96">
          <div className="relative">
            <img
              className="min-h-screen md:h-[1200px] object- rounded-[30px] md:rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt="background"
            />
          </div>
          <div className="relative bloack md:hidden">
            <img
              className="min-h-[350px] md:h-auto rounded-b-[30px] md:rounded-[50px] border-none w-full"
              src="/gridd.png"
              alt="background"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center w-full">
            <CarouselNavbar className="w-full" />

            <div className="flex flex-col justify-center items-center">
              <div className="text-[40px] sm:text-[100px]  font-brasika text-[#a7ff00]">
                want carousels
              </div>
              <div className="text-[35px] sm:text-[80px] md:text-[70px] lg:text-[105px] -mt-5 sm:-mt-16 md:-mt-20 md:ml-12 font-brasika">
                for your brands?
              </div>
            </div>

            <div className="mt-5  flex justify-center items-center ">
              <div className="-mt-16">
                <img
                  src="/arrow.png"
                  alt="arrow"
                  className="w-[50px] sm:w-[80px] md:w-[100px]"
                />
              </div>
              {/* <a href="#contact z-30">
              <div className="bg-[#a7ff00] rounded-3xl px-6 py-2 md:px-10 lg:px-12 text-black  text-2xl md:text-2xl lg:text-3xl border-[3px] border-white hover:bg-[#74a220] z-50">
                Book a Demo
              </div>
            </a> */}
              <a href="#about" className="hover:text-lime-400 z-50">
                <div className="bg-[#a7ff00] rounded-3xl px-6 py-2 md:px-10 lg:px-12 text-black  text-2xl md:text-2xl lg:text-3xl border-[3px] border-white hover:bg-[#000000] hover:text-[#a7ff00] transform transition-all duration-300 z-50">
                  Book a Demo
                </div>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 my-20 px-2 md:px-0">
              <div
                className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-white p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
                style={{
                  boxShadow: "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0px #a7ff00, 3px 0px 0px #a7ff00"; // Adjust shadow for depth effect
                  e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00"; // Restore original shadow
                  e.currentTarget.style.transform = "translateY(0px)"; // Reset position
                }}
              >
                <img src="/postdemo.png" alt="" />
              </div>
              <div
                className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-[#a7ff00] p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
                style={{
                  boxShadow: "6px 6px 0px white, 6px 0px 0px white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0px white, 3px 0px 0px white"; // Adjust shadow for depth effect
                  e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "6px 6px 0px white, 6px 0px 0px white"; // Restore original shadow
                  e.currentTarget.style.transform = "translateY(0px)"; // Reset position
                }}
              >
                <img src="/postdemo.png" alt="" />
              </div>
              <div
                className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-white p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
                style={{
                  boxShadow: "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0px #a7ff00, 3px 0px 0px #a7ff00"; // Adjust shadow for depth effect
                  e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00"; // Restore original shadow
                  e.currentTarget.style.transform = "translateY(0px)"; // Reset position
                }}
              >
                <img src="/postdemo.png" alt="" />
              </div>
              <div
                className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-[#a7ff00] p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
                style={{
                  boxShadow: "6px 6px 0px white, 6px 0px 0px white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0px white, 3px 0px 0px white"; // Adjust shadow for depth effect
                  e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "6px 6px 0px white, 6px 0px 0px white"; // Restore original shadow
                  e.currentTarget.style.transform = "translateY(0px)"; // Reset position
                }}
              >
                <img src="/postdemo.png" alt="" />
              </div>
              <div
                className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-white p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
                style={{
                  boxShadow: "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0px #a7ff00, 3px 0px 0px #a7ff00"; // Adjust shadow for depth effect
                  e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00"; // Restore original shadow
                  e.currentTarget.style.transform = "translateY(0px)"; // Reset position
                }}
              >
                <img src="/postdemo.png" alt="" />
              </div>
              <div
                className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-[#a7ff00] p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
                style={{
                  boxShadow: "6px 6px 0px white, 6px 0px 0px white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0px white, 3px 0px 0px white"; // Adjust shadow for depth effect
                  e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "6px 6px 0px white, 6px 0px 0px white"; // Restore original shadow
                  e.currentTarget.style.transform = "translateY(0px)"; // Reset position
                }}
              >
                <img src="/postdemo.png" alt="" />
              </div>
              <div
                className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-white p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
                style={{
                  boxShadow: "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0px #a7ff00, 3px 0px 0px #a7ff00"; // Adjust shadow for depth effect
                  e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00"; // Restore original shadow
                  e.currentTarget.style.transform = "translateY(0px)"; // Reset position
                }}
              >
                <img src="/postdemo.png" alt="" />
              </div>
              <div
                className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-[#a7ff00] p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
                style={{
                  boxShadow: "6px 6px 0px white, 6px 0px 0px white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0px white, 3px 0px 0px white"; // Adjust shadow for depth effect
                  e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "6px 6px 0px white, 6px 0px 0px white"; // Restore original shadow
                  e.currentTarget.style.transform = "translateY(0px)"; // Reset position
                }}
              >
                <img src="/postdemo.png" alt="" />
              </div>
              </div>

            {/* <Footer /> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CarouselPage;
