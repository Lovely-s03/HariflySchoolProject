import React from "react";
import { Phone } from "lucide-react";
import call from '../../../assets/call.webp'
const AdmissionCard = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-50 to-white border border-purple-200 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between px-6 py-10 mb-10">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Know more about Vidyapeeth Admissions ??
        </h2>
        <p className="text-gray-600 mb-4 text-[18px]">
          Speak to our admission counsellor over a phone call
        </p>
        <button className="flex items-center gap-2 border border-[#000080] text-[#000080] px-4 py-2 rounded-md hover:bg-purple-50 transition">
          <Phone size={18} />
          Talk to a counsellor
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-6 md:mt-0 md:ml-8">
        <img
          src={call}
          alt="Counsellor"
          className="w-48 md:w-56"
        />
      </div>
    </div>
  );
};

export default AdmissionCard;
