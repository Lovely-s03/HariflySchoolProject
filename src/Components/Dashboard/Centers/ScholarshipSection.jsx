import React from "react";
import { ClipboardList, Award, HandCoins, FileText } from "lucide-react"; // icons

const stats = [
  {
    id: 1,
    icon: <ClipboardList className="w-6 h-6 text-yellow-700" />,
    value: "3.7L+",
    label: "Tests Conducted",
  },
  {
    id: 2,
    icon: <Award className="w-6 h-6 text-yellow-700" />,
    value: "40 Cr+",
    label: "Worth Scholarships Given",
  },
  {
    id: 3,
    icon: <HandCoins className="w-6 h-6 text-yellow-700" />,
    value: "45K+",
    label: "Students received scholarships",
  },
  {
    id: 4,
    icon: <FileText className="w-6 h-6 text-yellow-700" />,
    value: "7L+",
    label: "Tests Enrolled",
  },
];

const ScholarshipSection = () => {
  return (
    <section className="max-w-6xl m-auto bg-amber-50 py-12 px-2 md:px-10 lg:px-16 rounded-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 opacity-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Trophy"
          className="w-96"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Win upto 90% Scholarship
        </h2>
        <p className="text-lg text-gray-800 mt-2 mb-8">
          Take the PW Scholarship Test (PWSAT)
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {stat.icon}
              <h3 className="text-xl font-bold text-gray-900 mt-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
          Know More
        </button>
      </div>
    </section>
  );
};

export default ScholarshipSection;
