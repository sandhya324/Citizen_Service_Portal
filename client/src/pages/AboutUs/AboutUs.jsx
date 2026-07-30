import { assets } from '../../assets/assets'
import './AboutUs.css'

import { FaShieldAlt, FaUsers, FaHandshake, FaGlobeAsia, FaBolt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled, MdVerifiedUser } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";



const AboutUs = () => {
  return (
    <div className='aboutUs-back'>
   


{ /* -------------------------------------------------------------------  aboutUS ------------------------------------------------------------------------------------ */}

  <div className="who-we-are">
      
      <div className="about-us">
         <h2>About Us</h2>
         <p className="about-text">Citizen Service Portal is a digital platform designed to make public services simpler, faster, and more accessible for everyone. It brings essential citizen services together in one convenient online platform, allowing users to explore available services, submit applications, register complaints, and track their requests with ease.
           <br/><br/>Our goal is to simplify the service experience through digital technology, reduce unnecessary paperwork, and make public services more transparent and efficient. We aim to create a reliable and user-friendly platform that helps citizens access the services they need anytime and from anywhere.
           <br/><br/>We believe that digital technology can help create a more connected and citizen-friendly service experience. By bringing important services into one platform, we aim to make everyday processes more convenient while keeping citizens informed at every step. Our platform focuses on accessibility, transparency, and efficiency to help users interact with public services with greater ease and confidence.
         </p>
          
          <div className="img-who">
            <img src={assets.abouthead} alt="" />
         </div>

      </div>

  </div>





{ /* --------------------------------------------------------------  Our Mission & Our Vision ------------------------------------------------------------------------------ */}

   <div className="mission-vis">

      <div className="header-text">
         <h3>Our Mission & Vision</h3>
         <p className='mission-sub'>Our mission and vision are to make public services simple, secure, transparent, and accessible, using technology to create a more efficient and citizen-centric digital governance experience for everyone.</p>
      </div>


      <div className="cards-misvis">

          <div className="our-mission">

            <div className="mission-img">
               <img src={assets.mission} alt="" />
            </div>


            <div className="mis-right">

               <h4>Our Mission </h4>
               <h5 className='mission-sub'>Empowering Citizens Through Digital Services</h5>
               <p>Our mission is to provide citizens with fast, reliable, and transparent online government services through a secure and user-friendly digital platform.</p> 
               
               <div className="statis">

                    <li className='s-text'>
                        <div className="value-circle">
                           <FaShieldAlt className="value-icon" />
                        </div>

                       <h5>Secure</h5>
                       <p>Safe and protected data.</p>
                    </li>



                    <li className='s-text'>
                        <div className="value-circle">
                           <MdOutlineAccessTimeFilled className='value-icon' />
                        </div>

                       <h5>Fast</h5>
                       <p>Quick and efficient services.</p>
                    </li>



                    <li className='s-text'>
                        <div className="value-circle">
                           <MdVerifiedUser className="value-icon" />
                        </div>
                       
                       <h5>Transparent</h5>
                       <p>Real-time service updates.</p>
                    </li>



                    <li className='s-text'>
                        <div className="value-circle">
                           <FaUsers className="value-icon" />
                        </div>
                       
                       <h5>Citizen First</h5>
                       <p>Designed for every citizen.</p>
                    </li>

              </div>
            </div>
          </div>








          <div className="our-vision">
 

            <div className="vis-left">
    
               <h4>Our Vision</h4>
               <h5 className='vision-sub'>A Smarter Tomorrow Through Digital Governance.</h5>
               <p>Our vision is to promote digital governance by making public services simple, accessible, and efficient for everyone, everywhere.</p>

               <div className="statis">

                    <li className='s-text'>
                        <div className="value-circle">
                           <FaGlobeAsia className="value-icon" />
                        </div>

                       <h5>Accessible</h5>
                       <p>Services for Everyone</p>
                    </li>



                    <li className='s-text'>
                        <div className="value-circle">
                           <FaBolt className="value-icon" />
                        </div>
                        
                       <h5>Efficient</h5>
                       <p>Faster and smarter digital services.</p>
                    </li>



                    <li className='s-text'>
                       <div className="value-circle">
                           <RiVerifiedBadgeLine className="value-icon" />
                        </div>

                       <h5>Reliable</h5>
                       <p>Secure and trusted online services.</p>
                    </li>



                    <li className='s-text'>
                        <div className="value-circle">
                           <FaHandshake className="value-icon" />
                        </div>

                       <h5>Inclusive</h5>
                       <p>Equal access for every citizen.</p>
                    </li>

              </div>
          
            </div>


            <div className="vision-img">
               <img src={assets.vision}  alt="" />
            </div>
            
          </div>
      </div>

   </div>

   







{ /* ------------------------------------------------------------------- Why Choose Our Portal? ------------------------------------------------------------------------------------------- */}

     <div className="why-choose">

      <div className="header-text">
         <h3>Why Choose Our Portal ?</h3>
         <p className='mission-sub'>Our Citizen Service Portal is designed to simplify access to government services through a secure, transparent, and user-friendly digital platform. We are committed to making public services faster, more accessible, and available anytime, anywhere.</p>
      </div>

      <div className="choose-port">
         <div className="port-img">
            <img src={assets.chooseUs} alt="" />
         </div>

         <div className="port-text">
            <h5>Platform Highlights</h5>

             <ul className="port-list">

               <li><b>✔</b> Easy-to-use interface designed for a smooth and hassle-free experience.</li>
               <li><b>✔</b> Secure platform with reliable protection for your personal information.</li>
               <li><b>✔</b> Real-time tracking of applications and complaint status.</li>
               <li><b>✔</b> Access government services anytime and from anywhere.</li>
               <li><b>✔</b> Fast, transparent, and paperless service delivery.</li>
               <li><b>✔</b> Multiple public services available through a single digital platform.</li>
         
             </ul>
         </div>
      </div>


     </div>





{ /* ------------------------------------------------------------------- Call to Action ------------------------------------------------------------------------------------------- */}



     <div className="call-action">

      <div className="action-left">
         <div className="action-icon">
            <FiUserPlus className="call-icon" />
         </div>

         <div className="action-text">
            <h5>Ready to get Started ?</h5>
            <p>Join thousands of citizens who trust our platform for quick, secure, and hassle-free government services. Create your account today and access essential public services anytime, anywhere.</p>
         </div>
      </div>

      <div className="action-right">
         <button className="action-btn">
            Register Now
         </button>
      </div>


     </div>






      
    </div>
  )
}

export default AboutUs
