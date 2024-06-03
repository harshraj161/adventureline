import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll"
import { Link as RouteLink } from "react-router-dom"
import { IoCarSportSharp } from "react-icons/io5";

import "./MyCss/AdventureNav.css"


const AdventureNav = () => {
    return (
        <>

            <Navbar className='nav'>
                <Container >
                    <Navbar.Brand className='brand'><IoCarSportSharp className="icon" size={30} />Adventure Line</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <Link to="home" spy={true} smooth={true}   duration={500} className='nav-link'>HOME</Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="about" spy={true} smooth={true}   duration={500} className='nav-link'>ABOUT</Link>

                            </Nav.Link>

                            <Nav.Link>
                                <Link to="service" spy={true} smooth={true}   duration={500} className='nav-link'>SERVICE</Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="contact" spy={true} smooth={true}  duration={500} className='nav-link'>CONTACT</Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="brand" spy={true} smooth={true}  duration={500} className='nav-link'>BRANDS</Link>
                            </Nav.Link>

                            <Nav.Link>
                                <RouteLink to="/profile" className='nav-link'>PROFILE</RouteLink>
                            </Nav.Link>



                            <Nav.Link>
                                <RouteLink to="/login" className='nav-link'>LOGIN</RouteLink>
                            </Nav.Link>

                        </Nav> 


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AdventureNav