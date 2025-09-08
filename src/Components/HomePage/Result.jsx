import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pw from "../../assets/pw.jpg"
import result from "../../assets/result.webp"

const Result = () => {
    const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200 transition"
  >
    <span className="text-lg font-bold text-gray-700">‹</span>
  </button>
);
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200 transition"
  >
    <span className="text-lg font-bold text-gray-700">›</span>
  </button>
);
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
     prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const tabs = [
    "UPSC CSE",
    "GATE",
    "Board Exams - CBSE 10th",
    "Board Exams - ICSE 10th",
    "Board Exams - CBSE 12th",
    "CA",
    "MBA",
    "SSC",
    "IIT JAM",
    "Banking",
  ];
  const images = [
    pw, 
    result,
    pw,
  ];

  return (
   <section className="py-10 bg-white relative">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Academic Excellence : Results
        </h2>
        <p className="text-gray-600 mt-2">
          Giving wings to a millions dreams, a million more to go
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm bg-gray-100 hover:bg-[#000080] hover:text-white transition"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-4 relative">
        <Slider {...sliderSettings}>
          {images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={`Result ${idx}`}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Result;
