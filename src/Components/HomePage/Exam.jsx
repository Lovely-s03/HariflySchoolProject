// import React, { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { getSubCategories } from "../../service/api"; // ✅ import API

// const CategoryCard = ({ title, tags, icon }) => (
//   <div className="max-w-6xl bg-white shadow rounded-xl p-8 flex justify-between items-center hover:shadow-lg transition hover:border-[1px]">
//     <div>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <div className="flex flex-wrap gap-3 mt-6">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className="border px-5 py-2 rounded-full text-sm text-gray-600"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//       <button className="flex items-center gap-2 mt-4 text-gray-700 font-medium hover:text-indigo-600">
//         Explore Category <ArrowRight size={18} />
//       </button>
//     </div>

//     <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50">
//       {icon ? (
//         <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//       ) : (
//         <div className="text-gray-400">📘</div>
//       )}
//     </div>
//   </div>
// );

// export default function Exam() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  
//   const fetchSubCategories = async () => {
//     try {
//       setLoading(true);
//       const res = await getSubCategories();
//       const data = res.data?.data || [];

//       // ✅ Group by category_name
//       const grouped = {};
//       data.forEach((sub) => {
//         if (!grouped[sub.category_name]) {
//           grouped[sub.category_name] = {
//             title: sub.category_name,
//             tags: [],
//             icon: sub.image ? sub.image : null,
//           };
//         }
//         grouped[sub.category_name].tags.push(sub.name);
//       });

//       setCategories(Object.values(grouped));
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load sub-categories");
//     } finally {
//       setLoading(false);
//     }
//   };
  
// useEffect(() => {
//   fetchSubCategories();
// }, []);


//   if (loading) return <p className="text-center py-10">Loading sub-categories...</p>;
//   if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-28">
//       <div className="text-center mb-10">
//         <h2 className="text-2xl md:text-3xl font-bold">Exam Categories</h2>
//         <p className="text-gray-600 mt-2">
//           PW is preparing students for 35+ exam categories. Scroll down to find the one you are preparing for
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.map((cat, i) => (
//           <CategoryCard key={i} {...cat} />
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { getSubCategories } from "../../service/api";

const CategoryCard = ({ title, tags, icon }) => {
  const cardRef = useRef(null);

  // Mouse move effect for 3D tilt
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside card
    const y = e.clientY - rect.top;  // Mouse Y inside card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="max-w-6xl bg-white rounded-xl p-8 flex justify-between items-center
                 shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer
                 border border-transparent hover:border-indigo-100 perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-3 mt-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border px-5 py-2 rounded-full text-sm text-gray-600 hover:bg-indigo-50 transition"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="flex items-center gap-2 mt-4 text-gray-700 font-medium hover:text-indigo-600 transition">
          Explore Category <ArrowRight size={18} />
        </button>
      </div>

      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50 shadow-inner">
        {icon ? (
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        ) : (
          <div className="text-gray-400 text-2xl">📘</div>
        )}
      </div>
    </div>
  );
};

export default function Exam() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubCategories = async () => {
    try {
      setLoading(true);
      const res = await getSubCategories();
      const data = res.data?.data || [];

      const grouped = {};
      data.forEach((sub) => {
        if (!grouped[sub.category_name]) {
          grouped[sub.category_name] = {
            title: sub.category_name,
            tags: [],
            icon: sub.image ? sub.image : null,
          };
        }
        grouped[sub.category_name].tags.push(sub.name);
      });

      setCategories(Object.values(grouped));
    } catch (err) {
      console.error(err);
      setError("Failed to load sub-categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  if (loading) return <p className="text-center py-10">Loading sub-categories...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-28">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Exam Categories</h2>
        <p className="text-gray-600 mt-2">
          PW is preparing students for 35+ exam categories. Scroll down to find the one you are preparing for
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </div>
    </section>
  );
}
