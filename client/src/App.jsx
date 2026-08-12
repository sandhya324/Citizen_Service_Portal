import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'
import Login from './components/Login/Login'

import Home from './pages/Home/Home'
import Services from './pages/Services/Services';
import RegisterComplaint from './pages/RegisterComplaint/RegisterComplaint'
import TrackStatus from './pages/TrackStatus/TrackStatus'
import ContactUs from './pages/ContactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs'
import FAQs from './pages/FAQs/FAQs'
import HelpSupport from './pages/HelpSupport/HelpSupport'
import Dashboard from "./pages/Dashboard/Dashboard";




const App = () => {


  const [showLogin, setShowLogin] = useState(false)

  return (
  <> 

  {showLogin?<Login  setShowLogin={setShowLogin}/> : <></>}

    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/RegisterComplaint" element={<RegisterComplaint />} />
        <Route path="/TrackStatus" element={<TrackStatus />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/HelpSupport" element={<HelpSupport />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    <ScrollTop />
    <Footer/>
  </>
  )
}

export default App
