import React from "react";
import { ArrowRight } from "lucide-react";
import book from '../../assets/books.webp'
import ncrt from '../../assets/ncert.webp'
import notes from '../../assets/notes.webp'

const resources = [
  {
    title: "Reference Books",
    desc: "Our experts have created thorough study materials that break down complicated concepts into easily understandable content",
    img: book, 
    bg: "bg-blue-50 hover:bg-blue-100",
  },
  {
    title: "NCERT Solutions",
    desc: "Unlock academic excellence with Physics Wallah’s NCERT Solutions which provides you step-by-step solutions",
    img: ncrt,
    bg: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    title: "Notes",
    desc: "Use Physics Wallah’s detailed study materials that simplify complex ideas into easily understandable language",
    img: notes,
    bg: "bg-green-50 hover:bg-green-100",
  },
];

const StudyResources = () => {
  return (
    <div className="bg-white py-5 lg:py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Study Resources</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          A diverse array of learning materials to enhance your educational journey.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {resources.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-xl p-6 flex flex-col justify-between relative group 
                        transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105`}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Image */}
            <div className="mt-6 flex justify-center">
              <img src={item.img} alt={item.title} className="h-32 object-contain" />
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyResources;
