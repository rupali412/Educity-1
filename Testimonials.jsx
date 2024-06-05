import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';


export default function Testimonials() {
    const slider=useRef();
    let tx=0;
    let slideforward=()=>{
            if(tx>-50){
                tx-=25;
            }
            slider.current.style.transform =`translatex(${tx}%)`;
    }
    let slidebackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform =`translatex(${tx}%)`
    }
  return (
    <div className='testi' id='testimonials'>
        <img src={next_icon} alt="" className='nextbtn' onClick={slideforward}/>
        <img src={back_icon} alt="" className='backbtn' onClick={slidebackward}/>
        <div className="silder">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Bella Haddid</h3>
                            </div>
                        </div>
                        <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The staff is very supportive and even a campus is to good. We can get every type of knoweldge. <b>Its a great University</b></p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Willam jackson</h3>
                            </div>
                        </div>
                        <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The staff is very supportive and even a campus is to good. We can get every type of knoweldge. <b>Its a great University</b></p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Kendell Jenner</h3>
                            </div>
                        </div>
                        <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The staff is very supportive and even a campus is to good. We can get every type of knoweldge. <b>Its a great University</b></p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Harry Style</h3>
                            </div>
                        </div>
                        <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The staff is very supportive and even a campus is to good. We can get every type of knoweldge. <b>Its a great University</b></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
