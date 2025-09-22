import React, { useState, useRef, useEffect } from "react";
import { FaAngleRight, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavbarDashboard = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e2124] text-white flex items-center justify-between px-4 py-2 shadow-md z-50">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <button className="md:hidden mr-3 cursor-pointer" onClick={onMenuClick}>
          <FaBars size={20} />
        </button>

        <div className="p-2 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold">
          Glare
        </div>
        <span className="text-lg font-semibold hidden sm:block">
          Physics Wallah
        </span>

        <button className="ml-2 hidden md:flex items-center gap-2 bg-[#2b2f33] border border-gray-500 px-3 py-1 rounded-lg text-sm hover:bg-[#3a3f45] transition">
          <span role="img" aria-label="cake">
            🎂
          </span>{" "}
          11th - IIT JEE
          <FaAngleRight />
        </button>
      </div>

      {/* Right: Google Play + User */}
      <div className="flex items-center gap-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          className="h-8 hidden md:block"
        />

        <div className="relative flex items-center gap-2" ref={menuRef}>
          <span className="hidden sm:block">Hi, Lovely</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />

          {/* Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute top-full right-0 mt-1 w-40 bg-[#2b2f33] border border-gray-500 rounded-lg shadow-lg text-sm overflow-hidden z-50">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-[#3a3f45]"
                onClick={() => {
                  navigate("profile");
                  setShowProfileMenu(false);
                }}
              >
                My Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-[#3a3f45]"
                onClick={() => {
                  console.log("Logging out...");
                  setShowProfileMenu(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
