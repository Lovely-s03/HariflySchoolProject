// BannerSection.jsx
import React from "react";
import yakeen from '../../../assets/yakeen.png'

const BannerSection = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-2 pb-3">
        <div className="flex items-center w-full relative">
          <input
            type="text"
            placeholder='Search for "neet"...'
            className="border border-gray-50 rounded-lg pl-10 pr-4 py-2 w-full bg-[#e9e5f7] focus:outline-none"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="18"
            height="18"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>

        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium">
          Study
        </button>
      </div>

      <div className="">
       <img src={yakeen} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
