// RecommendedBatches.jsx
import React, { useState } from "react";
import { FaUsers, FaCalendarAlt, FaWhatsapp } from "react-icons/fa";
import top1 from '../../../assets/coursegla.jpeg'

import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import BuyNowModal from "../../../common/BuyNowModal";


const batches = [
  {
    id: 1,
    title: "Glare30 JEE 4.0 2026",
    img: top1,
    language: "Hinglish",
    target: "For JEE Aspirants",
    start: "13 Sep 2025",
    end: "30 Jun 2027",
    price: 4000,
    oldPrice: 4600,
    discount: "13% Discount",
    plan: "Infinity Pro + Infinity",
  },
  {
    id: 2,
    title: "Glare30 JEE 3.0 2026",
    img: top1,
    language: "Hinglish",
    target: "For JEE Aspirants",
    start: "14 Jul 2025",
    end: "30 Jun 2027",
    price: 4000,
    oldPrice: 5000,
    discount: "20% Discount",
    plan: "Infinity Pro + Infinity",
  },
  {
    id: 3,
    title: "Glare30 JEE Hindi 2.0 2026",
    img: top1,
    language: "Hindi",
    target: "IIT JEE",
    start: "16 Jul 2025",
    end: "30 Jun 2027",
    price: 1999,
    oldPrice: 4800,
    discount: "58% Discount",
    plan: "Infinity plan inside",
  },
];

const RecommendedBatches = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
 <section>
       <div className="max-w-7xl mx-auto px-8 py-10 shadow-sm border  bg-white border-gray-100  my-5 rounded-md">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Top Recommended Batches</h2>
        <p className="text-gray-600">
          Let's start with these popular batches
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white rounded-xl shadow-md border border-0 p-4 flex flex-col"
          >
           <div className="flex justify-between px-2 pb-5">
               <h3 className=" text-lg font-semibold">{batch.title}</h3>
               <div className="flex text-center items-center gap-2">
                <p className="bg-amber-300 text-center rounded-lg px-2 py-1 text-sm font-medium">new</p>
               <FaWhatsapp/>
               </div>
           </div>
            {/* Image */}
            <img
              src={batch.img}
              alt={batch.title}
              className="rounded-lg  w-full object-cover"
            />
          
            <p className="text-sm text-gray-600">{batch.target}</p>

            {/* Dates */}
            <div className="flex items-center text-sm text-gray-500 gap-2 mt-2">
              <FaCalendarAlt /> Starts on {batch.start} | Ends {batch.end}
            </div>

            {/* Plan */}
            <p className="mt-2 text-xs text-green-600">{batch.plan}</p>

            {/* Pricing */}
            <div className="mt-3">
              <span className="text-xl font-bold text-gray-900">
                ₹{batch.price}
              </span>{" "}
              <span className="text-sm text-gray-400 line-through">
                ₹{batch.oldPrice}
              </span>
              <p className="text-green-600 text-sm">{batch.discount}</p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-200">
                Explore
              </button>
    <button
      onClick={() => setIsModalOpen(true)}
      className="flex-1 bg-[#000080] text-white py-2 rounded-lg font-medium hover:bg-indigo-700"
    >
      BUY NOW
    </button>
            </div>
            
              <BuyNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-gray-200 rounded-lg font-medium hover:bg-gray-300">
          View All
        </button>
      </div>
    </div>
 <div className="w-full flex justify-center pb-5">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-md p-4 px-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-2">
    
          <div className="flex items-center gap-2">
            <FaChevronDown className="text-gray-600" />
            <h2 className="font-semibold text-lg">Today's Class</h2>
          </div>

          {/* Right - Weekly Schedule Button */}
          <button className="flex items-center gap-2 text-sm text-[#000080] font-medium border rounded-md px-3 py-1 hover:bg-[#f3f2ff]">
            <FaCalendarAlt />
            Weekly Schedule
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 py-8">
       
          <div className="text-gray-500 text-center md:text-left text-sm">
            No classes available today.
          </div>

          {/* View All Classes Button */}
          <button className="flex items-center gap-2 bg-[#000080] hover:bg-[#2626ee] text-white px-5 py-2 rounded-md font-medium">
            View All Classes
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
 </section>
  );
};

export default RecommendedBatches;
