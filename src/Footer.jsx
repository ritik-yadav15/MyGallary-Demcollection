import "./App.css";
import React from 'react'
import {BsFacebook,BsTwitter,BsLinkedin,BsInstagram} from 'react-icons/bs'




export default function Footer() {
  
    const style ={ color:'white'}
    

    function handleClick(e) {
      e.preventDefault()
      
    }
  return (
   <>
    <footer>
  
    <ul className="social-icon">
        <li><a href="!#" onClick={handleClick} ><BsFacebook className="i" style={style}/></a></li>
        <li><a href="!#" onClick={handleClick} ><BsTwitter className="i" style={style}/></a></li>
        <li><a href="!#" onClick={handleClick} ><BsLinkedin className="i" style={style}/></a></li>
        <li><a href="!#" onClick={handleClick} ><BsInstagram className="i" style={style}/></a></li>

    </ul>
    <ul className='menu' onClick={handleClick}>
    <li><a href="# ">Home</a></li>
    <li><a href="# ">About</a></li>
    <li><a href="# ">Services</a></li>
    <li><a href="# ">Team</a></li>
    <li><a href="# ">Contact</a></li>
    </ul>
    <p>Copyright Ⓒ 2022 Demcoder | All Rights Reserved</p>
    </footer>
   </>
  )
}
