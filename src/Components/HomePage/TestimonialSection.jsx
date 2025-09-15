import React, { useEffect, useState } from "react";
import team from "../../assets/teamImage.png";
import Slider from "react-slick";
import { gettestimonials } from "../../service/api";

const BASE_URL = "https://pw.harifly.in";

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
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const res = await gettestimonials();

        const apiData = res.data?.data || {};
        const apiTestimonials = apiData.testimonial_cards || [];

        // Save video from main_content
        setVideoUrl(apiData.main_content?.video || null);

        // Format testimonials
        const formatted = apiTestimonials.map((item) => ({
          id: item.id,
          text: item.testimonial_text || "",
          name: item.name || "Anonymous",
          course: item.rank || "",
          img: item.avatar_url
            ? `${BASE_URL}/${item.avatar_url}`
            : "https://i.pravatar.cc/50",
        }));

        setTestimonials(formatted);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };
useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Students <span className="text-red-500">❤️</span> Physics Wallah
        </h2>
        <p className="text-gray-600 mt-2">Hear from our students</p>
      </div>

      {/* Main Video + Highlight */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6 p-6 mx-auto">
        <div
          className="relative cursor-pointer w-full md:w-1/3"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={team}
            alt="Highlight Video"
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

        {/* Right - Static Highlight */}
        <div className="md:w-2/3">
          <p className="text-gray-700 italic mb-4 overflow-y-scroll">
            “My name is Tathagat Awatar. I secured All India Rank 1 by scoring
            full score in NEET UG 2024. I started my preparation with Physics
            Wallah in 12th grade by joining the Lakshya NEET batch, then I took
            2 drop by joining Yakeen NEET batch and I completed my full
            preparation from online Glare batch. Glare teachers and their
            guidance helped me achieve AIR1 and motivated me during my drop
            year....”
          </p>
          <h4 className="font-bold text-gray-900">Multiple Rankers</h4>
          <p className="text-[#000080] font-medium mt-1">
            AIR 1, AIR 86 and others | NEET
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-[90%] md:w-[60%]">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl.replace("shorts/", "embed/")}
                title="Testimonial Video"
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

      {/* Testimonials Carousel */}
      <div className="bg-gray-50 py-10 px-6 md:px-32 relative flex flex-col">
        {loading && <p className="text-center text-gray-500">Loading testimonials...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && testimonials.length > 0 && (
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-3 ">
                <div className="bg-white shadow-md rounded-lg p-6 h-full md:h-[300px] flex flex-col overflow-y-scroll">
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
                        {item.course}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
