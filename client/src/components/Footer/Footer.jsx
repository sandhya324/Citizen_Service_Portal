import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaHeadset } from "react-icons/fa";
import {FaBaby, FaUsers, FaRoad, FaBolt, FaTint, FaFileAlt, FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">


        {/* ------------------------------footer-left-------------------------- */}
        <div className="footer-content-left">
          <div className="logo-part">
            <img src={assets.logo} alt="" />

            <div className="logo-text">
               <p>Citizen Service Portal</p>
               <span>Government of India</span>
            </div>

          </div> 

          <div className="text-part">
            <p>Providing seamless digital services for citizens anytime, anywhere, with speed and transparency.</p>

            <div className="social-icons">
               <div className="social-icon"><FaFacebookF /></div>
               <div className="social-icon"><FaYoutube /></div>
               <div className="social-icon"><FaLinkedinIn /></div>
               <div className="social-icon"><FaTwitter /></div>
                
            </div>
          </div>
             
        </div>




        {/* ------------------------------footer-center Quick links-------------------------- */}
        <div className="footer-content-center">
            <h4>Quick Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Track Application</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Help & Support</li>
                </ul>
        </div>




        {/* ------------------------------footer-center Popular services------------------------- */}
        <div className="footer-content-popular">
            <h4>Popular Services</h4>
                <ul>
                    <li><FaBaby className="service-icon" /> Birth Certificate</li>
                    <li><FaUsers className="service-icon" /> Pension Request</li>
                    <li><FaRoad className="service-icon" /> Road Repair Request</li>
                    <li><FaBolt className="service-icon" /> Electricity Connection</li>
                    <li><FaTint className="service-icon" /> Water Connection</li>
                    <li><FaFileAlt className="service-icon" /> Grievance Registration</li>
                    <li><FaHome className="service-icon" /> Property Tax Payment</li>
                </ul>
        </div>







        {/* ------------------------------footer-right-------------------------- */}
        <div className="footer-content-right">
            <h4>Contact Us</h4>
                <ul>
                    <li><FaMapMarkerAlt className="service-icon" /> New Delhi, India - 110001</li>
                    <li><FaPhoneAlt className="service-icon" /> +91 1800-123-456</li>
                    <li><FaEnvelope className="service-icon" /> support@citizenportal.gov.in</li>
                    <li><FaClock className="service-icon" /> Mon - Fri: 9:00 AM - 6:00 PM</li>
                </ul>


                <div className="help_card">
                   <FaHeadset className="help-icon" />

                   <div>
                    <h5>Need Help?</h5>
                    <p>Our support team is<br/> always here for you.</p>
                   </div>
                </div>
        </div>
      </div>

        {/* ------------------------------footer-bottom-------------------------- */}
        <div className="footer-bottom">
          <p>&copy; 2026 Citizen Service Portal | One Portal, Many Services. All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
