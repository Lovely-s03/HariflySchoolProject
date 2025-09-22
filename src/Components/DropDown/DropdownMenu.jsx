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

const iconMap = {
  university: <FaUniversity />,
  flask: <FaFlask />,
  book: <FaBook />,
  graduation: <FaGraduationCap />,
  landmark: <FaLandmark />,
  globe: <FaGlobe />,
  paint: <FaPaintBrush />,
};

const DropdownMenu = ({ anchorRef, onClose }) => {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const [leftMenu, setLeftMenu] = useState([]);
  const [rightMenu, setRightMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);

      const [courseRes, categoryRes] = await Promise.all([getCourses(), getCategories()]);

      const courses = courseRes.data?.data || [];
      const categories = categoryRes.data?.data || [];

      const left = courses.map((course) => {
        const courseCats = categories.filter((cat) => cat.course_id === course.id);

        return {
          id: course.id,
          title: course.name,
          desc: courseCats.length ? courseCats.map((c) => c.name).join(", ") : "No Categories",
        };
      });

      const right = {};
      courses.forEach((course) => {
        right[course.name] = [];
        const courseCats = categories.filter((cat) => cat.course_id === course.id);
        courseCats.forEach((cat) => {
          right[course.name].push({
            id: cat.id,
            title: cat.name,
            icon: "book",
            path: `/course`,
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
    <div className="relative inline-block">
     
      <div
        className="hidden xl:grid absolute top-full left-1/2 -translate-x-[60%] mt-2 w-[950px] bg-white shadow-2xl rounded-2xl p-6 grid-cols-[280px_1fr] gap-6 z-50 pointer-events-auto"
        onMouseEnter={() => {}}
        onMouseLeave={() => onClose && onClose()}
        style={{ transformOrigin: "top center" }}
      >
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

        {/* Right side */}
        <div className="grid grid-cols-2 gap-4">
          {(rightMenu[active] || []).map((item) => (
            <Link
              to={item.path}
              key={item.id}
              onClick={() => {
                onClose && onClose();
              }}
              className="flex items-center gap-3 p-4 rounded-xl border bg-gradient-to-tr from-indigo-50 to-white hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-[#000080] text-lg">
                {iconMap[item.icon] || <FaBook />}
              </div>
              <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
      <button
        className="xl:hidden px-4 py-2 bg-[#000080] text-white rounded-lg"
        onClick={() => setMobileOpen(true)}
      >
        All Courses
      </button>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileOpen(false)}></div>

          <div className="relative w-80 bg-white h-[100vh] shadow-lg p-4 overflow-y-auto animate-slide-in">
            <button className="absolute top-3 right-3 text-2xl" onClick={() => setMobileOpen(false)}>
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
                        <div className="text-[#000080]">{iconMap[sub.icon] || <FaBook />}</div>
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
