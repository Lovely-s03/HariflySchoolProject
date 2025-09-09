
import React from "react";
import {
  FaFacebook,
} from "react-icons/fa";
import logo from '../../assets/logo.png'
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
  <>
    <footer>
      <div className="py-8 border-t border-gray-400"
       
    
>
       
        <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Physics Wallah"
                className="w-10 h-10"
              />
              <h2 className="text-xl font-semibold">Physics Wallah</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4  w-full xl:w-[450px]">
              We understand that every student has unique needs and abilities,
              that’s why our curriculum is designed to adapt to your needs and
              help you grow!
            </p>

           
            <div className="flex gap-3 mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>
          <div className=" pl-0 xl:pl-48 md:col-span-3 grid grid-cols-1 gap-5">
            
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Company */}
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900 whitespace-nowrap">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                  <li>Updates</li>
                  <li>Account Deletion</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Our Centres</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900 whitespace-nowrap">
                  <li>New Delhi</li>
               
                </ul>
              </div>

              
              <div>
                <h3 className="font-semibold mb-3">Popular Exams</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900 whitespace-nowrap">
                  <li>IIT JEE</li>
                  <li>NEET</li>
                  <li>GATE</li>
             <li>Foundation Course</li>
    <li>6th - 10th</li>
<li>6th - 10th</li>
<li>11th - 12th (Med & Non-Med)</li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Connect With Us */}
              <div>
                <h3 className="font-semibold mb-3">Connect With Us</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900 whitespace-nowrap">
                  <li>Email Us</li>
                  <li>Talk To A Counselor</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900 whitespace-nowrap">
                  <li> Glare Prerna</li>
                  <li> Glare SIP</li>
                  <li> Glare Gurukulam</li>
                </ul>
              </div>

              {/* Our Products */}
              <div>
                <h3 className="font-semibold mb-3">Our Products</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900 whitespace-nowrap ">
                  <li> Glare App Learning</li>
                  <li> Glare Offline Payments (Fin-Z)</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
<div className="border-t border-gray-400 max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        
      
        <p className="text-gray-700 text-md text-center sm:text-left">
          © Copyright 2025, All Rights Reserved By{" "}
          <span className="font-semibold text-gray-800">
            Harifly Technologies Private Limited
          </span>
          . CIN: U62099DL2024PTC432975
        </p>

        {/* Right - Social Media Icons */}
        <div className="flex items-center gap-4 text-gray-600">
          <a href="#" className="hover:text-indigo-600">
            <FaFacebook size={18} />
          </a>
          <a href="#" className="hover:text-indigo-600">
            <FaXTwitter size={18} />
          </a>
          <a href="#" className="hover:text-indigo-600">
            <FaLinkedinIn size={18} />
          </a>
          <a href="#" className="hover:text-indigo-600">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="hover:text-indigo-600">
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
     
    </footer>
      
  </>
  );
}




