import React, { useState } from 'react'
import "../MyCss/Contact.css"
import { Slide } from 'react-awesome-reveal'
import { IoCarSportSharp } from "react-icons/io5";
import Contactpic from '../Componants/img/1111.jpg'
import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import axios from 'axios';


const Contact = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [eMail, seteMail] = useState("")
    const [message, setmessage] = useState("")


    const addData= async()=>{

      const contactData= {
        FirstName:firstName,
        LastName:lastName,
        Email:eMail,
        Message:message
    

      }
      console.log(contactData)
      try {

        let res = await axios.post("http://localhost:5000/api/addcontact", contactData)
        alert("Added")
        console.log(res)
  
      } catch (error) {
        console.log(error)
      }
         
    }

  return ( 
    <>
        <Container className='Contact_Container'>
            <Row>
                <Col sm={12} mg={6} lg={7}>
                    <Slide direction='left'>
                        <Image src={Contactpic} className='Contact_Image' />
                    </Slide>
                    <Row>
                        <Col>
                            <Slide direction='left'>
                                <div className='Address_Container'>
                                    <h2>Address</h2>
                                    <h4>221,BALAJI PETH MARVADI VYAYAM SHALA NEAR ,Jalgaon
                                      PIN-425001.
                                    </h4>
                                </div>
                            </Slide>
                        </Col>

                        <Col>
                            <Slide direction='left'>

                                <div className='Address_Container' >
                                    <h2>located citys</h2>
                                    <h3><IoCarSportSharp/> Mumbai</h3>
                                    <h3><IoCarSportSharp/> Pune</h3>
                                    <h3><IoCarSportSharp/>Jalgaon</h3>
                                    <h3><IoCarSportSharp/> Nashik</h3>
                                    <h3><IoCarSportSharp/>Indore</h3>

                                </div>
                            </Slide>
                        </Col>
                        <Col>
                            <Slide direction='left'>
                                <div className='Address_Container' >
                                    <h2>Contact Info</h2>
                                    <div>
                                        <h3><b>harshalraj194@gmail.com</b></h3>
                                        <h3>8329326845</h3>
                                    </div>

                                </div>
                            </Slide>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} mg={6} lg={5}>
                    {/* <Slide direction='left'> */}

                        <div className='Contact_Form'>
                            <h4>Get in Touch</h4>
                            <h3>Have an inquiry or same feedback for us ?
                                fill out the form below to contact our term.</h3>
                            <div>
                                <Form.Label className='Farm_Label'>First Name</Form.Label>
                                <Form.Control  onChange={(e) => setfirstName(e.target.value)}type='text' className="input" />
                                <Form.Label className='Farm_Label'>Last Name</Form.Label>
                                <Form.Control onChange={(e) => setlastName(e.target.value)} type='text' className="input" />
                                <Form.Label className='Farm_Label'>Email</Form.Label>
                                <Form.Control onChange={(e) => seteMail(e.target.value)} type='email' className="input" />
                                <Form.Label className='Farm_Label'>Massage</Form.Label>
                                <Form.Control onChange={(e) => setmessage(e.target.value)} className='input' as="textarea" rows={3} placeholder="Add your massage" />
                                <button onClick={() => { addData() }} class="button-57" role="button"><span class="text">Get in Touch</span><span>Send Massage</span></button>

                            </div>

                        </div>
                    {/* </Slide> */}

                </Col>
            </Row>

        </Container>
    </>

  )
}

export default Contact