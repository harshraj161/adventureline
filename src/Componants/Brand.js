import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "../MyCss/Brand.css"
import img1 from "../Componants/img/logo-1.png"
import img2 from "../Componants/img/logo-2.png"
import img3 from "../Componants/img/logo-3.png"
import img4 from "../Componants/img/logo-4.png"
import img5 from "../Componants/img/logo-5.png"
import img6 from "../Componants/img/logo-6.png"
import img7 from "../Componants/img/logo-7.png"
import img8 from "../Componants/img/logo-8.png"
import img9 from "../Componants/img/logo-9.png"
import img10 from "../Componants/img/logo-10.png"
import img11 from "../Componants/img/logo-11.png"
import img12 from "../Componants/img/logo-12.png"
import img13 from "../Componants/img/logo-13.png"
import img14 from "../Componants/img/logo-14.png"
import img15 from "../Componants/img/logo-15.png"
import img16 from "../Componants/img/logo-16.png"
import img17 from "../Componants/img/logo-17.jpg"
const Brand = () => {

    const navi = useNavigate()


    const brands = [{
        bImg: img1,
        bName: "Volkswagen"
    },
    {
        bImg: img2,
        bName: "Suzuki"
    },
    {
        bImg: img3,
        bName: "Infinity"
    },
    {
        bImg: img4,
        bName: "Dodge"
    },
    {
        bImg: img5,
        bName: "Mazda"
    },
    {
        bImg: img6,
        bName: "Mitsubishi"
    },
    {
        bImg: img7,
        bName: "Hyundai"
    },
    {
        bImg: img8,
        bName: "Jeep"
    },
    {
        bImg: img9,
        bName: "Kia"
    },
    {
        bImg: img10,
        bName: "Nissan"
    },
    {
        bImg: img11,
        bName: "Toyota"
    },
    {
        bImg: img12,
        bName: "Chevrolet"
    },
    {
        bImg: img13,
        bName: "Lamborghini"
    },
    {
        bImg: img14,
        bName: "Ford"
    },
    {
        bImg: img15,
        bName: "Honda"
    },
    {
        bImg: img16,
        bName:"Bmw"
    },
    {
        bImg: img17,
        bName: "Audi"
    },
    ]

    return (
        <>
            <div className='MainAPP_Container'>
                <Container>
                    <h6>BRANDS</h6>

                    <div className='asdfa'>
                        {
                            brands.map((brand) => {
                                return (
                                    <div className='Cardas' onClick={() => navi(`/vehicles/${brand.bName}`)}>
                                        <img src={brand.bImg} />
                                        <h5>{brand.bName}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Brand