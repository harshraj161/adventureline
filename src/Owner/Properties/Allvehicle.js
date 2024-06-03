


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Col, Container, Row, Modal, Button, Form } from 'react-bootstrap'
import "../../MyCss/AllVehical.css"

const Allvehicle = () => {
    const [deleteShowVehicle, setdeleteShowVehicle] = useState(false)
    const [updateShowRent, setupdateShowRent] = useState(false)
    const [allVehicle, setallVehicle] = useState([])
    const [selectedVehicle, setselectedVehicle] = useState({})
    const [amount, setamount] = useState(0)



    useEffect(() => {
        axios.get("http://localhost:5000/api/allvehicle")
            .then((result) => {
                console.log("DATA", result.data)
                setallVehicle(result.data)
            }).catch((err) => {
                console.log(err)
            }, []);

    })


    const deleteVehicle = async () => {
        const vehicleData = {
            vehicleid: selectedVehicle._id
        }
        try {
            const deleteResult = await axios.delete("http://localhost:5000/api/deletebyvehicle", { data: vehicleData })
            console.log(deleteResult)
            setdeleteShowVehicle(false)
        } catch (error) {
            console.log(error)
        }
    }


    const updateVehicle = async () => {
        const updaterentData = {
            vehicleid: selectedVehicle._id,
            VehicleRent: Number(amount)
        }
        try {
            const updateResulte = await axios.put("http://localhost:5000/api/updatevehiclerent", updaterentData)
            console.log(updateResulte)
            setupdateShowRent(false)
        } catch (error) {
            console.log(error)
        }
    }





    return (
        <>
            <Container>
                <Row>
                    {
                        allVehicle.map((vehicle) => {
                            return (
                                <Col className='col-container' sm={12} md={6} lg={4}>
                                    <Card className='card-container'>
                                        <Card.Body className='cr-container'>
                                            <img className='card-image' src={`http://localhost:5000${vehicle.VehicleImage}`} />
                                            <p><h3>{vehicle.VehicleNo}</h3></p>
                                            <p><h4>{vehicle.VehicleType}</h4></p>
                                            <p><h4>{vehicle.VehicleBrand}</h4></p>
                                            <p><h4>₹{vehicle.VehicleRent}</h4></p>
                                        </Card.Body>
                                        <Card.Footer className='footer'>
                                            <button onClick={() => {
                                                setselectedVehicle(vehicle)
                                                setdeleteShowVehicle(true)
                                            }}>DELETE</button>
                                            <button onClick={() => {
                                                setselectedVehicle(vehicle)
                                                setupdateShowRent(true)
                                            }}>UPDATE</button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

            {/* Delete modal */}


            <Modal show={deleteShowVehicle} onHide={() => setdeleteShowVehicle(false)}>
                <Modal.Header closeButton>DELETE VEHICLE</Modal.Header>
                <Modal.Body>
                    <h4> Are You Sure You Want Delete This Vehicle </h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={() => deleteVehicle()}>YES</Button>
                    <Button variant='primary' onClick={() => setdeleteShowVehicle(false)}>NO</Button>

                </Modal.Footer>
            </Modal>


            {/* Update modal */}



            <Modal show={updateShowRent} onHide={() => setupdateShowRent(false)}>
                <Modal.Header closeButton>UPDATE VEHICLE RENT</Modal.Header>
                <Modal.Body>
                    <h4>Why Do You Want To Change Vehicle Rent </h4>
                    <Form.Control onChange={(e) => setamount(e.target.value)} type='number' placeholder=' Please Enter Updeted Vehicle Rent' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={() => updateVehicle()}>YES</Button>
                    <Button variant='primary' onClick={() => setupdateShowRent(false)}>NO</Button>

                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Allvehicle


