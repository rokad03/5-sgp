import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Call with Mentor</Link>
            </li>
            <li>
              <Link to='/journal'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              {/* <Link to='/donate'>Donate Us</Link> */}
              <a href="https://rzp.io/l/kmP8IcnCpm">Donate Us</a>
            </li>
            
          </ul>
          <div className='start'>
            <div className='button'><a href="https://docs.google.com/forms/d/e/1FAIpQLScJ9bfHaACYSzDLMqhBHP29nUsosGnkMPssNbic7bOppd-aoQ/viewform">GET CERTIFICATE</a></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
