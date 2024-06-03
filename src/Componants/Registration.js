import React, { useState } from 'react'
import "../MyCss/Registration.css"
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch } from 'react-redux'




const Registration = () => {

  const navigate = useNavigate();


  const [customerName, setcustomerName] = useState("")
  const [customerMail, setcustomerMail] = useState("")
  const [customerPass, setcustomerPass] = useState("")
  const [customerAdd, setcustomerAdd] = useState("")
  const [customerPin, setcustomerPin] = useState(0)
  const [customerCity, setcustomerCity] = useState("")
  const [customerMoNo, setcustomerMoNo] = useState(0)

  const addData = async () => {

    const customerData = {
      CustomerName: customerName,
      CustomerEmail: customerMail,
      CustomerMobNo: Number(customerMoNo),
      CustomerPassWord: customerPass,
      CustomerAddress: customerAdd,
      CustomerCity: customerCity,
      CustomerPinCode: Number(customerPin)

    }
    console.log(customerData)
    try {

      let res = await axios.post("http://localhost:5000/api/addcustomers", customerData)
      alert("Added")
      navigate("/login")
      console.log(res)

    } catch (error) {
      console.log(error)
    }
  }
  return (

    <div className='main-container'>
      <div className='form-container'>
        <Form className='form'>
          <h1> FILL YOUR DETAILS</h1>

          <Form.Control className='item' onChange={(e) => setcustomerName(e.target.value)} type='text' placeholder='CustomerName' />
          <Form.Control className='item' onChange={(e) => setcustomerMail(e.target.value)} type='Mail' placeholder='CustomerEmail' />
          <Form.Control className='item' onChange={(e) => setcustomerMoNo(e.target.value)} type='number' placeholder='CustomerMobNo' />
          <Form.Control className='item' onChange={(e) => setcustomerPass(e.target.value)} type='Password' placeholder='CustomerPassWord' />
          <Form.Control className='item' onChange={(e) => setcustomerAdd(e.target.value)} type='text' placeholder='CustomerAddress' />
          <Form.Control className='item' onChange={(e) => setcustomerCity(e.target.value)} type='text' placeholder='CustomerCity' />
          <Form.Control className='item' onChange={(e) => setcustomerPin(e.target.value)} type='number' placeholder='CustomerPinCode' />
          <button onClick={() => { addData() }}>SUBMIT</button>
          <p className='p-login'>
            <h2>Already Have An Account</h2><Link className='login-link' to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default Registration