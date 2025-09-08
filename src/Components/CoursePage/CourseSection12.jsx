import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import arjun1 from "../../assets/arjun2.0.jpeg";
import arjun2 from "../../assets/powerbatch.png";

const courses = [
  {
    id: 1,
    title: "Lakshya  JEE 3.0 2026",
    img: arjun1,
    for: "For JEE Aspirants",
    start: "14 Jul, 2025",
    end: "30 Jun, 2027",
    price: "₹4,500",
    oldPrice: "₹5,000",
    discount: "Discount of 10% applied",
    btnText: "BUY NOW",
    link: "#",
    tag: "Hinglish",
  },
  {
    id: 2,
    title: "Lakshya  JEE Hindi 2.0 2026",
    img: arjun1,
    for: "IIT JEE",
    start: "16 Jul, 2025",
    end: "30 Jun, 2027",
    price: "₹2,999",
    oldPrice: "₹4,800",
    discount: "Discount of 38% applied",
    btnText: "BUY NOW",
    link: "#",
    tag: "Hindi",
  },
  {
    id: 3,
    title: "Lakshya  Power Batch 2027",
    img: arjun2,
    btnText: "BUY NOW",
    link: "#",
    fullImage: true,
  },
];

const CourseSection12 = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Class 12 IIT JEE Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border rounded-lg shadow-sm hover:shadow-lg transition duration-300 bg-white"
            >
              
              {course.fullImage ? (
                <div className="flex flex-col h-full">
                
                  <div className="flex-[0.9] overflow-hidden rounded-t-lg">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-[0.2] flex justify-between items-center px-4">
                    <a
                      href={course.link}
                      className="py-2 px-5 xl:px-10 xl:py-2 text-sm md:text-[20px] font-semibold rounded-lg border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white transition"
                    >
                      Explore
                    </a>
                    <a
                      href={course.link}
                      className="py-2 px-5 xl:px-10 xl:py-[10px] text-sm md:text-base font-semibold rounded-lg bg-[#000080] text-white hover:bg-[#000080] transition"
                    >
                      {course.btnText}
                    </a>
                  </div>
                </div>
              ) : (
                <>
              
                  <div className="w-full h-56 overflow-hidden rounded-t-lg">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-lg">{course.title}</h3>

                    {course.for && (
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <FaUsers className="text-gray-400" /> {course.for}
                      </p>
                    )}

                    {course.start && course.end && (
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <MdDateRange className="text-gray-400" />
                        Starts on {course.start} – Ends on {course.end}
                      </p>
                    )}

                    {course.discount && (
                      <p className="text-sm text-green-600">
                        {course.discount}
                      </p>
                    )}

                    {course.price && (
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-purple-600">
                          {course.price}
                        </span>
                        {course.oldPrice && (
                          <span className="text-sm line-through text-gray-500">
                            {course.oldPrice}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <a
                      href={course.link}
                      className="py-2 px-5 xl:px-10 xl:py-2 text-sm md:text-[20px] font-semibold rounded-lg border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white transition"
                    >
                      Explore
                    </a>
                    <a
                      href={course.link}
                      className="py-2 px-5 xl:px-10 xl:py-[10px] text-sm md:text-base font-semibold rounded-lg bg-[#000080] text-white hover:bg-[#000080] transition"
                    >
                      {course.btnText}
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-purple-100 text-[#000080] font-medium rounded-md hover:bg-purple-200 transition">
            View All Batches
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection12;
