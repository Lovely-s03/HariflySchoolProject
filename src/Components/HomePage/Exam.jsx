import React from "react";
import { ArrowRight } from "lucide-react";
import neet from '../../assets/neet1.webp'
import iit from '../../assets/iit.webp'
import school from '../../assets/bag.webp'
import upsc from '../../assets/upsc.webp'
import job from '../../assets/job.webp'
import defence from '../../assets/defence.webp'

const categories = [
  {
    title: "NEET",
    tags: ["class 11", "class 12", "Dropper"],
    icon: neet,
    // bg: "bg-pink-50",
  },
  {
    title: "IIT JEE",
    tags: ["class 11", "class 12", "Dropper"],
    icon: iit,
    // bg: "bg-yellow-50",
  },
  {
    title: "School Preparation",
    tags: ["class 6", "class 7", "class 8", "More"],
    icon: school,
    // bg: "bg-amber-50",
  },
  {
    title: "UPSC",
    tags: [],
    icon: upsc,
    // bg: "bg-violet-50",
  },
  {
    title: "Govt Job Exams",
    tags: ["SSC", "Banking", "Teaching", "Judiciary"],
    icon: job,
    // bg: "bg-blue-50",
  },
  {
    title: "Defence",
    tags: ["NDA", "CDS", "AFCAT", "Agniveer"],
    icon: defence,
    // bg: "bg-cyan-50",
  },
];

const CategoryCard = ({ title, tags, icon, bg }) => (
  <div className="max-w-6xl bg-white shadow rounded-xl p-8 flex justify-between items-center hover:shadow-lg transition hover:border-[1px]">
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-3 mt-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="border px-5 py-2 rounded-full text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="flex items-center gap-2 mt-4 text-gray-700 font-medium hover:text-indigo-600">
        Explore Category <ArrowRight size={18} />
      </button>
    </div>
   
   <div className={`w-20 h-20 flex items-center justify-center rounded-full ${bg}`}>
      {typeof icon === "string" ? (
        <img src={icon} alt={title} className="" />
      ) : (
        <div className="  text-gray-700">{icon}</div>
      )}
    
      
    </div>
  </div>
);

export default function Exam() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-28">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Exam Categories</h2>
        <p className="text-gray-600 mt-2">
          PW is preparing students for 35+ exam categories. Scroll down to find the one you are preparing for
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </div>

    </section>
  );
}
