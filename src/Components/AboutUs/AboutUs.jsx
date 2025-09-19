import React, { useEffect, useState } from 'react'
import AboutBanner from './AboutBanner'
import MissionSection from './MissionSection'
import VisionSection from './VisionSection'
import FoundersSection from './FoundersSection'
import OurPresence from './OurPresence'
import GreatPlaceSection from './GreatPlaceSection'
import AppPromoSection from '../HomePage/AppPromoSection'
import { getabout } from '../../service/api'


const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState(null)

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await getabout();  // API call
        setAboutUsData(res.data.data); // Set correct nested data
        console.log("Fetched About Us Data:", res.data.data); // Debug log
      } catch (err) {
        console.error('Error fetching About Us:', err);
      }
    }
    fetchAboutUs();
  }, []);

  return (
    <div>
      <AboutBanner data={aboutUsData?.about_us} />
      <MissionSection data={aboutUsData?.about_us} />
      <VisionSection data={aboutUsData?.about_us} />
      <FoundersSection data={aboutUsData?.about_us} />
      {/* <OurPresence data={aboutUsData?.presence}/> */} 
      {/* <GreatPlaceSection data={aboutUsData?.about_us?.greatPlace} /> */}
      <AppPromoSection  data={aboutUsData?.ad_content} />
    </div>
  )
}

export default AboutUs;
