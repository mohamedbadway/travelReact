import React, { useState } from 'react'
import { Container,Row ,Col,ListGroup, NavLink} from 'react-bootstrap'
import'../Footer/footer.css'
const Footer = () => {
  const[visible,setVisible] =useState(false) ;
  const toggleVisible=()=>{
const scrolled = document.documentElement.scrollTop;
if(scrolled >300){
  setVisible(true)
} 
else if(scrolled <= 0){
setVisible(false)
}  

}
const scrollTop =()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
if(typeof window !== "undefined"){
window.addEventListener("scroll",toggleVisible)
}
 
 
  
  return (
    <> 
      <footer className='pt-5'>
        <Container>
          <Row>
            <Col md="3" sm="12" className='quick_link mt-3 mt-md-0'>
             <h4 className='mt-lg-0 mt-sm-3'>Company</h4>
             <ListGroup variant="flush">
      <ListGroup.Item>
        <NavLink to="/">About Us</NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
      <NavLink to="/">News</NavLink>
         </ListGroup.Item>
      <ListGroup.Item>
      <NavLink to="/">Faq</NavLink>
      </ListGroup.Item>
     
    </ListGroup>
            </Col>
            <Col md="3" sm="12" className='quick_link mt-3 mt-md-0'>
            <h4 className='mt-lg-0 mt-sm-3'>Explore</h4>
            <ListGroup variant="flush">
      <ListGroup.Item>
        <NavLink to="/"> Faq</NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
      <NavLink to="/">Tour List</NavLink>
         </ListGroup.Item>
      <ListGroup.Item>
      <NavLink to="/">Destination</NavLink>
      </ListGroup.Item>
     
    </ListGroup>
            </Col>
            <Col md="3" sm="12" className='quick_link mt-3 mt-md-0'>
            <h4 className='mt-lg-0 mt-sm-3'>Quick Link</h4>
            <ListGroup variant="flush">
      <ListGroup.Item>
        <NavLink to="/"> Home</NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
      <NavLink to="/">About Us</NavLink>
         </ListGroup.Item>
      <ListGroup.Item>
      <NavLink to="/">Contact Us</NavLink>
      </ListGroup.Item>
     
    </ListGroup>
            </Col>
            <Col md="3" sm="12" className='quick_link mt-3 mt-md-0'>
            <h4 className='mt-lg-0 mt-sm-3'>Quick Link</h4>
            <div className='d-flex align-items-center'>
              <p className='pb-2'>Dehradu ,Utraakhand, India</p>
            </div>
            <div className='d-flex align-item-top'> 
            <i className='bi bi-geo-alt me-3'></i>
            <a target='_blank' href='https://www.facebook.com/profile.php?id=100073383318938&mibextid=LQQJ4d' className='d-block'>mohamed badway</a>
            </div>
            <div className='d-flex align-item-top my-2'>
            <i className='bi bi-telephone me-3'></i>
            <a target='_blank' href='https://www.facebook.com/profile.php?id=100073383318938&mibextid=LQQJ4d' className='d-block'>+20 1095987813</a>
            </div>
            

            </Col>
          </Row>
          <Row className='py-2 bdr'>
            <Col className='col copyright'>
         <p className='text-light'>@ 2024. mohamedbadway All rights reserved</p>   
            </Col>
          </Row>
          </Container>
      </footer>
 
     <div id="back-top" 
     onClick={scrollTop}
     className={visible ? "active" : ""}>
     <i className="bi bi-arrow-up"></i>
     </div>
     </>
  )
}

export default Footer
