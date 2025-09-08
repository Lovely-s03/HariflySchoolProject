import React from "react";
import { BookOpen, FileText, ClipboardList, BookMarked, Home } from "lucide-react";

const items = [
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Blog",
    desc: "Read Our Latest Blogs",
    bg: "bg-blue-50",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-red-600" />,
    title: "Courses",
    desc: "Access Our Latest Courses",
    bg: "bg-red-50",
  },
  {
    icon: <BookMarked className="w-6 h-6 text-green-600" />,
    title: "Test Series",
    desc: "Explore JEE 2026 Test Series",
    bg: "bg-green-50",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    title: "Books",
    desc: "Find Preparation Books",
    bg: "bg-indigo-50",
  },
];

const Syllabus = () => {
  return (
    <section className="w-full  px-4 py-10 bg-[#eeeef0]">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Home className="w-4 h-4" />
          <span>/</span>
          <span className="text-gray-700 text-[18px]">IIT JEE</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
          IIT JEE Main And Advanced 2026, Syllabus, Exam Pattern, Exam Dates, Online Courses
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 max-w-3xl mb-8 text-sm md:text-base">
          Get all the latest updates on IIT JEE 2026 including exam dates, syllabus,
          eligibility, exam pattern, toppers list, JoSAA counselling, and top engineering
          colleges. Explore online coaching for Class 11, 12, and droppers with preparation
          tips for IIT JEE Main and Advanced.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1 cursor-pointer`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-full">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
