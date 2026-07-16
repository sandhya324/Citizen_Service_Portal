import './RegisterComplaint.css'
import {FaClipboardList, FaHeadset, FaInfoCircle, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTags, FaPen, FaPaperclip } from 'react-icons/fa';

const RegisterComplaint = () => {
  return (
  <div className='register-page'>


  { /* ---------------------------------------------------------------------service Header------------------------------------------------------------------------------------------- */}

   <div className='register'>

      <div className="header-text">
        <h1>Register a Complaint</h1>
        <p>Submit your grievance & track it's resolution online. </p>
      </div>

  </div>




 

   
  { /* -----------------------------------------------------------------------Register Form ------------------------------------------------------------------------------------------ */}
   
   
       

    <div className="form-container">
  

        {/* Left Side Form */}

          <div className="card-1">
            <h3 className="form-title"><span className='reg-icon'><FaClipboardList /></span> Complaint Details</h3>
                       
            <form>

              {/* Row 1 */}
               <div className="row">

                <div className="col">
                  <label className="input-label"><FaUser className="input-icon" />Full Name <span className="required">*</span></label>
                  <input type="text" className="custom-input" placeholder="Enter your full name"/>
                </div>

                <div className="col">
                  <label className="input-label"><FaEnvelope className="input-icon" />Email Address<span className="required">*</span></label>
                  <input type="email" className="custom-input" placeholder="Enter your email address"/>
                </div>

              </div>




              {/* Row 2 */}
              <div className="row">

                <div className="col">
                  <label className="input-label"><FaPhone className="input-icon" />Mobile Number<span className="required">*</span></label>
                  <input type="tel" className="custom-input" placeholder="+91"/>
                </div>

              

                <div className="col">
                  <label className="input-label"><FaMapMarkerAlt className="input-icon" />District</label>
                  <select className="custom-input">
                    <option>Select District</option>
                    <option>Dehradun</option>
                    <option>Haridwar</option>
                    <option>chamoli</option>
                    <option>champawat</option>
                    <option>udhamsingh Nagar</option>
                    <option>Pauri</option>
                    <option>Tihri</option>
                    <option>Nainital</option>
                    <option>Pithoragarh</option> 
                    <option>Rudhraprayag</option>
                    <option>Almora</option>
                    <option>Uttarkashi</option>
                    <option>Bageshwar</option>
                  </select>
                </div>

              </div>


              {/* Row 3 */}

              <div className="col">
                <label className="input-label"><FaTags className="input-icon" />Complaint Category</label>
                <select className="custom-input">
                  <option>Select Category</option>
                  <option>Identity & Documents</option>
                  <option>Education</option>
                  <option>Health</option>
                  <option>Employement</option>
                  <option>Housing & Welfare</option>
                  <option>Agriculture</option>
                  <option>Transport</option>
                </select>
              </div>


              {/* Subject */}
              <div className="col ">
                <label className="input-label"><FaPen className="input-icon" />Subject</label>
                <input type="text" className="custom-input" placeholder="Enter complaint subject" />
              </div>


              {/* Description */}
              <div className="col">
                <label className="input-label"><FaClipboardList className="input-icon" />Complaint Description</label>
                <textarea rows="4" className="custom-input" placeholder="Describe your issue..."></textarea>
              </div>




              {/* File Upload */}

              <div className="col">
                 <label><FaPaperclip className="input-icon" /> Upload Evidence</label>
                 <input type="file" className="custom-input"/>
              </div>



              {/* Button */}
              <button type="submit" className="submit-btn">Submit Complaint</button>

            </form>
          </div>




           {/* Right Side */}
  
        <div className="card-2">

            <h4><span className='guide-icon'><FaInfoCircle/></span>Complaint Guidelines</h4>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Provide accurate and complete details.</li>
              <li className="list-group-item">Upload supporting documents, if available.</li>
              <li className="list-group-item">Avoid duplicate complaint submissions.</li>             
              <li className="list-group-item">Save your Complaint ID after submission.</li>
              <li className="list-group-item">Track your complaint using the Complaint ID.</li>
              <li className="list-group-item">Keep your contact information up to date.</li>
              <li className="list-group-item">False or misleading complaints may be rejected.</li>
              <li className="list-group-item">Keep your contact information updated for timely communication.</li>
              <li className="list-group-item">Allow sufficient time for complaint verification and processing.</li>          
            </ul>

          </div>
  </div>



  
    
        
            

            


              

              

          









  
  </div>
 
  )
}

export default RegisterComplaint
