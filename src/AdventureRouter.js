import React from 'react'
import Login from './Componants/Login'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import Registration from './Componants/Registration'
import AddAgency from './Componants/AddAgency'
import Vehicles from './Componants/Vehicles'
import Profile from './Componants/Profile'
import Booking from './Componants/Booking'
import BookingDetails from './Componants/BookingDetails'
import Video from './Componants/Video'




const AdventureRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Registration />} />
                <Route path="/addagency" element={<AddAgency />} />
                <Route path="/vehicles/:brand" element={<Vehicles />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/bookingdetails" element={<BookingDetails />} />
                <Route path="/video" element={<Video />} />
            </Routes>
        </>
    )
}

export default AdventureRouter