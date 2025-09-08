import React from "react";

const examDates = [
  {
    event: "IIT JEE Main 2026 Registration Start Date",
    date: "November 2025",
  },
  {
    event: "Last Date To Apply Online",
    date: "December 2025",
  },
  {
    event: "IIT JEE Main 2026 Admit Card Release Date",
    date: "3 Days Before The Exam",
  },
  {
    event: "IIT JEE Main 2026 Session 1 Exam Date",
    date: "January 2026",
  },
  {
    event: "IIT JEE Main 2026 Session 2 Exam Date",
    date: "April 2026",
  },
  {
    event: "IIT JEE Main 2026 Result Announcement",
    date: "A Week After Each Session",
  },
];

const CommonTable = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-6">
       

        {/* Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border border-gray-200 bg-white">
            <thead>
              <tr className="bg-[#000080] text-white text-left">
                <th className="px-6 py-3 font-semibold border border-gray-200">
                  Event
                </th>
                <th className="px-6 py-3 font-semibold border border-gray-200">
                  Tentative Date
                </th>
              </tr>
            </thead>
            <tbody>
              {examDates.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-teal-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 border border-gray-200 text-gray-700">
                    {item.event}
                  </td>
                  <td className="px-6 py-4 border border-gray-200 text-gray-700">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CommonTable;
