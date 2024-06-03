import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { Container } from 'react-bootstrap'
import "../MyCss/Home.css"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

const Home = () => {


  const navigate = useNavigate();
  return (
   
    <div className='first-container'>
      <div className='second-container'>
        <Slide direction='right'>
       <h1>START NOW YOUR ADVENTURE</h1>
       </Slide>
       <Slide direction='left'>
         <p><h3>Start Your Journy And enjoy Your Destination</h3></p>
         </Slide>
      </div>
      <div className='third-container'>
        <Slide direction='down'>
        <button ><Link to="brand" spy={true} smooth={true}  duration={500} >BOOK NOW</Link></button>
        </Slide>
        <Slide direction='up'>
        <button><Link to="contact" spy={true} smooth={true}  duration={500} >CONTACT</Link></button>
        </Slide>
      </div>
    </div>
  
  )
}

export default Home