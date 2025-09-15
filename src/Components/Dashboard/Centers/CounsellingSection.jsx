// CounsellingSection.jsx
import React from "react";

const CounsellingSection = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-12 ">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get free counselling sessions
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base max-w-lg">
            PW Vidyapeeth brings Free Guidance sessions with Faculties of PW. 
            Join and get your all queries resolved
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            {/* Item */}
            <div className="flex items-center gap-3">
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-md font-bold">
                ● LIVE
              </span>
              <p className="text-sm text-gray-700">Live session with PW Star Faculty</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-md">
                📘
              </div>
              <p className="text-sm text-gray-700">Get all your queries resolved</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-md">
                💡
              </div>
              <p className="text-sm text-gray-700">Get tips & tricks to crack IIT/NEET</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-md">
                🏫
              </div>
              <p className="text-sm text-gray-700">Learn PW Vidyapeeth offerings</p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition">
            View Webinar
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <div className="bg-white shadow-md rounded-xl overflow-hidden relative">
            {/* Banner Label */}
            <span className="absolute -top-3 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-t-md">
              IIT-JEE/NEET
            </span>

            {/* Webinar Card */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                Tips for NEET 2026
              </h3>
              <img
                src="https://via.placeholder.com/400x180"
                alt="Webinar Banner"
                className="rounded-lg mb-4"
              />
              <div className="flex items-center gap-4 text-gray-600 text-sm">
                <p>📅 16 September 2025</p>
                <p>🕗 08:00 - 09:00 PM</p>
              </div>
              <p className="mt-3 text-gray-600 text-sm">👥 500 Seats</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CounsellingSection;
