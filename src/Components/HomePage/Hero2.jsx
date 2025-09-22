import React, { useEffect, useState } from "react";
import { gettrusted_sections } from "../../service/api";

// Helper to convert relative to absolute URLs (update with your actual base URL)
const getImgUrl = (relativePath) => {
  if (!relativePath) return "";
  const BASE_URL = "https://pw.harifly.in";
  if (relativePath.startsWith("http")) return relativePath;
  return BASE_URL + (relativePath.startsWith("/") ? relativePath : "/" + relativePath);
};


export default function Hero2() {
  const [section, setSection] = useState(null);

  useEffect(() => {
    const fetchTrustedSection = async () => {
      try {
        const response = await gettrusted_sections();
        const data = response.data;
        if (data?.status && data?.data?.length > 0) {
          setSection(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching trusted section:", error);
      }
    };

    fetchTrustedSection();
  }, []);

  if (!section) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-r from-[#f5f7ff] to-[#f9fbff] pb-[510px] sm:pb-[270px] lg:pb-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-12">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-snug">
              {section.heading}
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              {section.subheading1} <br />
              {section.subheading2}
            </p>
            <button className="mt-6 px-20 py-3 bg-[#000080] hover:bg-[#010115] text-white font-semibold rounded-lg shadow-md transition">
              {section.button_text}
            </button>
          </div>

          {/* Right Content */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-end items-center gap-10 relative">
            {/* Teacher */}
            <div className="relative flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-purple-200">
                <img
                  src={getImgUrl(section.image1)}
                  alt="Teacher"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full"
                />
              </div>
              <div className="mt-3 lg:mt-0 lg:absolute lg:-bottom-10 lg:-left-4 bg-[#000080] text-white px-4 py-2 rounded-lg shadow-md text-xs sm:text-sm w-52 sm:w-60 text-center lg:text-left">
                {section.description1}
              </div>
            </div>

            {/* Student */}
            <div className="relative flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-purple-200">
                <img
                  src={getImgUrl(section.image2)}
                  alt="Student"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full"
                />
              </div>
              <div className="mt-3 lg:mt-0 lg:absolute lg:-top-6 lg:-right-4 bg-white border px-3 py-1 rounded-full shadow text-xs sm:text-sm text-center lg:text-left">
                {section.description2}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 w-full max-w-6xl px-6">
        <div className="bg-white shadow-lg rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Icon 1 */}
          <div className="flex flex-col items-center justify-center p-6 text-center relative sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:right-0 sm:after:translate-y-[-50%] sm:after:w-px sm:after:h-12 sm:after:bg-gray-500">
            <img src={getImgUrl(section.icon1)} alt="icon1" className="mb-2 w-10 h-10" />
            <h3 className="font-bold">{section.icon1_title}</h3>
            <p className="text-gray-500 text-sm">{section.icon1_subtitle}</p>
          </div>
          {/* Icon 2 */}
          <div className="flex flex-col items-center justify-center p-6 text-center relative sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:right-0 sm:after:translate-y-[-50%] sm:after:w-px sm:after:h-12 sm:after:bg-gray-500">
            <img src={getImgUrl(section.icon2)} alt="icon2" className="mb-2 w-10 h-10" />
            <h3 className="font-bold">{section.icon2_title}</h3>
            <p className="text-gray-500 text-sm">{section.icon2_subtitle}</p>
          </div>
          {/* Icon 3 */}
          <div className="flex flex-col items-center justify-center p-6 text-center relative sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:right-0 sm:after:translate-y-[-50%] sm:after:w-px sm:after:h-12 sm:after:bg-gray-500">
            <img src={getImgUrl(section.icon3)} alt="icon3" className="mb-2 w-10 h-10" />
            <h3 className="font-bold">{section.icon3_title}</h3>
            <p className="text-gray-500 text-sm">{section.icon3_subtitle}</p>
          </div>
          {/* Icon 4 */}
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <img src={getImgUrl(section.icon4)} alt="icon4" className="mb-2 w-10 h-10" />
            <h3 className="font-bold">{section.icon4_title}</h3>
            <p className="text-gray-500 text-sm">{section.icon4_subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
