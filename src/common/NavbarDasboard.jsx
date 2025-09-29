import React, { useState, useRef, useEffect } from "react";
import { FaAngleRight, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getlogout_student } from "../service/api";

const NavbarDashboard = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoutClick = () => {
    setShowProfileMenu(false);
    setShowLogoutModal(true);
  };

  const confirmLogout = async () => {
    try {
      await getlogout_student(); // ✅ token passed automatically
      sessionStorage.removeItem("token"); // clear after success
      setShowLogoutModal(false);
      navigate("/");
    } catch (err) {
      console.error("Error logging out:", err);
      alert(err?.response?.data?.message || "Logout failed");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e2124] text-white flex items-center justify-between px-4 py-2 shadow-md z-50">
      {/* Left */}
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
          <span role="img" aria-label="cake">🎂</span> 11th - IIT JEE
          <FaAngleRight />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center gap-2" ref={menuRef}>
          <span className="hidden sm:block">Hi, Lovely</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />

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
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          bg-white rounded-2xl p-6 sm:p-8 w-11/12 max-w-md shadow-xl z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Confirm Logout</h2>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-light"
              >
                ×
              </button>
            </div>
            <p className="mb-6 text-gray-600">
              Are you sure you want to log out? You'll need to log in again to access your account.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-5 py-2 border border-[#000080] text-[#000080] rounded-lg hover:bg-purple-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-5 py-2 bg-[#000080] text-white rounded-lg hover:bg-[#2323c6]"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavbarDashboard;
