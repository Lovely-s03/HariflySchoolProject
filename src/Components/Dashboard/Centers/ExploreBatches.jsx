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
    title: "VP MIP (Offline Test + Real Test) Class 12th NEET 2026",
    img: banner,
    subtitle: "Test Only",
    price: "₹ 7499",
    oldPrice: "14000",
    discount: "Discount of 46% applied",
  },
   {
    id: 3,
    tag: "MIP",
    tagColor: "bg-pink-600",
    title: "VP MIP (Offline Test + Real Test) Class 12th NEET 2026",
    img: banner,
    subtitle: "Test Only",
    price: "₹ 7499",
    oldPrice: "14000",
    discount: "Discount of 46% applied",
  },
];

const ExploreBatches = () => {
  return (
    <section className="max-w-6xl m-auto py-12 md:px-10 lg:px-16 bg-white">
     
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Explore Batches</h2>
        <p className="text-gray-600 mt-1">
          Select the batch that suits your needs
        </p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="relative border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition bg-white"
          >
          
            <span
              className={`absolute -top-3 left-0 px-3 py-1 text-xs text-white font-semibold rounded-tr-md rounded-bl-md ${batch.tagColor}`}
            >
              {batch.tag}
            </span>

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
                <p className="text-lg font-bold text-[#000080]">
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

              <div className="flex space-x-2">
                <button className="flex-1 border border-[#000080] text-[#000080] py-2 rounded-md hover:bg-purple-50 transition">
                  EXPLORE
                </button>
                <button className="flex-1 bg-[#000080] text-white py-2 rounded-md hover:bg-[#1c1cec] transition">
                  BOOK A SEAT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-purple-100 text-[#000080] font-medium rounded-md hover:bg-purple-200 transition">
          View All Batches
        </button>
      </div>
    </section>
  );
};

export default ExploreBatches;
