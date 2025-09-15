// App.js
import React, { useState } from "react";
import NavbarDashboard from "../../common/NavbarDasboard";
import Sidebar from "../../common/Sidebar";
import { FaFire } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 let pageTitle = "Study";
 if (location.pathname.includes("testseries")) {
  pageTitle = "Test Series";
} else if (location.pathname.includes("study")) {
  pageTitle = "Study";
} else if (location.pathname.includes("batch")) {
  pageTitle = "Batch";
}
 else if (location.pathname.includes("contact")) {
  pageTitle = "Contact";
 }
 else if (location.pathname.includes("testpass")) {
  pageTitle = "Back";
 }
 


   const handleClick = () => {
    if (pageTitle === "Back") {
      navigate(-1); 
    }
  };
  return (
    <div className="flex h-screen">
     
   
       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />


      <div className="flex-1 flex flex-col">
     <NavbarDashboard onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="bg-gray-50">
       <div className="fixed top-[48px] left-0 w-full border-b shadow-sm bg-white z-40">
         <div className="ml-0 md:ml-[258px]">
            <div className="flex items-center justify-around lg:justify-betweeen gap-0 lg:gap-[70%]  py-3 ">

 <h2
                  className={`font-semibold text-lg ${
                    pageTitle === "Back" ? "cursor-pointer " : ""
                  }`}
                  onClick={handleClick}
                >
                  {pageTitle}
                </h2>
      <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-gray-50 border rounded-full px-3 py-1">
          <FaFire className="text-gray-500" />
          <span className="text-gray-700 font-medium">0</span>
        </div>
        <div className="flex items-center gap-1 bg-gray-50 border rounded-full px-3 py-1">
          <GiDiamondTrophy className="text-blue-500" />
          <span className="text-gray-700 font-medium">0</span>
        </div>
      </div>
    </div>
   
   
        </div>
       </div>
<div className=" ml-0 md:ml-[258px]">
  
   <div className="px-5 xl:px-[55px] mt-[135px]"> 
  
        <Outlet/> 
    
   </div>

</div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
