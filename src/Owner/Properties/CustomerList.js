import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Modal, Button, Form } from 'react-bootstrap'




const CustomerList = () => {

  const [allCustomer, setallCustomer] = useState([])
  const [selectedCustomer, setselectedCustomer] = useState({})

  const [deleteCustomer, setdeleteCustomer] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:5000/api/allcustomers")
        .then((result) => {
            console.log("DATA", result.data)
            setallCustomer(result.data)
        }).catch((err) => {
            console.log(err)
        }, []);
        
})

const deleteCust = async () => {
  const customerData = {
    customerid: selectedCustomer._id
  }
  try {
      const deleteResult = await axios.delete("http://localhost:5000/api/deletebyCustomers", { data: customerData })
      console.log(deleteResult)
      setdeleteCustomer(false)
  } catch (error) {
      console.log(error)
  }
}

  return (
    <div>
       <Container>
                <Row>
                    {
                        allCustomer.map((customer) => {
                            return (
                                <Col className='col-container' sm={12} md={6} lg={4}>
                                    <Card className='card-container'>
                                        <Card.Body className='cr-container'>
                                        <p><h3>{customer.CustomerName}</h3></p>
                                        <p><h3>{customer.CustomerEmail}</h3></p>
                                        <p><h3>{customer.CustomerMobNo}</h3></p>
                                        <p><h3>{customer.CustomerAddress}</h3></p>
                                        <p><h3>{customer.CustomerCity}</h3></p>
                                        </Card.Body> 
                                        <Card.Footer className='footer'>
                                            <button onClick={() => {
                                                setselectedCustomer(customer)
                                                setdeleteCustomer(true)
                                            }}>DELETE</button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <Modal show={deleteCustomer} onHide={() => setdeleteCustomer(false)}>
                <Modal.Header closeButton>DELETE CUSTOMER</Modal.Header>
                <Modal.Body>
                    <h4> Are You Sure You Want Delete This Customer </h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={() =>deleteCust()}>YES</Button>
                    <Button variant='primary' onClick={() => setdeleteCustomer(false)}>NO</Button>

                </Modal.Footer>
            </Modal>

    </div>
  )
}

export default CustomerList