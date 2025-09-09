import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import logo from "../../../assets/logo.png";
import noDataAnimation from "../../../assets/notfound.json";

const tabs = [
  { id: 0, label: "Help Centre" },
  { id: 1, label: "My Issues" },
  { id: 2, label: "Notice Board" },
];

const faqs = [
  {
    q: "How to join live class?",
    a: "To join a live class, navigate to the schedule and select the active session. Follow on-screen instructions for access.",
  },
  {
    q: "How To Track Pw Order/Order Status ?",
    a: "Track your order status through the Orders section on your profile page, where updates will be listed.",
  },
  {
    q: "How to find lecture planner, class schedule and test planner?",
    a: "Go to the Planner tab to view lecture schedules and test planner, which are updated regularly.",
  },
  {
    q: "How to change mobile number on PW App ?",
    a: "Open Profile Settings in the PW App and update your registered mobile number. Verify via OTP to save changes.",
  },
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqsToShow = showAll ? faqs : faqs.slice(0, 4);

  return (
    <>
      {/* Tabs */}
      <div className="w-full flex md:flex-row justify-between items-start p-4 bg-white">
        <div className="flex bg-blue-50 rounded-xl p-2 gap-2 md:gap-6 mb-4 md:mb-0">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`text-sm font-semibold px-4 py-4 rounded-lg transition ${
                activeTab === idx
                  ? "text-indigo-600 bg-white shadow"
                  : "text-gray-900 bg-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* My Issues */}
      {activeTab === 1 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <Lottie animationData={noDataAnimation} loop={true} className="w-64 h-64" />
          <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">No issues found!</h3>
          </div>
        </div>
      ) : activeTab === 2 ? (
        /* Notice Board */
        <div className="flex flex-col items-center justify-center py-16">
          <Lottie animationData={noDataAnimation} loop={true} className="w-64 h-64" />
          <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">No Notice for Today!</h3>
          </div>
        </div>
      ) : (
        <>
          {/* FAQ Section */}
          <section className="w-full mx-auto py-8">
            <h2 className="text-xl md:text-xl font-semibold mb-6 flex items-start gap-2">
              Tell us how we can help <span className="text-2xl">👋</span>
            </h2>
            <div className="flex flex-col gap-4">
              {faqsToShow.map((faq, idx) => (
                <div key={idx} className="bg-blue-50 rounded-xl">
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full flex justify-between items-center px-6 pt-2 text-left text-sm font-medium text-gray-900 rounded-xl focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-200 ${
                        openIdx === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`px-6 pb-4 text-gray-700 text-base overflow-hidden transition-max-height duration-300 ease-in-out ${
                      openIdx === idx ? "max-h-40" : "max-h-0"
                    }`}
                    style={{ transition: "max-height 0.3s ease" }}
                  >
                    {openIdx === idx && faq.a}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1"
              >
                {showAll ? "Show Less" : "Show More"}
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    showAll ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full mt-8 flex items-center justify-between gap-6 mb-8">
            <div className="flex-1">
              <h2 className="font-semibold text-xl md:text-xl mb-2">
                Still need help, Have Queries
              </h2>
              <p className="text-gray-600 mb-7 text-lg">
                Have Queries? Please get in touch & we will happy to help you
              </p>
              <button className="bg-indigo-600 text-white py-2 px-8 rounded-lg font-semibold text-lg transition hover:bg-indigo-700 focus:outline-none">
                Contact Us
              </button>
            </div>
            <div className="flex-shrink-0">
              <img src={logo} className="w-32 md:w-40 object-contain" alt="Support" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
