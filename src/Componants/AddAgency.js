import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const AddAgency = () => {

    const [agencyName, setagencyName] = useState("")
    const [agencyAddress, setagencyAddress] = useState("")
    const [agencyCity, setagencyCity] = useState("")
    const [agencyOwnername, setagencyOwnername] = useState("")
    const [agencyContactNo, setagencyContactNo] = useState(0)
    const [agencyLogo, setagencyLogo] = useState("")
    const [agencymail, setagencymail] = useState("")
    const [agencyPassword, setagencyPassword] = useState("")



    const addAgency = async () => {

        const agencyData = {
            AgencyName: agencyName,
            AgencyAddress: agencyAddress,
            AgencyCity: agencyCity,
            AgencyOwnerName: agencyOwnername,
            AgencyContactNum: Number(agencyContactNo),
            AgencyLogo: agencyLogo,
            AgencyEmail: agencymail,
            AgencyPassWord: agencyPassword,

        }
        try {
            let res = await axios.post("http://localhost:5000/api/addagency", agencyData)
            alert("Added")
            console.log(res)
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
            setfoodimage(res.data.filepath)
          }).catch((err) => {
            console.log("Errpr", err)
          });
      }
    

    return (
        <div>
            <Form>
                <h1>FILL YOUR DETAILS</h1>
                <Form.Control onChange={(e) => setagencyName(e.target.value)} type='text' placeholder='AgencyName' />
                <Form.Control onChange={(e) => setagencyAddress(e.target.value)} type='text' placeholder='AgencyAddress' />
                <Form.Control onChange={(e) => setagencyCity(e.target.value)} type='text' placeholder='AgencyCity' />
                <Form.Control onChange={(e) => setagencyOwnername(e.target.value)} type='text' placeholder='AgencyOwnerName' />
                <Form.Control onChange={(e) => setagencyContactNo(e.target.value)} type='number' placeholder='AgencyContactNum' />
                <Form.Control onChange={uploadImage} type='file' placeholder='AgencyLogo' />
                <Form.Control onChange={(e) => setagencymail(e.target.value)} type='mail' placeholder='AgencyEmail' />
                <Form.Control onChange={(e) => setagencyPassword(e.target.value)} type='password' placeholder='AgencyPassWord' />
                <button onClick={() => { addData() }}>SUBMIT</button>
            </Form>

        </div>
    )
}

export default AddAgency