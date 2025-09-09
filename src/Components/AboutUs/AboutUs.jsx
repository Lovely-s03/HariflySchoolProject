import React from 'react'
import AboutBanner from './AboutBanner'
import MissionSection from './MissionSection'
import VisionSection from './VisionSection'
import FoundersSection from './FoundersSection'
import OurPresence from './OurPresence'
import GreatPlaceSection from './GreatPlaceSection'
import AppPromoSection from '../HomePage/AppPromoSection'

const AboutUs = () => {
  return (
    <div>
        <AboutBanner/>
        <MissionSection/>
        <VisionSection/>
    <FoundersSection/>
    {/* <OurPresence/> */}
    <GreatPlaceSection/>
      <AppPromoSection/>
    </div>
  )
}

export default AboutUs