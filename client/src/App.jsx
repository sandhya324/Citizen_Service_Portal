import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'


const App = () => {
  return (
  <> 
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
    <ScrollTop />
    <Footer/>
  </>
  )
}

export default App
