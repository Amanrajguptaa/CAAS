import React from "react";
import "./Carousel.css";

const testimonials = [
  {
    text: "The team exceeded my expectations with their creative designs! They perfectly captured my brand's essence...",
    name: "Coffea",
  },
  {
    text: "Their graphic design services are top-notch! From concept to execution, they delivered captivating designs...",
    name: "Priya K",
  },
  {
    text: "Thanks to their expert social media marketing, our engagement skyrocketed! Significant boost in followers...",
    name: "Travel Today",
  },
  {
    text: "Their social media marketing services have been a game-changer for our brand...",
    name: "Vikram D",
  },
  {
    text: "I’m impressed by how well they manage our social media platforms. Engaging content and active community...",
    name: "Smile Hospital",
  },
  {
    text: "Their social media management is seamless! We can focus on running the business...",
    name: "Rajiv T",
  },
  {
    text: "Their digital marketing strategy has driven incredible growth for our business...",
    name: "Rana Hospital",
  },
  {
    text: "They transformed our online visibility with their digital marketing expertise...",
    name: "Amit P",
  },
  {
    text: "Their social media designs are eye-catching and aligned with our brand identity...",
    name: "Blacksoft Solution",
  },
  {
    text: "The social media designs they created for us are simply fantastic!",
    name: "Karan J",
  },
];

export default function Carousel() {
  return (
    <div
      className="pb-12 md:pb-20 overflow-hidden relative"
     
    >
      <div className="carousel-track flex animate-carousel gap-5">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="relative min-w-[200px] sm:min-w-[300px] border border-black rounded-lg shadow overflow-hidden bg-white text-black py-5 md:py-10"
          >
            <img
              src="/cardFrame.png"
              alt="card_frame"
              className="w-[90%] pointer-events-none select-none mx-auto"
            />

            <div className="absolute top-10 md:top-14 md:left-8 md:right-6 lg:top-16 left-5 lg:left-10 lg:right-10 text-xs sm:text-sm md:text-base overflow-y-auto lg:overflow-y-hidden">
              {item.text}
            </div>

            <div className="flex items-center justify-start gap-2 bg-[#a7ff00] border-2 border-black rounded-full px-3 py-1 mt-6 w-[80%] mx-auto">
              <div className="bg-white border-2 border-black rounded-full p-1">
                <img src="/star.png" alt="star" className="h-4 w-4" />
              </div>
              <span className="text-xs sm:text-sm">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
