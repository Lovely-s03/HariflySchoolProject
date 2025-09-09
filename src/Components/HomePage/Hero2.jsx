import React from "react";
import pandey from "../../assets/pandey.jpeg";
import phone from "../../assets/books.webp";

export default function Hero2() {
  return (
    <section className="relative bg-gradient-to-r from-[#f5f7ff] to-[#f9fbff]  pb-[510px] sm:pb-[270px]  lg:pb-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-12">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-snug">
              Bharat’s{" "}
              <span className="text-[#000080]">Trusted &</span>{" "}
              <span className="text-[#000080]">Affordable</span>{" "}
              <span className="text-black">Educational Platform</span>
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              Unlock your potential by signing up with Physics Wallah - <br />
              The most affordable learning solution
            </p>
            <button className="mt-6 px-20 py-3 bg-[#000080] hover:bg-[#010115] text-white font-semibold rounded-lg shadow-md transition">
              Get Started
            </button>
          </div>

          {/* Right Content */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-end items-center gap-10 relative">
            {/* Teacher */}
            <div className="relative flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-purple-200">
                <img
                  src={pandey}
                  alt="Alakh Sir"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full"
                />
              </div>
            
              <div className="mt-3 lg:mt-0 lg:absolute lg:-bottom-10 lg:-left-4 bg-[#000080] text-white px-4 py-2 rounded-lg shadow-md text-xs sm:text-sm w-52 sm:w-60 text-center lg:text-left">
                PW is where students learn with love and can grow with guidance
              </div>
            </div>

            {/* Student */}
            <div className="relative flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-purple-200">
                <img
                  src={phone}
                  alt="Student"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full"
                />
              </div>
             
              <div className="mt-3 lg:mt-0 lg:absolute lg:-top-6 lg:-right-4 bg-white border px-3 py-1 rounded-full shadow text-xs sm:text-sm text-center lg:text-left">
                Alakh Sir, What is PW?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 w-full max-w-6xl px-6">
        <div className="bg-white shadow-lg rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center p-6 text-center relative sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:right-0 sm:after:translate-y-[-50%] sm:after:w-px sm:after:h-12 sm:after:bg-gray-500">
            <span className="text-red-500 font-bold text-xs">LIVE</span>
            <h3 className="font-bold mt-1">Daily Live</h3>
            <p className="text-gray-500 text-sm">Interactive classes</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 text-center relative sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:right-0 sm:after:translate-y-[-50%] sm:after:w-px sm:after:h-12 sm:after:bg-gray-500">
            <img
              src="https://img.icons8.com/color/48/000000/test-passed.png"
              alt="notes"
              className="mb-2"
            />
            <h3 className="font-bold">10 Million +</h3>
            <p className="text-gray-500 text-sm">Tests, sample papers & notes</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 text-center relative sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:right-0 sm:after:translate-y-[-50%] sm:after:w-px sm:after:h-12 sm:after:bg-gray-500">
            <img
              src="https://img.icons8.com/color/48/000000/ask-question.png"
              alt="doubts"
              className="mb-2"
            />
            <h3 className="font-bold">24 x 7</h3>
            <p className="text-gray-500 text-sm">Doubt solving sessions</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 text-center">
            <img
              src="https://img.icons8.com/color/48/000000/organization.png"
              alt="centres"
              className="mb-2"
            />
            <h3 className="font-bold">100 +</h3>
            <p className="text-gray-500 text-sm">Offline centres</p>
          </div>
        </div>
      </div>
    </section>
  );
}
