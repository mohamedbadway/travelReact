import React from 'react'
 import'../PopularPlace/popularplace.css'
import { Container,Row,Col,Card,Stack } from 'react-bootstrap'
 import Singapore from'../../assets/images/populer/pexels-photo-1008155.jpeg'
 import Kiwiana from'../../assets/images/populer/pexels-photo-1010657.jpeg'
 import Quito from '../../assets/images/populer/pexels-photo-1271619.jpeg'
 import  Auchorage from'../../assets/images/populer/pexels-photo-1285625.jpeg'
 import Cuzco from'../../assets/images/populer/pexels-photo-1371360.jpeg'
 import Ushaia from'../../assets/images/populer/pexels-photo-2087391.jpeg'
 import Santiago  from'../../assets/images/populer/pexels-photo-2174656.jpeg'
 import  Explore from'../../assets/images/populer/pexels-photo-307008.jpeg'
import { redirect } from 'react-router-dom'
export default function PopularPlace() {
  const populars=[
    {
      id:0,
      title:"Discover Singapore",
      image:Singapore,
      location:"European Way, Southampton,United Tour",
      category:["Escorted Tour","Rail Tour"],
      days:"5days - 4nights",
      price:100,
      afterDiscount:92,
      rating:3,
      reviews:5,
    },
    {
      id:1,
      title:"Kiwiana Panorama",
      image:Kiwiana,
      location:"European Way, Southampton,United Kingdom",
      category:["River Cruise","Wildlife"],
      days:"2days - 1 nights",
      price: 87,
      afterDiscount:  82,
      rating:  4,
      reviews: 9,
    },
    {
      id:2,
      title:"Auchorage To Quito",
      image: Quito,
      location:"European Way, Southampton,United Kingdom",
      category:["Escorted Tour","River"],
      days:"2days - 1nights",
      price: 87,
      afterDiscount: 82,
      rating: 4,
      reviews: 9,
    },
    {
      id:3,
      title:"Auchorage To La Paz",
      image: Auchorage,   
      location:"European Way, Southampton,United Kingdom",
      category:["Escorted Tour","River"],
      days:"unlimited",
      price:  434,
      afterDiscount:  0,
      rating:  5,
      reviews:  20,
    },
    {
      id:4,
      title:"Cuzco To Achorage",
      image:  Cuzco,   
      location:"European Way, Southampton,United Kingdom",
      category:["Escorted Tour","River"],
      days:"1days - 9hours",
      price:   395,
      afterDiscount:  0,
      rating:   3,
      reviews:   12,
    },
    {
      id:5,
      title:"Auchorage To Ushaia",
      image:  Ushaia,   
      location:"European Way, Southampton,United Kingdom",
      category:["Escorted Tour","River"],
      days:"5days -  4nights",
      price:    93,
      afterDiscount:  0,
      rating:   3,
      reviews:   12,
    },
    {
      id:6,
      title:"Auchorage To Santiago",
      image:  Santiago ,   
      location:"European Way, Southampton,United Kingdom",
      category:["Escorted Tour","River"],
      days:"1days -  1nights",
      price:     42,
      afterDiscount:  0,
      rating:   5,
      reviews:   10,
    },
    {
      id:6,
      title:"Auchorage To Santiago",
      image:  Explore ,   
      location:"European Way, Southampton,United Kingdom",
      category:["Escorted Tour","River"],
      days:"1days -  1nights",
      price:     42,
      afterDiscount:  0,
      rating:   5,
      reviews:   10,
    },
  ]
  return (
    <section className='popular'>
     <Container>
        <Row>
<Col md="12">
<div className="main_heading">
         <h1>Popular Activities </h1>  
      </div>
</Col>
        </Row>
        <Row>
          {populars.map((val,inx)=>{
            return(

            
           
          <Col   md={3} sm={6} xs={12} className='mb-5' key={inx}>
            
            
         
          <Card className='rounder-2 shadow-sm' >
            <Card.Img
            variant='top'
            src={val.image}
            className='img-fluid'
            alt={"image"}
             
            />
             <Card.Body> 
            <Card.Text>
            <i className="bi bi-geo-alt"></i> 
            <span className='text'> {val.location}</span>   
               </Card.Text>
            <Card.Title>  {val.title}</Card.Title> 
            <p className="review">
              <span>
                <i className="bi bi-star-fill me-1"></i>
                </span>
              <span> {val.rating}</span>
              <span> ({val.reviews} reviews)</span>
            </p>
            {val.category.map((cat,index)=>{
              return(
                <span key={index}
                 className={cat.replace(/ .*/,"") + " badge"}>{cat}</span> 
              )
            })}
            
             </Card.Body> 
             <Card.Footer className='py-4 '>
              {val.afterDiscount ? (
              <p className='text-decoration-line-through'>${val.price.toFixed(2)} </p>  
              ): ""}
             
             <Stack direction='horizontal'
              className='justify-content-between mt-3'> 
             <p>From <b> {val.afterDiscount?val.afterDiscount.toFixed(2) : val.price.toFixed(2)}
               </b></p>

             <p>

              <i className="bi bi-clock"></i>  {val.days}
              </p>
             </Stack>
              </Card.Footer>  
        </Card> 
        </Col>
        )
      })}
        </Row>
     </Container>
    </section>
    
  )
}
