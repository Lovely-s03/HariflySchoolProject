// import React from "react";
// import { FaHandsHelping } from "react-icons/fa";
// import { FaGlobeAmericas } from "react-icons/fa";
// import { FaBuilding } from "react-icons/fa";

// const missions = [
//   {
//     icon: <FaHandsHelping className="text-4xl text-pink-500" />,
//     text: (
//       <>
//         To aim for <span className="text-purple-600 font-medium">Equity and inclusivity</span> in Education
//       </>
//     ),
//     bg: "bg-pink-50",
//     shadow: "shadow-[6px_6px_0px_#22c55e]",
//   },
//   {
//     icon: <FaGlobeAmericas className="text-4xl text-blue-500" />,
//     text: (
//       <>
//         To reach <span className="text-purple-600 font-medium">learners</span> in every corner of the country
//       </>
//     ),
//     bg: "bg-amber-50",
//     shadow: "shadow-[6px_6px_0px_#818cf8]",
//   },
//   {
//     icon: <FaBuilding className="text-4xl text-teal-500" />,
//     text: (
//       <>
//         To build a <span className="text-purple-600 font-medium">business</span> sustainability
//       </>
//     ),
//     bg: "bg-cyan-50",
//     shadow: "shadow-[6px_6px_0px_#ef4444]",
//   },
// ];

// const MissionSection = () => {
//   return (
//     <section className="relative w-full py-16 bg-[#1a125a]">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Title */}
//         <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
//           Our Mission
//         </h2>

//         {/* Mission Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {missions.map((item, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-lg ${item.bg} ${item.shadow} flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105`}
//             >
//               <div className="mb-4">{item.icon}</div>
//               <p className="text-gray-800 text-lg">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionSection;
import React from "react";
import { FaHandsHelping, FaGlobeAmericas, FaBuilding } from "react-icons/fa";

const missions = [
  {
    icon: <FaHandsHelping className="text-3xl text-pink-600" />,
    title: "Equity & Inclusivity",
    text: "We aim for equity and inclusivity in education.",
    circleBg: "bg-pink-100",
  },
  {
    icon: <FaGlobeAmericas className="text-3xl text-blue-600" />,
    title: "Reach Everywhere",
    text: "Our mission is to reach learners in every corner of the country.",
    circleBg: "bg-blue-100",
  },
  {
    icon: <FaBuilding className="text-3xl text-teal-600" />,
    title: "Sustainability",
    text: "We focus on building a sustainable and impactful future.",
    circleBg: "bg-teal-100",
  },
];

const MissionSection = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-14">
          Our Mission
        </h2>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-xl shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Black accent borders - all 4 sides */}
              {/* Top */}
              <div className="absolute top-0 left-0 h-[3px] w-2/3 bg-black opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Left */}
              <div className="absolute top-0 left-0 w-[3px] h-2/3 bg-black opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Bottom */}
              <div className="absolute right-0 bottom-0 h-[3px] w-2/3 bg-black opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Right */}
              <div className="absolute right-0 bottom-0 w-[3px] h-2/3 bg-black opacity-40 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${item.circleBg} mb-6 transition-transform duration-500 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-black transition-colors">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
