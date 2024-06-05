import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main/Main'
import Program from './components/programs/Program'
import Titel from './components/title/Titel'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonial/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Main/>
      <div className='container'>
              <Titel sub='OUR PROGRAM' ti='What We Offer'/>
              <Program/>
              <Titel sub='ABOUT US' ti='About Our University'/>
              <About/>
              <Titel sub='GALLERY' ti='Campus Photos'/>
              <Campus/>
              <Titel sub='TESTIMONIALS' ti='What Student Says'/>
              <Testimonials/>
              <Titel sub='CONTACT US' ti='Get In Touch'/>
              <Contact/>
              <Footer/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App