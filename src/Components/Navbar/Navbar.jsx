
  import React, { useState } from 'react'
  import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
  import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
  import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
  import logo from '../../assets/logo.png';
  import DropdownMenu from '../DropDown/DropdownMenu';
  import MobileLoginModal from '../../common/MobileLoginModal';
  import { Link } from 'react-router-dom';

  const Navbar = () => {
      const [open, setOpen] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
      <div className="w-full fixed top-0 left-0 z-50">
    
        <div className="w-full bg-[#f8f9fa] text-sm text-gray-700 hidden min-[750px]:block">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2">
            
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-indigo-900" />
                <a href="tel:+917766828010" className="hover:text-[#000080] whitespace-nowrap">+91 7766828010</a>
              </span>

              <span className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-900" />
                <a href="mailto:info@harifly.com" className="hover:text-[#000080] whitespace-nowrap">info@harifly.com</a>
              </span>

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-indigo-900" />
                <span>
                  Flat No. B3 on Ground floor, DDA LIG Arunodaya Apartment, Poket 2, Sector-7 Dwarka, Delhi 110075
                </span>
              </span>
            </div>

            
            <div className="flex items-center gap-4 text-indigo-900">
              <a href="#" className="hover:text-[#000080]"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#000080]"><FaXTwitter /></a>
              <a href="#" className="hover:text-[#000080]"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-[#000080]"><FaInstagram /></a>
              <a href="#" className="hover:text-[#000080]"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Header */}
        <nav className="w-full bg-white shadow-sm relative">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
    <Link to="/">
      <img
        src={logo}
        alt="Logo"
        className="h-16 w-16 rounded-full"
      />
    </Link>
  </div>
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <a href="#" className="hover:text-[#000080] font-semibold">Vidyapeeth</a>
              <a href="#" className="hover:text-[#000080] font-semibold">Upskilling</a>
              <a href="#" className="hover:text-[#000080] font-semibold">PW Store (Books)</a>
              <a href="#" className="hover:text-[#000080] font-semibold">Real Test</a>
              <a href="#" className="hover:text-[#000080] font-semibold">Class 1st - 8th</a>
              <a href="#" className="hover:text-[#000080] font-semibold">Power Batch</a>
            </div>

  <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button className="flex items-center border px-4 py-3 rounded-md text-[#000080] font-medium hover:bg-indigo-50">
          All Course <FiChevronDown className="ml-1" />
        </button>
        {dropdownOpen && <DropdownMenu/>}
      </div>
          
            {/* Desktop Login Button */}
            <div className="hidden lg:block">
              <button onClick={() => setOpen(true)}
  className="bg-[#000080] text-white px-5 py-3 rounded-md font-medium hover:bg-[#000080] cursor-pointer">
                Login/Register
              </button>
                    <MobileLoginModal isOpen={open} onClose={() => setOpen(false)} />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            />
          )}

          {/* Mobile Slide Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h2 className="font-bold text-lg">Menu</h2>
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                <FiX />
              </button>
            </div>

            <div className="flex flex-col px-4 py-3 gap-3">
          
              <a href="#" className="hover:text-[#000080]">Vidyapeeth</a>
              <a href="#" className="hover:text-[#000080]">Upskilling</a>
              <a href="#" className="hover:text-[#000080]">PW Store (Books)</a>
              <a href="#" className="hover:text-[#000080]">Real Test</a>
              <a href="#" className="hover:text-[#000080]">Class 1st - 8th</a>
              <a href="#" className="hover:text-[#000080]">Power Batch</a>

              <button onClick={() => setOpen(true)}
  className="bg-[#000080] text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 mt-2 cursor-pointer">
                Login/Register
              </button>
          
  <MobileLoginModal isOpen={open} onClose={() => setOpen(false)} />
            </div>
          </div>
        </nav>
      </div>
    );
  };

  export default Navbar;

