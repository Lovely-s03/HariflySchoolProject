import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import phone from '../../assets/million student.webp'
const AppPromoSection = () => {
  return (
    // <section className="bg-gradient-to-r from-[#ede9fe] to-[#f5f3ff] pt-6 lg:pt-0 px-6">
      <div className="max-w-6xl py-4 mx-auto rounded-2xl my-8 bg-[#000080]  px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-0 lg:gap-10">
        
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join <span className="text-white">15 Million</span> students on the app today!
          </h2>

          <ul className="space-y-4 text-white">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-white text-lg" />
              Live & recorded classes available at ease
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-white text-lg" />
              Dashboard for progress tracking
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-white text-lg" />
              Lakhs of practice questions
            </li>
          </ul>
          <div className="flex gap-4 mt-8">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={phone}
            alt="App Screenshot"
            className="h-[300px] object-contain relative z-10"
          />
        
        </div>
      </div>
    // </section>
  );
};

export default AppPromoSection;
