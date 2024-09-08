import React from 'react';
import { ContainerScroll } from "./ui/container-scroll-animation";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HeroVideo() {
  return (
    <div className='w-full z-50'>
      <div className="py-5 text-white">
        <section className="mx-3 md:mx-10 -mt-32 sm:-mt-32 md:-mt-24 rounded-[20px] md:rounded-[50px] bg-white relative h-[400px] md:h-[550px] z-10">
          <div className="absolute inset-0 flex flex-col overflow-hidden parent -mt-32 md:-mt-64">
            <ContainerScroll 
              className="-z-10 w-full h-full" // Make the container full width and height
              titleComponent={
                <>
                  {/* Add any title or content here */}
                </>
              }
              videoSrc="/heroVideo.mp4" // Pass the video source here
            >
              {/* <video
                src="/video.mp4"
                autoPlay
                muted
                loop
                className="t" // Ensures the video covers the full space
                draggable={false}
              /> */}
              {/* Any additional content */}
            </ContainerScroll>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroVideo;
