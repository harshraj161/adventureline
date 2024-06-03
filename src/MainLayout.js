import React from 'react'
import AdventureNav from './AdventureNav'
import Home from './Componants/Home'
import About from './Componants/About'
import Contact from './Componants/Contact'
import Service from './Componants/Service'
// import Vehicles from './Componants/Vehicles'
import Brand from './Componants/Brand'

const MainLayout = () => {
    return (
        <div>
            <AdventureNav />
            <section id="home">
                <Home />

            </section>

            <section id='about'>
                <About />
            </section>

            <section id='contact'>
                <Contact />
            </section>

            <section id='brand'>
                <Brand/>
            </section>

            <section id='service'>
                <Service />
            </section>


        </div>
    )
}

export default MainLayout