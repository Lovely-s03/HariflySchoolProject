import React from 'react'
import ClassroomPrograms from './ClassroomPrograms'
import BannerSlider from './BannerSlider'
import ExploreByCity from './ExploreByCity'
import CentreType from './CentreType'
import ExploreBatches from './ExploreBatches'
import ScholarshipSection from './ScholarshipSection'
import CounsellingSection from './CounsellingSection'
import TrustedSection from './TrustedSection'
import AdmissionCard from './AdmissionCard'
import AboutPWCentres from './AboutPWCentres'
import CenterTestimonials from './CenterTestimonials'

const Centers = () => {
  return (
    <div>
        <ClassroomPrograms/>
        {/* <BannerSlider/> */}
        <ExploreByCity/>
        <CentreType/>
        <ExploreBatches/>
        <ScholarshipSection/>
        <CounsellingSection/>
        <TrustedSection/>
        <AdmissionCard/>
        <AboutPWCentres/>
        <CenterTestimonials/>
    </div>
  )
}

export default Centers