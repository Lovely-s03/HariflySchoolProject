import React from "react";

const goals = [
  {
    label: "IIT-JEE",
    icon: <span className="text-2xl">🔬</span>,
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  {
    label: "NEET",
    icon: <span className="text-2xl">🧬</span>,
    bg: "bg-pink-100",
    text: "text-green-700",
  },
  {
    label: "UPSC",
    icon: <span className="text-2xl">🏛️</span>,
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  {
    label: "Govt. Exams",
    icon: <span className="text-2xl">🏅</span>,
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
];

const exams = [
  {
    label: "Engineering & Medical Exams ( College & Job )",
    icon: <span className="text-2xl">🔬</span>,
    
  },
  {
    label: "College Entrance Exams ( UG & PG )",
    icon: <span className="text-2xl">📑</span>,
  },
  {
    label: "Schools, Boards & Olympiads",
    icon: <span className="text-2xl">👩‍🎓</span>,
  },
  {
    label: "All Government Job Exams",
    icon: <span className="text-2xl">💼</span>,
  },
  {
    label: "CA, CS, Banking & Finance Courses",
    icon: <span className="text-2xl">🧮</span>,
  },
  {
    label: "NET Exams & Teacher Training",
    icon: <span className="text-2xl">📝</span>,
    
  },
];


const exams1 = [
  {
    label: "Skills",
    icon: <span className="text-2xl">🔬</span>,
    
  },
  {
    label: "Online Degree",
    icon: <span className="text-2xl">📑</span>,
  },
  {
    label: "Study Abroad",
    icon: <span className="text-2xl">👩‍🎓</span>,
  },
  {
    label: "Agriculture",
    icon: <span className="text-2xl">💼</span>,
  },
 
];

export default function SelectGoalFullWidth() {
  return (
    <div className="min-h-screen w-full bg-gray-50 px-4 py-8">
      {/* Header with back button */}
      {/* <div className="flex items-center mb-6">
        <button className="text-xl">&larr;</button>
      </div> */}

      <h1 className="text-center text-2xl font-semibold mb-8">
        Select your Goal
      </h1>

      {/* Popular Exams */}
      <h2 className="text-lg font-semibold mb-3 px-2">Popular Exams</h2>
      <div className=" w-full flex flex-wrap gap-4 justify-center mb-8 px-2">
        {goals.map((goal) => (
          <div
            key={goal.label}
            className={`flex items-center gap-2 px-6 py-4 rounded-lg cursor-pointer w-60 ${goal.bg} ${goal.text} font-medium shadow-sm hover:scale-105 transition`}
          >
            {goal.icon}
            <span>{goal.label}</span>
          </div>
        ))}
      </div>

      {/* All Exams */}
      <h2 className="text-lg font-semibold mb-3 px-2">All Exams</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
        {exams.map((exam) => (
          <div
            key={exam.label}
            className={`flex items-center gap-3 px-5 py-4 rounded-lg cursor-pointer ${exam.bg} shadow-sm hover:scale-95 transition`}
          >
            {exam.icon}
            <span className="font-medium">{exam.label}</span>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-3 px-2 pt-8">Other Offerings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
        {exams1.map((exam1) => (
          <div
            key={exam1.label}
            className={`flex items-center gap-3 px-5 py-4 rounded-lg cursor-pointer ${exam1.bg} shadow-sm hover:scale-95 transition`}
          >
            {exam1.icon}
            <span className="font-medium">{exam1.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
