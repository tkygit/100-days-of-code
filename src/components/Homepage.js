import React from 'react'
import Navbar from './Navbar'
import Details from './styles/Details'
import Footer from './Footer'

function Homepage() {
    return (
        <div>
            <Navbar/>
            <div className="hero">Hero</div>
            <Details>the challenge.</Details>
            <Details>the rules.</Details>
            <Details>get ready.</Details>
            <Footer/>
        </div>
    )
}

export default Homepage
