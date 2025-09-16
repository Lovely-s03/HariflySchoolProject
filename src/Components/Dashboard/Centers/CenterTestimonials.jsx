import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import photo from '../../../assets/coursegla.jpeg'
const testimonials = [
  {
    name: "Sayeba Khatun",
    rank: "AIR 773",
    exam: "NEET",
    text: "PW has been my guiding light throughout my NEET preparation journey. The comprehensive content and exceptional teaching methods...",
    img: photo,
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    name: "Sanjib Mandal",
    rank: "AIR 1144",
    exam: "NEET",
    text: "Studying at PW was a game changer for me. The well structured courses, doubt sessions, & constant support from the faculty were instrumental...",
    img: photo,
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    name: "Yashika Mittal",
    rank: "AIR 1253",
    exam: "NEET",
    text: "I am extremely grateful to PW for their invaluable guidance and support in helping me achieve success in my NEET exam.",
    img: photo,
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

const CenterTestimonials = () => {
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Here is what students say
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center relative"
          >
            {/* Student Image */}
            <div className="relative">
              <img
                src={t.img}
                alt={t.name}
                className="w-40 h-40 object-cover rounded-md"
              />
              <button
                onClick={() => setOpenVideo(t.video)}
                className="absolute -bottom-3 -left-3 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
              >
                <FaPlay />
              </button>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm mt-5">{t.text}</p>

            {/* Name and Info */}
            <h3 className="font-bold mt-3">{t.name}</h3>
            <p className="text-indigo-600 text-sm font-medium">
              {t.rank} | {t.exam}
            </p>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%] aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={openVideo}
              title="Student Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CenterTestimonials;
