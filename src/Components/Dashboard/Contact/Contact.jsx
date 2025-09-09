import React, { useState, useRef } from "react";
import logo from "../../../assets/logo.png"; // Use your logo file
// import noticeImg from "../../../assets/notice_illustration.svg"; 

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
  {
    q: "How to change mobile number on PW App ?",
    a: "Open Profile Settings in the PW App and update your registered mobile number. Verify via OTP to save changes.",
  },
  {
    q: "How to change mobile number on PW App ?",
    a: "Open Profile Settings in the PW App and update your registered mobile number. Verify via OTP to save changes.",
  },
];

const MyIssuesFilter = ({ activeStatus, setActiveStatus }) => {
  const filterOptions = [
    { label: "All", count: 0 },
    { label: "Open", count: 0 },
    { label: "Resolved", count: 0 },
  ];

  return (
    <div className="flex gap-3 justify-end mb-8">
      {filterOptions.map((opt, i) => (
        <button
          key={opt.label}
          onClick={() => setActiveStatus(i)}
          className={`px-6 py-2 rounded-full border font-semibold transition text-sm ${
            activeStatus === i
              ? "text-indigo-600 border-indigo-400 shadow-sm"
              : "text-gray-900 border-gray-300"
          }`}
        >
          {opt.label} ({opt.count})
        </button>
      ))}
    </div>
  );
};

const Contact = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(null);
  const imgInputRef = useRef();
  const [activeStatus, setActiveStatus] = useState(0);

  const faqsToShow = showAll ? faqs : faqs.slice(0, 4);
  const defaultIssuesImg =
    "https://cdn.dribbble.com/users/1803663/screenshots/5617195/searching-minimal.gif";

  return (
    <>
      <div className="w-full flex md:flex-row justify-between items-start p-4 bg-white">
        {/* Tabs Section */}
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

        {/* Right Section: "My Issues" tab shows filter buttons, others show search */}
        <div className="w-full md:w-auto">
          {activeTab === 1 ? (
            <MyIssuesFilter
              activeStatus={activeStatus}
              setActiveStatus={setActiveStatus}
            />
          ) : (
            <form className="relative">
              <input
                type="text"
                placeholder="Type your query here..."
                className="w-full pl-4 pr-10 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 transition outline-none text-gray-700 bg-white mt-2"
              />
              <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
                <svg
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx={11} cy={11} r={8}></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </form>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 1 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="flex flex-col items-center gap-4">
            {/* Issue Image + Upload */}
            <img
              src={uploadedImg ? URL.createObjectURL(uploadedImg) : defaultIssuesImg}
              alt="No Issues"
              className="w-56 h-56 object-contain"
            />
            <div className="text-center mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">No issues found!</h3>
            </div>
          </div>
        </div>
      ) : activeTab === 2 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="flex flex-col items-center gap-4">
            {/* Issue Image + Upload */}
            <img
              src={uploadedImg ? URL.createObjectURL(uploadedImg) : defaultIssuesImg}
              alt="No notice Found "
              className="w-56 h-56 object-contain"
            />
            <div className="text-center mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">No Notice for Today!</h3>
            </div>
          </div>
        </div>
        
      ) : (
        // Help Centre tab: show FAQ and contact section
        <>
          {/* FAQ Section */}
          <section className="w-full mx-auto py-8">
            <h2 className="text-xl md:text-xl font-semibold mb-6 flex items-start gap-2">
              Tell us how we can help
              <span className="text-2xl">👋</span>
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
              <h2 className="font-semibold text-xl md:text-xl mb-2">Still need help, Have Queries</h2>
              <p className="text-gray-600 mb-7 text-lg">Have Queries? Please get in touch & we will happy to help you</p>
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