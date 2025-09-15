import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getresults_n_app_store } from "../../service/api";

const BASE_URL = "https://pw.harifly.in"; // ✅ fixed base URL

const PWFamily = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  
    const fetchChannels = async () => {
      try {
        setLoading(true);
        const res = await getresults_n_app_store();
        const apiCards = res.data?.result_cards || [];

        const formatted = apiCards.map((card, i) => ({
          id: card.id,
          title: card.name,
          subs: "Subscribe Now", // API doesn’t provide subscribers → static text
          img: card.image ? `${BASE_URL}/${card.image}` : "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
          bg:
            i % 3 === 0
              ? "bg-gradient-to-r from-gray-200 to-gray-300"
              : i % 3 === 1
              ? "bg-gradient-to-r from-yellow-100 to-yellow-200"
              : "bg-gradient-to-r from-pink-100 to-pink-200",
        }));

        setChannels(formatted);
      } catch (err) {
        console.error("Error fetching channels:", err);
        setError("Failed to load PW Family channels.");
      } finally {
        setLoading(false);
      }
    };
useEffect(() => {
    fetchChannels();
  }, []);

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

        {/* Loading & Error */}
        {loading && <p className="text-center text-gray-500">Loading channels...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Slider */}
        {!loading && !error && (
          <Slider {...settings}>
            {channels.map((ch) => (
              <div key={ch.id} className="px-3">
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
        )}

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
