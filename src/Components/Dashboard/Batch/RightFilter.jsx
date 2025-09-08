// FilterSidebar.jsx
import React from "react";

const RightFilter = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          <h3 className="font-medium">Languages</h3>
          {[
            "Hindi",
            "English",
            "Hinglish",
            "Kannada",
            "Bangla",
            "Gujrati",
            "Telugu",
          ].map((lang, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              {lang}
            </label>
          ))}

          <button className="mt-6 w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700">
            Apply Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default RightFilter;
