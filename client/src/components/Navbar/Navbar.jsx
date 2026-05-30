import React from 'react'
import './Navbar.css'
import { assets } from '/src/assets/assets.js'

const Navbar = () => {
  return (
    
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="Logo"/>

      <ul className="navbar-links">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </div>

  )
}

export default Navbar
