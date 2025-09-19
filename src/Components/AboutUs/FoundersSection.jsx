import React from "react";
import quote from "../../assets/quotes.webp";

const BASE_URL = "https://pw.harifly.in"; // fixed base URL

export default function FoundersSection({ data }) {
  if (!data) return null; // Handle loading or null gracefully

  // Helper to decode HTML entities in founder descriptions
  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  const doubleDecode = (html) => decodeHtml(decodeHtml(html));

  // Construct founder image URL or fallback
  const founderImageUrl = data?.image1
    ? `${BASE_URL}/${data.image1}`
    : "/path/to/default-founder-image.jpg";

  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading with HTML */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-7"
dangerouslySetInnerHTML={{ __html: decodeHtml(data.founder_title) }}        ></h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl px-6 py-6 gap-8">
          {/* Founder Image */}
          <div className="flex-shrink-0">
            <img
              src={founderImageUrl}
              alt={data.name || "Founder"}
              className="w-64 md:w-80 rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Founder Text Info */}
          <div className="flex-1 text-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#000080]">
                  {data.name}
                </h3>
                <p className="text-gray-800 mb-3 mt-2 font-normal">
                  {data.designation}
                </p>
              </div>
              <img src={quote} alt="Quote Icon" />
            </div>
            <hr className="mb-3 text-gray-400" />
            <p className="mb-3 font-normal text-[18px] text-gray-600"
              dangerouslySetInnerHTML={{ __html: decodeHtml(data.founder_description1) }}
              >
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
