import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "JEE 2026 will be conducted by which IIT?",
    answer: "The organizing IIT for JEE Advanced 2026 will be announced later.",
  },
  {
    question: "What are the JEE 2026 exam dates for Main?",
    answer: "The exact exam dates will be released by NTA on the official website.",
  },
  {
    question: "Who can appear for JEE 2026?",
    answer: "Students who have completed their Class 12 or equivalent with Physics, Chemistry, and Mathematics are eligible.",
  },
  {
    question: "How to prepare for JEE 2026?",
    answer: "Follow a structured study plan, focus on NCERTs, practice previous years’ papers, and take mock tests regularly.",
  },
  {
    question: "What does the JEE Main 2026 syllabus cover?",
    answer: "It covers Physics, Chemistry, and Mathematics topics from Class 11 and 12 as per NCERT curriculum.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="  w-full px-4  py-10 bg-white">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          IIT JEE Main And Advanced 2026 FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="text-sm md:text-base font-medium text-gray-800 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 py-3  text-sm md:text-base bg-white border-t border-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
