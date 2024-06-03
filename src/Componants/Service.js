import React from "react";
import "../MyCss/Srevice.css"
import { FaTruckFast } from "react-icons/fa6";
import { PiHeadsetDuotone } from "react-icons/pi";
import { FaCar } from "react-icons/fa";


const Service = () => {
  return (
    <div className="mainclass-Container">
      <h1>SERVICE</h1>

      <div className="sub-container">
        <div className="delivery-container">
          <FaTruckFast size={80}/>
        <h2>FREE DELIVERY</h2>
        <h5>We Deliver The Car To Any</h5> 
        <h5>Hotel in Maharashtra</h5>
        <h4>Free Charge</h4>
        </div>

        <div className="onlinebooking-container">
          <PiHeadsetDuotone size={80}/> 
          <h2>ONLINE BOOKING</h2>
          <h5>You Can Book Directly Online Or Via</h5>
          <h4>WhatsApp</h4>
        </div>


        <div className="hugefleet-container">
          <FaCar size={80}/>
          <h2>HUGE FLEET</h2>
          <h5>
            We Have More Than 250+ Sports,Luxury
          </h5>
          <h5>And Economy Cars To Choose From</h5>
        </div>

      </div>
    </div>
  );
};

export default Service;
