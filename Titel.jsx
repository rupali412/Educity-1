import React from 'react'
import './Title.css';

export default function Titel({sub,ti}){
  return (
    <div className='title'>
        <p>{sub}</p>
        <h2>{ti}</h2>

    </div>
  )
}
