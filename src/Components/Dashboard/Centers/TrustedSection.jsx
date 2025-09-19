import React, { useEffect, useState } from "react";
import { gettrusted_sections } from "../../../service/api";
import banner from '../../../assets/banner.jpg'

export default function TrustedSection() {
  const [stats, setStats] = useState([]);
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    const BASE_URL = "https://pw.harifly.in/"; 

 
    const fetchTrusted = async () => {
      try {
        const res = await gettrusted_sections();
        const data = res.data?.data?.[0]; 

        if (data) {
          setSection(data);

          setStats([
            {
              number: data.icon1_title,
              label: data.icon1_subtitle,
              bg: "bg-orange-100",
              img: BASE_URL + data.icon1,
            },
            {
              number: data.icon2_title,
              label: data.icon2_subtitle,
              bg: "bg-pink-100",
              img: BASE_URL + data.icon2,
            },
            {
              number: data.icon3_title,
              label: data.icon3_subtitle,
              bg: "bg-blue-100",
              img: BASE_URL + data.icon3,
            },
            {
              number: data.icon4_title,
              label: data.icon4_subtitle,
              bg: "bg-purple-100",
              img: BASE_URL + data.icon4,
            },
          ]);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load trusted section");
      } finally {
        setLoading(false);
      }
    };
 useEffect(() => {
    fetchTrusted();
  }, []);

  if (loading) return <p className="text-center py-10">Loading trusted section...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!section) return null;

  return (
    <section className="max-w-6xl m-auto text-center py-12 px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{section.heading}</h2>
      <p className="text-gray-600 mb-8">{section.subheading1} {section.subheading2}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} relative rounded-xl p-6 h-56 flex flex-col justify-center items-center overflow-hidden group`}
          >
            <div className="transition-all duration-500 group-hover:-translate-y-4">
              <h3 className="text-xl md:text-4xl font-bold">{item.number}</h3>
              <p className="text-gray-700">{item.label}</p>
            </div>
            <img
              src={item.img}
              alt={item.label}
              className="absolute bottom-[-100%] w-16 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}
      </div>
      <div className="pt-12">
        <img src={banner} alt="" />
      </div>
    </section>
  );
}
