import React from "react";
import { IoIosStar } from "react-icons/io";

const BASE_URL = "https://pw.harifly.in"; // Your fixed base URL

const VisionSection = ({ data }) => {
  if (!data) return null; // Handle loading state

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-[#fff7ef] to-[#fffdf8]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-6">
            {data.vision || "Our Visiodfsdf"}
          </h2>
          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-center gap-3">
              <IoIosStar className="text-[#4CBB17]" size={24} />
              <span>{data.point3}</span>
            </li>
            <li className="flex items-center gap-3">
              <IoIosStar className="text-[#4CBB17]" size={24} />
              <span>{data.point2}</span>
            </li>
            <li className="flex items-center gap-3">
              <IoIosStar className="text-[#4CBB17]" size={24} />
              <span>{data.point1}</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center gap-6 flex-wrap">
          {/* Example: showing image1 from API */}
          {data.image1 && (
            <div className="clip-hexagon overflow-hidden">
              <img
                src={`${BASE_URL}/${data.image1}`}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {data.image2 && (
            <div className="clip-hexagon overflow-hidden">
              <img
                src={`${BASE_URL}/${data.image2}`}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {data.image3 && (
            <div className="clip-hexagon overflow-hidden">
              <img
                src={`${BASE_URL}/${data.image3}`}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {/* Add more images as needed */}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
