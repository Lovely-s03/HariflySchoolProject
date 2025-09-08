import React, { useState } from "react";
import team from '../../assets/teamImage.png'
import Slider from "react-slick";
const testimonials = [
  {
    text: "I used to regularly follow the youtube videos, prelims booster videos and specially editorial discussion from where I made important pointers. I also watched some history videos like Buddhism, Jainism as the topics were explained very clearly... all these were very",
    name: "Anmol Rathore",
    course: "UPSC CSE 2023 AIR 7",
    tag: "UPSC",
    img: "https://i.pravatar.cc/50?img=1",
  },
  {
    text: "From the very beginning, Physics Wallah stood out for its structured and comprehensive curriculum. The faculty members, with their in-depth knowledge and teaching expertise, ensured that every concept was crystal clear. GATE Wallah not only provided academic support but also fostered a positive and encouraging environment.",
    name: "Raja Majhi",
    course: "GATE 2024 AIR 1",
    tag: "GATE",
    img: "https://i.pravatar.cc/50?img=2",
  },
  {
    text: "PW helped me in establishing the basics of every subject through which I was able to progress quickly and was also able to increase my speed and also maintaining accuracy.",
    name: "Amit Kumar Mandal",
    course: "IBPS Topper",
    tag: "Banking",
    img: "https://i.pravatar.cc/50?img=3",
  },
  {
    text: "The guidance and structured learning from PW was extremely helpful in my preparation journey. The mentors made complex concepts very easy to understand and I was motivated throughout.",
    name: "Sneha Sharma",
    course: "NEET AIR 56",
    tag: "NEET",
    img: "https://i.pravatar.cc/50?img=4",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-2 cursor-pointer z-10"
    onClick={onClick}
  >
    <span className="text-xl">›</span>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-2 cursor-pointer z-10"
    onClick={onClick}
  >
    <span className="text-xl">‹</span>
  </div>
);

const TestimonialSection = () => {
      const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
     
         {
      breakpoint: 1280, // below xl
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // below md
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    ]
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-gray-50 py-10 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Students <span className="text-red-500">❤️</span> Physics Wallah
        </h2>
        <p className="text-gray-600 mt-2">Hear from our students</p>
      </div>

      
      <div className="max-w-6xl bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6 p-6 max-w-5xl mx-auto">
      
        <div
          className="relative cursor-pointer w-full md:w-1/3"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={team}
            alt="NEET AIR 1"
            className="rounded-lg w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-purple-600 p-4 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z" />
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right - Text */}
        <div className="md:w-2/3">
          <p className="text-gray-700 italic mb-4 overflow-y-scroll">
            “My name is Tathagat Awatar. I secured All India Rank 1 by scoring
            full score in NEET UG 2024. I started my preparation with Physics
            Wallah in 12th grade by joining the Lakshya NEET batch, then I took
            2 drop by joining Yakeen NEET batch and I completed my full
            preparation from online PW batch. PW teachers and their guidance
            helps me to achieve AIR1 and motivated me during my drop year....”
          </p>
          <h4 className="font-bold text-gray-900">Multiple Rankers</h4>
          <p className="text-[#000080] font-medium mt-1">
            AIR 1, AIR 86 and other | NEET
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-[90%] md:w-[60%]">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/1xB4tXkK3ew"
                title="NEET AIR 1 Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              className="w-full py-3 bg-red-600 text-white font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
       <div className="bg-gray-50 py-10 px-6 md:px-32 relative flex flex-col">
     

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-3 ">
            <div className="bg-white shadow-md rounded-lg  p-6 h-full md:h-[300px] flex flex-col overflow-y-scroll">
              <p className="text-gray-700 italic mb-4">“{item.text}”</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-[#000080] font-medium text-sm">
                    {item.course} | {item.tag}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default TestimonialSection;
