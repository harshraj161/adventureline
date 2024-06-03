import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Modal, Button, Form } from 'react-bootstrap'


const CustomerMessages = () => {

    const [allMessage, setallMessage] = useState([])
    const [selectMessage, setselectMessage] = useState({})

     const [deleteCon, setdeleteCon] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5000/api/allcontact")
            .then((result) => {
                console.log("DATA", result.data)
                setallMessage(result.data)
            }).catch((err) => {
                console.log(err)
            }, []);

    })

    const deleteContact = async () => {
        const contactData = {
            contactid: selectMessage._id
        }
        try {
            const deleteResult = await axios.delete("http://localhost:5000/api/deletebycontact", { data: contactData })
            console.log(deleteResult)
            setdeleteCon(false)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
         <Container>
                <Row>
                    {
                        allMessage.map((message) => {
                            return (
                                <Col className='col-container' sm={12} md={6} lg={4}>
                                    <Card className='card-container'>
                                        <Card.Body className='cr-container'>
                                        <p><h3>{message.FirstName}</h3></p>
                                        <p><h3>{message.LastName}</h3></p>
                                        <p><h3>{message.Email}</h3></p>
                                        <p><h3>{message.Message}</h3></p>
                                        </Card.Body> 
                                        <Card.Footer className='footer'>
                                            <button onClick={() => {
                                                setselectMessage(message)
                                                setdeleteCon(true)
                                            }}>DELETE</button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

            <Modal show={deleteCon} onHide={() => setdeleteCon(false)}>
                <Modal.Header closeButton>DELETE CONTACT</Modal.Header>
                <Modal.Body>
                    <h4> Are You Sure You Want Delete This Message </h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={() =>deleteContact()}>YES</Button>
                    <Button variant='primary' onClick={() => setdeleteCon(false)}>NO</Button>

                </Modal.Footer>
            </Modal>


    </div>
  )
}

export default CustomerMessages