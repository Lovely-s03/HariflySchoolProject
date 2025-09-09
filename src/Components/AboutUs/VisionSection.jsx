import React from "react";
import { IoIosStar } from "react-icons/io";

import vision1 from "../../assets/vision.webp"; 
// import vision2 from "../assets/vision2.jpg";
// import vision3 from "../assets/vision3.jpg";

const VisionSection = () => {
  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-[#fff7ef] to-[#fffdf8]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Vision
          </h2>
          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-start gap-3">
              <IoIosStar className="text-yellow-500 mt-1"/>
              <span>
                To democratize education at scale in India.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <IoIosStar className="text-yellow-500 mt-1"/>
              <span>
                To ensure every child has access to quality education at the most affordable costs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <IoIosStar className="text-yellow-500 mt-1"/>
              <span>
                To allow every child to realize his/her dream, live up to their true potential and be their lifelong learning partner.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side - Hexagon Images */}
        <div className="md:w-1/2 flex justify-center gap-6 flex-wrap">
          <div className="clip-hexagon overflow-hidden ">
            <img src={vision1} alt="Vision 1" className="w-full h-full object-cover" />
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
