import React, { useState, useEffect } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import call from "../assets/call.webp";
import { getStudentProfile, updateProfile } from "../service/api";

export default function ProfileDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    email: "",
    address: "",
    photo: "",
  });

useEffect(() => {
  fetchProfile();
}, []);


  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await getStudentProfile();
      const data = response.data.data.user;
      setProfile(data);
      setFormData({
        fullName: data.name || "",
        gender: data.gender || "",
        dob: data.date_of_birth || "",
        email: data.email || "",
        address: data.address || "",
        photo: data.profile_picture || "",
      });
      localStorage.setItem("profile", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching profile:", error);
      alert("Failed to fetch profile data");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.fullName);
      formDataToSend.append("gender", formData.gender.toLowerCase()); // API expects lowercase
      formDataToSend.append("date_of_birth", formData.dob);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("address", formData.address);
      
      if (formData.photo instanceof File) {
        formDataToSend.append("profile_picture", formData.photo);
      }
      
      const response = await updateProfile(formDataToSend);
      const result = response.data;
      
      // Update local state with the response data
      setProfile((prev) => ({
        ...prev,
        name: formData.fullName,
        gender: formData.gender,
        date_of_birth: formData.dob,
        email: formData.email,
        address: formData.address,
        profile_picture: result.data?.profile_picture || result.profile_picture || prev.profile_picture,
      }));
      
      // Update localStorage with new profile data
      localStorage.setItem("profile", JSON.stringify({
        ...profile,
        name: formData.fullName,
        gender: formData.gender,
        date_of_birth: formData.dob,
        email: formData.email,
        address: formData.address,
      }));
      
      setIsOpen(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(error?.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm">
          <div className="relative">
            <img
              src={profile.profile_picture || call}
              alt="avatar"
              className="w-24 h-24 rounded-full border object-cover"
            />
            <button
              className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              onClick={() => setIsOpen(true)}
            >
              <FaEdit size={14} />
            </button>
          </div>
          <h2 className="mt-4 text-lg font-semibold text-center">
            {profile.name || "N/A"}
          </h2>
          <span className="mt-2 px-4 py-1 bg-gray-200 text-gray-600 text-sm rounded-full text-center">
            {profile.gender || "NA"}
          </span>
        </div>

        {/* Details Section */}
        <div className="md:col-span-3 flex flex-col gap-6">
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
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Personal Details</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      <span className="font-semibold">Name:</span>{" "}
                      {profile.name || "N/A"}
                    </li>
                    <li>
                      <span className="font-semibold">Email:</span>{" "}
                      {profile.email || "N/A"}
                    </li>
                    {/* <li>
                      <span className="font-semibold">Phone:</span>{" "}
                      {profile.phone || "N/A"}
                    </li> */}
                    <li>
                      <span className="font-semibold">Date of Birth:</span>{" "}
                      {profile.date_of_birth || "N/A"}
                    </li>
                    <li>
                      <span className="font-semibold">Address:</span>{" "}
                      {profile.address || "N/A"}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-0 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={18} />
            </button>
            {/* Title */}
            <h2 className="text-lg font-semibold pt-6 px-6 mb-4">
              Edit Details
            </h2>
            {/* Scrollable Form */}
            <div className="max-h-[70vh] overflow-y-auto px-6 pb-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Profile Photo */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Profile Photo
                  </label>
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        formData.photo instanceof File
                          ? URL.createObjectURL(formData.photo)
                          : formData.photo || call
                      }
                      alt="Profile Preview"
                      className="w-20 h-20 rounded-full border object-cover"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                    />
                  </div>
                </div>
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Gender
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male" || formData.gender === "Male"}
                        onChange={handleChange}
                        className="accent-blue-600"
                      />{" "}
                      Male
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female" || formData.gender === "Female"}
                        onChange={handleChange}
                        className="accent-blue-600"
                      />{" "}
                      Female
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === "other" || formData.gender === "Other"}
                        onChange={handleChange}
                        className="accent-blue-600"
                      />{" "}
                      Other
                    </label>
                  </div>
                </div>
                {/* DOB + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob || ""}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>
                {/* Address */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <textarea
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  ></textarea>
                </div>
                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}