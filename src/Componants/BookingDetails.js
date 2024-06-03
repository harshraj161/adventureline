import React from 'react'
import { useLocation } from 'react-router-dom'
import "../MyCss/BookingDetailsCus.css"


const BookingDetails = () => {

    const bookingData = useLocation().state


    return (
      <div className='detail-container'>
        <div className='booking-content'>
          <h1>BookingDateils</h1>
          <h4>BookingDate:{bookingData?.BookingDate}</h4>
              <h4>StartDate:{bookingData?.StartDate}</h4>
              <h4>EndDate:{bookingData?.EndDate}</h4>
          </div>
          <div className='mainbooking-container'>
          {console.log(bookingData)}
          <img src={`http://localhost:5000${bookingData?.VehicleId?.VehicleImage}`} />
          <h4>VehicleNo {bookingData?.VehicleId?.VehicleNo}</h4> 
            <h4>VehicleType {bookingData?.VehicleId?.VehicleType}</h4>
            <h4>VehicleBrand {bookingData?.VehicleId?.VehicleBrand}</h4> 
  
            <h4>VehicleRent{bookingData?.VehicleId?.VehicleRent}</h4> 
            
        </div>
      </div>
    )
  }
  
export default BookingDetails