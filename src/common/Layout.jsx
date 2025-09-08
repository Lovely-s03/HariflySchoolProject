import React from 'react'
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/HomePage/HomePage'
import ScrollToTop from '../common/ScrollToTop'
import Course from '../common/Course'
import Dashboard from '../Components/Dashboard/Dashboard';
import Footer from '../Components/Footer/Footer'
import Study from '../Components/Dashboard/Study/Study';
import Testseries from '../Components/Dashboard/Testseries/Testseries';
import Batch from '../Components/Dashboard/Batch/Batch';

const Layout = () => {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith("/dashboard");


  return (
    <>
      {!isDashboardRoute && <Navbar/>}
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course/>} />
        <Route path="/dashboard" element={<Dashboard />} >
         <Route path="study" element={<Study/>} />
         <Route path="testseries" element={<Testseries/>} />
            <Route path="batch" element={<Batch/>} />
         </Route>
      </Routes>
  
      {!isDashboardRoute && <Footer />}
    </>
  );
};
export default Layout;