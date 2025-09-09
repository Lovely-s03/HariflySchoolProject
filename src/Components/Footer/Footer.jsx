
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
      <div className="py-10 border-t border-gray-400"
         style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FFA500' fill-opacity='0.15' d='M0,160L60,170C120,180,240,200,360,202.7C480,205,600,191,720,170.7C840,150,960,122,1080,133.3C1200,144,1320,192,1380,213.3L1440,235L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'/%3E%3Cpath fill='%230C046B' fill-opacity='0.12' d='M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}>
       
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
          <div className=" pl-0 xl:pl-48 md:col-span-3 grid grid-cols-1 gap-10">
            
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Company */}
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                  <li>Updates</li>
                  <li>Account Deletion</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Our Centres</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900">
                  <li>New Delhi</li>
                  <li>Patna</li>
                  <li>Kota</li>
                  <li>Noida</li>
                  <li>Dhanbad</li>
                  <li>Varanasi</li>
                  <li>View All</li>
                </ul>
              </div>

              
              <div>
                <h3 className="font-semibold mb-3">Popular Exams</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900">
                  <li>IIT JEE</li>
                  <li>NEET</li>
                  <li>GATE</li>
                  <li>Defence</li>
                  <li>UPSC</li>
                  <li>School Prep</li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Connect With Us */}
              <div>
                <h3 className="font-semibold mb-3">Connect With Us</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900">
                  <li>Email Us</li>
                  <li>Talk To A Counselor</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900">
                  <li>PW Prerna</li>
                  <li>PW SIP</li>
                  <li>PW Gurukulam</li>
                </ul>
              </div>

              {/* Our Products */}
              <div>
                <h3 className="font-semibold mb-3">Our Products</h3>
                <ul className="space-y-1 font-sm text-sm text-gray-900">
                  <li>PW App Learning</li>
                  <li>PW Offline Payments (Fin-Z)</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
<div className="border-t border-gray-400 max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        
      
        <p className="text-gray-600 text-md text-center sm:text-left">
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




