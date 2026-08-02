import { useState } from "react";
import "./Navbar.css";

import { assets } from "/src/assets/assets.js";
import { FaBars, FaTimes } from "react-icons/fa";

import { NavLink } from "react-router-dom";



const Navbar = ({ setShowLogin }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (



    <div className="navbar">
      <div className="navbar-left">
        <img src={assets.logo} alt="Logo" />

        <div className="logo-text">
          <p>Citizen Service Portal</p>
          <span>Government of India</span>
        </div>
      </div>


    
      <ul className={`navbar-links ${menuOpen ? "active-menu" : ""}`}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/AboutUs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/trackstatus"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Track Application
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contactus"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </li>

        <li className="mobile-register">
            <button onClick={() => setShowLogin(true)}>Register</button>
        </li>
      </ul>

      



      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>


    </div>



  );
};

export default Navbar;