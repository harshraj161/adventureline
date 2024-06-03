import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
  const [AllBooking, setAllBooking] = useState([])
  const navigator = useNavigate()

  // All Booking
  useEffect(() => {
    axios.get("http://localhost:5000/api/allbooking")
      .then((result) => {
        setAllBooking(result.data)
      }).catch((err) => {
        console.log(err)
      });
  })
  return (
    <div className='boss'>
      <>
        <h4> Booking</h4>
        <Container>
          <Row>
            {
              AllBooking.map((booking) => {
                return (
                  <Col className='colby-container' sm={12} md={6} lg={4}>
                    <Card className='cardhy-container'>
                      <Card.Body className='dr-container'>
                        <Card.Text>{booking.BookingDate}</Card.Text>
                        <Card.Text>{booking.StartDate}</Card.Text>
                        <Card.Text>{booking.EndDate}</Card.Text>
                      </Card.Body>
                      <Card.Footer className='foot'>
                        <button onClick={() => navigator("/bookingdetails",{state:booking})}>Booking Details</button>
                      </Card.Footer>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </>
    </div>
  )
}

export default Booking