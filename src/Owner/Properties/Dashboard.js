import React from 'react'
import"../../MyCss/Dashboard.css"
import { Slide } from 'react-awesome-reveal'
import { TbBrandSlack } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { LiaCarSolid } from "react-icons/lia";




const Dashboard = () => {
  return (
    <div className='dmain-container' >

      {/* <div className='dfirst-container'> */}
        <div  className='kaka1'>
          <TbBrandSlack className='iconic' size={80}/>
        <Slide direction='right'><h2>BRAND</h2></Slide>
          <Slide direction='left'><h3>17</h3></Slide>
        </div>

        <div className='kaka2' >
          <LiaCarSolid className='iconic' size={80}/>
          <Slide direction='right'><h2>VEHICLES</h2></Slide>
          <Slide direction='left'><h3>100</h3></Slide>
        </div>
{/* 
      </div> */}



      {/* <div className='dsecond-container'>     */}

        <div className='kaka3'>
          <GiNotebook className='iconic'size={80}/>
          <Slide direction='right'><h2>BOOKING</h2></Slide>
          <Slide direction='left'><h3>150</h3></Slide>
          
        </div>

        <div className='kaka4'>
        <IoIosPeople className='iconic' size={80}/>
        <Slide direction='right'><h2>COUSTOMER LIST</h2></Slide>
        <Slide direction='left'> <h3>50</h3></Slide>
         
        </div>

      {/* </div> */}
    </div>
  )
}

export default Dashboard