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
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
    
            <li>
              <Link to='/helpDesk'>HelpDesk</Link>
            </li>
            <li>
              <Link to='/journal'>Blogs</Link>
            </li>
            <li>
              <Link to='/web1'>Resource sharing</Link>
            </li>
          </ul>
          <div className='start'>
            <Link to="/courses" className="get-start">
            <div className='button'>GET STARTED</div>
            </Link>
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
