import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner from '../../assets/banner.jpg'
import banner1 from '../../assets/banner1.jpg'
// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md "
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md "
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-700" />
  </div>
);

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  
  const slides = [
    banner,
   banner1,
    banner,
  ];

  return (
    <div className="relative w-full  mx-auto  mt-[90px] sm:mt-[90px] md:mt-[160px] lg:mt-[140px] xl:mt-[120px]">
      <Slider {...settings}>
        {slides.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-auto shadow-md object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
