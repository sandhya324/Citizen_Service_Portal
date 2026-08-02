import { useState } from 'react'
import './Services.css'
import {assets} from '../../assets/assets'

import { FiArrowRight } from "react-icons/fi";

const Services = () => {

   
  const [activeFilter, setActiveFilter] = useState("all");

 
  return (
  
    <div className="our-services">

      
{ /* -----------------------------------------------------------------------header section------------------------------------------------------------------------------------------ */}

      <div className="service-head">
         <h1>Our Services</h1>
         <p>Explore a wide range of government services designed to simplify your life.</p>
      </div>





{ /* -----------------------------------------------------------------------Card Filter ------------------------------------------------------------------------------------------ */}
     

        <div className="service-filters">

          <button className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}  onClick={() => setActiveFilter("all")}>All</button>
          <button className={`filter-btn ${activeFilter === "identity" ? "active" : ""}`} onClick={() => setActiveFilter("identity")}>Identity & Documents</button>
          <button className={`filter-btn ${activeFilter === "education" ? "active" : ""}`} onClick={() => setActiveFilter("education")}>Education</button>
          <button className={`filter-btn ${activeFilter === "health" ? "active" : ""}`} onClick={() => setActiveFilter("health")}>Health</button>
          <button className={`filter-btn ${activeFilter === "employment" ? "active" : ""}`} onClick={() => setActiveFilter("employment")}>Employment</button>
          <button className={`filter-btn ${activeFilter === "housing" ? "active" : ""}`} onClick={() => setActiveFilter("housing")}>Housing</button>
          <button className={`filter-btn ${activeFilter === "agriculture" ? "active" : ""}`} onClick={() => setActiveFilter("agriculture")}>Agriculture</button>
          <button className={`filter-btn ${activeFilter === "transport" ? "active" : ""}`} onClick={() => setActiveFilter("transport")}>Transport</button>

        </div>









{ /* -----------------------------------------------------------------------Card section------------------------------------------------------------------------------------------ */}


      <div className="row g-4">

        {/* -----------------------------Identity & Documents Cards-------------------------- */}
      
      {(activeFilter === "all" || activeFilter === "identity") && (
       <>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card1} className="card-img-top" alt="" />

              <div className="card-body">
                 <h5 className="card-title">Birth Certificate</h5>
                 <p className="card-text">Apply for, verify, and download official birth certificates online.</p>
                 <button>Learn More <FiArrowRight /></button>
              </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card2} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Aadhaar Services</h5>
             <p className="card-text">Update details, download Aadhaar, and access identity services online.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card3} className="card-img-top" alt="" />
            
            <div className="card-body">
              <h5 className="card-title">PAN Card</h5>
              <p className="card-text">Apply, update, and track your PAN card online.</p>
              <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card4} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Voter ID</h5>
             <p className="card-text">Register to vote, update details, and access electoral services.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>
       </>
      )}


 



        {/* -----------------------------Education Cards-------------------------- */}


      {(activeFilter === "all" || activeFilter === "education") && (
       <>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card5} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Scholarship Application</h5>
             <p className="card-text">Apply for government and educational scholarships with ease.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card6} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Digital Certificates</h5>
             <p className="card-text">Access, download, and verify official certificates online.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card7} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Career Guidance</h5>
             <p className="card-text">Career guidance and professional development services.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>
      </>
    )}






        {/* -----------------------------Health Cards-------------------------- */}

    {(activeFilter === "all" || activeFilter === "health") && (
      <>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card8} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Vaccination Records</h5>
             <p className="card-text">Access, view, and manage vaccination records online.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card9} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Health Insurance Schemes</h5>
             <p className="card-text">Explore health insurance schemes and check your eligibility instantly.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card10} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Ayushman Bharat Services</h5>
             <p className="card-text">Access affordable healthcare benefits through Ayushman Bharat.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card11} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Blood Bank Information</h5>
             <p className="card-text">Access nearby blood banks and real-time blood availability instantly.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>
      
      </>
    )} 


        {/* -----------------------------Employment Cards-------------------------- */}

    {(activeFilter === "all" || activeFilter === "employment") && (
      <>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card12} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Internship Opportunities</h5>
             <p className="card-text">Gain real-world experience, build skills, and launch your career.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card13} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Skill Training</h5>
             <p className="card-text">Upskill with certified courses and industry-focused training.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card14} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Employment Exchange</h5>
             <p className="card-text">Discover jobs, connect with employers, and grow your career.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card15} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Govt. Vacancy Alerts</h5>
             <p className="card-text">Official government jobs, all in one place.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>
      </>
    )}


        
        {/* -----------------------------Housing & Welfare Cards-------------------------- */}

    {(activeFilter === "all" || activeFilter === "housing") && (
      <>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card16} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">PM Awas Yojana</h5>
             <p className="card-text">Apply for affordable housing and track PMAY benefits with ease.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card17} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Ration Card Services</h5>
             <p className="card-text">Apply, update, and manage your ration card online.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card18} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Pension Schemes</h5>
             <p className="card-text">Apply, track, and manage your pension benefits online.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>
      
      </>
    )}




        
        {/* -----------------------------Agriculture Cards-------------------------- */}

    {(activeFilter === "all" || activeFilter === "agriculture") && (
      <>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card19} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Farmer Registration</h5>
             <p className="card-text">Access schemes, subsidies, and support tailored for farmers.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card20} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Crop Insurance</h5>
             <p className="card-text">Protect your harvest from risks and disasters.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card21} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Weather Updates</h5>
             <p className="card-text">Real-time weather alerts for smarter farming.</p>
             <button>Learn More</button>
            </div>
          </div>
        </div>


        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card22} className="card-img-top" alt="" />

            <div className="card-body">
            <h5 className="card-title">Market Price Information</h5>
            <p className="card-text">Access real-time crop prices and agricultural market trends.</p>
            <button>Learn More</button>
            </div>
          </div>
        </div>
      
      </>
    )}





 
      {/* -----------------------------Transport Cards-------------------------- */}

    {(activeFilter === "all" || activeFilter === "transport") && (
      <>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card23} className="card-img-top" alt="" />

            <div className="card-body">
            <h5  className="card-title">Driving License</h5>
            <p className="card-text">Apply for, renew, and manage your driving license online.</p>
            <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card24} className="card-img-top" alt="" />

            <div className="card-body">
            <h5  className="card-title">Vehicle Registration</h5>
            <p className="card-text">Register vehicles and manage ownership records effortlessly.</p>
            <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card25} className="card-img-top" alt="" />

            <div className="card-body">
            <h5  className="card-title">Traffic Challans</h5>
            <p className="card-text">Check and pay traffic challans quickly and securely.</p>
            <button>Learn More</button>
            </div>
          </div>
        </div>
         
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card26} className="card-img-top" alt="" />

            <div className="card-body">
            <h5  className="card-title">Road Tax</h5>
            <p className="card-text">Pay vehicle taxes and manage compliance effortlessly.</p>
            <button>Learn More</button>
            </div>
          </div>
        </div>
        
      </>
    )}  
       



          

      </div>



    </div>
  )
}

export default Services
