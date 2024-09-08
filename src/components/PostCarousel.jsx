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
        <Card index={1}/>
        <Card index={2}/>
        <Card index={3}/>
        <Card index={4} />
        <Card index={5}/>
        <Card index={6}/>
        
      </Slider>
    </div>
  );
}

export default PostCarousel;
