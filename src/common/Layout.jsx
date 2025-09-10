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
import Privacy from '../Components/Privacy/Privacy';
import AboutUs from '../Components/AboutUs/AboutUs';
import Contact from '../Components/Dashboard/Contact/Contact';
import Goal from '../Components/Dashboard/AllGoals/Goal';
// import BuyOrderSummary from './BuyOrderSummary';

const Layout = () => {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  const isOrderSummaryRoute = location.pathname === "/order-summary";

  return (
    <>
      {!isDashboardRoute && !isOrderSummaryRoute &&  <Navbar/>}
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course/>} />
        <Route path="/dashboard" element={<Dashboard />} >
         <Route path="study" element={<Study/>} />
         <Route path="testseries" element={<Testseries/>} />
            <Route path="batch" element={<Batch/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="goal" element={<Goal/>} />


          </Route>
             <Route path="/privacy" element={<Privacy/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                  {/* <Route path="/order-summary" element={<BuyOrderSummary />} /> */}
      </Routes>
  
      {!isDashboardRoute && !isOrderSummaryRoute &&  <Footer />}
      
    </>
  );
};
export default Layout;