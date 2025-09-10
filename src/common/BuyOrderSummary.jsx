// OrderSummary.jsx
import React, { useState } from "react";
import course from '../assets/switch.jpeg';
import buy from '../assets/buy.jpeg'

import { useNavigate } from "react-router-dom";
const BuyOrderSummary = () => {
      const [activeTab, setActiveTab] = useState("book+note");
        const tabData = {
    "book+note": {
      title: "Physics Wallah",
      img: "https://images.news18.com/ibnlive/uploads/2023/06/alakh-pandey-physics-wallah-16863056274x3.jpg", // Book + Note image
      price: "2765",
      oldPrice: "3549",
      discount: "22% OFF",
    },
    book: {
      title: "PW Books",
      img: "https://cdn.pw.live/pg/offering-cover/book.png", // Book only image
      price: "1599",
      oldPrice: "1999",
      discount: "20% OFF",
    },
  };
  const current = tabData[activeTab];
 const navigate = useNavigate();
  return (
    <div className="min-h-screen max-w-5xl m-auto px-4 md:px-10 py-6">
    
      <button  onClick={() => navigate(-1)} className="flex items-center text-gray-700 font-medium mb-6 cursor-pointer">
        <span className="mr-2">←</span> GO BACK
      </button>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
        
          <div className="border border-gray-50  rounded-xl p-4 shadow-sm bg-white">
           <div className="flex items-center justify-between">
             <h3 className="font-semibold text-lg mb-4">Items in Cart</h3>
              <button className="text-sm text-[#000080] font-medium bg-[#f1efff] p-2 rounded-md">
                Switch to Infinity Pro
              </button>
           </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={course}
                  alt="Course"
                  className="rounded-lg w-32"
                />
                <div>
                  <p className="font-medium">Arjuna JEE 4.0 2026</p>
                  <div className="flex gap-2 items-center">
                    <span className="text-lg font-semibold">₹4000</span>
                    <span className="text-gray-400 line-through">₹4600</span>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          <div className="border border-gray-50 rounded-xl p-4 shadow-sm bg-white">

      <h3 className="font-semibold text-lg mb-4">PW Recommended Combos</h3>

      {/* Tabs */}
      <div className="flex border rounded-md overflow-hidden mb-4">
        <button
          onClick={() => setActiveTab("book+note")}
          className={`flex-1 text-center py-2 text-sm font-medium ${
            activeTab === "book+note"
              ? "bg-purple-100 text-purple-700"
              : "bg-white text-gray-600"
          }`}
        >
          BOOK + NOTE...
        </button>
        <button
          onClick={() => setActiveTab("book")}
          className={`flex-1 text-center py-2 text-sm font-medium ${
            activeTab === "book"
              ? "bg-purple-100 text-purple-700"
              : "bg-white text-gray-600"
          }`}
        >
          Book
        </button>
      </div>


      <div className="relative bg-purple-50 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300">
    
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border  text-xs font-bold">
            PW
          </div>
        </div>

        {/* Image */}
        <img
          src={current.img}
          alt={current.title}
          className="w-28 h-28 rounded-full border-4 border-purple-200 object-cover"
        />

        <h4 className="text-lg font-semibold mt-4">{current.title}</h4>

        <div className="flex items-center gap-3 mt-3">
          <span className="text-white bg-green-600 text-xs font-semibold px-2 py-1 rounded">
            {current.discount}
          </span>
          <span className="text-xl font-bold">₹{current.price}</span>
          <span className="text-gray-400 line-through">₹{current.oldPrice}</span>
        </div>

        <button className="mt-5 flex items-center gap-2 px-6 py-2 border  rounded-lg font-medium text-indigo-600 hover:bg-indigo-50">
          <input type="checkbox" className="w-4 h-4 accent-indigo-600" />
          Add
        </button>
      </div>
    </div>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-50 rounded-xl p-4 shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-2">Apply Code/Coupon</h3>
            <input
              type="text"
              placeholder="Apply Coupon Code"
              className="w-full border rounded-lg px-3 py-2 text-sm mt-2"
            />
            <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg font-medium">
              Apply
            </button>
             <div className="flex items-center gap-2 border border-gray-50 rounded-xl p-4 shadow-sm bg-white mt-4">
            <input type="checkbox" defaultChecked />
            <p className="text-sm">
              Donate to PW foundation <span className="font-semibold">₹10</span>
            </p>
          </div>
           <div className="border border-gray-50 rounded-xl p-4 shadow-sm bg-white mt-4">
            <h3 className="font-semibold text-lg mb-4">Payment Summary</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Price (1 items)</span>
                <span>₹4600</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">- ₹600</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon Disc.</span>
                <span>- ₹0</span>
              </div>
              <div className="flex justify-between">
                <span>PW Foundation Donation</span>
                <span>₹10</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-base">
                <span>Total Amount</span>
                <span>₹4010</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold">
              PROCEED TO BUY
            </button>
          </div>
          </div>
          <div className="border border-gray-50 rounded-xl p-4 shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-2">You are buying (1) items</h3>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={buy}
                alt="Item"
                className="rounded-lg w-20"
              />
              <div>
                <p className="text-sm font-medium">Arjuna JEE 4.0 2026</p>
                <p className="text-sm text-gray-600">₹4000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOrderSummary;