
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import top from "../../../assets/testpass.png";
import Testimonials from "./Testimonials";
import FAQSection1 from "./FAQSection1";
import { useNavigate } from "react-router-dom";
const JeeTestPass = () => {
  const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-50 min-h-screen flex justify-center p-0 md:p-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center sm:text-left">
            Arjuna JEE Test Pass
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 border  rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <FaWhatsapp className="text-green-500" />
            Share pass
          </button>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side */}
          <div className="md:col-span-2 space-y-6">
          
            <div className="bg-white rounded-xl border border-gray-50 shadow-md overflow-hidden">
              <div className="p-3 bg-[#000080] text-white">
                <h3 className="font-semibold ">
                  What is Arjuna JEE Test Pass?
                </h3>
              </div>
              <div className="p-4 flex justify-center">
                <img
                  src={top}
                  alt="mentor"
                  className="w-full  rounded-md object-contain"
                />
              </div>
            </div>

            {/* Why Arjuna Pass */}
            <div className="bg-white rounded-xl border border-gray-50 shadow-md overflow-hidden">
              <div className="p-3 bg-[#000080] text-white">
                <h3 className="font-semibold ">
                  Why Arjuna JEE Test Pass?
                </h3>
              </div>
              <div className="p-4 flex justify-center">
                <img
                  src={top}
                  alt="mentor"
                  className="w-full  rounded-md object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-50 shadow-md overflow-hidden">
              <div className="p-3 bg-[#000080] text-white">
                <h3 className="font-semibold ">
                  Benefits of Arjuna JEE Pass
                </h3>
              </div>
              <div className="p-4 flex justify-center">
                <img
                  src={top}
                  alt="mentor"
                  className="w-full  rounded-md object-contain"
                />
              </div>
            </div>

            {/* Video Section */}
            <div className="w-full bg-white rounded-xl border  border-gray-50 shadow-md overflow-hidden">
              <div className="p-3 bg-[#000080] text-white">
                <h3 className="font-semibold ">
                  How this will help you?
                </h3>
              </div>
              <div className="relative w-full aspect-video p-3">
                {!isPlaying ? (
                  <>
                    <img
                      src={top}
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-14 h-14 bg-[#000080] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          className="ml-1 w-6 h-6"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&controls=0&modestbranding=1&rel=0"
                    title="Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                 

                )}
              </div>
            </div>

        
            <div className="bg-white rounded-xl border border-gray-50 shadow-md overflow-hidden">
              <Testimonials />
            </div>
            <div className="bg-white rounded-xl border border-gray-50 shadow-md overflow-hidden">
              <FAQSection1 />
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-gray-50 shadow-md rounded-xl p-4 flex flex-col items-center w-full">
              <h3 className="text-gray-700 font-medium mb-4 text-center">
                Choose Your Plan
              </h3>

              <div className="border rounded-xl p-4 text-center w-full relative">
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xs bg-purple-100 text-[#000080] px-2 py-0.5 rounded">
                  most popular
                </span>
                <p className="font-semibold text-lg">12 Month</p>
                <p className="text-2xl font-bold text-[#000080] mt-1">₹2,500</p>
                <p className="line-through text-gray-400 text-sm">₹5,000</p>
                <p className="text-gray-600 text-sm">208/ Month</p>
                <p className="text-green-600 font-semibold mt-1">50% OFF</p>
              </div>

              <button  onClick={() => navigate("/order-summary")} className="w-full mt-6 bg-[#000080] hover:bg-[#0c0ce8] text-white font-medium py-2 rounded-lg transition cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeeTestPass;
