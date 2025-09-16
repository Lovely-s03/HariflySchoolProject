import React, { useState, useEffect } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropDown/DropdownMenu';
import MobileLoginModal from '../../common/MobileLoginModal';
import { getheader_footer } from '../../service/api';

const BASE_URL = "https://pw.harifly.in";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ State from API
  const [headerData, setHeaderData] = useState({
    logo: "",
    phone: "",
    email: "",
    address: ""
  });

  // ✅ Fetch header/footer API
  const fetchHeader = async () => {
    try {
      const res = await getheader_footer();
      const header = res.data?.data?.header;

      if (header) {
        setHeaderData({
          logo: header.logo ? `${BASE_URL}/${header.logo}` : "",
          phone: header.phone || "",
          email: header.email || "",
          address: header.address || ""
        });
      }
    } catch (err) {
      console.error("Error fetching header:", err);
    }
  };

  useEffect(() => {
    fetchHeader();
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="w-full bg-[#f8f9fa] text-sm text-gray-700 hidden min-[750px]:block">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            {headerData.phone && (
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-indigo-900" />
                <a href={`tel:${headerData.phone}`} className="hover:text-[#000080] whitespace-nowrap">
                  {headerData.phone}
                </a>
              </span>
            )}
            {headerData.email && (
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-900" />
                <a href={`mailto:${headerData.email}`} className="hover:text-[#000080] whitespace-nowrap">
                  {headerData.email}
                </a>
              </span>
            )}
            {headerData.address && (
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-indigo-900" />
                <span>{headerData.address}</span>
              </span>
            )}
          </div>

          {/* Social Icons (static for now, can also come from API if added) */}
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
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              {headerData.logo ? (
                <img src={headerData.logo} alt="Logo" className="h-16 w-16 rounded-full" />
              ) : (
                <span className="font-bold text-xl text-[#000080]">LOGO</span>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a href="#" className="hover:text-[#000080] font-semibold">Vidyapeeth</a>
            <a href="#" className="hover:text-[#000080] font-semibold">Upskilling</a>
            <a href="#" className="hover:text-[#000080] font-semibold">Glare Store (Books)</a>
            <a href="#" className="hover:text-[#000080] font-semibold">Real Test</a>
            <a href="#" className="hover:text-[#000080] font-semibold">Class 1st - 8th</a>
            <a href="#" className="hover:text-[#000080] font-semibold">Power Batch</a>
          </div>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center border px-4 py-3 rounded-md text-[#000080] font-medium hover:bg-indigo-50">
              All Course <FiChevronDown className="ml-1" />
            </button>
            {dropdownOpen && <DropdownMenu />}
          </div>

          {/* Login Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => setOpen(true)}
              className="bg-[#000080] text-white px-5 py-3 rounded-md font-medium hover:bg-[#000080] cursor-pointer"
            >
              Login/Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>

        {/* Mobile Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
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
            <a href="#" className="hover:text-[#000080]">Glare Store (Books)</a>
            <a href="#" className="hover:text-[#000080]">Real Test</a>
            <a href="#" className="hover:text-[#000080]">Class 1st - 8th</a>
            <a href="#" className="hover:text-[#000080]">Power Batch</a>
            <button
              onClick={() => {
                setOpen(true);
                setMenuOpen(false);
              }}
              className="bg-[#000080] text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 mt-2 cursor-pointer"
            >
              Login/Register
            </button>
          </div>
        </div>

        <MobileLoginModal isOpen={open} onClose={() => setOpen(false)} />
      </nav>
    </div>
  );
};

export default Navbar;
