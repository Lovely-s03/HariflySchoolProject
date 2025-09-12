// App.js
import React from "react";
import { useLocation } from "react-router-dom";

const contentMap = {
  Physics: [
    { title: "All Contents", subtitle: "All Videos | All Exercises | All Notes" },
    { title: "Mechanics", subtitle: "2 Videos | 1 Exercises | 1 Notes" },
    { title: "Waves", subtitle: "1 Videos | 2 Exercises | 1 Notes" },
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
    { title: "Waves", subtitle: "1 Videos | 2 Exercises | 1 Notes" },
    { title: "Waves", subtitle: "1 Videos | 2 Exercises | 1 Notes" },

  ],
  // Add other subjects here...
};

function App() {
  const location = useLocation();
  const subject = location.state?.subject?.name || "Physical Chemistry"; // default fallback
  const sections = contentMap[subject] || [];

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-xl font-semibold mb-8">{subject}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white shadow-md rounded-xl flex flex-col justify-center p-3 border"
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
    </div>
  );
}

export default App;
