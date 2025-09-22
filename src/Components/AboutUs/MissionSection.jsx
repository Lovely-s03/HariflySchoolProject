import React from "react";
import { FaHandsHelping, FaGlobeAmericas, FaBuilding } from "react-icons/fa";

const missions = [
  {
    icon: <FaHandsHelping className="text-3xl text-pink-600" />,
    title: "Innovation First",
    text: "Driving creativity and technology to build smarter digital solutions.",
    circleBg: "bg-pink-100",
  },
  {
    icon: <FaGlobeAmericas className="text-3xl text-blue-600" />,
    title: "Customer-Centric",
    text: "Putting people at the heart of everything we design and deliver.",
    circleBg: "bg-blue-100",
  },
  {
    icon: <FaBuilding className="text-3xl text-teal-600" />,
    title: "Excellence in Execution",
    text: "Committed to quality, precision, and delivering beyond expectations.",
    circleBg: "bg-teal-100",
  },
];

const MissionSection = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-[#000080] text-3xl md:text-4xl font-bold mb-14">
          Our Mission
        </h2>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-xl shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Black accent borders - all 4 sides */}
              {/* Top */}
              <div className="absolute top-0 left-0 h-[3px] w-2/3 bg-black opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Left */}
              <div className="absolute top-0 left-0 w-[3px] h-2/3 bg-black opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Bottom */}
              <div className="absolute right-0 bottom-0 h-[3px] w-2/3 bg-black opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Right */}
              <div className="absolute right-0 bottom-0 w-[3px] h-2/3 bg-black opacity-40 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${item.circleBg} mb-6 transition-transform duration-500 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-black transition-colors">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
