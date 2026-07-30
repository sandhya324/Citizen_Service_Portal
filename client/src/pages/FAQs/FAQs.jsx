import { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { assets } from '../../assets/assets'
import './FAQs.css'


const FAQs = () => {

  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);


  return (
    <div className="Faqs-back">

    
  { /* ---------------------------------------------------------------------FAQs Header------------------------------------------------------------------------------------------- */}

        <div className='FQAs-header'>

            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services, applications, and complaint process.</p>
      
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
                     <span className="faq-icon">{faq2 ? <FaChevronUp /> : <FaChevronDown />}</span>
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
                     <span className="faq-icon">{faq3 ? <FaChevronUp /> : <FaChevronDown />}</span>
                    
                 </button>

                 {faq3 && (
                   <div className="accordion-content">
                         Please check your Application ID carefully. If the issue continues,
                        contact the Citizen Service Portal Help Desk.
                   </div>
                 )}
              </div>


              <div className="accordion-item">
                 <button className="accordion-btn" onClick={() => setFaq4(!faq4)}>

                    <div className="faq-left-content">
                      <div className="faq-mark">?</div> 
                      <span>How can I register a complaint?</span>
                    </div>
                     <span className="faq-icon">{faq4 ? <FaChevronUp /> : <FaChevronDown />}</span>
                    
                 </button>

                 {faq4 && (
                   <div className="accordion-content">
                         After logging in, go to your Dashboard and select Register Complaint.
                        Fill in the required details and submit your complaint. You will receive a unique Complaint ID for tracking.
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

export default FAQs
