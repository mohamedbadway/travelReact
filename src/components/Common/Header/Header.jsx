 import React, {  useEffect, useState } from 'react'
import { Container, Navbar,Offcanvas,NavDropdown,Nav} from 'react-bootstrap'
 import { NavLink } from 'react-router-dom'
 import '../Header/header.css'
 export default function Header() {
    const [open,setOpen] = useState(false);
    const  toggleMenu =()=>{
setOpen(!open) 
    };
    useEffect(()=>{
        window.addEventListener("scroll",isSticky)
        return ()=>{
            window.removeEventListener("scroll",isSticky)
        }
    })
    const isSticky =()=>{
const header = document.querySelector(".header-section");
const scrollTop = window.scrollY;
scrollTop >= 120 ? header.classList.add("is-sticky") :
header.classList.remove("is-sticky")
    }
 
   return (
    <header className='header-section'>
     <Container>
         
        <Navbar   expand='lg'  className='p-0'>
          
            <Navbar.Brand href="#">
                <NavLink to='/'>TravelEgypt</NavLink>
            </Navbar.Brand>
             
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
              <Offcanvas.Header >
               <h1 className='logo'>TravelEgypt</h1>   
               <span className='navbar-toggler ms-auto'  onClick={toggleMenu}>
               <i className="bi bi-x-lg"></i>
               </span>
               
               
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nav-link' to='/'>Home</NavLink>
                  <NavLink className='nav-link' to='/'>About Us</NavLink>
                  <NavLink className='nav-link' to='/'>Tours</NavLink>
                  
                  <NavDropdown
                    title="Destination"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3"> Spain Tours </NavDropdown.Item>
                    <NavDropdown.Item href="#action4"> Italy Tours</NavDropdown.Item>
                    <NavDropdown.Item href="#action4"> France Tours </NavDropdown.Item>
        </NavDropdown>
        <NavLink className='nav-link' to='/'>Gallery</NavLink>
         <NavLink className='nav-link' to='/'>Contact</NavLink>         
                  
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
         <div className='ms-md-4 ms-2'>
            <NavLink className='primaryBtn d-none d-sm-inline-block'>
                Book Now
            </NavLink>
            <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
            <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
         </div>
        </Navbar>   
         
     </Container>

                     
                    
                  
    </header>
        
   )
 }
 
 
