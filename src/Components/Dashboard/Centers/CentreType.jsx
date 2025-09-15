// CentreType.jsx
import React from "react";
import center from '../../../assets/centers.webp'
const centres = [
  {
    id: 1,
    type: "Complete Offline centre",
    typeColor: "bg-pink-600",
    borderColor: "border-pink-300",
    title: "Vidyapeeth Centres",
    titleColor: "text-pink-600",
    description:
      "PW Vidyapeeth offers a blend of traditional classroom coaching & modern technology",
    img: center, 
    features: [
      { name: "Vidyapeeth Classroom" },
      { name: "Marks Improvement Plan" },
      { name: "All India Test Series" },
      { name: "Fastrack" },
    ],
  },
  {
    id: 2,
    type: "Hybrid Learning centre",
    typeColor: "bg-indigo-600",
    borderColor: "border-indigo-300",
    title: "Pathshala Centres",
    titleColor: "text-indigo-600",
    description:
      "PW Pathshala offers a hybrid learning programme with our learning experts",
    img: center, 
    features: [
      { name: "Pathshala Classroom" },
      { name: "Batch Prime" },
      { name: "All India Test Series" },
      { name: "Marks Improvement" },
    ],
  },
   {
    id: 3,
    type: "Complete Offline centre",
    typeColor: "bg-pink-600",
    borderColor: "border-pink-300",
    title: "Vidyapeeth Centres",
    titleColor: "text-pink-600",
    description:
      "PW Vidyapeeth offers a blend of traditional classroom coaching & modern technology",
    img: center, 
    features: [
      { name: "Vidyapeeth Classroom" },
      { name: "Marks Improvement Plan" },
      { name: "All India Test Series" },
      { name: "Fastrack" },
    ],
  },
   {
    id: 4,
    type: "Complete Offline centre",
    typeColor: "bg-pink-600",
    borderColor: "border-pink-300",
    title: "Vidyapeeth Centres",
    titleColor: "text-pink-600",
    description:
      "PW Vidyapeeth offers a blend of traditional classroom coaching & modern technology",
    img: center, 
    features: [
      { name: "Vidyapeeth Classroom" },
      { name: "Marks Improvement Plan" },
      { name: "All India Test Series" },
      { name: "Fastrack" },
    ],
  },
];

const CentreType = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Explore by Centre Type
        </h2>
        <p className="text-gray-600">
          Explore PW Batches by preferred center type
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {centres.map((centre) => (
          <div
            key={centre.id}
            className={`relative border ${centre.borderColor} rounded-lg shadow-md hover:shadow-lg transition bg-white`}
          >
            {/* Tag */}
            <span
              className={`absolute -top-3 left-1/2 transform -translate-x-1/2 text-white text-sm px-3 py-1 rounded-full ${centre.typeColor}`}
            >
              {centre.type}
            </span>

            {/* Image */}
            <img
              src={centre.img}
              alt={centre.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Content */}
            <div className="p-6">
              <h3
                className={`text-xl font-semibold mb-2 ${centre.titleColor}`}
              >
                {centre.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{centre.description}</p>

              <hr className="mb-4" />

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {centre.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 text-sm text-gray-700"
                  >
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition">
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CentreType;
