import React from 'react'
import { assets } from '/src/assets/assets.js'
import './Home.css'

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


        <div className="service-cards">

            <div className="card" style={{ width: '10rem' }}>
             <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Birth Certificate</p>
                </div>
           </div>

           <div className="card" style={{ width: '10rem' }}>
             <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Income Certificate</p>
                </div>
           </div>

           <div className="card" style={{ width: '10rem' }}>
             <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Water Connection</p>
                </div>
           </div>

           <div className="card" style={{ width: '10rem' }}>
             <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Electricity Complaint</p>
                </div>
           </div>

           <div className="card" style={{ width: '10rem' }}>
             <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Road Repair Request</p>
                </div>
           </div>

           <div className="card" style={{ width: '10rem' }}>
             <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Pension Request</p>
                </div>
           </div>

        </div>


       </div>









{ /* -----------------------------------------------------------------------How It Works section------------------------------------------------------------------------------------------ */}

 <div className="how-it-works py-5">
  <div className="container">

    <h2 className="text-center mb-5">
      How It Works
    </h2>

    <div className="row g-4">

      {/* Step 1 */}
      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <div className="step-number">1</div>
          <h5>Register</h5>
          <p>Create your account using mobile/email</p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <div className="step-number">2</div>
          <h5>Apply</h5>
          <p>Choose service and submit documents</p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <div className="step-number">3</div>
          <h5>Verification</h5>
          <p>Department verifies your request</p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="col-md-3">
        <div className="step-card text-center p-4 shadow-sm rounded-4">
          <div className="step-number">4</div>
          <h5>Track Status</h5>
          <p>Track progress in real time</p>
        </div>
      </div>

    </div>
  </div>
</div>

















        

   
      
    </div>
  )
}

export default Home
