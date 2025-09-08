import React from 'react'
import Hero from './Hero'
import Hero2 from './Hero2'
import Exam from './Exam'
import TestimonialSection from './TestimonialSection'
import StudyResources from './StudyResources'
import PWFamily from './PWFamily'
import Result from './Result'
import Students from './Students'
import Location from './Location'
import AppPromoSection from './AppPromoSection'
const HomePage = () => {
  return (
    <div>
          <Hero/>
          <Hero2/>
          <Exam/>
          <Location/>
          <Students/>
          <Result/>
          <AppPromoSection/>
          <TestimonialSection/>
          <StudyResources/>
          <PWFamily/>
    </div>
  )
}

export default HomePage