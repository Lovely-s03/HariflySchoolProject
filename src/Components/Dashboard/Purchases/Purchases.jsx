
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import card from "../../../assets/coursegla.jpeg";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "NEET Bridge Course 2026",
    date: "12 Sep'25",
    price: "Free",
    status: "SUCCESS",
    image: card,
  },
  {
    id: 2,
    title: "Complete PHYSICS by Akhil Sir",
    date: "11 Sep'25",
    price: "Free",
    status: "SUCCESS",
    image: card,
  },
  {
    id: 3,
    title: "SAMARAN NEET",
    date: "10 Sep'25",
    price: "Free",
    status: "SUCCESS",
    image: card,
  },
  {
    id: 4,
    title: "SAMARAN NEET",
    date: "10 Sep'25",
    price: "Free",
    status: "SUCCESS",
    image: card,
  },
  {
    id: 5,
    title: "SAMARAN NEET",
    date: "10 Sep'25",
    price: "Free",
    status: "SUCCESS",
    image: card,
  },
   {
    id: 6,
    title: "SAMARAN NEET",
    date: "10 Sep'25",
    price: "Free",
    status: "SUCCESS",
    image: card,
  },
   {
    id: 7,
    title: "SAMARAN NEET",
    date: "10 Sep'25",
    price: "Free",
    status: "SUCCESS",
    image: card,
  },
];

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
  return (
    <div
       onClick={() => navigate(`/dashboard/purchases/${course.id}`)}
      className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full p-4 border border-0 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 mb-6"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={course.image}
          alt={course.title}
          className="w-40 h-24 sm:w-48 sm:h-28 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Status */}
        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md w-fit mb-2">
          {course.status}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
          {course.title}
        </h3>

        {/* Date & Price */}
        <p className="text-sm text-gray-500 mt-1">
          {course.date} •{" "}
          <span className="text-green-600 font-medium">{course.price}</span>
        </p>
      </div>

      {/* Arrow */}
      <FiChevronRight className="text-gray-400 text-xl hidden sm:block transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-gray-600" />
    </div>
  );
};

const Purchases = () => {
  return (
    <section className="max-w-7xl mx-auto px-2 py-6 space-y-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  );
};

export default Purchases;
