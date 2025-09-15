import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Himanshu",
    rank: "AIR-707, JA 2024",
    feedback:
      "PW Test Series mere liye bahut helpful rahi! Detailed test analysis ne meri preparation ko aur strong banaya. Thanks PW!",
    stars: 5,
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Anurag",
    rank: "AIR-955, JA 2024",
    feedback:
      "PW test series was the perfect benchmark. My actual exam performance closely matched my performance in the PW test series.",
    stars: 5,
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Yug",
    rank: "AIR-1200, JA 2024",
    feedback:
      "PW ke tests se meri preparation aur focused ho gayi aur mujhe real exam jaisa experience mila.",
    stars: 5,
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Neha",
    rank: "AIR-1500, JA 2024",
    feedback:
      "PW ke test pass ne mujhe real exam ka confidence diya. Analysis report bahut detailed thi.",
    stars: 5,
    img: "https://via.placeholder.com/100",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
  >
    <FaChevronRight className="text-gray-700 text-lg" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
  >
    <FaChevronLeft className="text-gray-700 text-lg" />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, 
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-12 px-4 relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8">
        Why students would love the Test Pass?
      </h2>

      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow"
              />
              <h3 className="font-semibold text-lg">
                {t.name}[{t.rank}]
              </h3>
              <div className="flex justify-center my-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{t.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
