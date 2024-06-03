import React, { useState } from 'react'
import { IoCarSportSharp } from "react-icons/io5";
import { AiFillCaretRight } from "react-icons/ai";
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../MyCss/OwnerCanva.css"




const OwnerOfCanva = () => {

    const [isShow, setisShow] = useState(false)

    const handleShow =()=>{ setisShow (true)}
    const handleHide =() => {setisShow (false)}  

  return (
    <>
    <Navbar expand='lg' sticky="top" fixed="top" className="changya-nav" >
                <Container>
                    <Navbar.Brand><h2><IoCarSportSharp className="icon" onClick={() => handleShow()} size={30} />Adventure Line</h2>
                    </Navbar.Brand>

                </Container>
            </Navbar>

            <Offcanvas show={isShow} onHide={handleHide}>
                <Offcanvas.Header className="header" closeButton>
                    <h1>MY MENU</h1>
                </Offcanvas.Header>
                <Offcanvas.Body className='bb-color'>
                    <Nav className='flex-column'>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link to='/'><h4><AiFillCaretRight/>DASHBOARD</h4></Link>
                        </Nav.Link>

                        <Nav.Link onClick={() => handleHide()} >
                            <Link to='/addvehicle'><h4><AiFillCaretRight/>ADDVEHICLE</h4></Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link to='/allvehicle'><h4><AiFillCaretRight/>ALLVEHICLE</h4></Link>
                        </Nav.Link>


                        <Nav.Link onClick={() => handleHide()}>
                            <Link to='/booking'><h4><AiFillCaretRight/>BOOKING</h4></Link>
                        </Nav.Link>


                        <Nav.Link onClick={() => handleHide()}>
                            <Link to='/customerlist'><h4><AiFillCaretRight/>CUSTOMERLIST</h4></Link>
                        </Nav.Link>

                        <Nav.Link onClick={() => handleHide()}>
                            <Link to='/message'><h4><AiFillCaretRight/>MESSAGE</h4></Link>
                        </Nav.Link>


                    </Nav>

                </Offcanvas.Body>
            </Offcanvas>

    
    </>
  )
}

export default OwnerOfCanva