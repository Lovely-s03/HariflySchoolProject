import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Why should I join Arjuna JEE Test Pass and how will this be helpful?",
    answer: "Arjuna JEE Test Pass provides structured practice with mock tests designed to simulate real exam scenarios."
  },
  {
    question: "Can I reattempt the test?",
    answer: "Yes, you can reattempt the test as per the rules of the test series."
  },
  {
    question: "What is the difficulty level of test series included in Arjuna JEE Test Pass?",
    answer: "The difficulty level varies from basic to advanced, matching JEE standards."
  },
  {
    question: "Do I need to pay for individual ONLINE test series after buying Test Pass?",
    answer: "No, once you buy the Test Pass, all included test series are accessible."
  },
  {
    question: "What is the release schedule for Arjuna JEE Test Pass mock tests?",
    answer: "Mock tests are released according to the academic schedule mentioned in the package."
  },
  {
    question: "What is refund policy?",
    answer: "Refunds are subject to company policies and conditions applied at the time of purchase."
  },
  {
    question: "What is the validity of test series included in Arjuna JEE Test Pass?",
    answer: "The validity is generally up to the JEE exam cycle."
  },
  {
    question: "How can I pay the fee for Arjuna JEE Test Pass?",
    answer: "You can pay via UPI, debit/credit card, or net banking."
  },
  {
    question: "What should I do if I can't access my purchased Test Series in Test Pass?",
    answer: "Please contact support with your registered details for quick resolution."
  }
];

const FAQSection1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6">FAQ's</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg bg-blue-50"
          >
            <button
              className="flex justify-between items-center w-full px-4 py-3 text-left font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection1;
