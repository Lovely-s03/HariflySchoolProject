import React from 'react'
import ClassroomPrograms from './ClassroomPrograms'
import BannerSlider from './BannerSlider'
import ExploreByCity from './ExploreByCity'
import CentreType from './CentreType'
import ExploreBatches from './ExploreBatches'
import ScholarshipSection from './ScholarshipSection'
import CounsellingSection from './CounsellingSection'

const Centers = () => {
  return (
    <div>
        <ClassroomPrograms/>
        <BannerSlider/>
        <ExploreByCity/>
        <CentreType/>
        <ExploreBatches/>
        <ScholarshipSection/>
        <CounsellingSection/>
    </div>
  )
}

export default Centers