import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '/src/assets/assets.js'

import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu, setMenu] = useState("Home");

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
        <li onClick={()=>setMenu("Home")} className={menu==="Home" ? "active" : ""}  ><Link to="/">Home</Link></li>
        <li onClick={()=>setMenu("Services")} className={menu==="Services" ? "active" : ""} ><Link to="services">Service</Link></li>
        <li onClick={()=>setMenu("RegisterComplaint")} className={menu==="RegisterComplaint"? "active" : ""} ><Link to="registercomplaint">Register Complaint</Link></li>
        <li onClick={()=>setMenu("Track Status")} className={menu==="Track Status" ? "active" : ""} >Track Status</li>
        <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us" ? "active" : " "} >Contact Us</li>
      </ul>

      <div className="navbar-right">

        <button>Login</button>
        <button>Register</button>
    
      </div>


    </div>

  )
}

export default Navbar
