import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card.jsx";

function PostCarousel() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2, // Show 2 cards on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-auto mx-10 gap-24">
      <Slider {...settings}>
        <Card src={'https://res.cloudinary.com/dwwd1oncs/video/upload/f_auto,q_auto/v1727631244/CAAS/carousel1_qrbt6h.webm'}/>
        <Card src={'https://res.cloudinary.com/dwwd1oncs/video/upload/f_auto,q_auto/v1727631245/CAAS/carousel2_m1uj8u.webm'}/>
        <Card src={'https://res.cloudinary.com/dwwd1oncs/video/upload/f_auto,q_auto/v1727631246/CAAS/carousel3_ile0xd.webm'}/>
        <Card src={'https://res.cloudinary.com/dwwd1oncs/video/upload/f_auto,q_auto/v1727631246/CAAS/carousel4_ydisdq.webm'} />
        <Card src={'https://res.cloudinary.com/dwwd1oncs/video/upload/f_auto,q_auto/v1727631245/CAAS/carousel5_qqujfw.webm'}/>
      </Slider>
    </div>
  );
}

export default PostCarousel;
