import React from "react";

const VideoCard = ({ title, thumbnail, duration, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"/>  
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition" />
       
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/30 backdrop-blur-md rounded-full p-4 group-hover:scale-110 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
 
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
          {duration}
        </span>
      </div>

      <div className="p-3">
        <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-indigo-600 transition">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default VideoCard;
