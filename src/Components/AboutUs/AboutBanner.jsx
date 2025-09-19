import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const BASE_URL = "https://pw.harifly.in";

const AboutBanner = ({ data }) => {
  const { scrollY } = useScroll();
  const bannerHeight = useTransform(scrollY, [0, 300], ["100vh", "50vh"]);
  const bannerScale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const bannerRadius = useTransform(scrollY, [0, 300], ["0px", "40px"]);
  const headingScale = useTransform(scrollY, [0, 300], [1, 0.75]);
  const headingOpacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  const headingY = useTransform(scrollY, [0, 300], [0, -60]);

  // Compose image URL from fixed base URL
  const bannerImageUrl = data?.image ? `${BASE_URL}/${data.image}` : null;

  return (
    <motion.section
      style={{
        height: bannerHeight,
        scale: bannerScale,
        borderRadius: bannerRadius,
        backgroundImage: bannerImageUrl ? `url(${bannerImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full flex items-center justify-center bg-black text-white overflow-hidden shadow-lg"
    >
      <motion.h2
        style={{
          scale: headingScale,
          opacity: headingOpacity,
          y: headingY,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="font-bold text-5xl md:text-7xl text-center"
      >
        {data?.title }
      </motion.h2>
    </motion.section>
  );
};

export default AboutBanner;
