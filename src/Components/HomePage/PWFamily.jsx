import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getstudy_materials } from "../../service/api";


const BASE_URL = "https://pw.harifly.in"; 

const PWFamily = () => {
  const [channels, setChannels] = useState([]);
  const [ctaTitle, setCtaTitle] = useState("Join The PW Family, Today!");
  const [ctaSubtitle, setCtaSubtitle] = useState(
    "Explore our 130+ YouTube Channels and subscribe to get access to quality education for free."
  );
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
      const res = await getstudy_materials();
      const apiData = res.data?.data;
 console.log("PW Family API Data:", apiData); // ✅ debug log
      // ✅ set CTA title & subtitle
      setCtaTitle(apiData?.main_content?.cta_title || ctaTitle);
      setCtaSubtitle(apiData?.main_content?.cta_subtitle || ctaSubtitle);

      // ✅ use social_cards from API
      const apiCards = apiData?.social_cards || [];

      if (!apiCards.length) {
        console.warn("⚠️ No social_cards found in API response");
      }

      const formatted = apiCards.map((card, i) => ({
        id: card.id,
        title: card.name,
        subs: card.sub || "Subscribe Now",
        img: card.icon_url
          ? `${BASE_URL}/${card.icon_url}` // ✅ full path
          : "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        link: card.yt_url || "#",
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
          <h2 className="text-3xl font-bold">{ctaTitle}</h2>
          <p className="text-gray-600 mt-2">{ctaSubtitle}</p>
        </div>

        {/* Loading & Error */}
        {loading && (
          <p className="text-center text-gray-500">Loading channels...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Slider */}
        {!loading && !error && channels.length > 0 && (
          <div className="w-full">
            {" "}
            {/* ✅ important wrapper */}
            <Slider {...settings}>
              {channels.map((ch) => (
                <div key={ch.id} className="px-3">
                  <a
                    href={ch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div
                      className={`${ch.bg} rounded-lg p-6 flex flex-col items-center justify-center 
                               shadow-sm transition-transform duration-300 transform hover:scale-105 h-48`}
                    >
                      <img
                        src={ch.img}
                        alt={ch.title}
                        className="w-14 h-14 mb-4 object-contain"
                      />
                      <h3 className="text-lg font-semibold text-center">
                        {ch.title}
                      </h3>
                      <p className="text-gray-700 mt-1 font-medium">
                        {ch.subs}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Fallback if no channels */}
        {!loading && !error && channels.length === 0 && (
          <p className="text-center text-gray-500">
            No channels available right now.
          </p>
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
