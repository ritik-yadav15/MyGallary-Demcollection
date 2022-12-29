import React from 'react'
import "./Home.css"
import bg3 from './images/bg3.jpg'
import ig9 from './images/ig9.jpg'
import ig12 from './images/ig12.jpg'
import bg2 from './images/bg2.jpg'
import ig5 from './images/ig5.jpg'
import ig6 from './images/ig6.jpg'
import bg5 from './images/bg5.jpg'
import bg7 from './images/bg7.jpg'
import bg1 from './images/bg1.jpg'
import ig11 from './images/ig11.jpg'
import ig1 from './images/ig1.jpg'
import ig2 from './images/ig2.jpg'


export default function Home() {

  return (
    <>
      <header className='BackGround'>
        <div className="Hcontainer">
          <h1 className="title">
            <span className="title-word title-word-1">Wellcome</span>
            <span className="title-word title-word-2">&#160;to</span>
            <span className="title-word title-word-3">&#160;<br></br>Demcollection</span>
          </h1>
          <p>If you're looking for a user friendly and feature rich plugin to add responsive galleries and albums to your website
          </p>
        </div>

      </header>

      <section>
        <div className='sec1'>
          <div className="secimg"><img src={bg3}alt="" /></div>
          <div className="secimg"><img src={ig9} alt="" /></div>
          <div className="secimg"><img src={ig12} alt="" /></div>
          <div className="secimg"><img src={bg2} alt="" /></div>
        </div>
        <div className='sec1'>
          <div className="secimg"><img src={ig5}alt="" /></div>
          <div className="secimg"><img src={ig6}alt="" /></div>
          <div className="secimg"><img src={bg5} alt="" /></div>
          <div className="secimg"><img src={bg7} alt="" /></div>
        </div>
        <div className='sec1'>
          <div className="secimg"><img src={bg1} alt="" /></div>
          <div className="secimg"><img src={ig11}alt="" /></div>
          <div className="secimg"><img src={ig1}alt="" /></div>
          <div className="secimg"><img src={ig2} alt="" /></div>
        </div>
      </section>












    </>
  )
}
