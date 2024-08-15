import React from 'react'
import { Carousel } from 'react-bootstrap'
import sliderImg from'../../assets/images/R (3).jpeg'
import sliderImg1 from'../../assets/images/ship-7833921_640.jpg'
import '../Banner/banner.css'
export default function Banner() {
  return (
    <  >
     <section className='slider'>
     <Carousel variant="dark">
      <Carousel.Item>

        <img src={sliderImg} className='d-block w-100'  alt="First slide" />
        <Carousel.Caption>
          <div className='slider_des'>
               <h5 className='heading'>JOURNEY TO <span>EXPLORE WORLD</span></h5>
          <p className='sub_text'>
            lorem Ipsum is simply dummy text of the pricing and typesetting industry.
           Lorem Ipsum has been the industry `s standard dummy ever since the 1500s,
            </p> 
          </div>
      
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={sliderImg1} className='d-block w-100'  alt="First slide" />
      <Carousel.Caption>
          <div className='slider_des'>
               <h5 className='heading'>BEAUTIFUL PLACE <span>TO VISIT </span></h5>
          <p className='sub_text'>
            lorem Ipsum is simply dummy text of the pricing and typesetting industry.
           Lorem Ipsum has been the industry `s standard dummy ever since the 1500s,
            </p> 
          </div>
      
        </Carousel.Caption>
      </Carousel.Item>
     
     
    </Carousel>
     </section>
    </>
  )
}
