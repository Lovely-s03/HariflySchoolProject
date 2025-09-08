import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/HomePage/Hero'
import Syllabus from '../Components/CoursePage/Syllabus'
import CoursesSection from '../Components/CoursePage/CoursesSection'
import CourseSection12 from '../Components/CoursePage/CourseSection12'
import CourseSectionDropper from '../Components/CoursePage/CourseSectionDropper'
import LatestUpdate from '../Components/CoursePage/LatestUpdate'

import List from '../Components/CoursePage/List'
import FAQ from '../Components/CoursePage/FAQ'
import AppPromoSection from '../Components/HomePage/AppPromoSection'
import Footer from '../Components/Footer/Footer'



const Course = () => {
  return (
    <div>
     <Hero/>
     <Syllabus/>
     <CoursesSection/>
     <CourseSection12/>
     <CourseSectionDropper/>
     <LatestUpdate/>
     <List/>
     <FAQ/>
  <AppPromoSection/>
    </div>
  )
}

export default Course