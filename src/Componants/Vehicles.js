import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Form, Modal } from "react-bootstrap";
import "../MyCss/Vehicles.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Vehicles = () => {
  const { brand } = useParams();

  const [allVehicle, setallVehicle] = useState([]);
  const [selectedVehicle, setselectedVehicle] = useState({});
  const [showForm, setshowForm] = useState(false);
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [selectedCustomer, setselectedCustomer] = useState({});

  const { UserData } = useSelector((state) => state.user);

  useEffect(() => {
    const reqData = {
      VehicleBrand: brand,
    };

    axios
      .post("http://localhost:5000/api/getvehiclebybrands", reqData)
      .then((result) => {
        console.log("DATA", result.data);
        setallVehicle(result.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  const addBooking = async () => {
    const bookingData = {
      StartDate: startDate,
      EndDate: endDate,
      VehicleId: selectedVehicle._id,
      CustomerId: UserData._id,
    };
    try {
      const bookingResult = await axios.post(
        "http://localhost:5000/api/addbooking",
        bookingData
      );
      console.log(bookingResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="baba">
      <Container>
        <>
          <Row>
            {allVehicle.map((vehicle) => {
              return (
                <Col className="col-container" sm={12} md={6} lg={4}>
                  <Card className="card-container">
                    <Card.Body className="cr-container">
                      <img
                        className="card-image"
                        src={`http://localhost:5000${vehicle.VehicleImage}`}
                      />
                      <p>
                        <h3>{vehicle.VehicleNo}</h3>
                      </p>
                      <p>
                        <h4>{vehicle.VehicleType}</h4>
                      </p>
                      <p>
                        <h4>{vehicle.VehicleBrand}</h4>
                      </p>
                      <p>
                        <h4>₹{vehicle.VehicleRent}</h4>
                      </p>
                    </Card.Body>
                    <Card.Footer className="footer">
                      <button
                        onClick={() => {
                          setselectedVehicle(vehicle);
                          setshowForm(true);
                        }}
                      >
                        BOOKING
                      </button>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </>
      </Container>

      <Modal show={showForm} onHide={() => setshowForm(false)}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Form>
            <h6>FILL THE DETAILS</h6>
            <Form.Control
              className="item"
              onChange={(e) => setstartDate(e.target.value)}
              type="date"
              placeholder="Starting-Date"
            />
            <Form.Control
              className="item"
              onChange={(e) => setendDate(e.target.value)}
              type="date"
              placeholder="Ending-Date"
            />
            <button onClick={() => addBooking()}>SUBMIT</button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Vehicles;
