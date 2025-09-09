
import React from "react";
import {
  PencilSquareIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  BoltIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ShoppingCartIcon,
  NewspaperIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoCallOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdOutlinePrivacyTip } from "react-icons/md";

import { Link } from "react-router-dom";
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Background Overlay (only when open on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed bg-white shadow-md flex flex-col p-4 space-y-6 overflow-y-auto z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
          md:top-[49px] md:left-0 md:h-[calc(100vh-49px)] md:w-64
          top-0 left-0 h-screen w-full md:w-64`}
      >
   

        {/* Close Button (Mobile Only) */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Learn Online */}
        <div>
          <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase">
            Learn Online
          </h2>
          <ul className="space-y-2">
             <Link to="study" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointe">
                      <PencilSquareIcon className="h-5 w-5" />
              <span>Study</span>
         
            </Link>
            <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <BookOpenIcon className="h-5 w-5" />
              <span>Library</span>
            </li>
          </ul>
        </div>

        {/* Study Packs */}
        <div>
          <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase">
            Study Packs
          </h2>
          <ul className="space-y-2">
        
             <Link to="batch" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
               <ComputerDesktopIcon className="h-5 w-5 text-gray-500" />
              <span>Batches</span>
             </Link>
            
    
            <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <BoltIcon className="h-5 w-5" />
              <span>Power Batch</span>
            </li>
             <Link to="testseries" className=" flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
         
            
              <ClipboardDocumentListIcon className="h-5 w-5" />
              <span>Test Series</span>
             
            
             </Link>
            <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <AcademicCapIcon className="h-5 w-5" />
              <span>Scholarship</span>
            </li>
          </ul>
        </div>

        {/* Offline */}
        <div>
          <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase">
            Offline
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <BuildingOffice2Icon className="h-5 w-5" />
              <span>Centres</span>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase">
            Explore PW
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Store</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <NewspaperIcon className="h-5 w-5" />
              <span>MIP</span>
              <span className="ml-auto text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                NEW
              </span>
            </li>
          </ul>
         
        </div>
         <div>
          <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase">
          More
          </h2>
          <ul className="space-y-2">
            <Link to="contact" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <IoCallOutline className="h-5 w-5"/>
              <span>Contact Us</span>
            </Link>
            <Link to="/about-us" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
             <FcAbout className="h-5 w-5"/>
              <span>About Us</span>
           
            </Link>
            <Link to="/privacy" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdOutlinePrivacyTip className="h-5 w-5" />
              <span>Privacy Policy</span>
             
            </Link>
          </ul>
         
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
