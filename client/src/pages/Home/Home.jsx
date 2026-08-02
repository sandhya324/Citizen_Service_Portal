import { assets } from '/src/assets/assets.js'
import './Home.css'
import { FiUserPlus, FiFileText, FiClipboard, FiCheckCircle} from "react-icons/fi";

import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>




{ /* ------------------------------------------------------------------------Carousel------------------------------------------------------------------------------------------- */}
  <div className="header-container">
    <img src={assets.header} className="head-img" alt="Header" />
  </div>













{ /* ------------------------------------------------------------------------Hero Section ------------------------------------------------------------------------------------------- */}

    <div className="container">
      
      <div className="Hero-left">
        
        <div className="sub-hero">
           <h1>One Portal, <br/> Multiple </h1>
           <h1 style={{ color: '#0F766E' }}>Government Services</h1>
           <p>Access certificates, licenses, grievance redressal, and application tracking through a single platform.</p>
        </div>

        <div className="hero-buttons">
           <button>Apply for Service</button>
           <button>Track Status</button>
        </div>
           
      </div>


      <div className="hero-img">
        <img src={assets.heroImg} alt="Hero Image" />
      </div>

    </div>
  







{ /* ------------------------------------------------------------------------Statistics Section------------------------------------------------------------------------------------------- */}


<div className="statistics">
  <ul>
    <li className = "statis-text">
          <h3>25+</h3>
          <p>Services Available</p>
    </li>

    <li className = "statis-text">
          <h3>1200+</h3>
          <p>Applications Processed</p>
    </li>

    <li className = "statis-text">
          <h3>500+</h3>
          <p>Complaints Resolved</p>
    </li>

    <li className = "statis-text">
          <h3>5000+</h3>
          <p>Registered Citizens</p>
    </li>
  </ul>
</div>







{ /* -----------------------------------------------------------------------Quick Services Section------------------------------------------------------------------------------------------ */}
       
 <div className="quick-services">





    <div className="service-text">
      <h2>Quick Access Services</h2>
      <p>Access essential government services quickly and securely.</p>
    </div>
    
    <Link to="/services" className="view-all-btn">
      View All Services <FiArrowRight />
    </Link>


    <div className="home-services">  
    
     <div className="row g-4">

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
            <img src={assets.card10} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Ayushman Bharat Services</h5>
             <p className="card-text">Access affordable healthcare benefits through Ayushman Bharat.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card">
            <img src={assets.card17} className="card-img-top" alt="" />

            <div className="card-body">
             <h5 className="card-title">Ration Card Services</h5>
             <p className="card-text">Apply, update, and manage your ration card online.</p>
             <button>Learn More <FiArrowRight /></button>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>








{ /* -----------------------------------------------------------------------How It Works section------------------------------------------------------------------------------------------ */}

      <div className="how-it-works">
        <div className="section-header">
          
          <h2>How it Works</h2>
          <p>Our platform makes it easy for you to access government services in just a few simple steps.</p>

        </div>

        <div className="steps-container">

          <div className="card">
            <div className="step-number"><p>1</p></div>
            <div className="step-icon">< FiUserPlus className="icon" /></div>
            <div className="step-text">
                <h5>Create an Account</h5>
                <p>Register using your basic details to securely access all available citizen services.</p>
            </div>   
          </div>

          <div className="card">
            <div className="step-number"><p>2</p></div>
            <div className="step-icon"><FiFileText className="icon" /></div>
            <div className="step-text">
                <h5>Choose a Service</h5>
                <p>Browse through available services and select the one that best meets your needs.</p>
            </div>
          </div>

          <div className="card">
            <div className="step-number"><p>3</p></div>
            <div className="step-icon"><FiClipboard className="icon" /></div>
             <div className="step-text">
                <h5>Submit Application</h5>
                <p>Fill out the required information and upload supporting documents online.</p>
             </div>
          </div>

          <div className="card">
            <div className="step-number"><p>4</p></div>
            <div className="step-icon"><FiCheckCircle className="icon" /></div>
            <div className="step-text">
                <h5>Track & Receive</h5>
                <p>Monitor your application status in real time and receive updates digitally anytime.</p>
            </div>
          </div>

        </div>

      </div>

        

   
    </div>  

  )
}

export default Home
