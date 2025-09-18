import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import logoFallback from "../../assets/glare_logo.webp"; // fallback logo
import { getheader_footer } from "../../service/api";

const BASE_URL = "https://pw.harifly.in";

export default function Footer() {
  const [companyTitle, setCompanyTitle] = useState("Physics Wallah");
  const [companyDesc, setCompanyDesc] = useState(
    "We understand that every student has unique needs and abilities..."
  );
  const [companyLogo, setCompanyLogo] = useState(logoFallback);
  const [playstoreIcon, setPlaystoreIcon] = useState(null);
  const [appstoreIcon, setAppstoreIcon] = useState(null);
  const [socialLinks, setSocialLinks] = useState({});
  const [menus, setMenus] = useState({
    company: [],
    centres: [],
    exams: [],
    connect: [],
    quick_links: [],
    products: [],
  });

  const fetchFooter = async () => {
    try {
      const res = await getheader_footer();
      const header = res.data?.data?.header;
      const footer = res.data?.data?.footer;

      if (header) {
        // ✅ logo is in header
        setCompanyLogo(
          header.logo ? `${BASE_URL}/${header.logo}` : logoFallback
        );
      }

      if (footer) {
        setCompanyTitle(footer.logo_title || companyTitle);
        setCompanyDesc(footer.description || companyDesc);

        setPlaystoreIcon(
          footer.playstore_image ? `${BASE_URL}/${footer.playstore_image}` : null
        );
        setAppstoreIcon(
          footer.appstore_image ? `${BASE_URL}/${footer.appstore_image}` : null
        );

        setMenus({
          company: ["About Us", "Contact Us", "Careers", "Updates", "Account Deletion"],
          centres: footer.centers || [],
          exams: footer.exams || [],
          connect: ["Email Us", "Talk To A Counselor"],
          quick_links: ["Glare Prerna", "Glare SIP", "Glare Gurukulam"],
          products: ["Glare App Learning", "Glare Offline Payments (Fin-Z)"],
        });

        // social links not in API yet, keep placeholders
        setSocialLinks({
          facebook: null,
          twitter: null,
          linkedin: null,
          instagram: null,
          youtube: null,
        });
      }
    } catch (err) {
      console.error("Error fetching footer:", err);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <footer>
      <div className="py-8 border-t border-gray-400">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Left Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={companyLogo} alt={companyTitle} className="w-10 h-10" />
                <h2 className="text-xl font-semibold">{companyTitle}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4 w-full xl:w-[450px]">
                {companyDesc}
              </p>

              <div className="flex gap-3 mb-4">
                {playstoreIcon && (
                  <img src={playstoreIcon} alt="Google Play" className="h-10" />
                )}
                {appstoreIcon && (
                  <img src={appstoreIcon} alt="App Store" className="h-10" />
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="pl-0 xl:pl-48 md:col-span-3 grid grid-cols-1 gap-5">
              {/* Top Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {/* Company */}
                <div>
                  <h3 className="font-semibold mb-3">Company</h3>
                  <ul className="space-y-1 text-sm text-gray-900">
                    {menus.company.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Centres */}
                <div>
                  <h3 className="font-semibold mb-3">Our Centres</h3>
                  <ul className="space-y-1 text-sm text-gray-900">
                    {menus.centres.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Popular Exams */}
                <div>
                  <h3 className="font-semibold mb-3">Popular Exams</h3>
                  <ul className="space-y-1 text-sm text-gray-900">
                    {menus.exams.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {/* Connect With Us */}
                <div>
                  <h3 className="font-semibold mb-3">Connect With Us</h3>
                  <ul className="space-y-1 text-sm text-gray-900">
                    {menus.connect.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-semibold mb-3">Quick Links</h3>
                  <ul className="space-y-1 text-sm text-gray-900">
                    {menus.quick_links.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Our Products */}
                <div>
                  <h3 className="font-semibold mb-3">Our Products</h3>
                  <ul className="space-y-1 text-sm text-gray-900">
                    {menus.products.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400 max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 text-md text-center sm:text-left">
          © Copyright 2025, All Rights Reserved By{" "}
          <span className="font-semibold text-gray-800">
            Harifly Technologies Private Limited
          </span>
          . CIN: U62099DL2024PTC432975
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 text-gray-600">
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
              <FaFacebook size={18} />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
              <FaXTwitter size={18} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn size={18} />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
              <FaInstagram size={18} />
            </a>
          )}
          {socialLinks.youtube && (
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
              <FaYoutube size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
