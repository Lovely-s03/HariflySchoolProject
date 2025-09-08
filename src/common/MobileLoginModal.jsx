import React, { useState } from "react";
import logo from '../assets/glare_logo.webp';
import { useNavigate } from "react-router-dom";

const MobileLoginModal = ({ isOpen, onClose }) => {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  const [mobile, setMobile] = useState("");

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal Card */}
      <div className="bg-white w-[90%] max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-zoomIn relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Section */}
          <div className="bg-gradient-to-br from-[#000080] to-[#F5F6FF] flex flex-col items-center justify-center p-8 text-white">
            <img src={logo} alt="Logo" className="w-20 h-20 mb-4" />
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <p className="text-sm text-blue-100 mt-2 text-center">
              Sign in quickly using your mobile number
            </p>
          </div>

          {/* Right Section */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              Login to Continue
            </h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Enter your mobile number to get OTP
            </p>

            {/* Input */}
            <div className="flex border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 mb-6">
              <select className="px-3 py-2 bg-gray-100 border-r text-gray-700 text-sm outline-none">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="9877654335"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-3 py-3 outline-none text-gray-700"
              />
            </div>

            {/* Button */}
            <button   onClick={handleClick} className="w-full bg-[#000080] text-white py-3 rounded-xl font-semibold hover:bg-[#1f1fa9] transition cursor-pointer">
              Get OTP
            </button>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center mt-6">
              By continuing, you agree to our{" "}
              <a href="#" className="text-[#000080]hover:underline">
                Terms of Use
              </a>{" "}
              &{" "}
              <a href="#" className="text-[#000080] hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLoginModal;
