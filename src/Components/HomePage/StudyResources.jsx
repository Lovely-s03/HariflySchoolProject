import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import book from "../../assets/books.webp";
import ncrt from "../../assets/ncert.webp";
import notes from "../../assets/notes.webp";
import { getstudy_materials } from "../../service/api";

const BASE_URL = "https://pw.harifly.in"; // ✅ fixed base url

// fallback local resources (in case API fails)
const fallbackResources = [
  {
    title: "Reference Books",
    desc: "Our experts have created thorough study materials that break down complicated concepts into easily understandable content",
    img: book,
    bg: "bg-blue-50 hover:bg-blue-100",
  },
  {
    title: "NCERT Solutions",
    desc: "Unlock academic excellence with Physics Wallah’s NCERT Solutions which provides you step-by-step solutions",
    img: ncrt,
    bg: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    title: "Notes",
    desc: "Use Physics Wallah’s detailed study materials that simplify complex ideas into easily understandable language",
    img: notes,
    bg: "bg-green-50 hover:bg-green-100",
  },
];

const StudyResources = () => {
  const [resources, setResources] = useState([]);
  const [subtitle, setSubtitle] = useState("");
  const [playstoreIcon, setPlaystoreIcon] = useState(null);
  const [appstoreIcon, setAppstoreIcon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
    const fetchResources = async () => {
      try {
        setLoading(true);
        const res = await getstudy_materials();
        const apiData = res.data;

        // extract main details
        setSubtitle(apiData?.data?.subtitle || "A diverse array of learning materials to enhance your educational journey.");
        setPlaystoreIcon(apiData?.data?.playstore_icon ? `${BASE_URL}/${apiData.data.playstore_icon}` : null);
        setAppstoreIcon(apiData?.data?.appstore_icon ? `${BASE_URL}/${apiData.data.appstore_icon}` : null);

        // result cards
        const cards = apiData?.result_cards || [];

        const formatted = cards.map((item, idx) => ({
          title: item.name,
          desc: apiData.data?.subtitle || "Explore our resources",
          img: item.image ? `${BASE_URL}/${item.image}` : fallbackResources[idx]?.img,
          bg:
            idx === 0
              ? "bg-blue-50 hover:bg-blue-100"
              : idx === 1
              ? "bg-yellow-50 hover:bg-yellow-100"
              : "bg-green-50 hover:bg-green-100",
        }));

        setResources(formatted.length > 0 ? formatted : fallbackResources);
      } catch (err) {
        console.error("Error fetching resources:", err);
        setError("Failed to load study resources.");
        setResources(fallbackResources); // fallback
      } finally {
        setLoading(false);
      }
    };
useEffect(() => {
    fetchResources();
  }, []);

  return (
    <div className="bg-white py-5 lg:py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Study Resources</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Loading & Error States */}
      {loading && <p className="text-center text-gray-500">Loading resources...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {resources.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-xl p-6 flex flex-col justify-between relative group 
                        transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105`}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Image */}
            <div className="mt-6 flex justify-center">
              <img src={item.img} alt={item.title} className="h-32 object-contain" />
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Playstore & Appstore icons */}
      {(playstoreIcon || appstoreIcon) && (
        <div className="flex justify-center gap-6 mt-10">
          {playstoreIcon && (
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={playstoreIcon} alt="Play Store" className="h-12 object-contain" />
            </a>
          )}
          {appstoreIcon && (
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appstoreIcon} alt="App Store" className="h-12 object-contain" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default StudyResources;
