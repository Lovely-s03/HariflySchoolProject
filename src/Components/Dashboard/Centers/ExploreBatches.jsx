// Batches.jsx
import React from "react";
import banner from '../../../assets/coursegla.jpeg'
const batches = [
  {
    id: 1,
    tag: "MIP",
    tagColor: "bg-pink-600",
    title: "VP MIP (Offline Test + Real Test) Class 12th NEET 2026",
    img: banner,
    subtitle: "Test Only",
    price: "₹ 7499",
    oldPrice: "14000",
    discount: "Discount of 46% applied",
  },
  {
    id: 2,
    tag: "MIP",
    tagColor: "bg-pink-600",
    title:
      "VP MIP (Offline Test + Doubt Support + Real Test) Class 12th NEET 2026",
    img: banner, 
    subtitle: "Doubt+Test",
    price: "₹ 10999",
    oldPrice: "23000",
    discount: "Discount of 52% applied",
  },
  {
    id: 3,
    tag: "VIDYAPEETH",
    tagColor: "bg-red-600",
    title: "Vidyapeeth 12th NEET (Target 2026)",
    img: banner, 
    subtitle: "For Class 12th NEET II 1 Year Program",
    price: "₹ 5000",
    oldPrice: null,
    discount: null,
  },
];

const ExploreBatches = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Explore Batches</h2>
        <p className="text-gray-600 mt-1">
          Select the batch that suits your needs
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="relative border rounded-lg shadow-md hover:shadow-lg transition bg-white"
          >
            {/* Ribbon Tag */}
            <span
              className={`absolute -top-3 left-0 px-3 py-1 text-xs text-white font-semibold rounded-tr-md rounded-bl-md ${batch.tagColor}`}
            >
              {batch.tag}
            </span>

            {/* Share Icon (dummy) */}
            <span className="absolute top-3 right-3 text-gray-500 cursor-pointer">
              &#x1F517;
            </span>

            {/* Image */}
         

            {/* Content */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2">
                {batch.title}
              </h3>
                 <img
              src={batch.img}
              alt={batch.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
              <p className="text-md font-semibold my-2 flex items-center">
                👤 {batch.subtitle}
              </p>

              {/* Pricing */}
              <div className="mb-4">
                <p className="text-lg font-bold text-purple-700">
                  {batch.price}
                </p>
                {batch.oldPrice && (
                  <p className="line-through text-gray-400 text-sm">
                    {batch.oldPrice}
                  </p>
                )}
                {batch.discount && (
                  <span className="inline-block mt-1 text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                    {batch.discount}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-md hover:bg-purple-50 transition">
                  EXPLORE
                </button>
                <button className="flex-1 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                  BOOK A SEAT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-purple-100 text-purple-700 font-medium rounded-md hover:bg-purple-200 transition">
          View All Batches
        </button>
      </div>
    </section>
  );
};

export default ExploreBatches;
