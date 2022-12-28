import React from 'react'
import "./Home.css"



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
          <div className="secimg"><img src="/images/bg3.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/ig9.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/ig12.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/bg2.jpg" alt="" /></div>
        </div>
        <div className='sec1'>
          <div className="secimg"><img src="/images/ig5.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/ig6.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/bg5.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/bg7.jpg" alt="" /></div>
        </div>
        <div className='sec1'>
          <div className="secimg"><img src="/images/bg1.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/ig11.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/ig1.jpg" alt="" /></div>
          <div className="secimg"><img src="/images/ig2.jpg" alt="" /></div>
        </div>
      </section>












    </>
  )
}
