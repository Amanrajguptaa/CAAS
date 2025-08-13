import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
};

const TitleStrip = ({ top }) => (
  <div
    className={`absolute ${top} bg-[#a7ff00] text-black py-5 flex items-center justify-center border-[2px] border-black w-full overflow-hidden`}
  >
    {Array(3)
      .fill("Websites")
      .map((text, i) => (
        <span
          key={i}
          className="text-black font-brasika text-xs sm:text-3xl md:text-6xl mr-8 md:mr-20"
        >
          {text}
        </span>
      ))}
  </div>
);

const websites = [
  { url: "https://www.smilehospital.in", title: "Smile Hospital" },
  { url: "https://www.kidfortchildcare.ca", title: "Kid Fort" },
  { url: "https://www.happyfacessherwoodpark.ca", title: "Happy faces" },
  { url: "https://scribesavvy.com/elementor-11", title: "scribesavvy" },
  { url: "https://skipper-ui-portfolio.vercel.app", title: "Portfolio" },
  { url: "https://theseeddaycare.ca", title: "Seed Day" },
  { url: "https://orionplastics.com", title: "Orion" },
];

function Website() {
  return (
    <div className="py-10 lg:pt-12 md:pb-40 relative">
      <div className="flex flex-col items-center justify-start text-center w-full px-10 mt-32">
        {/* Title strips */}
        <TitleStrip top="top-[14%] md:top-[10%]" />
        <TitleStrip top="top-[42%] md:top-[52%]" />
        <TitleStrip top="top-[89%] md:top-[80%]" />

        {/* Slider container */}
        <div className="relative -mt-12 md:-mt-0 rounded-[10px] w-[320px] md:w-full h-[300px] md:h-[500px] bg-white flex justify-center items-center shadow-lg">
          <Slider
            {...sliderSettings}
            className="w-full h-full flex justify-center items-center"
          >
            {websites.map((site, index) => (
              <div
                key={index}
                className="w-[280px] md:w-full h-[270px] md:h-[470px] flex justify-center items-center"
              >
                <iframe
                  className="w-full h-full border-none"
                  src={site.url}
                  title={site.title}
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Website;
