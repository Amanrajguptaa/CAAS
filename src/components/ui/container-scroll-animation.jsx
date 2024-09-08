"use client";
import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  videoSrc,
  children
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 1] : [1.2, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.3], [0, -200]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}>
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "900px",
        }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} videoSrc={videoSrc}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  videoSrc,
  children
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play(); // Autoplay the video once it loads
    }
  }, [videoSrc]);

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[560px] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
      <div
        className="h-[450px] md:h-[500px] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl ">
        
        {/* Video element replaces canvas for full background */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="h-full w-full object-cover rounded-2xl" // Ensures the video covers the full area
          autoPlay
          loop
          playsInline
        />

        {/* Any children or additional content */}
        {children}
      </div>
    </motion.div>
  );
};
