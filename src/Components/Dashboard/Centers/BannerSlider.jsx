import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../../assets/banner1.jpg";

import banner3 from "../../../assets/banner.jpg";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const banners = [banner1, banner3];

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Slider {...settings}>
        {banners.map((img, index) => (
          <div key={index} >
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto shadow-md object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
