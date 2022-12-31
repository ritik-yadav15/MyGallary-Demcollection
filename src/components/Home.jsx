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
          <div className="secimg"><img src={bg3} alt="" loading='lazy' decoding='async'/></div>
          <div className="secimg"><img src={ig9} alt="" loading='lazy' decoding='async'/></div>
          <div className="secimg"><img src={ig12} alt="" loading='lazy' decoding='async'/></div>
          <div className="secimg"><img src={bg2} alt="" loading='lazy' decoding='async'/></div>
        </div>
        <div className='sec1'>
          <div className="secimg"><img src={ig5} alt="" loading='lazy' decoding='async'/></div>
          <div className="secimg"><img src={ig6} alt="" loading='lazy' decoding='async'/></div>
          <div className="secimg"><img src={bg5} alt="" loading='lazy' decoding='async'/></div>
          <div className="secimg"><img src={bg7} alt="" loading='lazy' decoding='async'/></div>
        </div>
        <div className='sec1'>
          <div className="secimg"><img src={bg1} alt="" loading='lazy' decoding='async' /></div>
          <div className="secimg"><img src={ig11} alt="" loading='lazy' decoding='async'/></div>
          <div className="secimg"><img src={ig1} alt="" loading='lazy' decoding='async'/></div>
          <div className="secimg"><img src={ig2} alt="" loading='lazy' decoding='async'/></div>
        </div>
      </section>












    </>
  )
}
