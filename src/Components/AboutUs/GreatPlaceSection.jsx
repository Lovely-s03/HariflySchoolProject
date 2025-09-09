import React from "react";
import badge from "../../assets/badge.webp"; 

const GreatPlaceSection = () => {
  return (
    <section className="relative w-full bg-gray-900 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581090700227-4c4b3cf53f50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="team"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left text */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4">
            PW is Officially a Great Place to Work !
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
            Our team says that our culture is exceptional, and our certification
            serves as proof. Want to check out the Exciting world of PW?
          </p>
          <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg shadow hover:bg-gray-100 transition">
            Know More
          </button>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={badge}
            alt="Great Place to Work"
            className="w-40 md:w-56 lg:w-64"
          />
        </div>
      </div>
    </section>
  );
};

export default GreatPlaceSection;
