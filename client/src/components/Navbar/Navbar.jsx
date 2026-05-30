import React from 'react'
import './Navbar.css'
import { assets } from '/src/assets/assets.js'

const Navbar = () => {
  return (
    
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="Logo"/>

      <ul className="navbar-links">
        <li>Home</li>
        <li>Services</li>
        <li>Register Complaint</li>
        <li>Track Status</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>

    </div>

  )
}

export default Navbar
