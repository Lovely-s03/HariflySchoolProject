
import React from "react";
import { FaAngleRight, FaBars } from "react-icons/fa";

const NavbarDashboard = ({ onMenuClick }) => {
  return (
  
    <nav className="fixed top-0 left-0 w-full bg-[#1e2124] text-white flex items-center justify-between px-4 py-2 shadow-md z-50">

      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        {/* Mobile Menu Button */}
        <button className="md:hidden mr-3" onClick={onMenuClick}>
          <FaBars size={20} />
        </button>

        <div className="p-2 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold">
      Glare
        </div>
        <span className="text-lg font-semibold hidden sm:block">Physics Wallah</span>

        {/* Dropdown Button (hide on mobile) */}
        <button className="ml-2 hidden md:flex items-center gap-2 bg-[#2b2f33] border border-gray-500 px-3 py-1 rounded-lg text-sm hover:bg-[#3a3f45] transition">
          <span role="img" aria-label="cake">🎂</span> 11th - IIT JEE
          <FaAngleRight />
        </button>
      </div>

      {/* Right: Google Play + User */}
      <div className="flex items-center gap-3">
        {/* Google Play (hide on mobile) */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          className="h-8 hidden md:block"
        />

        {/* User */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:block">Hi, Lovely</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
