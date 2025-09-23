import React, { useState, useRef, useEffect } from "react";
import { FaEdit, FaTimes, FaCamera } from "react-icons/fa";
import call from "../assets/call.webp";

export default function ProfileDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(call);
  const [showCamera, setShowCamera] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  // Start camera
  const startCamera = async () => {
    try {
      setShowCamera(true); // open modal first
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // "user" = front cam, "environment" = back cam
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access denied:", err);
      alert("Unable to access camera. Please allow camera permissions.");
      setShowCamera(false);
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    setShowCamera(false);
  };

  // Capture photo
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageUrl = canvas.toDataURL("image/png");
      setProfilePic(imageUrl);
      stopCamera();
    }
  };

  useEffect(() => {
    return () => stopCamera(); // cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm">
          <div className="relative">
            <img
              src={profilePic}
              alt="avatar"
              className="w-24 h-24 rounded-full border object-cover"
            />

            {/* Camera Button */}
            <button
              className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              onClick={startCamera}
            >
              <FaCamera size={14} />
            </button>
          </div>
          <h2 className="mt-4 text-lg font-semibold text-center">
            Lovely Supriya
          </h2>
          <span className="mt-2 px-4 py-1 bg-gray-200 text-gray-600 text-sm rounded-full text-center">
            NA
          </span>
        </div>

        <div className="md:col-span-3 flex flex-col gap-6">
          <div className="text-lg font-semibold">Level Up Overview</div>
          <div className="bg-white rounded-2xl shadow-sm p-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Total XP</p>
              <p className="text-sm font-semibold">0 XP</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Highest Level</p>
              <p className="text-sm font-semibold">NA</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Profile Detail</h3>
              <button
                className="flex items-center px-3 py-1.5 border rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition"
                onClick={() => setIsOpen(true)}
              >
                <FaEdit className="mr-2" size={12} /> Edit
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Personal Details</h4>
                <ul className="text-sm text-gray-600 space-y-4">
                  <li>
                    <span className="font-semibold">Name:</span> Lovely Supriya
                  </li>
                  <li>
                    <span className="font-semibold">Mobile No:</span> 9693137992
                  </li>
                  <li>
                    <span className="font-semibold">Email:</span> N/A
                  </li>
                  <li>
                    <span className="font-semibold">
                      Living City/Village/Town:
                    </span>{" "}
                    N/A
                  </li>
                </ul>
              </div>

              {/* Academic Details */}
              <div>
                <h4 className="font-medium mb-2">Academic Details</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <span className="font-semibold">Class:</span> 11
                  </li>
                  <li>
                    <span className="font-semibold">Board/State Board:</span>{" "}
                    N/A
                  </li>
                  <li>
                    <span className="font-semibold">Exams:</span> IIT-JEE
                  </li>
                  <li>
                    <span className="font-semibold">Language:</span> N/A
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">
              Performance as Doubt Solver
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-gray-500">Total Doubts Solved</p>
                <p className="text-sm font-semibold">0</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-500">Satisfactory Rate</p>
                <p className="text-sm font-semibold">0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-4 relative w-full max-w-md">
            <button
              onClick={stopCamera}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FaTimes size={20} />
            </button>

            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full rounded-lg"
            />
            <canvas ref={canvasRef} style={{ display: "none" }} />

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={capturePhoto}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Capture
              </button>
              <button
                onClick={stopCamera}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal (edit details) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={18} />
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-6">Edit Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Shivam Singh"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-1">Gender</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      className="accent-blue-600"
                    />{" "}
                    Male
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      className="accent-blue-600"
                    />{" "}
                    Female
                  </label>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile Number
                </label>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <select className="px-2 py-2 border-r bg-gray-50 outline-none">
                    <option>IN +91</option>
                  </select>
                  <input
                    type="text"
                    defaultValue="9693137992"
                    className="flex-1 px-3 py-2 outline-none"
                  />
                  <button
                    type="button"
                    className="px-3 text-blue-600 hover:underline text-sm"
                  >
                    Update Number
                  </button>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <select className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select State</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <select className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select City</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
