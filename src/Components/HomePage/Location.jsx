

import React from "react";
import Kota from '../../assets/kota.jpeg'
import bareilly from "../../assets/bareilly.jpeg"
import patna from  "../../assets/patna image.jpg"
import Noida from "../../assets/noida.jpeg"
import kolkata from "../../assets/kolkata.jpeg"
import ahemdbad from "../../assets/ahmedabad.jpeg"
import jaipur from "../../assets/jaipur.jpeg"
import { motion } from "framer-motion";
const centres = [
  {
    name: "Kota",
    img: Kota,
  },
  {
    name: "Bareilly",
    img: bareilly,
  },
  {
    name: "Patna",
    img: patna,
  },
  {
    name: "Noida",
    img: Noida,
  },
  {
    name: "New Delhi",
    img: Noida,
  },
  {
    name: "Kolkata",
    img: kolkata,
  },
  {
    name: "Ahmedabad",
    img: ahemdbad,
  },
  {
    name: "Jaipur",
    img: jaipur,
  },
];

export default function Location() {
  return (
    <section className="relative w-full h-auto text-white">
      {/* Background Video */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
     
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

        {/* Heading on Video */}
        <div className="relative z-10 flex flex-col  p-24 h-full text-center px-2">
          <h2 className="text-2xl md:text-4xl font-bold">
            Explore Tech-Enabled Offline Vidyapeeth Centres
          </h2>
          <p className="text-gray-200 mt-2 text-sm md:text-base">
            Creating new benchmarks in learning experiences
          </p>
        </div>
      </div>

      {/* White Box Overlapping */}
      {/* <div className="relative z-10 max-w-6xl mx-auto -mt-20 md:-mt-[260px] px-4">
        <div className="bg-white text-black rounded-lg shadow-lg p-6 md:p-7">
          <h3 className="text-lg md:text-2xl font-semibold text-center">
            Find Vidyapeeth Centre in your city
          </h3>
          <p className="text-center text-gray-600 mt-1">
            Available in{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              105
            </span>{" "}
            cities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 ">
            {centres.map((centre, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white flex flex-col lg:flex-row items-center justify-self-start py-3 px-7 w-full"
              >
                <img
                  src={centre.img}
                  alt={centre.name}
                  className="items-center flex h-24 md:h-28 lg:h-16 object-cover transition-transform duration-300 hover:scale-110"
                
                />
                <div className="p-2 text-center font-medium text-sm md:text-base">
                  {centre.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#000080] text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-[#402ee0] transition">
              View More
            </button>
          </div>
        </div>
      </div> */}
  <motion.div
      className="relative z-10 max-w-6xl mx-auto -mt-20 md:-mt-[260px] px-4"
      initial={{ opacity: 0, y: 100 }}  // pehle hidden niche se
      whileInView={{ opacity: 1, y: 0 }} // scroll par visible ho
      viewport={{ once: true, amount: 0.2 }} // ek hi baar animate hoga
      transition={{ duration: 0.8, ease: "easeOut" }} // smoothness
    >
      <div className="bg-white text-black rounded-lg shadow-lg p-6 md:p-7">
        <h3 className="text-lg md:text-2xl font-semibold text-center">
          Find Vidyapeeth Centre in your city
        </h3>
        <p className="text-center text-gray-600 mt-1">
          Available in{" "}
          <span className="text-blue-600 font-semibold cursor-pointer">105</span>{" "}
          cities
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 ">
          {centres.map((centre, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white flex flex-col lg:flex-row items-center justify-self-start py-3 px-7 w-full"
            >
              <img
                src={centre.img}
                alt={centre.name}
                className="items-center flex h-24 md:h-28 lg:h-16 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-2 text-center font-medium text-sm md:text-base">
                {centre.name}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#000080] text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-[#402ee0] transition">
            View More
          </button>
        </div>
      </div>
    </motion.div>
     
      <div className="fixed bottom-6 right-6 z-20">
        <button className="bg-[#000080] text-white p-4 rounded-full shadow-lg hover:bg-[#402ee0] transition">
          📞
        </button>
      </div>
    </section>
  );
}
