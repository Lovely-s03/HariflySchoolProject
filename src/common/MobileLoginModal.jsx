import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/glare_logo.webp";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

const MobileLoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  // const handleSendOtp = async () => {
  //   if (mobile.length !== 10) return alert("Enter valid 10-digit mobile");
  //   try {
  //     await api.post("/send-otp", { mobile });
  //     setShowOtp(true);
  //   } catch (err) {
  //     alert(err?.response?.data?.message || "Failed to send OTP");
  //   }
  // };
  const handleSendOtp = async () => {
  if (mobile.length !== 10) {
    alert("Enter valid 10-digit mobile");
    return;
  }

  console.log("Sending OTP to:", mobile);

  try {
    const res = await api.post("/send-otp", { mobile });
    console.log("OTP response:", res.data);
    setShowOtp(true);
  } catch (err) {
    console.error("OTP error:", err.response || err);
    alert(err?.response?.data?.message || "Failed to send OTP");
  }
};


  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join("");
    if (!/^\d{4}$/.test(otpCode)) return alert("Enter 4-digit OTP");

    try {
      const res = await api.post("/login-student", { mobile, otp: otpCode });
      const data = res.data;

      if (data?.data?.token && data?.data?.token_type) {
        const authToken = `${data.data.token_type} ${data.data.token}`;
        sessionStorage.setItem("token", authToken); // ✅ Save token
      }

      navigate("/dashboard");
      onClose();
    } catch (err) {
      alert(err?.response?.data?.message || "OTP verification failed");
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
      <div className="bg-white w-[90%] max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-zoomIn relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl cursor-pointer"
        >
          ✕
        </button>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left */}
          <div className="bg-gradient-to-br from-[#000080] to-[#F5F6FF] flex flex-col items-center justify-center p-8 text-white">
            <img src={logo} alt="Logo" className="w-20 h-20 mb-4" />
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <p className="text-sm text-blue-100 mt-2 text-center">
              Sign in quickly using your mobile number
            </p>
          </div>

          {/* Right */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              Login to Continue
            </h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              {showOtp
                ? "Enter OTP sent to your mobile"
                : "Enter your mobile number to get OTP"}
            </p>

            {/* Mobile input */}
            {!showOtp && (
              <div>
                <div className="flex border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 mb-4">
                  <select
                    className="px-3 py-2 bg-gray-100 border-r text-gray-700 text-sm outline-none"
                    defaultValue="+91"
                  >
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/, ""))
                    }
                    className="w-full px-3 py-3 outline-none text-gray-700"
                    maxLength={10}
                  />
                </div>
                {mobile.length === 10 && (
                  <button
                    onClick={handleSendOtp}
                    className="w-full py-3 rounded-xl font-semibold transition cursor-pointer bg-[#000080] text-white hover:bg-[#1f1fa9]"
                  >
                    Get OTP
                  </button>
                )}
              </div>
            )}

            {/* OTP input */}
            {showOtp && (
              <div className="flex flex-col items-center mb-6">
                <div className="flex gap-3 mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      maxLength={1}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="w-12 h-12 text-center text-lg font-bold border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ))}
                </div>
                <button
                  onClick={handleVerifyOtp}
                  className={`w-full py-3 rounded-xl font-semibold transition cursor-pointer ${
                    otp.join("").length === 4
                      ? "bg-[#000080] text-white hover:bg-[#1f1fa9]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={otp.join("").length !== 4}
                >
                  Verify OTP
                </button>
              </div>
            )}

            <p className="text-xs text-gray-500 text-center mt-6">
              By continuing, you agree to our{" "}
              <a href="#" className="text-[#000080] hover:underline">
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
