import React from 'react';
import banner from '../../../assets/bengali-foods.jpg'
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
      

<Container className='mt-4'>
    <div id="carouselExampleCaptions" className="carousel slide ">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
       <img src={banner} className="d-block w-100 rounded" id="banner" alt="..." style={{width: "1300px", height:"500px"}}/> 
     
      <div className="carousel-caption d-block d-md-block text-secondary-emphasis ">
        <h1 className='fs-1'>Delectably Delicious Bangladeshi Cuisine</h1>
  
       
      </div>
    </div>
    </div>
    </div>
    </Container>
    )
       
};

export default Banner;
