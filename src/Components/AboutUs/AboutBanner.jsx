import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const AboutBanner = () => {
  const { scrollY } = useScroll();
  const bannerHeight = useTransform(scrollY, [0, 300], ["100vh", "50vh"]); 
  const bannerScale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const bannerRadius = useTransform(scrollY, [0, 300], ["0px", "40px"]); 
  const headingScale = useTransform(scrollY, [0, 300], [1, 0.75]);
  const headingOpacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  const headingY = useTransform(scrollY, [0, 300], [0, -60]);

  return (
    <motion.section
      style={{
        height: bannerHeight,
        scale: bannerScale,
        borderRadius: bannerRadius,
      }}
      className="w-full flex text-center items-center justify-center bg-black text-white overflow-hidden shadow-lg"
    >
      <motion.h2
        style={{
          scale: headingScale,
          opacity: headingOpacity,
          y: headingY,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="font-bold text-5xl md:text-7xl"
      >
        Welcome to Glare30
      </motion.h2>
    </motion.section>
  );
};

export default AboutBanner;
