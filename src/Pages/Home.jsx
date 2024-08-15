

 import{Container,Row,Col,Card } from "react-bootstrap";
import AdvanceSearch from "../components/AdvanceSearch/AdvanceSearch";
import Features from "../components/Features/Features";
import Banner from "../components/Banner/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import'../Pages/home.css'

 import tour5 from '../assets/images/tour/destination_4_1.jpg'

 import tour4 from '../assets/images/tour/destination_4_2.jpg' 
 import tour6 from'../assets/images/tour/destination_4_4.jpg'
 import tour7 from '../assets/images/tour/destination_4_5.jpg'
 import tour8 from '../assets/images/tour/destination_4_6.jpg'
 import tour9 from '../assets/images/tour/destination_4_8.jpg'
import PopularPlace from "../components/PopularPlace/PopularPlace";
import Gallery from "../components/Gallery/Gallery";
 
export default function Home() {
  // const populars=[
  //   {
  //     id:0,
  //     title:"Discover Singapore",
  //     image:Singapore,
  //     location:"European Way, Southampton,United Tour",
  //     category:["Escorted Tour","Rail Tour"],
  //     days:"5days - 4nights",
  //     price:100,
  //     afterDiscount:92,
  //     rating:3,
  //     reviews:5,
  //   },
  //   {
  //     id:1,
  //     title:"Kiwiana Panorama",
  //     image:Kiwiana,
  //     location:"European Way, Southampton,United Kingdom",
  //     category:["River Cruise","Wildlife"],
  //     days:"2days - 1 nights",
  //     price: 87,
  //     afterDiscount:  82,
  //     rating:  4,
  //     reviews: 9,
  //   },
  //   {
  //     id:2,
  //     title:"Auchorage To Quito",
  //     image: Quito,
  //     location:"European Way, Southampton,United Kingdom",
  //     category:["Escorted Tour","River"],
  //     days:"2days - 1nights",
  //     price: 87,
  //     afterDiscount: 82,
  //     rating: 4,
  //     reviews: 9,
  //   },
  //   {
  //     id:3,
  //     title:"Auchorage To La Paz",
  //     image: Auchorage,   
  //     location:"European Way, Southampton,United Kingdom",
  //     category:["Escorted Tour","River"],
  //     days:"unlimited",
  //     price:  434,
  //     afterDiscount:  0,
  //     rating:  5,
  //     reviews:  20,
  //   },
  //   {
  //     id:4,
  //     title:"Cuzco To Achorage",
  //     image:  Cuzco,   
  //     location:"European Way, Southampton,United Kingdom",
  //     category:["Escorted Tour","River"],
  //     days:"1days - 9hours",
  //     price:   395,
  //     afterDiscount:  0,
  //     rating:   3,
  //     reviews:   12,
  //   },
  //   {
  //     id:5,
  //     title:"Auchorage To Ushaia",
  //     image:  Ushaia,   
  //     location:"European Way, Southampton,United Kingdom",
  //     category:["Escorted Tour","River"],
  //     days:"5days -  4nights",
  //     price:    93,
  //     afterDiscount:  0,
  //     rating:   3,
  //     reviews:   12,
  //   },
  //   {
  //     id:6,
  //     title:"Auchorage To Santiago",
  //     image:  Santiago ,   
  //     location:"European Way, Southampton,United Kingdom",
  //     category:["Escorted Tour","River"],
  //     days:"1days -  1nights",
  //     price:     42,
  //     afterDiscount:  0,
  //     rating:   5,
  //     reviews:   10,
  //   },
  // ]
  var settings = {
    dots:  false,
    infinite:  true,
    autoplay:  true,
     
       slidesToShow: 4,
    slidesToScroll: 1,
   
    responsive: [
  
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay:true,
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
 const destinations =[
  {
    id:0,
    name:"Bali",
    tours:"5 tours and a ctivities",
    image:tour5,
    link: 'tour-name',
    shortDes:'',
    link:'/tour',
    location:"dehradun",
  },
  {
    id:1,
    name:"Tokyo",
    tours:"9 tours and activites",
    image:tour4,
    link: 'tour-name',
    shortDes:'',
    link:'/tour',
    location:"Rishikeah",
  },
  {
    id:2,
    name:"Bangkok",
    tours:"5 tours and activites",
    image:tour6,
    link: 'tour-name',
    shortDes:'',
    link:'/tour',
    location:"Mussoorie",
  },
  {
    id:3,
    name:"Cancun",
    tours:"4 tours and activites",
    image:tour7,
    link: 'tour-name',
    shortDes:'',
    link:'/tour',
    location:"UttarKhashi",
  },
  {
    id:4,
    name:"Nha Trang",
    tours:"9 tours and activites",
    image:tour8,
    link: 'tour-name',
    shortDes:'',
    link:'/tour',
    location:"Manali",
  },
  {
    id:5,
    name:"Phuket",
    tours:"4 tours and activites",
    image:tour9,
    link: 'tour-name',
    shortDes:'4 tours and activites',
    link:'/tour',
    location:"Haridwar",
  },
 ]
  
  return (
    <>
     <Banner/> 
     <AdvanceSearch/>
     <Features/>
     <section className="tours_section slick_slider">
      <Container>
        <Row>
        <Col md="12">
        <div className="main_heading">
         <h1>Top Destination For Your Next Vacation </h1>  
      </div>
        </Col>
        </Row>
        <Row>
        <Col md='12'>
<Slider {...settings}> 
{destinations .map((destination,inx)=>{
    return(
      <div key={inx} className="img-box"> 
        <Card  >
            <Card.Img
            variant='top'
            src={destination.image}
            className='img-fluid'
            alt={destination.name}
            style={{height:"370px",borderRadius:"15px"}}
            />
            <Card.Title>{destination.name}</Card.Title>
               
                <span className="tours">{destination.tours}</span>
        </Card>
        </div>
    )
})

}
</Slider>
</Col>
        </Row>
      </Container>
        
        
     </section>

     <PopularPlace/>
     <section className="call_us">
     <Container>
      <Row className="align-items-center"> 
        <Col md={8}>
           <h5 className="title">
            CALL TO ACTTQN
           </h5>
           <h2 className="heading">
            READY FOR UNFORGTABLE TRAVEL, REMEMBER US!
           </h2>
           <p className="text">
           Lorem Ipsum is simply dummy text of the printing and  
            Industry , Lorem Ipsum has been the industry stantard dummy text ever scince the 1500s,
           </p> 
        </Col>
        <Col md={4} className="text-center mt-3 mt-md-0">
          <a href="tel:9876543210"
          className="secondary_btn bounce" rel="no">
            Contact Us !
          </a>

        </Col>
      </Row>
     </Container>
     <div className="overlay"></div>
     </section>

     <section className="tours_section slick_slider">
      <Container>
        <Row>
        <Col md="12">
        <div className="main_heading">
         <h1>photo Gallery </h1>  
      </div>
        </Col>
        </Row>
        <Row>
          <Col md="12">
          <Gallery/>
          </Col>
        </Row>
        </Container>
        </section>
    </>
  )
}
