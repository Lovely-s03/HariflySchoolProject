import React, { useState, useRef } from "react";
import logo from "../../../assets/logo.png"
// import noticeImg from "../../../assets/notice_illustration.svg";
import noDataAnimation from "../../../assets/notfound.json";
import Lottie from "lottie-react";
import download from "../../../assets/download.png";
import glare from "../../../assets/glare_logo.webp"

const tabs = [
  { id: 0, label: "Help Centre" },
  { id: 1, label: "My Issues" },
  { id: 2, label: "Notice Board" },
];

const faqs = [
  {
    q: "What courses does Glare30 offer?",
    a: "Glare30 offers coaching for 11th and 12th grades in both medical and non-medical streams, foundation courses for grades 6 to 10, IIT-JEE preparation, and Olympiad training.",
  },
  {
    q: "How can I contact Glare30 for enrollment or queries?",
    a: "You can contact Glare30 at phone numbers 011 4993 6308 or +91 9811177477, or email [Support@gmail.com](mailto:Support@gmail.com). They are available Monday to Saturday, 8 AM to 8 PM.",
  },
  {
    q: " What is the admission process?",
    a: "Typically, you need to fill out an enrollment form either online or in person, provide basic details, and pay the required fees. For specific procedures, contact the institute directly",
  },
  {
    q: "Are there online classes available?",
    a: "Check directly with the institute for current availability of online or offline classes, as it may vary depending on the situation.",
  },
  {
    q: "What study materials are provided?",
    a: "Glare30 provides coaching notes, problem-solving sessions, mock tests, and performance tracking as study aids.",
  },
  {
    q: "What are the fee details and payment modes?",
    a: "Fee structure and payment options can be obtained by contacting the institute directly, as they may change from time to time.",
  },
];

const MyIssuesFilter = ({ activeStatus, setActiveStatus, filterOptions }) => {
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

  // Define queries with status for My Issues tab
  const issues = [
    {
      title: "Enrollment or admission queries",
      description: "Get assistance with enrollment and admission procedures.",
      status: "open",
    },
    {
      title: "Fee payment and refunds",
      description: "Information on fee payments and refund policies.",
      status: "resolved",
    },
    {
      title: "Class attendance or schedule conflicts",
      description: "Help with managing attendance and resolving schedule conflicts.",
      status: "open",
    },
    {
      title: "Academic counseling or support",
      description: "Access academic counseling and support services.",
      status: "resolved",
    },
    {
      title: "Technical issues with digital classes or materials",
      description: "Report and get support for technical issues related to digital learning.",
      status: "open",
    },
  ];

  // Calculate counts for filter buttons
  const totalCount = issues.length;
  const openCount = issues.filter((i) => i.status === "open").length;
  const resolvedCount = issues.filter((i) => i.status === "resolved").length;

  // Prepare filter options to pass to MyIssuesFilter
  const filterOptions = [
    { label: "All", count: totalCount },
    { label: "Open", count: openCount },
    { label: "Resolved", count: resolvedCount },
  ];

  // Filter issues based on activeStatus (0 = all, 1 = open, 2 = resolved)
  const filteredIssues =
    activeStatus === 0
      ? issues
      : issues.filter((i) =>
          activeStatus === 1 ? i.status === "open" : i.status === "resolved"
        );

  const faqsToShow = showAll ? faqs : faqs.slice(0, 4);

  return (
    <>
      <div className="bg-white p-8">
        <div className="w-full flex flex-col xl:flex-row  gap-5 xl:gap-0 justify-between items-start p-4 ">
          {/* Tabs Section */}
          <div className="w-full xl:w-auto flex bg-blue-50 rounded-xl p-2 gap-2 md:gap-6 mb-4 md:mb-0">
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
          <div className="w-full xl:w-auto">
            {activeTab === 1 ? (
              <MyIssuesFilter
                activeStatus={activeStatus}
                setActiveStatus={setActiveStatus}
                filterOptions={filterOptions}
              />
            ) : (
              <form className="relative">
                <input
                  type="text"
                  placeholder="Type your query here..."
                  className="w-full pl-4 pr-10 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 transition outline-none text-gray-700 bg-white"
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
            <div className="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
              {filteredIssues.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                >
                  <div
                    className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold ${
                      card.status === "open"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-center">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-center">{card.description}</p>
                  <p
                    className={`mt-2 font-semibold ${
                      card.status === "open" ? "text-blue-600" : "text-green-600"
                    }`}
                  >
                    {card.status.charAt(0).toUpperCase() + card.status.slice(1)}
                  </p>
                </div>
              ))}
            </div>

            
          </div>
        ) : activeTab === 2 ? (
          <div className="flex flex-col items-center justify-center py-16">
            {/* Notice Board Cards */}
            <div className="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
              {[
                {
                  title: "Exam schedules and dates",
                  description:
                    "Get the latest updates on upcoming exam dates and schedules.",
                },
                {
                  title: "Holiday notifications",
                  description:
                    "Stay informed about upcoming holidays and breaks.",
                },
                {
                  title: "Timetable changes or class cancellations",
                  description:
                    "Alerts on any changes to the regular timetable or class cancellations.",
                },
                {
                  title: "Results declaration dates",
                  description: "Know when your exam results will be declared.",
                },
                {
                  title: "Workshop or seminar info",
                  description: "Details about upcoming workshops and seminars.",
                },
                {
                  title: "Fee due dates or reminders",
                  description:
                    "Keep track of your fee payment deadlines and reminders.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-blue-600 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-center">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-center">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Help Centre tab: show FAQ and contact section
          <>
            {/* FAQ Section */}
            <section className="w-full mx-auto py-4">
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
            <div className="rounded-lg flex-col text-center md:text-left md:flex-row shadow-md p-6 w-full mt-8 flex items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="font-semibold text-xl md:text-xl mb-2">
                  Still need help, Have Queries
                </h2>
                <p className="text-gray-600 mb-7 text-lg">
                  Support availability: Monday to Saturday from 8 AM to 8 PM
                </p>
                <button className="bg-indigo-600 text-white py-3 px-12 rounded-lg font-semibold text-lg transition hover:bg-indigo-700 focus:outline-none">
                  Contact Us
                </button>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={glare}
                  className="w-32 md:w-40 object-contain"
                  alt="Support"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
