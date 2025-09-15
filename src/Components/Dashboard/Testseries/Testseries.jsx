import React, { useState } from "react";
import top1 from '../../../assets/coursegla.jpeg'
import { FaCheckCircle, FaFilter, FaStar, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import BuyNowModal from "../../../common/BuyNowModal";
import { useNavigate } from "react-router-dom";

 const tests = [
    
  {
    id: 1,
    title: "Glare 30 JEE 2026 Hybrid Test Series",
    img: top1,
    price: "₹3999",
    oldPrice: "₹6999",
    features: [
      "<b>Hybrid Test Series:</b> Online & Offline",
      "<b>NTA Simulation:</b> Real NTA-like exam experience",
      "<b>18 Tests:</b> Part + Full syllabus coverage",
      "<b>Admit Cards:</b> For offline tests, centers similar to NTA",
      "<b>Expert Analysis:</b> Detailed paper discussion & strategy",
      "<b>Performance Insights:</b> Advanced performance analytics",
      "<b>Smart Revision:</b> Question-level insights for effective revision",
    ],
  },
  {
    id: 2,
    title: "Glare 30 JEE Online Test Series 2026",
    img: top1,
    price: "₹1099",
    oldPrice: "₹2199",
    features: [
      "Comprehensive online mock test series for JEE (Main + Advanced)",
      "18 Tests (10 Part length + 8 Full length)",
      "Text + Video solutions for every question",
      "In-depth performance analysis with All India Rank (AIR)",
      "Unlimited re-attempts for thorough practice",
    ],
  },
  {
    id: 3,
    title: "Glare 30 Hindi JEE Test Series 2026",
    img: top1,
    price: "₹799",
    oldPrice: "₹1599",
    features: [
      "Mock test series in Hindi for JEE (Main + Advanced)",
      "10 Tests (7 Part length + 3 Full length)",
      "Text + Video solutions provided",
      "Performance analysis with AIR ranking",
      "Unlimited re-attempts for deep learning",
    ],
  },
  {
    id: 4,
    title: "Glare 30 Advanced Rank Booster 2026",
    img: top1,
    price: "₹1499",
    oldPrice: "₹2999",
    features: [
      "Specially designed rank booster tests for JEE Advanced",
      "12 High-level mock tests based on latest patterns",
      "Expert-curated solutions with tips & tricks",
      "All India performance comparison",
      "Concept-wise error analysis & correction",
    ],
  },
  {
    id: 5,
    title: "Glare 30 JEE Crash Test Series 2026",
    img: top1,
    price: "₹999",
    oldPrice: "₹1999",
    features: [
      "Crash course style test series for final revision",
      "8 Mock tests (Full syllabus)",
      "Quick solution PDFs + discussion videos",
      "Time management & attempt strategy analysis",
      "Unlimited re-attempts till JEE exam",
    ],
  },
  {
    id: 6,
    title: "Glare 30 JEE Mains Practice Series 2026",
    img: top1,
    price: "₹599",
    oldPrice: "₹1199",
    features: [
      "Exclusive practice series for JEE Mains",
      "15 Mock tests designed for speed & accuracy",
      "Topic-wise analysis for weak areas",
      "Smart timer feature for exam practice",
      "Instant solution access",
    ],
  },
  {
    id: 7,
    title: "Glare 30 JEE Full Length Test Series 2026",
    img: top1,
    price: "₹1299",
    oldPrice: "₹2599",
    features: [
      "Full syllabus test series covering JEE Main & Advanced",
      "10 Full length mock exams",
      "Detailed solution + strategy notes",
      "AIR performance ranking included",
      "Personalized analysis for improvement",
    ],
  },
];

const Testseries = () => {
      const [openDropdown, setOpenDropdown] = useState(null);


  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {

      setOpenDropdown(name);
    }
  };
    const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/testpass"); 
  };
  return (
    <div className="max-w-7xl mx-auto px-5 py-8 bg-white my-5 rounded-lg shadow-md">

    
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
<div className="flex w-full items-center gap-2">
  <div className="relative w-full">
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-300 rounded-lg pl-4 pr-10 py-2 w-full focus:outline-none"
    />
    <IoIosSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
  </div>

  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg whitespace-nowrap">
    My Tests
  </button>
</div>
</div>


     <div className="flex flex-col gap-5 lg-gap-0 lg:flex-row justify-between items-center mb-5">
         <h2 className="text-[25px] font-semibold ">Recommended (39)</h2>
       <div className="flex items-center gap-3">
         
            <div className="flex items-center gap-4">

      <div className="relative">
        <button
          onClick={() => toggleDropdown("type")}
          className="flex items-center gap-1 border px-4 py-2 rounded-full text-gray-700 bg-white shadow-sm"
        >
          Type <IoIosArrowDown className="text-gray-500" />
        </button>

        {openDropdown === "type" && (
          <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Test Pass
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Test Series
            </button>
          </div>
        )}
      </div>

      {/* Mode */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown("mode")}
          className="flex items-center gap-1 border px-4 py-2 rounded-full text-gray-700 bg-white shadow-sm"
        >
          Mode <IoIosArrowDown className="text-gray-500" />
        </button>

        {openDropdown === "mode" && (
          <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Online
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Offline
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Hybrid
            </button>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown("filters")}
          className="flex items-center gap-2 border px-4 py-2 rounded-full text-gray-700 bg-white shadow-sm"
        >
          <FaFilter className="text-gray-600" /> Filters
        </button>

        {openDropdown === "filters" && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 p-4">
            <p className="text-sm font-semibold mb-2">Filter Options</p>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Free Tests
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Paid Tests
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> With Solutions
            </label>
          </div>
        )}
      </div>
    </div>
        </div>
     </div>
<div className="bg-white  rounded-lg mb-8 shadow-md border border-[#ddebf8] max-w-full xl:max-w-[367px]">
      {/* Header */}
      <div className="flex items-start justify-between p-4">
        <h3 className="text-lg font-semibold">Glare30 JEE Test Pass</h3>
        <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
          12 Month
        </span>
      </div>

      {/* Price Section */}
      <div className="px-4">
        <p className="text-xl font-bold text-indigo-600">
          ₹2500{" "}
          <span className="text-gray-400 line-through text-base ml-2">5000</span>
          <span className="text-green-600 text-base ml-2">50% OFF</span>
        </p>
      </div>

      {/* Dotted Divider */}
      <div className="border-t border-dashed my-3" />

      {/* Features */}
      <div className="bg-blue-50 px-4 py-3 space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <FaCheckCircle className="text-gray-500 mt-1" />
          <p>
            One Subscription to Unlock all Test Series for <b>Class 11th JEE</b>
          </p>
        </div>
        <div className="flex items-start gap-2">
          <FaCheckCircle className="text-gray-500 mt-1" />
          <p>
            10+ Test Series, 275+ Mock Tests, 10000+ Questions, 20+ Free Tests
          </p>
        </div>
        <div className="flex items-start gap-2">
          <FaCheckCircle className="text-gray-500 mt-1" />
          <p>
            <b>Detailed Analysis</b> with Overall Progress Report, Subject,
            Chapter and Topic wise Performance
          </p>
        </div>
        <div className="flex items-start gap-2">
          <FaCheckCircle className="text-gray-500 mt-1" />
          <p>
            <b>Unlimited Re-attempts</b> to Learn & Improve from Past Mistakes
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="p-4">
        <button  onClick={handleClick} className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-lg font-medium">
          Get Pass
        </button>
      </div>

    </div>

     
       <div className="max-w-7xl mx-auto  py-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {tests.map((test) => (
          <div
            key={test.id}
            className="rounded-xl shadow-lg  border border-gray-200 bg-white overflow-hidden flex flex-col"
          >
            {/* Top Image + Badge */}
            <div className="relative">
              <img
                src={test.img}
                alt={test.title}
                className="w-full h-44 object-cover mt-10 px-3 rounded-lg"
              />
              <div className="absolute top-2 right-2 flex items-center gap-2">
                <span className="bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">
                  NEW
                </span>
                <FaWhatsapp className="text-green-600 text-lg" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-gray-900 text-lg mb-3">
                {test.title}
              </h3>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-700 flex-1">
                {test.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaStar className="text-yellow-400 mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>

              {/* Price + Buttons */}
              <div className="mt-4">
                <p className="text-indigo-600 font-bold text-lg">
                  {test.price}{" "}
                  <span className="line-through text-gray-400 text-sm ml-1">
                    {test.oldPrice}
                  </span>
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-50">
                    EXPLORE
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
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testseries;
