import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import kota from '../../../assets/kota.jpeg'
import patna from '../../../assets/patna image.jpg'
import Noida from '../../../assets/noida.jpeg'
import Kolkata from '../../../assets/kolkata.jpeg'

const cities = [
  { name: "Kota", centres: 3, image: kota },
  { name: "Patna", centres: 6, image: patna },
  { name: "Noida", centres: 2, image: Noida},
  { name: "New Delhi", centres: 11, image: Noida },
  { name: "Kolkata", centres: 5, image: Kolkata },
  { name: "Ahmedabad", centres: 6, image: Kolkata },
  { name: "Lucknow", centres: 7, image: Kolkata },
  { name: "Hyderabad", centres: 8, image: kota },
];

const ExploreByCity = () => {
  return (
    <div className="w-full px-4 md:px-8 py-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Explore by City
      </h2>
      <p className="text-gray-500 mt-2 mb-6">
        Explore PW Centres in your preferred city
      </p>

      {/* Search Bar */}
      <div className="max-w-md mx-auto flex items-center gap-2 bg-white shadow-md rounded-lg p-3 mb-10">
        <FaSearchLocation className="text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Find city or pin code"
          className="flex-1 outline-none text-gray-700"
        />
        <button className="flex items-center gap-1 text-purple-600 font-medium whitespace-nowrap">
          <IoLocationSharp />
          Near me
        </button>
      </div>

      {/* Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-10 max-w-5xl mx-auto">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white border border-gray-50 shadow-md rounded-xl p-3 flex items-center gap-3 hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-14 h-14 rounded-md object-cover"
            />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800">{city.name}</h3>
              <p className="text-sm text-gray-500">{city.centres} Centres</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition">
        View All Cities
      </button>
    </div>
  );
};

export default ExploreByCity;
