import React from 'react'
import { Slide } from "react-awesome-reveal";
import { Container, Row, Col, Image } from 'react-bootstrap'
import aboutImage from '../Componants/img/ABOUT US.jpg'



const About = () => {
  return (
<>
      <Container className='MainAPP_Container'>
        <Row>
          <Col>
            {/* <Slide direction='left'> */}
              <Image src={aboutImage} />
            {/* </Slide> */}
          </Col>
          <Col>
            <Slide direction='right'>
              <div className='About_Details_Container' >
                <h3>About Autorentic</h3>
                <h4>You start the engine and your adventure begins</h4>
                <p>At Autorentic, we are dedicated to providing our customers with top-notch car rental services at competitive prices.
                  With a wide range of vehicles to choose from, we strive to ensure that our customers find the perfect ride for their needs and preferences.
                  Our team of experienced professionals is committed to delivering exceptional customer service, making the rental process seamless and stress-free for every client.</p>
              </div>
            </Slide>
            <Row>
              <Col>
                <Slide direction='up'>
                  <div className='About_Second_Div'>
                    <h4>Total Cars</h4>
                    <h1>1023</h1>
                  </div>
                </Slide>
              </Col>
              <Col>
                <Slide direction='down'>
                  <div className='About_Second_Div'>
                    <h4>Cars Varients</h4>
                    <h1>438</h1>
                  </div>
                </Slide>
              </Col>
              <Col>
                <Slide direction='up'>
                  <div className='About_Second_Div' >
                    <h4>Our customer</h4>
                    <h1>6789</h1>
                  </div>
                </Slide>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
     )
}

export default About