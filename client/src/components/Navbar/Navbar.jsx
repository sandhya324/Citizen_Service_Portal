import React from 'react'
import './Navbar.css'
import { assets } from '/src/assets/assets.js'

const Navbar = () => {
  return (
    
    <div className="navbar">


      <div className="navbar-left">
         <img src={assets.logo} alt="Logo" />

         <div className="logo-text">
          <p>Citizen Service Portal</p>
          <span>Government of India</span>
         </div>
        
      </div>
        

      <ul className="navbar-links">
        <li>Home</li>
        <li>Services</li>
        <li>Register Complaint</li>
        <li>Track Status</li>
        <li>Contact Us</li>
      </ul>


      <div className="navbar-right">

        <button>Login</button>
        <button>Register</button>
    
      </div>


    </div>

  )
}

export default Navbar
