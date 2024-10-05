import React from "react";
import Navbar from "../Navbar.jsx";
import { Element } from "react-scroll";
import PostCard from "./PostCard.jsx";
function Posts() {
  return (
    <Element name="AllPost">
      <div id="AllPosts">
        <div className="text-white w-full py-5 z-20">
          <section className="mx-2 md:mx-10 h-auto md:h-auto md:pb-0 rounded-[30px] md:rounded-[50px] bg-[#0038c7] relative min-h-[3800px] md:min-h-[3600px]">
            <div className="relative">
              <img
                className="min-h-[400px] md:h-[600px] object- rounded-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative ">
              <img
                className="min-h-[400px] md:h-[600px] rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative ">
              <img
                className="min-h-[400px] md:h-[600px] rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative ">
              <img
                className="min-h-[400px] md:h-[600px] rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative ">
              <img
                className="min-h-[400px] md:h-[600px] rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative ">
              <img
                className="min-h-[400px] md:h-[600px] rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative block md:hidden ">
              <img
                className="min-h-[400px] md:h-auto rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative block md:hidden ">
              <img
                className="min-h-[400px] md:h-auto rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative block md:hidden ">
              <img
                className="min-h-[400px] md:h-auto rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>
            <div className="relative block md:hidden ">
              <img
                className="min-h-[200px] md:h-auto rounded-b-[30px] md:rounded-[50px] border-none w-full"
                src="/gridd.png"
                alt="background"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-start text-center w-full">
              <Navbar className="w-full" />

              <div className="flex flex-col justify-center items-center">
                <div className="text-[55px] sm:text-[120px] md:text-[150px]  font-brasika text-[#a7ff00]">
                  want posts
                </div>
                <div className="text-[35px] sm:text-[80px] md:text-[70px] lg:text-[105px] -mt-8 sm:-mt-16 md:-mt-24 md:ml-12 font-brasika">
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
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>

              
             
              </div>
            </div>
          </section>
        </div>
      </div>
    </Element>
  );
}

export default Posts;
