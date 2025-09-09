import React from "react";
import { IoIosStar } from "react-icons/io";
import vision1 from "../../assets/vision.webp"; 

const VisionSection = () => {
  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-[#fff7ef] to-[#fffdf8]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      
<div className="md:w-1/2">
  <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-6">
    Our Vision
  </h2>
  <ul className="space-y-4 text-lg text-gray-800">
    <li className="flex items-center gap-3">
      <IoIosStar className="text-[#4CBB17]" size={24} />
      <span>
       We aim to create digital experiences that inspire growth and innovation.
      </span>
    </li>
    <li className="flex items-center gap-3">
      <IoIosStar className="text-[#4CBB17]" size={24}/>
      <span>
  Our focus is on blending creativity with technology to deliver lasting impact.
      </span>
    </li>
    <li className="flex items-center gap-3">
      <IoIosStar className="text-[#4CBB17]" size={24}/>
      <span>
    We envision a future where every business thrives in the digital world.
      </span>
    </li>
  </ul>
</div>
        <div className="md:w-1/2 flex justify-center gap-6 flex-wrap">
          <div className="clip-hexagon overflow-hidden ">
            <img src={vision1} alt="Vision 1" className="w-full h-full object-cover" />
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
