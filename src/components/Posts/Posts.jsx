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
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108221/CAAS/POSTS/Post_30_lhapxs.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108220/CAAS/POSTS/Post-4_Shimla_y4oqgj.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108220/CAAS/POSTS/Post_07_PH_iijbpq.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108219/CAAS/POSTS/Post_25_ve2t6u.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108217/CAAS/POSTS/Post_2_dt8whm.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108218/CAAS/POSTS/Post_29_n1vivd.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108205/CAAS/POSTS/Post-11_japiur-ajmer-pushkar_qnfurv.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108202/CAAS/POSTS/Post-2_Sandwich_nbaduf.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108227/CAAS/POSTS/7_wtocnc.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108217/CAAS/POSTS/Post_04_PH_zr8tyl.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108205/CAAS/POSTS/12_1_dmd4lp.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108218/CAAS/POSTS/Post_28_csn3ey.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108203/CAAS/POSTS/Post-1_Hero_Post_ldoer9.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108203/CAAS/POSTS/Post_1_avrkzo.jpg'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108212/CAAS/POSTS/Aug_01_FB_qgl7cw.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108201/CAAS/POSTS/Post-7_Pasta_1_wkqz3w.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108203/CAAS/POSTS/Prioritize_Self-Care_Today_and_Every_Day_IG_bb0drf.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108202/CAAS/POSTS/Post_08_PH_l2y6lc.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108213/CAAS/POSTS/9_qnplcd.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108202/CAAS/POSTS/Oct_Post_5_pntmsj.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108206/CAAS/POSTS/Ig_Post_03_jcwism.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108197/CAAS/POSTS/Post-8_Online_Delivery_gqju90.jpg'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108204/CAAS/POSTS/Post_21_IG_x50ssg.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108205/CAAS/POSTS/6_buhh4c.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108207/CAAS/POSTS/12_avnwvu.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108205/CAAS/POSTS/Post-18_Funday_Friday_farcp9.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108208/CAAS/POSTS/Post09_kk37tj.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108207/CAAS/POSTS/Post_06_PH_jsynpm.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108212/CAAS/POSTS/Aug_01_FB_qgl7cw.png'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108209/CAAS/POSTS/bluesky_daycare_02_rjgzjp.jpg'}/>
              <PostCard src={'/postdemo.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108214/CAAS/POSTS/Post_27_edv3w4.png'}/>
              <PostCard src={'https://res.cloudinary.com/dwwd1oncs/image/upload/f_auto,q_auto/v1728108213/CAAS/POSTS/9_qnplcd.png'}/>
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
