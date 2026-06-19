import React from 'react'
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'

import Home from './pages/Home/Home'
import Services from './pages/Services/Services';


const App = () => {
  return (
  <> 
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
    <ScrollTop />
    <Footer/>
  </>
  )
}

export default App
