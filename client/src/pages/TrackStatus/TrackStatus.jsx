import { useState } from "react";
import { FaSearch,  FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { assets } from '../../assets/assets'
import './TrackStatus.css'



const TrackStatus = () => {


  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);


  return (
    <div className='Track-status'>
    
  { /* ---------------------------------------------------------------------service Header------------------------------------------------------------------------------------------- */}

        <div className='track-header'>

          <div className="left-text">
            <h2>Track your Application</h2>
            <p>Track your complaint or service request using your Application ID.</p>
          </div>

          <div className="right-illustration">
            <img src={assets.status} alt="" />
          </div>

        </div>
     






{/* --------------------------------------------------------------------Track input part-------------------------------------------------------------------------------------------*/}
      
       <div className="card-track">

          <div className="card-header">
            <h4>Track Application / Complaint</h4>
            <p>Enter your Application ID or Complaint ID to view the current status.</p>
          </div>

          <div className="search-input">
            <input type="text" className="track-input" placeholder="Enter your Application ID (e.g., CSP202600123)"/>
            <button className="track-btn"><FaSearch className="track-btn-icon" /> Track Status</button>
          </div>

          <hr />       
          <p className="horizon-line">OR</p>

          <div className="search-mobile">
            <button className="track-mobile">Track using Registered Mobile Number</button>
          </div>
                  
       </div>




{/* --------------------------------------------------------------------FAQ part-------------------------------------------------------------------------------------------*/}
     

      <div className="FAQ-card">
         <h4 className="faq-head">Frequently Asked Questions</h4>

         <div className="Faq-container">

            <div className="faq-left">

              <div className="accordion-item">
                 <button className="accordion-btn" onClick={() => setFaq1(!faq1)}>

                    <div className="faq-left-content">
                      <div className="faq-mark">?</div> 
                      <span>Where can I find my Application ID?</span>
                    </div>
                     <span className="faq-icon">{faq1 ? <FaChevronUp /> : <FaChevronDown />}</span>
                 </button>

                 {faq1 && (
                   <div className="accordion-content">
                         Your Application ID is generated after you successfully submit your
                         application or complaint. It is also sent to your registered mobile
                         number and email.
                   </div>
                 )}
              </div>


              <div className="accordion-item">
                 <button className="accordion-btn" onClick={() => setFaq2(!faq2)}>

                    <div className="faq-left-content">
                      <div className="faq-mark">?</div> 
                      <span>How long does verification take?</span>
                    </div>
                     <span className="faq-icon">{faq1 ? <FaChevronUp /> : <FaChevronDown />}</span>
                 </button>

                 {faq2 && (
                   <div className="accordion-content">
                         Verification generally takes 3 to 7 working days depending on the
                         selected government service.
                   </div>
                 )}
              </div>


              <div className="accordion-item">
                 <button className="accordion-btn" onClick={() => setFaq3(!faq3)}>

                    <div className="faq-left-content">
                      <div className="faq-mark">?</div> 
                      <span>What should I do if my Application ID is invalid?</span>
                    </div>
                     <span className="faq-icon">{faq1 ? <FaChevronUp /> : <FaChevronDown />}</span>
                    
                 </button>

                 {faq3 && (
                   <div className="accordion-content">
                         Please check your Application ID carefully. If the issue continues,
                        contact the Citizen Service Portal Help Desk.
                   </div>
                 )}
              </div>



              
            </div>

            <div className="faq-img">
              <img src={assets.faq} alt="" />
            </div>

         </div>
      </div>


























    </div>
  )
}

export default TrackStatus
