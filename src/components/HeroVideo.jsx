import React from 'react';
import { ContainerScroll } from "./ui/container-scroll-animation";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HeroVideo() {
  return (
    <div className='-mt-48 sm:-mt-60 md:-mt-10 lg:-mt-0'>
        <section className="rounded-[20px] md:rounded-[50px] bg-white relative h-[400px] md:h-[550px]">
          <div className="absolute inset-0 flex flex-col overflow-hidden parent -mt-32 md:-mt-64">
            <ContainerScroll 
              className="-z-10 w-full h-full" 
              titleComponent={
                <>
                </>
              }
              videoSrc="https://res.cloudinary.com/dwwd1oncs/video/upload/v1727631248/CAAS/heroVide_xnll7p.mp4" 
            >
            </ContainerScroll>
          </div>
        </section>
      </div>
  );
}

export default HeroVideo;
