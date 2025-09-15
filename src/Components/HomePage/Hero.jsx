// import React from "react";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import banner from '../../assets/banner.jpg'
// import banner1 from '../../assets/banner1.jpg'
// // Custom Arrows
// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md "
//     onClick={onClick}
//   >
//     <FaChevronRight className="text-gray-700" />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md "
//     onClick={onClick}
//   >
//     <FaChevronLeft className="text-gray-700" />
//   </div>
// );

// export default function Hero() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

  
//   const slides = [
//     banner,
//    banner1,
//     banner,
//   ];

//   return (
//     <div className="relative w-full  mx-auto  mt-[90px] sm:mt-[90px] md:mt-[160px] lg:mt-[140px] xl:mt-[120px]">
//       <Slider {...settings}>
//         {slides.map((img, index) => (
//           <div key={index}>
//             <img
//               src={img}
//               alt={`slide-${index}`}
//               className="w-full h-auto shadow-md object-cover"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getHomeSliders } from "../../service/api";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md p-2 rounded-full"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md p-2 rounded-full"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-700" />
  </div>
);

export default function Hero() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await getHomeSliders();
        console.log("API response:", response.data);  // 🔍 check what you got

        // Adjust this depending on actual structure
        let slidersData = null;
        if (response.data && response.data.data) {
          slidersData = response.data.data;
        } else if (response.data && response.data.sliders) {
          // alternate example
          slidersData = response.data.sliders;
        } else {
          console.warn("Unexpected response structure", response.data);
          slidersData = [];
        }

        // Optionally filter only valid image URLs
        const filtered = slidersData.filter(item => item.image && typeof item.image === "string");

        setSlides(filtered);
      } catch (err) {
        console.error("Error fetching sliders:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (loading) {
    return (
      <div className="relative w-full mx-auto mt-[90px] sm:mt-[90px] md:mt-[160px] lg:mt-[140px] xl:mt-[120px]">
        <div className="text-center py-20 text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full mx-auto mt-[90px] sm:mt-[90px] md:mt-[160px] lg:mt-[140px] xl:mt-[120px]">
        <div className="text-center py-20 text-red-500">Error loading sliders</div>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="relative w-full mx-auto mt-[90px] sm:mt-[90px] md:mt-[160px] lg:mt-[140px] xl:mt-[120px]">
        <div className="text-center py-20 text-gray-500">No slides found</div>
      </div>
    );
  }

  return (
   <div className="relative w-full mx-auto mt-[90px] sm:mt-[90px] md:mt-[160px] lg:mt-[140px] xl:mt-[120px]">
  <Slider {...settings}>
    {slides.map((item, index) => {
      const imageUrl = `https://pw.harifly.in/${item.image}`;
      return (
        <div key={index}>
          <img
            src={imageUrl}
            alt={`slide-${index}`}
            className="w-full h-auto shadow-md object-cover"
          />
        </div>
      );
    })}
  </Slider>
</div>

  );
}
