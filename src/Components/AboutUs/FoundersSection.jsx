// import React from "react";
// import founder1 from "../../assets/pandaysir.jpeg"; 


// const founders = [
//   {
//     name: "Alakh Pandey",
//     role: "Founder and CEO",
//     quote:
//       "My aim is to democratize and transform the education landscape in Bharat",
//     img: founder1,
//     link: "Read More about Alakh Pandey",
//   },
//   {
//     name: "Prateek Maheshwari",
//     role: "Co Founder",
//     quote:
//       "Teachers add soul into technology, which is why in ed-tech, education comes before technology",
//     img: founder1,
//     link: "Read More about Prateek Maheshwari",
//   },
// ];

// const FoundersSection = () => {
//   return (
//     <section className="relative w-full py-16 bg-[#1a125a]">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
//           Our Founders
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {founders.map((founder, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center"
//             >
//               {/* Profile Image with Circle Border */}
//               <div className="relative mb-6">
//                 <div className="w-28 h-28 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center">
//                   <img
//                     src={founder.img}
//                     alt={founder.name}
//                     className="w-24 h-24 rounded-full object-cover"
//                   />
//                 </div>
//                 {/* Small Decorative Dots */}
//                 <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400 rounded-full"></div>
//                 <div className="absolute top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full"></div>
//                 <div className="absolute -bottom-2 left-6 w-3 h-3 bg-orange-400 rounded-full"></div>
//               </div>

//               {/* Founder Details */}
//               <h3 className="text-xl font-bold text-gray-900">
//                 {founder.name}
//               </h3>
//               <p className="text-gray-600 mb-4">{founder.role}</p>
//               <p className= "text-bold text-gray-800 mb-6">"{founder.quote}"</p>

//               <a
//                 href="#"
//                 className="text-purple-700 font-medium hover:underline"
//               >
//                 {founder.link}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoundersSection;
import React from "react";
 import founder1 from "../../assets/founder.webp"; 
 import quote from "../../assets/quotes.webp"
export default function FoundersSection() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-7">
          MEET OUR <span className="text-green-500">FOUNDER</span>{" "}
          <span className="inline-block">✦</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl px-6 py-6   gap-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={founder1}
              alt="Ajeet Kumar"
              className="w-64 md:w-80 rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-gray-700">
            <div className="flex items-center justify-between">
            <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#000080]">
              Ajeet Kumar
            </h3>
            <p className="text-gray-800 mb-3 mt-2 font-normal">
              Founder of Harifly Technologies Private Limited
            </p>
            </div>
            <img src={quote} alt="" />
            </div>
            <hr className="mb-3 text-gray-400"/>
            <p className="mb-3 font-normal text-[18px] text-gray-600">
              Ajeet Kumar, the Founder & CEO of Harifly, is a dynamic
              entrepreneur known for his leadership, creativity, and ability to
              deliver impactful tech solutions that benefit both clients and
              end-users.
            </p>
            <p className="mb-3 font-normal text-[18px] text-gray-600">
              With over 5 years of experience, Saksham co-founded Harifly to
              offer customized, high-performance tech solutions across various
              industries globally.
            </p>
            <p className="font-normal text-[18px] text-gray-600">
              His deep understanding of technology, branding, and client
              relations has helped many entrepreneurs innovate and positioned
              Harifly as a trusted industry leader.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
