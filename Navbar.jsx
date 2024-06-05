import React, { useEffect, useState } from 'react'
import'./Navbar.css';
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import menu from '../assets/menu-icon.png'

export default function Navbar() {
    let[showdata,SetShowdata]=useState(false);
    let[loginshow,setLoginshow]=useState(false);
    const[stick,setStick]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setStick(true) : setStick(false)
        })
    },[])
    const [mobmenu,setMobmenu]=useState(false)
    const togglemenu=()=>{
        mobmenu? setMobmenu(false): setMobmenu(true);
    }
  return (
    <>
    <nav className={`container ${stick ? 'darknav':''}`}>
        <img src={logo} className='logo'/>
        <ul className={mobmenu ? '' : 'hide-mob-menu'}>
            <li><Link to='main' smooth={true} offset={0} duration={400}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={0} duration={400}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={400}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={0} duration={400}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={0} duration={400}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={400}>Contact us</Link></li>
            <li onClick={()=>setLoginshow(!loginshow)} className='loginbtn'><button>Login</button></li>
            <li><button onClick={()=>SetShowdata(!showdata)} className='signupbtn'>SingUp</button></li>
        </ul>
        <img src={menu} className='menui' onClick={togglemenu} />
    </nav>
        <div className={`model ${loginshow ? 'showW1':''}`}>
            <div className={`login ${loginshow ? 'showlogin':''}`}>
                <h3>Login Here!</h3>
                <span onClick={()=>setLoginshow(false)}>&times;</span>
                <input type="email" placeholder='Enter Your Email' required className='in1'/><br></br>
                <input type="password" placeholder='Enter Your Password' required className='in2'/><br></br>
                <p><Link>Forgot Password </Link></p><br></br>
                <button className='button0'>LOGIN</button>
            </div>
        </div>
        <div className={`model2 ${showdata ? 'show' : ''}`}>
            <div className={`register ${showdata ? 'showregister' :''}`}>
                <span onClick={()=>SetShowdata(false)}>&times;</span>
                <h3>Sign Up Here!</h3>
                <input type="text" placeholder='First Name'required className='inp4' /><br></br>
                <input type="text" placeholder='Last Name'required className='inp5'/><br></br>
                <input type="email"placeholder='Enter Your Email' required className='inp6'/><br></br>
                <input type="password"placeholder='Enter your Password' required className='inp7'/><br></br>
                <button className='button01'>REGISTER NOW</button>


            </div>

        </div>
    </>
  )
}
