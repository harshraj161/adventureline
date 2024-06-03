import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import OwnerOfCanva from './OwnerOfCanva'
import Dashboard from './Properties/Dashboard'
import Allvehicle from './Properties/Allvehicle'
import Addvehicle from './Properties/Addvehicle'
import Booking from './Properties/Booking'
import CustomerList from './Properties/CustomerList'
import BookingDetails from './Properties/BookingDetails'
import CustomerMessages from './Properties/CustomerMessages'





const OwnerCanvaRoute = () => {
  return (
    <>
    <BrowserRouter>
    <OwnerOfCanva/>
    <Routes>
        <Route path='/'  element={<Dashboard />} />
        <Route path='/addvehicle'  element={<Addvehicle />} />
        <Route path='/allvehicle'  element={<Allvehicle/>} />
        <Route path='/booking'  element={<Booking />} />
        <Route path="/bookingdetails" element={<BookingDetails/>}/>
        <Route path='/customerlist'  element={<CustomerList/>} />
        <Route path='/message'  element={<CustomerMessages/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default OwnerCanvaRoute