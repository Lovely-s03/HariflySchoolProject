import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import book from "../../assets/books.webp";
import ncrt from "../../assets/ncert.webp";
import notes from "../../assets/notes.webp";
import { getstudy_materials } from "../../service/api";

const BASE_URL = "https://pw.harifly.in";

// fallback local resources
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const res = await getstudy_materials();
      const apiData = res.data?.data;

      // ✅ extract subtitle from main_content
      setSubtitle(
        apiData?.main_content?.subtitle ||
          "A diverse array of learning materials to enhance your educational journey."
      );

      // ✅ extract study material cards
      const cards = apiData?.study_material_cards || [];

      const formatted = cards.map((item, idx) => ({
        title: item.name,
        desc: item.sub || "Explore our resources",
        img: item.icon_url ? `${BASE_URL}/${item.icon_url}` : fallbackResources[idx % 3]?.img,
        ytUrl: item.yt_url,
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
      setResources(fallbackResources);
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
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      {/* Loading & Error States */}
      {loading && <p className="text-center text-gray-500">Loading resources...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {resources.map((item, index) => (
          <a
            key={index}
            href={item.ytUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item.bg} rounded-xl p-6 flex flex-col justify-between relative group 
                        transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105`}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>

            {/* Image */}
            <div className="mt-6 flex justify-center">
              <img src={item.img} alt={item.title} className="h-32 object-contain" />
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-6 h-6 text-gray-700" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StudyResources;
