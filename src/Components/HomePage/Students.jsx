import React from "react";

const stats = [
  {
    number: "15Million+",
    label: "Happy Students",
    bg: "bg-orange-100",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    number: "24000+",
    label: "Mock Tests",
    bg: "bg-pink-100",
    img: "https://cdn-icons-png.flaticon.com/512/2942/2942929.png",
  },
  {
    number: "14000+",
    label: "Video Lectures",
    bg: "bg-blue-100",
    img: "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
  },
  {
    number: "80000+",
    label: "Practice Papers",
    bg: "bg-purple-100",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
  },
];

export default function TrustedSection() {
  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        A Platform Trusted by Students
      </h2>
      <p className="text-gray-600 mb-8">
        Physics Wallah aims to transform not just through words, but provide
        results with numbers!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} relative rounded-xl p-6 h-56 flex flex-col justify-center items-center overflow-hidden group`}
          >
 
            <div className="transition-all duration-500 group-hover:-translate-y-4">
              <h3 className="text-xl md:text-4xl font-bold">{item.number}</h3>
              <p className="text-gray-700">{item.label}</p>
            </div>

       
            <img
              src={item.img}
              alt={item.label}
              className="absolute bottom-[-100%] w-16 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      <button className="mt-10 px-16 py-3 bg-[#000080] text-white rounded-lg font-medium hover:bg-[#220bf1] transition">
        Get Started
      </button>
    </section>
  );
}
