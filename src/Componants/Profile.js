import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reduxwork/UserSlice'

const Profile = () => {
    const { UserData } = useSelector((state) => state.user)
    const dispatcher = useDispatch()
    return (
        <div>

            <h4> PROFILE</h4>
            <h4>Name:{UserData.CustomerName}</h4>
            <h4>Email:{UserData.CustomerEmail}</h4>
            <h4>Address:{UserData.CustomerAddress}</h4>
            <h4>City:{UserData.CustomerCity}</h4>
            <button onClick={() => dispatcher(logout())}>Logout</button>
        </div>
    )
}

export default Profile