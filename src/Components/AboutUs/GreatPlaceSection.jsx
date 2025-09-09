
// import React from "react";

// const GreatPlaceSection = () => {
//   return (
//     <section className="relative max-w-6xl m-auto mt-12 mb-20 ">
//       {/* Main card */}
//       <div className="bg-gray-800 text-white rounded-2xl px-6 lg:px-12 py-8 relative ">
//         {/* Left content */}
//         <div className="max-w-2xl">
//           <h2 className="text-2xl md:text-4xl font-bold text-[#008000] mb-4">
//             Glare is Officially a Great Place to Work 
//           </h2>
//           <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">
//             Our team says that our culture is exceptional, and our certification
//             serves as proof. Want to check out the Exciting world of Glare?
//           </p>
//           <button className="px-5 py-2 bg-white text-gray-900 text-sm md:text-base font-medium rounded-lg shadow hover:bg-gray-100 transition">
//             Know More
//           </button>
//         </div>
//       </div>

//       {/* Right badge outside (overlaying card) */}
//       <div className="absolute -top-12 right-8 md:top-5 md:right-16 scale-125 md:scale-150 shadow-xl rounded-md overflow-hidden">
//         <div className="bg-red-600 text-white font-bold p-4 text-xl leading-tight text-center">
//           <p>Great</p>
//           <p>Place</p>
//           <p>To</p>
//           <p>
//             Work<sup className="text-sm">®</sup>
//           </p>
//         </div>

//         <div
//           className="bg-blue-900 text-white p-3 text-sm font-semibold text-center"
//           style={{
//             clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
//           }}
//         >
//           <p>Certified</p>
//           <p className="text-xs mt-1">NOV 2023 – NOV 2024</p>
//           <p className="text-xs mt-1">INDIA</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GreatPlaceSection;
import React from "react";

const GreatPlaceSection = () => {
  return (
    <section className="relative max-w-6xl m-auto mt-12 mb-20">
      {/* Main card */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-100 text-gray-900 rounded-2xl px-6 lg:px-12 py-8 relative">
        {/* Left content */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#000080] mb-4">
            Glare is Officially a Great Place to Work
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
            Our team says that our culture is exceptional, and our certification
            serves as proof. Want to check out the exciting world of Glare?
          </p>
          <button className="px-6 py-2 bg-[#000080] text-white text-sm md:text-base font-medium rounded-lg shadow hover:bg-indigo-700 transition">
            Know More
          </button>
        </div>
      </div>

      {/* Right badge outside (overlaying card) */}
      <div className="absolute -top-12 right-8 md:top-5 md:right-16 scale-125 md:scale-150  overflow-hidden bg-gradient-to-b from-white to-[#f9f9fad2]">
        <div className="bg-gradient-to-b from-red-500 to-red-700 text-white font-bold p-4 text-xl leading-tight text-center">
          <p>Great</p>
          <p>Place</p>
          <p>To</p>
          <p>
            Work<sup className="text-sm">®</sup>
          </p>
        </div>

        <div
          className="bg-gradient-to-b from-blue-600 to-blue-800 text-white p-3 text-sm font-semibold text-center"
          style={{
            clipPath: "polygon(0px 0px, 100% 0px, 100% 65%, 51% 99%, 0px 68%)",
          }}
        >
          <p>Certified</p>
          <p className="text-xs mt-1">NOV 2023 – NOV 2024</p>
          <p className="text-xs mt-1">INDIA</p>
        </div>
      </div>
    </section>
  );
};

export default GreatPlaceSection;

