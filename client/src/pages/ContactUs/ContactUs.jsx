import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='Contact-us'>

 { /* ---------------------------------------------------------------------Contact Header------------------------------------------------------------------------------------------- */}
      
    <div className='contact-header'>
       <h2>Contact Us</h2>
       <p>Have questions or need assistance? Our support team is here to help you with government services, applications, and complaints. Reach out to us anytime during working hours.</p>
    </div>



          
       
{ /* ---------------------------------------------------------------------Contact form and location------------------------------------------------------------------------------------------- */}
   
    <div className="contact-part-1">

      <div className="contact-info">
           <h4>Get in Touch</h4>
           
           <div className="address">
             <span className="add-icon"> </span>
             <p><b>Office Address</b><br />Citizen Service Portal <br/>Government Office Complex<br/>New Delhi, India - 110001</p>
           </div>

           <div className="address">
             <span className="add-icon"> </span>
             <p><b>Helpline Number</b><br />1800-123-456 <br/>(Toll Free)</p>
           </div>

           <div className="address">
             <span className="add-icon"> </span>
             <p><b>Email Address</b><br />support@citizenportal.gov.in </p>
           </div>

           <div className="address">
             <span className="add-icon"> </span>
             <p><b>Working Hours</b><br />Monday - Friday <br/>9:00 Am - 6:00 PM</p>
           </div>

           
      </div>


      <div className="contact-form">
        <form>

          <div className="contact-form">

            <div className="col">
                <label className="input-label">Full Name </label>
                <input type="text" className="custom-input" placeholder="Enter your full name"/>
            </div>    

            <div className="col">
                <label className="input-label">Email Address</label>
                <input type="email" className="custom-input" placeholder="Enter your Email"/>
            </div>   

            <div className="col">
                <label className="input-label">Phone Number</label>
                <input type="tel" className="custom-input" placeholder="Enter your Phone number"/>
            </div> 

            {/* Subject */}
            <div className="col ">
                <label className="input-label">Subject</label>
                <input type="text" className="custom-input" placeholder="Enter complaint subject" />
            </div> 

            {/* Description */}
            <div className="col">
              <label className="input-label">Complaint Description </label>
              <textarea rows="4" className="custom-input" placeholder="Describe your issue..."></textarea>
            </div>            
              
          </div>

        </form>
      </div>


    </div>













    </div>
  )
}

export default ContactUs
