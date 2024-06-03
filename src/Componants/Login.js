import React from 'react'
import "../MyCss/Login.css"
import axios from 'axios'
import { Form,Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../reduxwork/UserSlice'

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');

  const addData=()=>{
    const loginData= {
      CustomerEmail: customerEmail,
      CustomerPassWord: customerPassword
    }
 
  axios.post("http://localhost:5000/api/dologin",loginData)
    .then((res) => {
      if(res.data.data){
        dispatch(login(res.data.data));
        navigate("/")
        alert("Login successful");
      }else{
        alert("Invaild email or password");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("An error occurred. Please try again later.")
      
    });
  };
  
  

  return (
    <div className='main-container'>
    <div className='form-container'>
      <Form className='form'>
        <Form.Control className='item' onChange={(e) => setCustomerEmail(e.target.value)} type='email' placeholder='Enter Your Email' />
        <Form.Control className='item' type='password' onChange={(e) => setCustomerPassword(e.target.value)} placeholder='Enter Your Password' />
        <Button onClick={() => { addData() }}>LOGIN</Button>
        <p>
          <h2>Don't Have An Account</h2>
          <Link to="/register">Registration</Link>
        </p>
      </Form>
    </div>
  </div>
  )
}

export default Login