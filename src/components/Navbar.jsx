import React from 'react'
import "./Navbar.css"
import { useState, useEffect, useRef } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineCollections, MdContacts } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [ham, Setham] = useState('fas fa-bars');

  const [style, Setstyle] = useState({

    Transition: "all 0.7",
    right: "-344px"

  });

  let menuRef = useRef();

  const manage = (e) => {

    if (menuRef && menuRef.current && menuRef.current.contains(e.target)) {

      Setham('fas fa-times')
      Setstyle({ right: "0px" })


    }
    else {
      Setstyle({ right: "-344px" })
      Setham('fas fa-bars')

    }

  }

  useEffect(() => {
    document.addEventListener('click', manage)
    return () => {
      document.removeEventListener('click', manage)
    }
  }, [])

  const handleClick = (e) => {
    e.stopPropagation();

    if (ham === 'fas fa-bars') {
      Setham('fas fa-times')
      Setstyle({ right: "0px" })

    }
    else {
      Setstyle({ right: "-344px" })
      Setham('fas fa-bars')

    }
  }


  return (
    <>

      <div>
        <nav>

          <div className="logoContainer">
            <h2 className='logo'><span>D</span>emCollection</h2>
          </div>

          <div id='mobile' ref={menuRef}>
            <i id='bar' onClick={handleClick} className={ham} ></i>
          </div>

          <div className='linkContainer' style={style}>

            <ul>
              <li><Link to="/"><FaHome />&#160;Home</Link></li>
              <li><Link to="/Collection"><MdOutlineCollections />&#160;Collections</Link></li>
              <li><Link to="/About"><FcAbout />&#160;About Us</Link></li>
              <li><Link to="/Contact"><MdContacts />&#160;Contact Us</Link></li>
            </ul>

          </div>

        </nav>

      </div>
    </>
  )
}
