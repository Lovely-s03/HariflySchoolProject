// BatchesSection.jsx
import React, { useState } from "react";
import {  FaCalendarAlt, FaFilter } from "react-icons/fa";
import yakkenNeet from '../../../assets/coursegla.jpeg'
import RightFilter from "./RightFilter";
import { useNavigate } from "react-router-dom";
import BuyNowModal from "../../../common/BuyNowModal";
import { toast } from "react-toastify";

const batches = [
  {
    id: 1,
    title: "Yakeen NEET 4.0 2026",
    img: yakkenNeet,
    lang: "Hinglish",
    desc: "For Dropper NEET Aspirants",
    start: "18 Aug 2025",
    end: "30 Jun 2026",
    price: 4000,
    oldPrice: 5000,
    discount: "20% Discount",
  },
  {
    id: 2,
    title: "Yakeen NEET Hindi 2.0 2026",
    img: yakkenNeet,
    lang: "Hindi",
    desc: "For Dropper NEET Hindi Aspirants",
    start: "14 Jul 2025",
    end: "30 Jun 2026",
    price: 1999,
    oldPrice: 4200,
    discount: "52% Discount",
  },
  {
    id: 3,
    title: "NEET Coaching Plus 2026",
    img: yakkenNeet,
    lang: "Hinglish",
    desc: "For NEET Aspirants",
    start: "23 Aug 2025",
    end: "30 Jun 2026",
    price: 4000,
    oldPrice: 7000,
    discount: "43% Discount",
  },
   {
    id: 4,
    title: "NEET Coaching Plus 2026",
    img: yakkenNeet,
    lang: "Hinglish",
    desc: "For NEET Aspirants",
    start: "23 Aug 2025",
    end: "30 Jun 2026",
    price: 4000,
    oldPrice: 7000,
    discount: "43% Discount",
  },
   {
    id: 5,
    title: "NEET Coaching Plus 2026",
    img: yakkenNeet,
    lang: "Hinglish",
    desc: "For NEET Aspirants",
    start: "23 Aug 2025",
    end: "30 Jun 2026",
    price: 4000,
    oldPrice: 7000,
    discount: "43% Discount",
  },
   {
    id: 6,
    title: "NEET Coaching Plus 2026",
    img: yakkenNeet,
    lang: "Hinglish",
    desc: "For NEET Aspirants",
    start: "23 Aug 2025",
    end: "30 Jun 2026",
    price: 4000,
    oldPrice: 7000,
    discount: "43% Discount",
  },
];




const BatchesSection = () => {
      const [isFilterOpen, setIsFilterOpen] = useState(false);
        const [activeTab, setActiveTab] = useState("Online");
        const navigate = useNavigate();

  const tabs = [
    "Online",
    "Offline",
    "Power Batch",
    "State Exams",
    "Real Test",
    " Glare IOI",
    "Combo",
    "Study Abroad",
    "Free",
    "Online Degree",
  ];
  const handleclick=()=>{
  navigate('/dashboard/explore');
}
        const [isModalOpen, setIsModalOpen] = useState(false);
const [enrolledBatches, setEnrolledBatches] = useState({});
  return (
    <div className=" py-5">
      {/* Tabs */}
  {/* <div className="sticky top-[107px] z-20 bg-white flex gap-6 border-b border-gray-50 mb-6 cursor-pointer py-3"> */}
  <div className="sticky top-[107px] z-20 bg-white border-b border-gray-50 mb-6 py-3 px-3 flex items-center gap-4 ">

      <button
         onClick={() => setIsFilterOpen(true)}
        className="flex items-center gap-2 border px-3 py-1 rounded-md text-gray-700 hover:text-indigo-600 hover:border-indigo-600 cursor-pointer"
      >
        <FaFilter className="text-sm" />
        <span className="font-medium">Filter</span>
      </button>
    
    <div className="w-full overflow-x-auto  max-w-[300px] md:max-w-[350px] lg:max-w-[600px] xl:max-w-full ">
          <div className="flex gap-6 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 pb-2 whitespace-nowrap cursor-pointer ${
              activeTab === tab
                ? "text-indigo-600 font-medium border-b-2 border-indigo-600"
                : "text-gray-700 hover:text-indigo-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
      

    </div>
     

      <h2 className="text-lg font-semibold mb-4">6 Batches available</h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="border border-gray-50 rounded-2xl shadow-sm overflow-hidden bg-white"
          >
            <div className="relative">
              <img src={batch.img} alt={batch.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                new
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg">{batch.title}</h3>
              <span className="inline-block text-xs bg-gray-200 rounded px-2 py-1 mt-1">
                {batch.lang}
              </span>
              <p className="text-sm text-gray-600 mt-2">{batch.desc}</p>

        
              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" />
                  <span>Starts on {batch.start} | Ends on {batch.end}</span>
                </div>
              </div>

       
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold">₹{batch.price}</span>
                  <span className="line-through text-gray-400">₹{batch.oldPrice}</span>
                </div>
                <span className="text-green-600 text-sm font-medium">
                  {batch.discount}
                </span>
              </div>
     

<div className="flex gap-3 mt-5">
  <button
    onClick={handleclick}
    className="flex-1 py-2 border rounded-lg text-indigo-600 font-medium hover:bg-indigo-50"
  >
    EXPLORE
  </button>

  {activeTab === "Free" ? (
    <button
      onClick={() => {
        if (!enrolledBatches[batch.id]) {
          toast.success(` You have successfully enrolled in ${batch.title}`);
          setEnrolledBatches((prev) => ({
            ...prev,
            [batch.id]: true,
          }));
        }
      }}
      className={`flex-1 py-2 text-white rounded-lg font-medium transition ${
        enrolledBatches[batch.id]
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-gray-500"
      }`}
      disabled={enrolledBatches[batch.id]}
    >
      {enrolledBatches[batch.id] ? "ENROLLED" : "ENROLL NOW"}
    </button>
  ) : (
    <button
      onClick={() => setIsModalOpen(true)}
      className="flex-1 bg-[#000080] text-white py-2 rounded-lg font-medium hover:bg-indigo-700 cursor-pointer"
    >
      BUY NOW
    </button>
  )}
</div>
              <BuyNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
            </div>
          
          </div>
        ))}
         
        
      </div>
       <div className="flex justify-center my-6">
      <button
      className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition cursor-pointer"
      >
        Load more
      </button>
    </div>
     <RightFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

export default BatchesSection;
