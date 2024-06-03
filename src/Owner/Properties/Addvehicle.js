import React, { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import '../../MyCss/AddVehicle.css'


const Addvehicle = () => {

  const [vehicleNo, setvehicleNo] = useState("")
  const [vehicleType, setvehicleType] = useState("")
  const [vehicleBrand, setvehicleBrand] = useState("")
  const [vehicleImage, setvehicleImage] = useState("")
  const [vehicleRent, setvehicleRent] = useState(0)
  const addData = async () => {

    const vehicleData = {

      VehicleNo: vehicleNo,
      VehicleType: vehicleType,
      VehicleBrand: vehicleBrand,
      VehicleImage: vehicleImage,
      VehicleRent: Number(vehicleRent),

    }
    try {
      let res = await axios.post("http://localhost:5000/api/addvehicle", vehicleData)
      alert("Added")
    } catch (error) {
      console.log(error)
    }
  }

  async function uploadImage(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);
    axios.post("http://localhost:5000/uploadfile", imgData)
      .then((res) => {
        console.log("Response:", res.data)
        setvehicleImage(res.data.filepath)
      }).catch((err) => {
        console.log("Errpr", err)
      });
  }



  return (
    <div className='mainf-container'>
      <div className='form-Container'>
        <Form className='form' >
          <h1>FILL YOUR DETAILS</h1>
          <Form.Control className='item' onChange={(e) => setvehicleNo(e.target.value)} type='text' placeholder='VehicleNo' />
          <Form.Control className='item' onChange={(e) => setvehicleType(e.target.value)} type='text' placeholder='vehicleType' />
          <Form.Select className='item' onChange={(e) => setvehicleBrand(e.target.value)}>
           <option value="Volkswagen">Volkswagen</option>
           <option value="Suzuki">Suzuki</option>
           <option value="Infinity">Infinity</option>
           <option value="Dodge">Dodge</option>
           <option value="Mazda">Mazda</option>
           <option value="Mitsubishi">Mitsubishi</option>
           <option value="Hyundai">Hyundai</option>
           <option value="Jeep">Jeep</option>
           <option value="Kia">Kia</option>
           <option value="Nissan">Nissan</option>
           <option value="Toyota">Toyota</option>
           <option value="Chevrolet">Chevrolet</option>
           <option value="Lamborghini">Lamborghini</option>
           <option value="Ford">Ford</option>
           <option value="Honda">Honda</option>
           <option value="Bmw">Bmw</option>
           <option value="Audi">Audi</option>
           
          </Form.Select>

          <Form.Control className='item' onChange={uploadImage} type='file' placeholder='vehicleImage' />
          <Form.Control className='item' onChange={(e) => setvehicleRent(e.target.value)} type='number' placeholder='VehicleRent' />
          <button onClick={() => { addData() }}>SUBMIT</button>
        </Form>
      </div>
    </div>
  )
}

export default Addvehicle