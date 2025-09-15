import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import phone from "../../assets/million student.webp";
import { getresults_n_app_store } from "../../service/api";

const BASE_URL = "https://pw.harifly.in";

// fallback data (in case API fails)
const fallbackData = {
  title: "Join 15 Million students on the app today!",
  features: [
    "Live & recorded classes available at ease",
    "Dashboard for progress tracking",
    "Lakhs of practice questions",
  ],
  playstore: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
  appstore: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
  phoneImg: phone,
};

const AppPromoSection = () => {
  const [title, setTitle] = useState(fallbackData.title);
  const [features, setFeatures] = useState(fallbackData.features);
  const [playstoreIcon, setPlaystoreIcon] = useState(fallbackData.playstore);
  const [appstoreIcon, setAppstoreIcon] = useState(fallbackData.appstore);
  const [phoneImg, setPhoneImg] = useState(fallbackData.phoneImg);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppPromo = async () => {
      try {
        setLoading(true);
        const res = await getresults_n_app_store();
        const apiData = res.data?.data;

        if (apiData) {
          setTitle(apiData?.title || fallbackData.title);
          setFeatures(apiData?.features || fallbackData.features);
          setPlaystoreIcon(
            apiData?.playstore_icon
              ? `${BASE_URL}/${apiData.playstore_icon}`
              : fallbackData.playstore
          );
          setAppstoreIcon(
            apiData?.appstore_icon
              ? `${BASE_URL}/${apiData.appstore_icon}`
              : fallbackData.appstore
          );
          setPhoneImg(
            apiData?.phone_image
              ? `${BASE_URL}/${apiData.phone_image}`
              : fallbackData.phoneImg
          );
        }
      } catch (err) {
        console.error("Error fetching app promo:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppPromo();
  }, []);

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
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={playstoreIcon} alt="Google Play" className="h-12 object-contain" />
            </a>
          )}
          {appstoreIcon && (
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appstoreIcon} alt="App Store" className="h-12 object-contain" />
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
