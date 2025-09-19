import React, { useEffect, useState } from "react";
import { getprivacy_policy } from "../../service/api";

// Simple HTML decoder for double-encoded backend content applied twice
const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const doubleDecode = (html) => decodeHtml(decodeHtml(html));

const Privacy = () => {
  const [privacyData, setPrivacyData] = useState(null);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const res = await getprivacy_policy();
        const raw = res.data.data;

        setPrivacyData({
          privacy_title: doubleDecode(raw.privacy_title),
          policy: doubleDecode(raw.policy),
        });
      } catch (err) {
        console.error("Error fetching Privacy Policy:", err);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  if (!privacyData) {
    return <p className="text-center py-12">Loading Privacy Policy...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-[120px]">
      <h1
        className="text-3xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: privacyData.privacy_title }}
        
      />
      <div
        className="prose prose-lg prose-indigo max-w-none leading-relaxed"
        dangerouslySetInnerHTML={{ __html: privacyData.policy }}
      />
    </div>
  );
};

export default Privacy;
