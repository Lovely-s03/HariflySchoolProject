import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gethome_vidyapeeth_centers } from "../../service/api";
import { FaWhatsapp } from "react-icons/fa";

export default function Location() {
  const [centres, setCentres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCentres = async () => {
      try {
        const res = await gethome_vidyapeeth_centers();
        const data = res.data;

        // Map API unique_cities to expected structure
        const mapped = (data.unique_cities || []).map((item) => ({
          name: item.display_name,
          img: item.image ? `https://pw.harifly.in/${item.image}` : "",
        }));

        setCentres(mapped);
      } catch (err) {
        console.error(err);
        setError("Failed to load centres");
      } finally {
        setLoading(false);
      }
    };

    fetchCentres();
  }, []);

  return (
    <section className="relative w-full h-auto text-white">
      {/* Background Video */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={`https://pw.harifly.in/${centres[0]?.bg_video || "uploads/home-vidyapeeth/home_vidyapeeth_bg_1757675204_68c3fec45e70d.mp4"}`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>
        <div className="relative z-10 flex flex-col p-24 h-full text-center px-2">
          <h2 className="text-2xl md:text-4xl font-bold">
            Explore Tech-Enabled Offline Vidyapeeth Centres
          </h2>
          <p className="text-gray-200 mt-2 text-sm md:text-base">
            Creating new benchmarks in learning experiences
          </p>
        </div>
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto -mt-20 md:-mt-[260px] px-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-white text-black rounded-lg shadow-lg p-6 md:p-7">
          <h3 className="text-lg md:text-2xl font-semibold text-center">
            Find Vidyapeeth Centre in your city
          </h3>
          <p className="text-center text-gray-600 mt-1">
            Available in{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              {centres.length}
            </span>{" "}
            cities
          </p>

          {/* Grid */}
          {loading ? (
            <p className="text-center py-10">Loading centres...</p>
          ) : error ? (
            <p className="text-center py-10 text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {centres.map((centre, index) => (
                <div
                  key={index}
                  className="border rounded-md overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white flex flex-col lg:flex-row items-center justify-self-start py-3 px-7 w-full"
                >
                  <img
                    src={centre.img}
                    alt={centre.name}
                    className="items-center flex h-24 md:h-28 lg:h-16 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="p-2 text-center font-medium text-sm md:text-base">
                    {centre.name}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-[#000080] text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-[#402ee0] transition">
              View More
            </button>
          </div>
        </div>
      </motion.div>

      <div className="fixed  bottom-36 lg:bottom-20 right-6 z-20">
         
         <a
      href="https://wa.me/1234567890" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 text-5xl"
    >
      <FaWhatsapp/>
    </a>
      </div>
    </section>
  );
}
