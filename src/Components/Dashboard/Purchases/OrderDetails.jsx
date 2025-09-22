import React from "react";
import { useParams, Link } from "react-router-dom";
import order from '../../../assets/coursegla.jpeg';

const OrderDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto p-6 px-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
        {/* Success Box */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col items-center shadow-sm">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-green-800 mt-4">Payment Successful</h2>
          <div className="flex gap-4 mt-5">
          <a
  href="/path/to/receipt.pdf"  
  download
  className="px-5 py-2 border rounded-md text-sm bg-white hover:bg-[#000080] hover:text-white transition inline-block"
>
  Download Receipt
</a>

          <button
  onClick={() => {
    const message = encodeURIComponent(
      "Here is your receipt: https://example.com/receipt.pdf"
    ); 
    window.open(`https://wa.me/?text=${message}`, "_blank");
  }}
  className="px-5 py-2 border rounded-md text-sm bg-white hover:bg-[#000080] hover:text-white transition"
>
  Share Receipt
</button>
          </div>
        </div>

        {/* Order Info */}
        <div className="bg-white border border-0 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between text-sm ">
            <p>
              <span className="font-medium text-black">Order ID :</span> {id}
            </p>
            <p>
              <span className="font-medium text-[16px]">Order Date :</span> <span className="font-semibold text-black text-[18px]">Sep 10, 2025</span>
            </p>
          </div>

          <div className="flex items-start gap-4 mt-4">
            <img
              src={order}
              alt="Course"
              className="w-28 h-20 object-cover rounded-lg shadow-sm"
            />
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold text-gray-800 text-lg">Ummeed NEET 2025</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-green-600 font-medium">Free</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md">Active</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            <span className="font-medium text-md">Valid Till:</span>
            <div className="font-semibold text-[20px]"> Jun 30, 2030</div>
          </p>

          <Link
            to="/dashboard/explore"
            className="block mt-6 text-center bg-indigo-100 hover:bg-indigo-200 text-[#000080] font-medium py-2 rounded-md transition"
          >
            Go to Batch
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
      
        <div className="bg-white border border-0 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4 text-lg">Payment Details</h3>
          <div className="flex justify-between text-sm mb-2">
            <span>Price (1 item)</span>
            <span>₹ 0</span>
          </div>
          <div className="flex justify-between text-sm mb-2 text-green-600">
            <span>Discount</span>
            <span>₹ 0</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Delivery Charges</span>
            <span>₹ 0</span>
          </div>
          <div className="flex justify-between text-sm mb-2 text-green-600">
            <span>Coupon Disc.</span>
            <span>₹ 0</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-gray-800 text-base">
            <span>Total Amount</span>
            <span>₹ 0</span>
          </div>
        </div>

        {/* Need Help */}
        <div className="bg-pink-50 border border-pink-100 rounded-xl p-6 flex flex-col gap-4 shadow-sm">
          <h3 className="font-semibold text-gray-800 text-lg">Need help?</h3>
          <p className="text-sm text-gray-600">Get in touch and we’ll be happy to help you.</p>
          <button className="bg-[#000080] text-white font-medium py-2 px-4 rounded-md hover:bg-[#4141e9ef] transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
