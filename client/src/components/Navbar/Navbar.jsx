import "./Navbar.css";
import { assets } from "/src/assets/assets.js";
import { NavLink } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
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
            to="/registercomplaint"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Register Complaint
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/trackstatus"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Track Status
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
      </ul>

      <div className="navbar-right">
        <button onClick={() => setShowLogin(true)}>Sign Up</button>
      </div>
    </div>



  );
};

export default Navbar;