import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const channels = [
  {
    title: "Physics Wallah",
    subs: "11.5M Subscribers",
    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    bg: "bg-gradient-to-r from-gray-200 to-gray-300",
  },
  {
    title: "Competition Wallah",
    subs: "2.71M Subscribers",
    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-200",
  },
  {
    title: "JEE Wallah",
    subs: "1.69M Subscribers",
    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-200",
  },
  {
    title: "NEET Wallah",
    subs: "1.2M Subscribers",
    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    bg: "bg-gradient-to-r from-pink-100 to-pink-200",
  },
];

const PWFamily = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, 
    speed: 4000, 
    cssEase: "linear", 
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Join The PW Family, Today!</h2>
          <p className="text-gray-600 mt-2">
            Explore our 130+ YouTube Channels and subscribe to get access to
            quality education for free.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {channels.map((ch, i) => (
            <div key={i} className="px-3">
              <div
                className={`${ch.bg} rounded-lg p-6 flex flex-col items-center justify-center 
                           shadow-sm transition-transform duration-300 transform hover:scale-105`}
              >
                <img src={ch.img} alt={ch.title} className="w-14 h-14 mb-4" />
                <h3 className="text-lg font-semibold">{ch.title}</h3>
                <p className="text-gray-700 mt-1 font-medium">{ch.subs}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-[#000080] hover:bg-[#1e0eac] text-white font-semibold px-16 py-3 rounded-lg transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWFamily;
