import React from 'react'
import { assets } from '../../assets/assets'
import './Home.css'

const Home = () => {
  return (
    <div>


{ /* ------------------------------------------------------------------------Carousel------------------------------------------------------------------------------------------- */}

<div
  id="carouselExampleSlidesOnly"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="2000"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={assets.slide1} className="d-block w-100" alt="Slide 1" />
    </div>

    <div className="carousel-item">
      <img src={assets.slide2} className="d-block w-100" alt="Slide 2" />
    </div>

     <div className="carousel-item">
      <img src="https://picsum.photos/1200/400?1" className="d-block w-100" alt="" />
    </div>
    

  </div>
</div>

     


{ /* ------------------------------------------------------------------------Hero Section ------------------------------------------------------------------------------------------- */}

  <div className="hero py-5">
    <div className="container">
      
      <div className="Hero-left">

           <h1>Digital Citizen Service Portal</h1>
           <p>Apply for government services, register complaints, and track applications online.</p>

           <button>Apply Now</button>
           <button>Track Status</button>
           
      </div>

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
