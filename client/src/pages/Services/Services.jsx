import React from 'react'
import './Services.css'
import {assets} from '../../assets/assets'

import { FiArrowRight } from "react-icons/fi";

const Services = () => {

 
  return (
  
    <div className="our-services">

      
{ /* -----------------------------------------------------------------------header section------------------------------------------------------------------------------------------ */}

      <div className="service-head">
         <h1>Our Services</h1>
         <p>Explore a wide range of government services designed to simplify your life.</p>
      </div>



      <div className="row g-4">

        {/* -----------------------------Identity & Documents Cards-------------------------- */}

        <div className="col-md-3">
          <div className="card">
            <img src={assets.card1} className="card-img-top" alt="" />

              <div className="card-body">
                 <h5 className="card-title">Birth Certificate</h5>
                 <p className="card-text">Apply for, verify, and download official birth certificates online.</p>
                 <button>Learn More <FiArrowRight /></button>
              </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={assets.card2} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Aadhaar Services</h5>
             <p className="card-text">Update details, download Aadhaar, and access identity services online.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={assets.card3} className="card-img-top" alt="" />
            
            <div className="card-body">
              <h5 className="card-title">PAN Card</h5>
              <p className="card-text">Apply, update, and track your PAN card online.</p>
              <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={assets.card4} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Voter ID</h5>
             <p className="card-text">Register to vote, update details, and access electoral services.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>


 



        {/* -----------------------------Education Cards-------------------------- */}

        <div className="col-md-3">
          <div className="card">
            <img src={assets.card5} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Scholarship Application</h5>
             <p className="card-text">Apply for government and educational scholarships with ease.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={assets.card6} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Digital Certificates</h5>
             <p className="card-text">Access, download, and verify official certificates online.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Career Guidance</h5>
             <p className="card-text">Career guidance and professional development services.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>






        {/* -----------------------------Health Cards-------------------------- */}



        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Vaccination Records</h5>
             <p className="card-text">Access, view, and manage vaccination records online.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Health Insurance Schemes</div>
            <p className="card-text">Explore government-supported health insurance programs and check eligibility for coverage benefits.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Ayushman Bharat Services</div>
            <p className="card-text">Apply for and access healthcare benefits under the Ayushman Bharat scheme for eligible citizens.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Blood Bank Information</div>
            <p className="card-text">Find nearby blood banks, check blood availability, and access emergency blood donation resources.</p>
            <button>Learn More</button>
          </div>
        </div>



        {/* -----------------------------Employment Cards-------------------------- */}



        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Internship Opportunities</div>
            <p className="card-text">Discover internship programs that provide practical experience, skill development, and career growth opportunities.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Skill Training</div>
            <p className="card-text">Access training programs, certification courses, and workshops designed to enhance professional skills.</p>
            <button>Learn More</button>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Employment Exchange</div>
            <p className="card-text">Connect with employers, explore job opportunities, and access government employment support services.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Government Vacancy Alerts</div>
            <p className="card-text">Stay updated with the latest government job openings, recruitment notifications, and application deadlines.</p>
            <button>Learn More</button>
          </div>
        </div>



        
        {/* -----------------------------Housing & Welfare Cards-------------------------- */}


        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">PM Awas Yojana</div>
            <p className="card-text">Apply for affordable housing assistance and track benefits under the Pradhan Mantri Awas Yojana scheme.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Ration Card Services</div>
            <p className="card-text">Apply for, update, and manage ration cards to access subsidized food and essential supplies.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Pension Schemes</div>
            <p className="card-text">Access pension benefits, check eligibility, submit applications, and track pension payments online.</p>
            <button>Learn More</button>
          </div>
        </div>




        
        {/* -----------------------------Agriculture Cards-------------------------- */}



        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Farmer Registration</div>
            <p className="card-text">Register as a farmer to access government schemes, subsidies, and agricultural support services.</p>
            <button>Learn More</button>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Crop Insurance</div>
            <p className="card-text">Protect your crops against natural disasters, weather risks, and unexpected losses through insurance coverage.</p>
            <button>Learn More</button>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Weather Updates</div>
            <p className="card-text">Get real-time weather forecasts, rainfall alerts, and seasonal updates to plan farming activities effectively.</p>
            <button>Learn More</button>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Market Price Information</div>
            <p className="card-text">Stay informed about the latest crop market prices, trends, and trading opportunities across regions.</p>
            <button>Learn More</button>
          </div>
        </div>






 
      {/* -----------------------------Agriculture Cards-------------------------- */}



        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Driving License</div>
            <p className="card-text">Apply for a new driving license, renew existing licenses, and access driving-related services online.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Vehicle Registration</div>
            <p className="card-text">Register new vehicles, update ownership details, and manage vehicle registration records easily.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Traffic Challans</div>
            <p className="card-text">Check, track, and pay traffic violation fines securely through the online portal.</p>
            <button>Learn More</button>
          </div>
        </div>
         
        <div className="col-md-3">
          <div className="card">
            <img src=".." className="card-img-top" alt="" />
            <div className="card-title">Road Tax</div>
            <p className="card-text">Pay road taxes, view tax details, and manage vehicle tax compliance conveniently.</p>
            <button>Learn More</button>
          </div>
        </div>
        
          
       



          

      </div>
























    </div>
  )
}

export default Services
