import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BuyNowModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Batch");
  
 useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  const plans = ["Batch", "Infinity", "Infinity Pro"];
  const features = [
    "Recorded Lectures by top faculties",
    "DPPs with Video Solution",
    "Regular Test & AITS",
    "24×7 Doubt Support",
    "Class notes & Handwritten Notes",
    "Free access of all upcoming versions",
  ];

  const availability = {
    Batch: ["✔", "✔", "✔", "✔", "✔", "✘"],
    Infinity: ["✔", "✔", "✔", "✔", "✔", "✔"],
    "Infinity Pro": ["✔", "✔", "✔", "✔", "✔", "✔"],
  };

  const pricing = {
    Batch: { price: "₹4000", old: "₹4600", discount: "13% OFF" },
    Infinity: { price: "₹7000", old: "₹8000", discount: "12% OFF" },
    "Infinity Pro": { price: "₹10000", old: "₹12000", discount: "17% OFF" },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-[0.9px]">
      <div className="bg-white text-black rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-hidden  mx-5">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white transition"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <div className="p-5 border-b bg-gradient-to-r from-[#000080] to-indigo-800 text-white rounded-t-2xl">
          <h2 className="text-xl md:text-2xl font-semibold">
            Arjuna JEE 4.0 2026
          </h2>
        </div>
        <div className="flex justify-center gap-3 mt-5">
          {plans.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? tab === "Batch"
                    ? "bg-blue-600 text-white shadow-md"
                    : tab === "Infinity"
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-yellow-500 text-black shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto px-6 py-8">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="py-3 px-4 text-left font-semibold">Features</th>
                {plans.map((plan) => (
                  <th
                    key={plan}
                    className={`py-3 px-4 text-center font-semibold ${
                      activeTab === plan ? "text-indigo-600" : ""
                    }`}
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-medium text-sm">
                    {feature}
                  </td>
                  {plans.map((plan, j) => (
                    <td
                      key={j}
                      className={`py-3 text-center ${
                        availability[plan][i] === "✘"
                          ? "text-red-500"
                          : "text-green-600"
                      } ${
                        activeTab === plan ? "font-bold" : "text-gray-500"
                      }`}
                    >
                      {availability[plan][i]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-[#000080] to-indigo-800 text-white p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300">{activeTab} Plan</p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl font-bold">
                {pricing[activeTab].price}
              </span>
              <span className="line-through text-gray-400">
                {pricing[activeTab].old}
              </span>
              <span className="text-green-400 text-sm font-medium">
                {pricing[activeTab].discount}
              </span>     
 
            </div>
          </div>
          <button  onClick={() => navigate("/order-summary")}
 className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-md hover:from-yellow-500 hover:to-yellow-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;