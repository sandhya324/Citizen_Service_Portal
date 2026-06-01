import React from 'react'
import { assets } from '../../assets/assets'
import './Home.css'

const Home = () => {
  return (
    <div>


{ /* ------------------------------------------------------------------------Carousel------------------------------------------------------------------------------------------- */}

  
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={assets.slide1} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={assets.slide2} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="..."/>
        </div>
       </div>
     </div>

   
      
    </div>
  )
}

export default Home
