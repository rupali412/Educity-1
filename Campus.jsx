import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

export default function Campus() {
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="g1" />
            <img src={gallery_2} alt="g2" />
            <img src={gallery_3} alt="g3" />
            <img src={gallery_4} alt="g4" />
        </div>
        <button className='btn darkbtn'>See More <img src={white_arrow} alt="" /></button>

    </div>
  )
}
