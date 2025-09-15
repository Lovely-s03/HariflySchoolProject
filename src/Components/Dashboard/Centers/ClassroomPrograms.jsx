

import React, { useState } from "react";
import { FaLocationArrow, FaSchool, FaClipboardList } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import patna from "../../../assets/patna image.jpg";

// Sample city data
const cities = [{ name: "Patna", centres: 6, img: patna }];

// Sample centre types
const centreTypes = [
  { code: "VP", name: "Vidyapeeth", desc: "Complete Offline centre", color: "bg-pink-100 text-pink-600" },
  { code: "PS", name: "Pathshala", desc: "Hybrid Learning centre", color: "bg-purple-100 text-purple-600" },
  { code: "TC", name: "PW Tuition", desc: "Offline Tuition centre", color: "bg-blue-100 text-blue-600" },
  { code: "RP", name: "Residential", desc: "Vidyapeeth Residential Program (VP-RP)", color: "bg-yellow-100 text-yellow-600" },
];

// Sample batches
const batches = [
  { code: "11", name: "Class 11 Batch", desc: "For students moving to Class 11" },
  { code: "12", name: "Class 12 Batch", desc: "For students moving to Class 12" },
  { code: "RD", name: "Repeater Dropper Batch", desc: "For JEE/NEET droppers" },
  { code: "FD", name: "Foundation Batch", desc: "For Class 9th & 10th" },
];

const ClassroomPrograms = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className="w-full bg-white py-12">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
        Discover the Perfect Offline Classroom Program for yourself
      </h2>

      {/* Options Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
        {/* Centres Near You */}
        <div className="flex flex-col items-center text-center cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-3 shadow-sm">
            <FaLocationArrow className="text-indigo-600 text-3xl" />
          </div>
          <h3 className="text-gray-800 font-medium">Centres Near You</h3>
          <p className="text-sm text-gray-500">Using your location</p>
        </div>

        {/* Explore by City */}
        <div className="flex flex-col items-center text-center relative">
          <div
            onClick={() => toggleDropdown("city")}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-3 shadow-sm">
              <IoLocationSharp className="text-red-500 text-3xl" />
            </div>
            <h3 className="flex items-center gap-1 text-gray-800 font-medium">
              Explore by City{" "}
              {openDropdown === "city" ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h3>
            <p className="text-sm text-gray-500">171 Cities</p>
          </div>

          {/* City Dropdown */}
          {openDropdown === "city" && (
            <div className="absolute top-32 bg-white w-64 shadow-lg rounded-lg border p-3 z-10">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                >
                  <img
                    src={city.img}
                    alt={city.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-800 font-medium">{city.name}</p>
                    <p className="text-xs text-gray-500">
                      {city.centres} Centres
                    </p>
                  </div>
                </div>
              ))}
              <button className="w-full text-sm font-medium text-gray-700 border-t mt-2 pt-2 flex justify-between items-center">
                VIEW ALL CITIES <span>→</span>
              </button>
            </div>
          )}
        </div>

        {/* Explore by Centre Type */}
        <div
          className="flex flex-col items-center text-center cursor-pointer relative"
          onClick={() => toggleDropdown("centre")}
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-3 shadow-sm">
            <FaSchool className="text-blue-500 text-3xl" />
          </div>
          <h3 className="flex items-center gap-1 text-gray-800 font-medium">
            Explore by Centre Type{" "}
            {openDropdown === "centre" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h3>
          <p className="text-sm text-gray-500">4 Centre Types</p>

          {/* Centre Dropdown */}
          {openDropdown === "centre" && (
            <div className="absolute top-32 bg-white w-72 shadow-lg rounded-lg border p-3 z-10">
              {centreTypes.map((centre, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${centre.color}`}
                  >
                    {centre.code}
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{centre.name}</p>
                    <p className="text-xs text-gray-500">{centre.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Explore Batches */}
        <div
          className="flex flex-col items-center text-center cursor-pointer relative"
          onClick={() => toggleDropdown("batches")}
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-3 shadow-sm">
            <FaClipboardList className="text-yellow-500 text-3xl" />
          </div>
          <h3 className="flex items-center gap-1 text-gray-800 font-medium">
            Explore Batches{" "}
            {openDropdown === "batches" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h3>
          <p className="text-sm text-gray-500">4 Batches</p>

          {/* Batches Dropdown */}
          {openDropdown === "batches" && (
            <div className="absolute top-32 bg-white w-72 shadow-lg rounded-lg border p-3 z-10">
              {batches.map((batch, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 p-3 hover:bg-gray-50 rounded-md cursor-pointer"
                >
                  <p className="text-gray-800 font-medium">{batch.name}</p>
                  <p className="text-xs text-gray-500">{batch.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ClassroomPrograms;
