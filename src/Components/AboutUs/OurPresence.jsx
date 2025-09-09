import React from "react";
import IndiaMap from "../../assets/IndiaMap.png"; 

export default function OurPresence() {
  return (
    <section className="bg-gradient-to-r from-[#fff8f0] to-[#fffaf5] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Presence
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            Our footprint extends across more than 100 cities, with a widespread
            network of over 120 Vidyapeeth centers spanning the entire country.
          </p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#fceabb] to-[#f8d683] px-6 py-3 rounded-full shadow-sm text-lg font-semibold text-gray-800">
              100+ Cities
            </div>
            <div className="bg-gradient-to-r from-[#fceabb] to-[#f8d683] px-6 py-3 rounded-full shadow-sm text-lg font-semibold text-gray-800">
              120+ Centers
            </div>
            <div className="bg-gradient-to-r from-[#fceabb] to-[#f8d683] px-6 py-3 rounded-full shadow-sm text-lg font-semibold text-gray-800">
              28 Exam Categories
            </div>
          </div>
        </div>

      
        <div className="relative">
          <img
            src={IndiaMap}
            alt="India Map"
            className="w-full max-w-lg mx-auto"
          />

          {/* Legend */}
          <div className="absolute right-0 bottom-0 bg-white/90 shadow-md rounded-lg p-4 text-sm">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#e8501e] rounded-sm"></span>
                20+ Centres
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#f37335] rounded-sm"></span>
                10-20 Centres
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#f6a54d] rounded-sm"></span>
                5-10 Centres
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#fbc02d] rounded-sm"></span>
                3-4 Centres
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#ffd59e] rounded-sm"></span>
                1-2 Centres
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#a3cfff] rounded-sm"></span>
                Opening Soon
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-300 rounded-sm"></span>
                0 Centres
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
