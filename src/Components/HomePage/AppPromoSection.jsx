import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import phone from "../../assets/million student.webp";

const BASE_URL = "https://pw.harifly.in";

// fallback data (in case props are missing or incomplete)
const fallbackData = {
  ad_title: "Join 15 Million students on the app today!",
  ad_point1: "Live & recorded classes available at ease",
  ad_point2: "Dashboard for progress tracking",
  ad_point3: "Lakhs of practice questions",
  ad_image: null,
  playstore: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
  appstore: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
};

const AppPromoSection = ({ data }) => {
  // safely use props or fallback
  const title = data?.ad_title || fallbackData.ad_title;

  const features = [
    data?.ad_point1,
    data?.ad_point2,
    data?.ad_point3,
    data?.ad_point4,
  ].filter(Boolean);

  const phoneImg = data?.ad_image
    ? `${BASE_URL}/${data.ad_image}`
    : phone;

  const playstoreIcon = fallbackData.playstore;
  const appstoreIcon = fallbackData.appstore;

  return (
    <div className="max-w-6xl py-4 mx-auto rounded-2xl my-8 bg-[#000080] px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-0 lg:gap-10">
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>

        <ul className="space-y-4 text-white">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <FaCheckCircle className="text-white text-lg" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Playstore & Appstore Icons */}
        <div className="flex gap-4 mt-8">
          {playstoreIcon && (
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playstoreIcon}
                alt="Google Play"
                className="h-12 object-contain"
              />
            </a>
          )}
          {appstoreIcon && (
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appstoreIcon}
                alt="App Store"
                className="h-12 object-contain"
              />
            </a>
          )}
        </div>
      </div>

      {/* Phone Image */}
      <div className="relative">
        <img
          src={phoneImg}
          alt="App Screenshot"
          className="h-[300px] object-contain relative z-10"
        />
      </div>
    </div>
  );
};

export default AppPromoSection;
