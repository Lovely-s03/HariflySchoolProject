import React, { useState } from "react";
import BuyNowModal from "../../../../common/BuyNowModal";
import { FaWhatsapp } from "react-icons/fa";

const tabData = [
  { label: "Description" },
  { label: "All Classes" },
  { label: "🟡 Infinity Learning" },
  { label: "Tests" },
  { label: "Community" },
];

const plans = [
  {
    id: "batch",
    label: "Batch",
    color: "bg-blue-50 border-blue-400 text-blue-700",
    border: "border-blue-500",
    featuresTitle: "Regular Includes",
  },
  {
    id: "infinity",
    label: "Infinity",
    color: "bg-green-50 border-green-400 text-green-700",
    border: "border-green-500",
    featuresTitle: "Infinity Includes",
  },
  {
    id: "infinity-pro",
    label: "Infinity Pro",
    color: "bg-yellow-50 border-yellow-400 text-yellow-700",
    border: "border-yellow-500",
    featuresTitle: "Infinity Pro Includes",
  },
];

// Define features for each plan
const planFeatures = {
  batch: [
    {
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="10" rx="2" fill="currentColor" />
          <rect x="7" y="3" width="10" height="2" rx="1" fill="currentColor" />
        </svg>
      ),
      text: "Recorded Lectures by top faculties",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24">
          <rect x="5" y="6" width="14" height="12" rx="2" fill="currentColor" />
          <rect x="9" y="2" width="6" height="2" rx="1" fill="currentColor" />
        </svg>
      ),
      text: "PDF + Handwritten Notes",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="8" rx="2" fill="currentColor" />
        </svg>
      ),
      text: "DPPs with Video Solutions",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" />
        </svg>
      ),
      text: "Regular Test with Discussion",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="10" rx="2" fill="currentColor" />
        </svg>
      ),
      text: "24*7 Doubt Support",
    },
  ],
  infinity: [
    {
      icon: (
        <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      text: "All Batch features plus",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24">
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      text: "Unlimited doubt solving",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      text: "Access to all test series",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      text: "Additional practice material",
    },
  ],
  "infinity-pro": [
    {
      icon: (
        <svg
          className="w-7 h-7 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      text: "All Infinity features plus",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      text: "One-on-one mentorship",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 21h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      text: "Personalized study plan",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M23 21v-2a4 4 0 0 0-3-3.87"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      text: "Priority support",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 19l7-7 3 3-7 7-3-3z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="2" />
          <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      text: "Advanced analytics & reports",
    },
  ],
};

const batchDetails = [
  {
    icon: (
      <span className="bg-gray-100 rounded-full p-2 mr-3">
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="8"
            width="18"
            height="13"
            rx="2"
            fill="currentColor"
            className="text-gray-200"
          />
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" />
        </svg>
      </span>
    ),
    label: (
      <>
        <span className="font-medium">Course Duration:</span>
        <span className="font-bold ml-2">13 September 2025</span> - 30 January
        2026.
      </>
    ),
  },
  {
    icon: (
      <span className="bg-gray-100 rounded-full p-2 mr-3">
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 0 0-1.175 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 0 0-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.97z" />
        </svg>
      </span>
    ),
    label: <>Validity: 30 June 2027.</>,
  },
  {
    icon: (
      <span className="bg-gray-100 rounded-full p-2 mr-3">
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 0 0-1.175 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 0 0-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.97z" />
        </svg>
      </span>
    ),
    label: <>Mode of Lecture: Recorded Online.</>,
  },
  {
    icon: (
      <span className="bg-gray-100 rounded-full p-2 mr-3">
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 0 0-1.175 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 0 0-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.97z" />
        </svg>
      </span>
    ),
    label: (
      <>
        <span className="font-semibold">Schedule:</span> 3 Classes/per day,
        Classes will be held for 6 days/per week.
      </>
    ),
  },
  {
    icon: (
      <span className="bg-gray-100 rounded-full p-2 mr-3">
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 0 0-1.175 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 0 0-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.97z" />
        </svg>
      </span>
    ),
    label: <>Exam guidance at our PW Offline centers.</>,
  },
  {
    icon: (
      <span className="bg-gray-100 rounded-full p-2 mr-3">
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 0 0-1.175 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 0 0-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.97z" />
        </svg>
      </span>
    ),
    label: (
      <>One-to-one emotional well-being support by PW Prerna counselors.</>
    ),
  },
  {
    icon: (
      <span className="bg-gray-100 rounded-full p-2 mr-3">
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 0 0-1.175 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 0 0-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.97z" />
        </svg>
      </span>
    ),
    label: <>In-person support and helpdesk at PW Offline centers.</>,
  },
  {
    icon: (
      <span className="bg-gray-100 rounded-full p-2 mr-3">
        <svg
          className="w-6 h-6 text-purple-500"
          fill="none"
          viewBox="0 0 20 20"
        >
          <rect x="2" y="4" width="16" height="12" rx="2" fill="currentColor" />
          <rect x="6" y="2" width="8" height="2" rx="1" fill="#fff" />
        </svg>
      </span>
    ),
    label: (
      <>
        Subjects:{" "}
        <span className="font-medium">Physics, Chemistry & Maths.</span>
      </>
    ),
  },
];

const videos = [
  {
    title: "Important Update : New Update in Ask Doubt",
    subtitle: "New Update in Ask Doubt",
    date: "03 September, 2025",
    time: "02:00 PM",
    label: "Important Update",
    logo: "PW",
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    title: "New Update : Study Page (Web)",
    subtitle: "New Update Study Page (WEB)",
    date: "03 September, 2025",
    time: "02:00 PM",
    label: "PHYSICSWALLAH",
    logo: "PW",
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    title: "New Update : Study Page (App)",
    subtitle: "New Update Study Page (APP)",
    date: "03 September, 2025",
    time: "02:00 PM",
    label: "PHYSICSWALLAH",
    logo: "PW",
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
];

const details = [
  "PDF Notes of each Class will be uploaded on PW App.",
  "Daily Practice Problems with their Video Solution in Quiz format.",
  "Peer to Peer doubt solving will be provided.",
  "Scheduled tests will be held according to the planner.",
  "All India Test Series (AITS) will be provided according to the Test Planner.",
  "The complete course will be accessible to all the students until the JEE 2027 Exams.",
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

const icons = {
  Physics: (
    <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#E8F2FF" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#2366D1">
        E=mc²
      </text>
      <rect x="5" y="18" width="14" height="2" rx="1" fill="#2366D1" />
    </svg>
  ),
  Maths: (
    <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#E8F2FF" />
      <text x="8" y="10" fontSize="8" fill="#2366D1">
        +
      </text>
      <text x="16" y="20" fontSize="8" fill="#2366D1">
        ÷
      </text>
      <text x="6" y="20" fontSize="8" fill="#2366D1">
        ×
      </text>
      <text x="16" y="10" fontSize="8" fill="#2366D1">
        –
      </text>
    </svg>
  ),
  "Physical Chemistry": (
    <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#2366D1" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="#2366D1" strokeWidth="2" />
    </svg>
  ),
  "Organic Chemistry": (
    <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="3"
        stroke="#2366D1"
        strokeWidth="2"
      />
      <rect
        x="9"
        y="9"
        width="6"
        height="6"
        rx="1"
        fill="#E8F2FF"
        stroke="#2366D1"
        strokeWidth="2"
      />
    </svg>
  ),
  "Inorganic Chemistry": (
    <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#2366D1" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="#2366D1" />
      <circle cx="6" cy="12" r="1.5" fill="#E8F2FF" />
      <circle cx="18" cy="12" r="1.5" fill="#E8F2FF" />
    </svg>
  ),
  Notices: (
    <svg className="w-8 h-8 text-gray-400" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#BDBDBD" strokeWidth="4" />
      <text x="24" y="30" textAnchor="middle" fontSize="16" fill="#BDBDBD">
        PW
      </text>
    </svg>
  ),
};

const subjects = [
  { name: "Physics", chapters: 3 },
  { name: "Maths", chapters: 3 },
  { name: "Physical Chemistry", chapters: 3 },
  { name: "Organic Chemistry", chapters: 3 },
  { name: "Inorganic Chemistry", chapters: 3 },
  { name: "Notices", chapters: 2 },
];

const features1 = [
  {
    title: "Saarthi",
    desc: "Unlimited Academic Doubt-solving from...",
    icon: "🤝",
  },
  {
    title: "1:1 Mentorship",
    desc: "Telephonic one to one Guidance from P...",
    icon: "🎓",
  },
  {
    title: "Real Test Series",
    desc: "Experience real exam environment at N...",
    icon: "📝",
  },
  {
    title: "Test Pass",
    desc: "Access to all online test series( Cha...",
    icon: "📘",
  },
  {
    title: "Khazana",
    desc: "Access to Recorded lectures by PW fac...",
    icon: "📺",
  },
  {
    title: "Preparation Meter",
    desc: "Customizable adaptive practice session",
    icon: "📊",
  },
  {
    title: "Complimentary Batches",
    desc: "Access to all of the upcoming batch v...",
    icon: "📄",
  },
  {
    title: "Infinite Practice",
    desc: "Infinite Practices",
    icon: "♾️",
  },
];

const handleShareOnWhatsApp = () => {
  const batchName = "Arjuna JEE 4.0 2026";
  const shareText = `Check out this amazing batch: ${batchName} on Physics Wallah!`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  window.open(whatsappUrl, "_blank");
};

const ArjunaTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("batch");
  const [showFeatures, setShowFeatures] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [openIdx, setOpenIdx] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqsToShow = showAll ? faqs : faqs.slice(0, 4);
  const currentFeatures = planFeatures[selectedPlan] || [];

  return (
    <div className="bg-indigo-500 rounded-t-xl">
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <h2 className="text-white text-3xl font-bold">Arjuna JEE 4.0 2026</h2>
      </div>
      <div className="bg-white px-4 flex flex-col gap-5 xl:gap-0 xl:flex-row items-center border-b justify-between pt-2 whitespace-nowrap">
        <div className="flex space-x-6 overflow-x-scroll max-w-[400px] xl:max-w-full">
          {tabData.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`relative pb-2 text-sm font-medium transition ${
                activeTab === idx
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-indigo-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2 pb-2">
          <button
            onClick={handleShareOnWhatsApp}
            className="flex items-center px-4 py-1 border rounded font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            <FaWhatsapp className="mr-2" /> {/* WhatsApp Icon */}
            Share Batch
          </button>
          <button className="flex items-center px-4 py-1 border rounded font-medium text-gray-700 hover:bg-gray-50 transition">
            Announcement
          </button>
        </div>
      </div>

      <div className="bg-white px-4 pt-6 pb-8">
        {activeTab === 0 && (
          <div>
            <div className=" mx-auto bg-white rounded-xl shadow p-2 mt-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Choose a Plan</h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-indigo-500 text-white font-medium px-5 py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                  Compare Plans
                </button>
                <BuyNowModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>

              <div className="flex gap-2 mb-4">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    className={`flex-1 py-4 rounded-lg border ${
                      plan.color
                    } font-semibold text-lg transition-all 
              ${
                selectedPlan === plan.id
                  ? `${plan.border} shadow-md ${
                      plan.id === "batch"
                        ? "ring-2 ring-blue-300"
                        : plan.id === "infinity"
                        ? "ring-2 ring-green-300"
                        : "ring-2 ring-yellow-300"
                    }`
                  : "bg-gray-50 border-gray-200 text-gray-500"
              }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.label}
                    <span
                      className={`ml-2 ${
                        selectedPlan === plan.id ? "" : "opacity-0"
                      }`}
                    >
                      <svg
                        className="inline-block w-5 h-5 text-blue-500 align-middle"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <circle cx="10" cy="10" r="10" fill="#fff" />
                        <path
                          fill="#2563eb"
                          d="M8.3 13.3l-3.3-3.3 1.4-1.4 1.9 1.9 5.3-5.3 1.4 1.4z"
                        />
                      </svg>
                    </span>
                  </button>
                ))}
              </div>

              <div
                className="bg-blue-50 rounded-lg mb-2 flex items-center px-5 py-2 cursor-pointer justify-between"
                onClick={() => setShowFeatures(!showFeatures)}
              >
                <span className="text-lg font-semibold text-gray-700">
                  {plans.find((p) => p.id === selectedPlan)?.featuresTitle ||
                    "Regular Includes"}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transform transition-transform"
                  style={{ rotate: showFeatures ? "180deg" : "0deg" }}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {showFeatures && (
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 px-5 pb-4">
                  {currentFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {feature.icon}
                      <span className="text-base text-gray-700 font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md  mx-auto my-6">
              <h2 className="text-xl font-semibold mb-6">
                This Batch Includes
              </h2>
              <ul className="space-y-5">
                {batchDetails.map((item, idx) => (
                  <li key={idx} className="flex items-start text-lg">
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 md:p-6">
                <h2 className="text-xl font-semibold mb-4 md:mb-6">
                  Demo Videos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                  {videos.map((video, idx) => (
                    <div
                      key={idx}
                      className={`rounded-xl shadow-lg ${video.bg} p-4 flex flex-col`}
                    >
                      <div className="flex flex-col sm:flex-row items-start mb-3 md:mb-4">
                        <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                          <div className="rounded-full bg-black p-2 text-white font-bold text-base md:text-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                            {video.logo}
                          </div>
                          <div className="ml-3 sm:ml-0 sm:mt-0">
                            <div
                              className={`font-semibold ${video.text} text-base md:text-lg`}
                            >
                              {video.label}
                            </div>
                          </div>
                        </div>
                        <div className="ml-auto sm:ml-0 sm:mt-2 flex-shrink-0">
                          <button
                            className={`bg-purple-600 hover:bg-purple-700 text-white rounded-full p-1 md:p-2`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <polygon
                                points="9.5,7.5 9.5,16.5 16.5,12"
                                fill="white"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mb-2 md:mb-3">
                        <div className="font-bold text-gray-800 text-sm md:text-base line-clamp-2">
                          {video.subtitle}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center text-gray-500 text-xs md:text-sm mb-2">
                          <span>{video.date}</span>
                          <span className="mx-2">•</span>
                          <span>{video.time}</span>
                        </div>
                        <div className="font-semibold text-sm md:text-base line-clamp-2">
                          {video.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 flex justify-center">
                  <button className="px-5 py-2 text-sm md:text-base rounded-full bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700">
                    View All
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6  mx-auto">
              <h2 className="text-xl font-semibold mb-6">Other Details</h2>
              <ol className="list-decimal pl-6 space-y-3 mb-6">
                {details.map((item, idx) => (
                  <li key={idx} className="text-base text-gray-700">
                    {item}
                  </li>
                ))}
              </ol>
              <div className="mb-4">
                <span className="font-semibold">
                  7.For App/Web Navigation the latest Feature Updates & Student
                  Support please subscribe to our Support YouTube channel:{" "}
                </span>
                <a
                  className="text-blue-600 underline break-words"
                  href="https://www.youtube.com/@pwstudentsupport"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youtube.com/@pwstudentsupport
                </a>
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">
                  8.The registration fee is included
                </span>{" "}
                in the price of the batch which is showing on the website. The
                breakup of registration fee will be mentioned on invoice. You
                may be provided with access to Notes, PYQ's, Mock Test Papers,
                AITS Test Series, Previous year batches & other materials, the
                access can vary depending on the batch you purchase, so that
                exact details might change from one batch to another.
              </div>
            </div>
            <section className="w-full mx-auto py-4">
              <h2 className="text-xl md:text-xl font-semibold mb-6 flex items-start gap-2">
                FAQ
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
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <div className="p-6 sm:p-8 max-w-7xl mx-auto">
              <h2 className="text-xl font-bold mb-2">Subjects</h2>
              <p className="text-sm text-gray-500 mb-8">
                Select your subjects &amp; start learning
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {subjects.map((subject) => (
                  <div
                    key={subject.name}
                    className="bg-white rounded-xl shadow flex items-center p-5 min-w-[240px] transition hover:shadow-lg"
                  >
                    {icons[subject.name] || (
                      <div className="w-10 h-10 mr-4 bg-gray-200 rounded-lg" />
                    )}
                    <div className="ml-4">
                      <div className="font-bold text-black text-lg sm:text-sm truncate max-w-[150px]">
                        {subject.name}
                      </div>
                      <div className="text-gray-500 text-sm sm:text-base">
                        {subject.chapters} Chapters
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <div className=" bg-gray-50 flex  p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
                {features1.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h2 className="font-semibold text-sm">{item.title}</h2>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 3 && <div>Tests Content...</div>}
        {activeTab === 4 && <div>Community Content...</div>}
      </div>
    </div>
  );
};

export default ArjunaTabs;
