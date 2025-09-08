import React from "react";
import founder1 from "../../assets/pandaysir.jpeg"; 


const founders = [
  {
    name: "Alakh Pandey",
    role: "Founder and CEO",
    quote:
      "My aim is to democratize and transform the education landscape in Bharat",
    img: founder1,
    link: "Read More about Alakh Pandey",
  },
  {
    name: "Prateek Maheshwari",
    role: "Co Founder",
    quote:
      "Teachers add soul into technology, which is why in ed-tech, education comes before technology",
    img: founder1,
    link: "Read More about Prateek Maheshwari",
  },
];

const FoundersSection = () => {
  return (
    <section className="relative w-full py-16 bg-[#1a125a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Founders
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center"
            >
              {/* Profile Image with Circle Border */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                {/* Small Decorative Dots */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="absolute top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full"></div>
                <div className="absolute -bottom-2 left-6 w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>

              {/* Founder Details */}
              <h3 className="text-xl font-bold text-gray-900">
                {founder.name}
              </h3>
              <p className="text-gray-600 mb-4">{founder.role}</p>
              <p className= "text-bold text-gray-800 mb-6">"{founder.quote}"</p>

              <a
                href="#"
                className="text-purple-700 font-medium hover:underline"
              >
                {founder.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
