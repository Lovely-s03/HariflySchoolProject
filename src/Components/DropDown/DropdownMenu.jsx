// import React, { useState } from "react";
// import {
//   FaBook,
//   FaGlobe,
//   FaUniversity,
//   FaFlask,
//   FaPaintBrush,
//   FaLandmark,
//   FaGraduationCap,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const DropdownMenu = () => {
//   const [active, setActive] = useState("School Preparation");
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [accordionOpen, setAccordionOpen] = useState(null);
// const [dropdownOpen, setDropdownOpen] = useState(false);

//   const leftMenu = [
//     { id: 1, title: "Competitive Exams", desc: "IIT JEE, NEET, ESE, GATE, AE/JE, Olympiad" },
//     { id: 2, title: "Only IAS", desc: "UPSC, State PSC" },
//     { id: 3, title: "School Preparation", desc: "Foundation (Class 6-10), Commerce, Arts, CuriousJr, Science, Boards" },
//     { id: 4, title: "Govt Exam", desc: "SSC, Banking, Judiciary, Teaching, Railway, Defence" },
//     { id: 5, title: "UG & PG Entrance Exams", desc: "MBA, IIT JAM, LAW, CUET, UGC NET, GMAT" },
//     { id: 6, title: "FINANCE", desc: "CA, CS, ACCA" },
//     { id: 7, title: "Others", desc: "Online Degrees, Certifications, Private Banking" },
//     { id: 8, title: "Study Abroad", desc: "IELTS, TOEFL, MBBS Abroad" },
//   ];

//   const rightMenu = {
//     "Competitive Exams": [
//       { id: 1, title: "IIT JEE", icon: <FaUniversity />, path: "/course" },
//       { id: 2, title: "NEET", icon: <FaFlask />, path: "/course" },
//       { id: 3, title: "ESE", icon: <FaBook />, path: "/course" },
//       { id: 4, title: "GATE", icon: <FaGraduationCap />, path: "/course" },
//       { id: 5, title: "AE/JE", icon: <FaLandmark />, path: "/course" },
//       { id: 6, title: "Olympiad", icon: <FaGlobe /> },
//     ],
//     "Only IAS": [
//       { id: 1, title: "UPSC", icon: <FaUniversity />, path: "/course" },
//       { id: 2, title: "State PSC", icon: <FaGlobe />, path: "/course" },
//     ],
//     "School Preparation": [
//       { id: 1, title: "Foundation (Class 6-10)", icon: <FaUniversity />, path: "/course" },
//       { id: 2, title: "Commerce", icon: <FaGlobe />, path: "/course" },
//       { id: 3, title: "Arts", icon: <FaPaintBrush />, path: "/course" },
//       { id: 4, title: "CuriousJr (3rd - 8th)", icon: <FaBook />, path: "/course" },
//       { id: 5, title: "Science", icon: <FaFlask />, path: "/course" },
//       { id: 6, title: "Boards", icon: <FaBook />, path: "/course" },
//     ],
//     "Govt Exam": [
//       { id: 1, title: "SSC", icon: <FaUniversity />, path: "/course" },
//       { id: 2, title: "Banking", icon: <FaLandmark />, path: "/course" },
//       { id: 3, title: "Judiciary", icon: <FaBook />, path: "/course" },
//       { id: 4, title: "Teaching", icon: <FaGraduationCap />, path: "/course" },
//       { id: 5, title: "Railway", icon: <FaGlobe />, path: "/course" },
//       { id: 6, title: "Defence", icon: <FaFlask />, path: "/course" },
//     ],
//     "UG & PG Entrance Exams": [
//       { id: 1, title: "MBA", icon: <FaUniversity />, path: "/course" },
//       { id: 2, title: "IIT JAM", icon: <FaFlask />, path: "/course" },
//       { id: 3, title: "LAW", icon: <FaBook />, path: "/course" },
//       { id: 4, title: "CUET", icon: <FaGraduationCap />, path: "/course" },
//       { id: 5, title: "UGC NET", icon: <FaLandmark />, path: "/course" },
//       { id: 6, title: "GMAT", icon: <FaGlobe />, path: "/course" },
//     ],
//     "FINANCE": [
//       { id: 1, title: "CA", icon: <FaUniversity />, path: "/course" },
//       { id: 2, title: "CS", icon: <FaBook />, path: "/course" },
//       { id: 3, title: "ACCA", icon: <FaGlobe />, path: "/course" },
//     ],
//     "Others": [
//       { id: 1, title: "Online Degrees", icon: <FaGraduationCap />, path: "/course" },
//       { id: 2, title: "Certifications", icon: <FaBook />, path: "/course" },
//       { id: 3, title: "Private Banking", icon: <FaLandmark />, path: "/course" },
//     ],
//     "Study Abroad": [
//       { id: 1, title: "IELTS", icon: <FaBook />, path: "/course" },
//       { id: 2, title: "TOEFL", icon: <FaGlobe />, path: "/course" },
//       { id: 3, title: "MBBS Abroad", icon: <FaUniversity />, path: "/course" },
//     ],
//   };

//   return (
//     <div className="w-full relative inline-block">
//       {/* ✅ Desktop Mega Menu */}
//       <div className="hidden xl:grid absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[950px] bg-white shadow-2xl rounded-2xl p-6 grid-cols-[280px_1fr] gap-6 z-50">
//         <div className="flex flex-col divide-y">
//           {leftMenu.map((item) => (
//             <div
//               key={item.id}
//               onMouseEnter={() => setActive(item.title)}
//               className={`group cursor-pointer px-3 py-3 transition relative ${
//                 active === item.title ? "bg-indigo-50 rounded-lg" : "hover:bg-gray-50"
//               }`}
//             >
//               {active === item.title && (
//                 <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#000080] rounded-r-lg"></span>
//               )}
//               <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
//               <p className="text-xs text-gray-500">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* ✅ Right side links */}
//         <div className="grid grid-cols-2 gap-4">
//           {rightMenu[active]?.map((item) => (
//             <Link
//               to={item.path}
//               key={item.id}
//                onClick={() => {
//     setDropdownOpen(false); 

//   }}
//               className="flex items-center gap-3 p-4 rounded-xl border bg-gradient-to-tr from-indigo-50 to-white hover:shadow-lg hover:-translate-y-1 transition"
//             >
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-[#000080] text-lg">
//                 {item.icon}
//               </div>
//               <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Mobile Menu Button */}
//       <button
//         className="xl:hidden px-4 py-2 bg-[#000080] text-white rounded-lg"
//         onClick={() => setMobileOpen(true)}
//       >
//         All Courses
//       </button>

//       {mobileOpen && (
//         <div className="fixed inset-0 z-50 flex">
//           <div
//             className="fixed inset-0 bg-black/40"
//             onClick={() => setMobileOpen(false)}
//           ></div>

//           <div className="relative w-80 bg-white h-full shadow-lg p-4 overflow-y-auto animate-slide-in">
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-3 text-2xl text-gray-600"
//               onClick={() => setMobileOpen(false)}
//             >
//               ×
//             </button>

//             <h2 className="text-lg font-bold mb-4">All Courses</h2>

//             {leftMenu.map((menu) => (
//               <div key={menu.id} className="border-b pb-2">
//                 <button
//                   className="w-full flex justify-between items-center py-2 font-semibold text-gray-800"
//                   onClick={() =>
//                     setAccordionOpen(accordionOpen === menu.title ? null : menu.title)
//                   }
//                 >
//                   {menu.title}
//                   <span>{accordionOpen === menu.title ? "−" : "+"}</span>
//                 </button>

//                 {accordionOpen === menu.title && (
//                   <div className="grid grid-cols-1 gap-2 mt-2">
//                     {rightMenu[menu.title]?.map((sub) => (
//                       <Link
//                         to={sub.path}
//                         key={sub.id}
//                         onClick={() => {
//                           setMobileOpen(false);
//                           window.scrollTo({ top: 0, behavior: "smooth" }); 
//                         }}
//                         className="flex items-center gap-2 p-2 rounded-lg border bg-indigo-50"
//                       >
//                         <div className="text-[#000080]">{sub.icon}</div>
//                         <span className="text-sm">{sub.title}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;

import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaGlobe,
  FaUniversity,
  FaFlask,
  FaPaintBrush,
  FaLandmark,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCategories, getCourses } from "../../service/api";
// ✅ import your API

const iconMap = {
  university: <FaUniversity />,
  flask: <FaFlask />,
  book: <FaBook />,
  graduation: <FaGraduationCap />,
  landmark: <FaLandmark />,
  globe: <FaGlobe />,
  paint: <FaPaintBrush />,
};

const DropdownMenu = () => {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [leftMenu, setLeftMenu] = useState([]);
  const [rightMenu, setRightMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch menu data from API

  const fetchData = async () => {
    try {
      setLoading(true);

      const [courseRes, categoryRes] = await Promise.all([
        getCourses(),
        getCategories()
      ]);

      const courses = courseRes.data?.data || [];
      const categories = categoryRes.data?.data || [];

      // Left menu (courses with category names in desc)
      const left = courses.map((course) => {
        const courseCats = categories.filter((cat) => cat.course_id === course.id);

        return {
          id: course.id,
          title: course.name,
          desc: courseCats.length
            ? courseCats.map((c) => c.name).join(", ")
            : "No Categories",
        };
      });

      // Right menu (categories grouped under each course)
      const right = {};
      courses.forEach((course) => {
        right[course.name] = [];

        const courseCats = categories.filter((cat) => cat.course_id === course.id);

        courseCats.forEach((cat) => {
          right[course.name].push({
            id: cat.id,
            title: cat.name,
            icon: "book",
            // path: `/course/${cat.id}`,
            path: `/course`, // Adjust as needed
          });
        });
      });

      setLeftMenu(left);
      setRightMenu(right);
      setActive(left[0]?.title || null);
    } catch (err) {
      setError("Failed to load courses/categories");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  fetchData();
}, []);




  if (loading) return <p className="text-center p-4">Loading courses...</p>;
  if (error) return <p className="text-center text-red-500 p-4">{error}</p>;

  return (
    <div className="w-full relative inline-block">
      {/* ✅ Desktop Mega Menu */}
      <div className="hidden xl:grid absolute top-full left-1/2 -translate-x-[60%] mt-3 w-[950px] bg-white shadow-2xl rounded-2xl p-6 grid-cols-[280px_1fr] gap-6 z-50">
        <div className="flex flex-col divide-y">
          {leftMenu.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActive(item.title)}
              className={`group cursor-pointer px-3 py-3 transition relative ${
                active === item.title ? "bg-indigo-50 rounded-lg" : "hover:bg-gray-50"
              }`}
            >
              {active === item.title && (
                <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#000080] rounded-r-lg"></span>
              )}
              <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ Right side links */}
        <div className="grid grid-cols-2 gap-4">
          {rightMenu[active]?.map((item) => (
            <Link
              to={item.path}
              key={item.id}
               onClick={() => {
    setDropdownOpen(false); 

  }}
              className="flex items-center gap-3 p-4 rounded-xl border bg-gradient-to-tr from-indigo-50 to-white hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-[#000080] text-lg">
                {item.icon}
              </div>
              <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Menu Button */}
      <button
        className="xl:hidden px-4 py-2 bg-[#000080] text-white rounded-lg"
        onClick={() => setMobileOpen(true)}
      >
        All Courses
      </button>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          ></div>

          <div className="relative w-80 bg-white h-full shadow-lg p-4 overflow-y-auto animate-slide-in">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-2xl text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>

            <h2 className="text-lg font-bold mb-4">All Courses</h2>

            {leftMenu.map((menu) => (
              <div key={menu.id} className="border-b pb-2">
                <button
                  className="w-full flex justify-between items-center py-2 font-semibold text-gray-800"
                  onClick={() =>
                    setAccordionOpen(accordionOpen === menu.title ? null : menu.title)
                  }
                >
                  {menu.title}
                  <span>{accordionOpen === menu.title ? "−" : "+"}</span>
                </button>

                {accordionOpen === menu.title && (
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {rightMenu[menu.title]?.map((sub) => (
                      <Link
                        to={sub.path}
                        key={sub.id}
                        onClick={() => {
                          setMobileOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" }); 
                        }}
                        className="flex items-center gap-2 p-2 rounded-lg border bg-indigo-50"
                      >
                        <div className="text-[#000080]">{sub.icon}</div>
                        <span className="text-sm">{sub.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
