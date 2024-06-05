import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import video from '../../assets/V.mp4';
export default function About() {
  let[play,setPlay]=useState(false);
  const [img,setImg]=useState(false);
  return (
    <div className='about'>
      <div className="ab-left">
        <img src={about_img} className={`abt-img ${img?'imgshow':''}`} onClick={()=>setImg(!img)}/>
        <img src={play_icon} className='play-icon'onClick={()=>setPlay(!play)}/>
      </div>
      <div onClick={()=>setPlay(!play)} className={`video ${play ? 'showvideo' : ''}`}>
      <video src={video} autoPlay muted controls className={`vi ${play?'vi2':''}`} ></video>
      </div>
      <div className="ab-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Embark on a transformative educational journey with our university's comperehensive education programs. our cutting-edge curriculum is designed to empower students with knowledge, skills and experiences needed to excel in the dynamin field of eduction.</p>
        <p>with a focus on innovation, hands-on learning and personalized mentorship, our programs prepare impact in classrooms, school and cummunities.</p>
        <p>Whether you aspire to become a teacher, administrator, conselor or educational leader our diverse rang of programs offers the perfect pathway to achieve your goals.</p>
      </div>
    </div>
  )
}
