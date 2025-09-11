import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from './common/Layout'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
   <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;