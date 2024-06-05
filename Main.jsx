import React from 'react'
import './Main.css';
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

export default function Main () {
  return (
    <div className='main container' id='main'>
        <div className="main-text">
            <h1>We Ensure better education for a better world!</h1>
            <p>our cutting-edge curriculum is designed to empower students with the knoweldge, skills and experiences needed to excel in the dynamic feild of education</p>
            <button className='btn'><Link to='program' smooth={true} offset={0} duration={500}>Explore more </Link><img src={dark_arrow} alt="arrow" /></button>
        </div>

    </div>
  )
}
