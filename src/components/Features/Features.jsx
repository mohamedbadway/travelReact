import React from 'react'
import'../Features/features.css'
import featurel1 from '../../assets/images/full-shot-travel-concept-with-landmarks_23-2149153258.jpg'
import featurel2 from'../../assets/images/full-shot-woman-taking-selfie_23-2149153257.jpg'
import featurel3   from'../../assets/images/OIP (8).jpeg'
import featurel4 from '../../assets/images/travel-concept-with-landmarks.jpg'
import { Container,Row ,Col,Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Features() {
    var settings = {
        dots:  false,
        infinite:  true,
        autoplay: false,
        autoplaySeed:1500,
           slidesToShow: 4,
        slidesToScroll: 1,
       
        responsive: [
      
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay: true,
              prevArrow:false,
              nextArrow:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow:false,
              nextArrow:false,
            }
          }
        ]
      };
    const featureList = [
        {
            id:0,
            image:featurel1,
            title:"Discover the possibilities ",
            des:"With nearly half  a million attractions, hotels & more,you,re sure"
        },
        {
            id:1,
            image:featurel2,
            title:"Enjoy deals & delights ",
            des:"Quality activities . Great prices . Plus, earn to save more ."
        },
        {
            id:2,
            image:featurel3,
            title:"Exploring made easyt ",
            des:"Book last minute, skip lines &amp; get free cancellation for easier"
        },
        {
            id:3,
            image:featurel4,
            title:"Travel you can trust ",
            des:"Read reviews & get reliable customer support, we ,re with you at every step."
        }
    ];

    
  return (
    <>
     <section className='feature-section'>
<Container>
    <Row>
<Col md='12'>
<Slider {...settings}> 
{featureList.map((feature,inx)=>{
    return(
        <Card key={inx}>
            <Card.Img
            variant='top'
            src={feature.image}
            className='img-fluid'
            alt={feature.title}
            />
            <Card.Title>{feature.title}</Card.Title>
               <Card.Text>
                {feature.des}
               </Card.Text>

        </Card>
        
    )
})

}
</Slider>
</Col>
    </Row>
</Container>
        </section> 
    </>
  )
}
