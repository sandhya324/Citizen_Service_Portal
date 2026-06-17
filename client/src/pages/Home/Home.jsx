import React from 'react'
import { assets } from '/src/assets/assets.js'
import './Home.css'
// import { FaUserPlus, FiFileText, FiClipboard, FiCheckCircle } from "react-icons/fi";

const Home = () => {
  return (
    <div>


{ /* ------------------------------------------------------------------------Carousel------------------------------------------------------------------------------------------- */}

<div
  id="heroCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="2500"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={assets.slide1} className="d-block w-100" alt="Slide 1" />
    </div>

    <div className="carousel-item">
      <img src={assets.slide2} className="d-block w-100" alt="Slide 2" />
    </div>

     <div className="carousel-item">
      <img src={assets.slide3} className="d-block w-100" alt="Slide 3" />
    </div>

    <div className="carousel-item">
      <img src={assets.slide4} className="d-block w-100" alt="Slide 4" />
    </div>

    <div className="carousel-item">
      <img src={assets.slide5} className="d-block w-100" alt="Slide 5" />
    </div>
  

  </div>
</div>

<button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#heroCarousel"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon"></span>
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#heroCarousel"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon"></span>
</button>

     







{ /* ------------------------------------------------------------------------Hero Section ------------------------------------------------------------------------------------------- */}

    <div className="container">
      
      <div className="Hero-left">

           <h1>One Portal, <br/> Multiple </h1>
           <h1 style={{ color: '#0F766E' }}>Government Services</h1>
           <p>Access certificates, licenses, grievance redressal, and application tracking through a single platform.</p>

        <div className="hero-buttons">
           <button>Apply for Service</button>
           <button>Track Status</button>
        </div>
           
      </div>


      <div className="hero-img">
        <img src={assets.heroImg} alt="Hero Image" />
      </div>

    </div>
  



{ /* -----------------------------------------------------------------------Quick Services Section------------------------------------------------------------------------------------------ */}
       
 <div className="quick-services">

    <div className="service-text">
      <h2>Quick Access Services</h2>
      <p>Access essential government services quickly and securely.</p>
    </div>


    <div className="services-acess py-5">
    <div className="container">

    <div className="row g-4">

      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <img src={assets.birth} className="card-img-top" alt="..." />
          <h5>Birth Certificate</h5>
          <p></p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <img src={assets.income} className="card-img-top" alt="..." />
          <h5>Income Certificate</h5>
          <p></p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <img src={assets.water} className="card-img-top" alt="..." />
          <h5>Water Connection</h5>
          <p></p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <img src={assets.electricity} className="card-img-top" alt="..." />
          <h5>Electricity Complaint</h5>
          <p></p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <img src={assets.road} className="card-img-top" alt="..." />
          <h5>Road Repair Request</h5>
          <p></p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <img src={assets.pension} className="card-img-top" alt="..." />
          <h5>Pension Request</h5>
          <p></p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <img src={assets.license} className="card-img-top" alt="..." />
          <h5>License Application</h5>
          <p></p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <img src={assets.ration} className="card-img-top" alt="..." />
          <h5>Ration Card Services</h5>
          <p></p>
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
            {/* <div className="step-icon"><FiUserPlus/></div> */}
            <h5>Create an Account</h5>
            <p>Register using your basic details to securely access all available citizen services.</p>
          </div>

          <div className="card">
            <div className="step-number"><p>2</p></div>
            {/* <i className='step-icon'><FiFileText /></i> */}
            <h5>Choose a Service</h5>
            <p>Browse through available services and select the one that best meets your needs.</p>
          </div>

          <div className="card">
            <div className="step-number"><p>3</p></div>
            {/* <i className='step-icon'><FiClipboard/></i> */}
            <h5>Submit Application</h5>
            <p>Fill out the required information and upload supporting documents online.</p>
          </div>

          <div className="card">
            <div className="step-number"><p>4</p></div>
            {/* <i className='step-icon'><FiCheckCircle /></i> */}
            <h5>Track & Receive</h5>
            <p>Monitor your application status in real time and receive updates digitally anytime.</p>
          </div>

        </div>

      </div>
















        

   
      
    </div>
  )
}

export default Home
