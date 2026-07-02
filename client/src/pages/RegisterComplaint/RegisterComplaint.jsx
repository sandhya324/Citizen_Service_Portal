import './RegisterComplaint.css'
import {FaClipboardList, FaHeadset, FaInfoCircle} from 'react-icons/fa';

const RegisterComplaint = () => {
  return (
  <div>


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

          <div className="card-1 shadow-lg">
            <h3 className="form-title"><span className='reg-icon'><FaClipboardList /></span> Complaint Details</h3>

            <form>

              {/* Row 1 */}
               <div className="row">

                <div className="col">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your full name"/>
                </div>

                <div className="col">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="example@gmail.com" />
                </div>

              </div>




              {/* Row 2 */}
              <div className="row">

                <div className="col">
                  <label className="form-label">Mobile Number</label>
                  <input type="tel" className="form-control" placeholder="+91" />  
                </div>

                <div className="col">
                  <label className="form-label">District</label>
                  <select className="form-select">
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
                <label className="form-label">Complaint Category</label>
                <select className="form-select">
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
              <div className="col">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Enter complaint subject" />
              </div>


              {/* Description */}
              <div className="col">
                <label className="form-label">Complaint Description</label>
                <textarea rows="5" className="form-control" placeholder="Describe your issue..."></textarea>
              </div>




              {/* Priority */}

              <div className="col">
                <label>Priority</label>

                <div className="form-check">
                  <input className="check-input" type="radio" name="priority" />
                  <label className="form-check-label">Low</label>
                </div>

                <div className="form-check">
                  <input className="check-input" type="radio" name="priority" />
                  <label className="form-check-label">Medium</label>
                </div>

                <div className="form-check">
                  <input className="check-input" type="radio" name="priority" />
                  <label className="form-check-label">High</label>
                </div>
              </div>


              {/* File Upload */}

              <div className="col">
                 <label>Upload Evidence</label>
                 <input type="file" className="form-control"/>
              </div>


              {/* Button */}
              <button type="submit" className="submit-btn">Submit Complaint</button>

            </form>
          </div>




           {/* Right Side */}
      <div className="right-side"> 
        <div className="card-2 shadow-lg">

            <h4><i className='guide-icon'><FaInfoCircle/></i>Complaint Guidelines</h4>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Provide accurate and complete details.</li>
              <li className="list-group-item">Upload supporting documents, if available.</li>
              <li className="list-group-item">Avoid duplicate complaint submissions.</li>             
              <li className="list-group-item">Save your Complaint ID after submission.</li>
              <li className="list-group-item">Track your complaint using the Complaint ID.</li>
              <li className="list-group-item">Keep your contact information up to date.</li>
            </ul>

          </div>

          <div className="card-3 shadow-lg">
             <h4 className="need-help">Need Help?</h4>
             <FaHeadset className="need-help-icon" />

             <p>If you experience any issues while submitting your complaint, our support team is here to help.</p>
             <ul>
              <li>1800-123-4567</li>
              <li>support@citizenportal.gov.in</li>
              <li>Monday – Saturday, 9:00 AM – 6:00 PM</li>
             </ul>
          </div>



    </div>
  </div>



  
    
        
            

            


              

              

          









  
  </div>
 
  )
}

export default RegisterComplaint
