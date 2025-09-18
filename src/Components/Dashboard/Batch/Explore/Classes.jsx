import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Download } from "lucide-react";

const contentMap = {
  Physics: [
    { title: "All Contents", subtitle: "All Videos | All Exercises | All Notes" },
    { title: "Mechanics", subtitle: "2 Videos | 1 Exercises | 1 Notes" },
    { title: "Waves", subtitle: "1 Videos | 2 Exercises | 1 Notes" },
  ],
  Maths: [
    { title: "All Contents", subtitle: "All Videos | All Exercises | All Notes" },
    { title: "Algebra", subtitle: "3 Videos | 1 Exercises | 2 Notes" },
    { title: "Calculus", subtitle: "2 Videos | 2 Exercises | 1 Notes" },
  ],
  "Physical Chemistry": [
    { title: "All Contents", subtitle: "All Videos | All Exercises | All Notes" },
    { title: "Mole Concept", subtitle: "1 Videos | 1 Exercises | 2 Notes" },
    { title: "Solutions", subtitle: "1 Videos | 1 Exercises | 2 Notes" },
    { title: "Structure of Atom", subtitle: "1 Videos | 1 Exercises | 2 Notes" },
  ],
};

const videosData = {
  "All Contents": [
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/abc123/maxresdefault.jpg",
      date: "November 23, 2024",
      duration: "3:11:53",
      title: "Redox Reactions : Complete Chapter in 1 Video || Concepts + PYQs",
      description: "Full revision and practice questions",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/def456/maxresdefault.jpg",
      date: "October 30, 2024",
      duration: "3:27:19",
      title: "Ionic Equilibrium : Complete Chapter in 1 Video || Concepts +...",
      description: "Detailed explanation with examples",
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/ghi789/maxresdefault.jpg",
      date: "October 16, 2024",
      duration: "2:03:28",
      title: "Chemical Equilibrium : Complete Chapter in 1 Video || Concepts +...",
      description: "Concepts + solved questions",
    },
    {
      id: 4,
      thumbnail: "https://i.ytimg.com/vi/jkl012/maxresdefault.jpg",
      date: "October 10, 2024",
      duration: "4:11:26",
      title: "Thermodynamics : Complete Chapter in 1 Video || Concepts +...",
      description: "Complete concepts + PYQs",
    },
  ],
};

const notesData = [
  { title: "Unit and Measurements 01 : Class Notes", file: "/pdfs/unit-measurements.pdf" },
  { title: "Fluid Mechanics : Mind Maps (Physics)", file: "/pdfs/fluid-mechanics.pdf" },
  { title: "Gravitation : Mind Maps (Physics)", file: "/pdfs/gravitation.pdf" },
  { title: "Kinematics : Mind Maps (Physics)", file: "/pdfs/kinematics.pdf" },
];

const dppData = [
  { title: "Mechanics : Daily Practice Problems", file: "/pdfs/dpp-mechanics.pdf" },
  { title: "Waves : Daily Practice Problems", file: "/pdfs/dpp-waves.pdf" },
];

const dppPdfData = [
  { title: "Mechanics : DPP Solutions", file: "/pdfs/dpp-mechanics-solutions.pdf" },
  { title: "Waves : DPP Solutions", file: "/pdfs/dpp-waves-solutions.pdf" },
];

function App() {
  const location = useLocation();
  const subject = location.state?.subject?.name || "Physical Chemistry";
  const sections = contentMap[subject] || [];

  const [selectedSection, setSelectedSection] = useState(null);
  const [activeTab, setActiveTab] = useState("Lectures");

  const videos = selectedSection ? videosData[selectedSection.title] || [] : [];

  function handleSectionClick(section) {
    setSelectedSection(section);
    setActiveTab("Lectures");
  }

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderDownloadList = (data) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="rounded-2xl shadow p-4 border flex flex-col justify-between bg-white"
        >
          <h2 className="font-semibold mb-4">{item.title}</h2>
          <div className="flex justify-between items-center">
            <span className="text-purple-600 font-medium">PDF</span>
            <button
              onClick={() => handleDownload(item.file)}
              className="p-2 rounded-full hover:bg-purple-100"
            >
              <Download className="w-5 h-5 text-purple-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-xl font-semibold mb-8">{subject}</h1>

      {!selectedSection && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white shadow-md rounded-xl flex flex-col justify-center p-3 border cursor-pointer"
              onClick={() => handleSectionClick(section)}
            >
              <div className="flex items-center">
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <div className="mt-3 text-gray-500 font-medium text-lg">
                {section.subtitle}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedSection && (
        <div className="bg-white rounded-xl shadow-md border p-6 max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-semibold mb-6">{selectedSection.title}</h2>

          <div className="flex gap-3 mb-6">
            {["Lectures", "Notes", "DPP", "DPP PDF"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded font-semibold ${
                  activeTab === tab ? "bg-blue-100 text-blue-700" : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-gray-100 rounded px-4 py-2 mb-4 gap-2">
            <span>Watch lectures, earn</span>
            <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded font-bold">
              2 XP
            </span>
            <span>per minute</span>
            <button
              className="ml-auto text-gray-400 hover:text-gray-600 text-lg"
              onClick={() => {
                /* dismiss banner */
              }}
            >
              ×
            </button>
          </div>

          <div>
            {activeTab === "Lectures" && (
              <>
                {videos.length === 0 && <p>No lectures available.</p>}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {videos.map((video) => (
                    <div key={video.id} className="bg-white rounded-xl shadow border p-4">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="rounded-lg w-full object-cover mb-2"
                        style={{ height: "140px" }}
                      />
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>{video.date}</span>
                        <span>{video.duration}</span>
                      </div>
                      <div className="font-semibold text-base mb-2">{video.title}</div>
                      <div className="text-gray-700 text-sm mb-3">{video.description}</div>
                      <div className="flex justify-end gap-2">
                        <button>
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <path d="M17.9 6.1l-4-4a2.001 2.001 0 00-2.82 0l-8.24 8.25a2.001 2.001 0 000 2.82l4 4c.39.38 1.01.39 1.41 0l8.25-8.25a2.001 2.001 0 000-2.82zm-11.16 9.24l-3.09-3.09 8.25-8.25 3.09 3.09-8.25 8.25z" />
                          </svg>
                        </button>
                        <button>
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <circle cx="10" cy="10" r="2" />
                            <circle cx="15" cy="10" r="2" />
                            <circle cx="5" cy="10" r="2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "Notes" && renderDownloadList(notesData)}
            {activeTab === "DPP" && renderDownloadList(dppData)}
            {activeTab === "DPP PDF" && renderDownloadList(dppPdfData)}
          </div>

          <button
            className="mt-7 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setSelectedSection(null)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;