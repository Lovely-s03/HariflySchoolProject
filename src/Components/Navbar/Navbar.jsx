
// import React, { useState, useEffect, useRef } from 'react'
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
// import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
// import { Link } from 'react-router-dom';
// import DropdownMenu from '../DropDown/DropdownMenu';
// import MobileLoginModal from '../../common/MobileLoginModal';
// import { getheader_footer } from '../../service/api';

// const BASE_URL = "https://pw.harifly.in";
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const btnRef = useRef(null); 

//   const [headerData, setHeaderData] = useState({
//     logo: "",
//     phone: "",
//     email: "",
//     address: ""
//   });

//   const fetchHeader = async () => {
//     try {
//       const res = await getheader_footer();
//       const header = res.data?.data?.header;

//       if (header) {
//         setHeaderData({
//           logo: header.logo ? `${BASE_URL}/${header.logo}` : "",
//           phone: header.phone || "",
//           email: header.email || "",
//           address: header.address || ""
//         });
//       }
//     } catch (err) {
//       console.error("Error fetching header:", err);
//     }
//   };

//   useEffect(() => {
//     fetchHeader();
//   }, []);

//   return (
//     <div className="w-full fixed top-0 left-0 z-50">
//       {/* Top Bar */}
//       <div className="w-full bg-[#f8f9fa] text-sm text-gray-700 hidden min-[750px]:block">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2">
//           {/* Contact Info */}
//           <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
//             {headerData.phone && (
//               <span className="flex items-center gap-2">
//                 <FaPhoneAlt className="text-indigo-900" />
//                 <a href={`tel:${headerData.phone}`} className="hover:text-[#000080] whitespace-nowrap">
//                   {headerData.phone}
//                 </a>
//               </span>
//             )}
//             {headerData.email && (
//               <span className="flex items-center gap-2">
//                 <FaEnvelope className="text-indigo-900" />
//                 <a href={`mailto:${headerData.email}`} className="hover:text-[#000080] whitespace-nowrap">
//                   {headerData.email}
//                 </a>
//               </span>
//             )}
//             {headerData.address && (
//               <span className="flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-indigo-900" />
//                 <span>{headerData.address}</span>
//               </span>
//             )}
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4 text-indigo-900">
//             <a href="#" className="hover:text-[#000080]"><FaFacebookF /></a>
//             <a href="#" className="hover:text-[#000080]"><FaXTwitter /></a>
//             <a href="#" className="hover:text-[#000080]"><FaLinkedinIn /></a>
//             <a href="#" className="hover:text-[#000080]"><FaInstagram /></a>
//             <a href="#" className="hover:text-[#000080]"><FaYoutube /></a>
//           </div>
//         </div>
//       </div>

//       {/* Header */}
//       <nav className="w-full bg-white shadow-sm relative ">
//         <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Link to="/">
//               {headerData.logo ? (
//                 <img src={headerData.logo} alt="Logo" className="h-16 w-16 rounded-full" />
//               ) : (
//                 <span className="font-bold text-xl text-[#000080]">LOGO</span>
//               )}
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-4 xl:gap-6">
//             <Link to="/about-us" className="hover:text-[#000080] font-semibold">About Us</Link>
//             <Link to="center" className="hover:text-[#000080] font-semibold">Centers</Link>
//             <a href="#" className="hover:text-[#000080] font-semibold">Glare Store (Books)</a>
//             <a href="#" className="hover:text-[#000080] font-semibold">Real Test</a>
//             <a href="#" className="hover:text-[#000080] font-semibold">Class 1st - 8th</a>
//             <a href="#" className="hover:text-[#000080] font-semibold">Power Batch</a>
//           </div>

         
//           <div
//   className="relative"
//   onMouseEnter={() => setDropdownOpen(true)}
//   onMouseLeave={() => setDropdownOpen(false)}
// >
//   <button className="flex items-center border px-4 py-3 rounded-md text-[#000080] font-medium hover:bg-indigo-50">
//     All Course <FiChevronDown className="ml-1" />
//   </button>

//   {dropdownOpen && (
//     <div className="absolute top-full left-1/2 -translate-x-1/2  rounded-2xl p-6 grid grid-cols-[280px_1fr] gap-6 z-50 ">
//       <DropdownMenu />
//     </div>
//   )}
// </div>


//           {/* Login Button */}
//           <div className="hidden lg:block">
//             <button
//               onClick={() => setOpen(true)}
//               className="bg-[#000080] text-white px-5 py-3 rounded-md font-medium hover:bg-[#000080] cursor-pointer"
//             >
//               Login/Register
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-2xl"
//             onClick={() => setMenuOpen(true)}
//           >
//             <FiMenu />
//           </button>
//         </div>

//         {/* Mobile Overlay */}
//         {menuOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-40"
//             onClick={() => setMenuOpen(false)}
//           />
//         )}

//         {/* Mobile Sidebar */}
//         <div
//           className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
//         >
//           <div className="flex items-center justify-between px-4 py-3 border-b">
//             <h2 className="font-bold text-lg">Menu</h2>
//             <button onClick={() => setMenuOpen(false)} className="text-2xl">
//               <FiX />
//             </button>
//           </div>

//           <div className="flex flex-col px-4 py-3 gap-3">
//             <a href="#" className="hover:text-[#000080]">Vidyapeeth</a>
//             <a href="#" className="hover:text-[#000080]">Upskilling</a>
//             <a href="#" className="hover:text-[#000080]">Glare Store (Books)</a>
//             <a href="#" className="hover:text-[#000080]">Real Test</a>
//             <a href="#" className="hover:text-[#000080]">Class 1st - 8th</a>
//             <a href="#" className="hover:text-[#000080]">Power Batch</a>
//             <button
//               onClick={() => {
//                 setOpen(true);
//                 setMenuOpen(false);
//               }}
//               className="bg-[#000080] text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 mt-2 cursor-pointer"
//             >
//               Login/Register
//             </button>
//           </div>
//         </div>

//         <MobileLoginModal isOpen={open} onClose={() => setOpen(false)} />
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaBook, FaUserCircle, FaUser } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaHome, FaSchool } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropDown/DropdownMenu';
import MobileLoginModal from '../../common/MobileLoginModal';
import { getheader_footer } from '../../service/api';

const BASE_URL = "https://pw.harifly.in";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [headerData, setHeaderData] = useState({
    logo: "",
    phone: "",
    email: "",
    address: ""
  });

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
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);  
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Top Bar (Desktop Only) */}
      <div className="w-full bg-[#f8f9fa] text-sm text-gray-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 gap-2 overflow-x-auto">
          <div className="flex items-center gap-3 text-center sm:text-left">
            {headerData.phone && (
              <span className="flex items-center gap-2 whitespace-nowrap">
                <FaPhoneAlt className="text-indigo-900" />
                <a href={`tel:${headerData.phone}`} className="hover:text-[#000080] whitespace-nowrap">
                  {headerData.phone}
                </a>
              </span>
            )}
            {headerData.email && (
              <span className="flex items-center gap-2 whitespace-nowrap">
                <FaEnvelope className="text-indigo-900" />
                <a href={`mailto:${headerData.email}`} className="hover:text-[#000080] whitespace-nowrap">
                  {headerData.email}
                </a>
              </span>
            )}
            {headerData.address && (
              <span className="flex items-center gap-2 whitespace-nowrap">
                <FaMapMarkerAlt className="text-indigo-900 whitespace-nowrap" />
                <span>{headerData.address}</span>
              </span>
            )}
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

      {/* Main Header */}
      <nav className="w-full bg-white shadow-sm relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo (Desktop Only) */}
          {!isMobile && (
            <div className="flex items-center gap-2">
              <Link to="/">
                {headerData.logo ? (
                  <img src={headerData.logo} alt="Logo" className="h-16 w-16 rounded-full" />
                ) : (
                  <span className="font-bold text-xl text-[#000080]">LOGO</span>
                )}
              </Link>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <Link to="/about-us" className="hover:text-[#000080] font-semibold">About Us</Link>
            <Link to="center" className="hover:text-[#000080] font-semibold">Centers</Link>
            <a href="#" className="hover:text-[#000080] font-semibold">Glare Store (Books)</a>
            <a href="#" className="hover:text-[#000080] font-semibold">Real Test</a>
            <a href="#" className="hover:text-[#000080] font-semibold">Class 1st - 8th</a>
            <a href="#" className="hover:text-[#000080] font-semibold">Power Batch</a>
          </div>

          {/* All Courses Dropdown */}
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center border px-4 py-3 rounded-md text-[#000080] font-medium hover:bg-indigo-50">
              All Course <FiChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 rounded-2xl p-6 grid grid-cols-[280px_1fr] gap-6 z-50 bg-white shadow-lg">
                <DropdownMenu />
              </div>
            )}
          </div>

          {/* Login Button (Desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={() => setOpen(true)}
              className="bg-[#000080] text-white px-5 py-3 rounded-md font-medium hover:bg-[#000080] cursor-pointer"
            >
              Login/Register
            </button>
          </div>
        </div>

        {/* Mobile Bottom Navigation (with Logo) */}
        {/* <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-inner border-t flex justify-around items-center py-2 z-50">
         
          <Link to="/" className="flex flex-col items-center text-[#000080]">
            {headerData.logo ? (
              <img src={headerData.logo} alt="Logo" className="h-10 w-10 rounded-full mb-1" />
            ) : (
              <span className="font-bold text-sm mb-1">LOGO</span>
            )}
          </Link>

          <Link to="/about-us" className="flex flex-col items-center text-sm font-medium text-[#000080]">About</Link>
          <Link to="center" className="flex flex-col items-center text-sm font-medium text-[#000080]">Centers</Link>
          <button
            onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
            className="flex items-center text-sm font-medium text-[#000080] "
          >
            Courses <FiChevronDown className="ml-0 mt-1" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="bg-[#000080] text-white px-3 py-1 rounded-md text-sm flex flex-col items-center"
          >
            Login
          </button>
        </div> */}
<div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-inner border-t border-gray-300 flex justify-around items-center py-4 z-50">
  {/* Logo */}
  {/* <Link to="/" className="flex flex-col items-center text-[#000080]">
    {headerData.logo ? (
      <img src={headerData.logo} alt="Logo" className="h-10 w-10 rounded-full mb-1" />
    ) : (
      <span className="font-bold text-sm mb-1">LOGO</span>
    )}
  </Link> */}
   <Link to="/" className="flex flex-col items-center text-[#000080]">
    <FaHome className="mb-1" />
    <span className="text-sm font-bold">Home</span>
  </Link>


  <Link to="/dashboard/purchases" className="flex flex-col items-center text-md font-medium text-[#000080]">
    <FaUser className="mb-1"/>
    <span className="text-md">My order</span>
  </Link>


  {/* Courses Dropdown */}
<button
  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
  className="flex flex-col items-center text-md font-medium text-[#000080]"
>
  {/* Icon above */}
  <FaBook className="mb-1" />

  {/* Text + arrow inline */}
  <span className="flex items-center text-md">
 Batch <FiChevronDown className="ml-1" />
  </span>
</button>


  {/* Login */}
  <button
    onClick={() => setOpen(true)}
    className="flex flex-col items-center text-md font-medium text-[#000080]"
  >
   <FaUserCircle className='mb-1'/>
    <span className=" flex items-center  text-md">Login</span>
  </button>
</div>
        {/* Mobile Courses Dropdown */}
        {mobileCoursesOpen && (
          <div className="lg:hidden fixed bottom-12 left-0 w-full bg-white shadow-lg border-t z-50 p-4 max-h-[60vh] overflow-y-auto mb-5 lg:mb-0">
            <DropdownMenu />
          </div>
        )}

        <MobileLoginModal isOpen={open} onClose={() => setOpen(false)} />
      </nav>
    </div>
  );
};

export default Navbar;
