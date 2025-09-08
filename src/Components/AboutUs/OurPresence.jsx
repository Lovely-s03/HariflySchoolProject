import React from "react";

// Dummy map component (replace with SVG map if needed)
const Map = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-[400px] h-[400px] bg-gray-200 rounded">
        {/* Example state boxes */}
        <div className="absolute top-8 left-16 w-12 h-12 bg-yellow-400 border border-white"></div>
        <div className="absolute top-16 left-24 w-12 h-12 bg-orange-400 border border-white"></div>
        <div className="absolute top-32 left-32 w-12 h-12 bg-red-500 border border-white"></div>
        {/* Add more state boxes as needed */}
      </div>
    </div>
  );
};

const OurPresence = () => {
  const stats = [
    { value: "100+", label: "Cities" },
    { value: "120+", label: "Centers" },
    { value: "28", label: "Exam Categories" },
  ];

  const legend = [
    { color: "bg-red-500", label: "20+ centres" },
    { color: "bg-orange-500", label: "10-20 centres" },
    { color: "bg-orange-400", label: "5-10 centres" },
    { color: "bg-yellow-400", label: "3-4 centres" },
    { color: "bg-yellow-200", label: "1-2 Centres" },
    { color: "bg-blue-300", label: "Opening soon" },
    { color: "bg-gray-300", label: "0 Centres" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Presence</h2>
          <p className="mb-8 text-gray-700">
            Our footprint extends across more than 100 cities, with a widespread
            network of over 120 Vidyapeeth centers spanning the entire country.
          </p>

          <div className="flex flex-col gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-yellow-100 rounded-full px-6 py-3 font-semibold text-lg w-max"
              >
                {stat.value} {stat.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <Map />

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-4">
            {legend.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className={`w-5 h-5 ${item.color} block rounded`}></span>
                <span className="text-gray-700 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
