import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logox.png'
import '../css/userNavbar.css'
const UserNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);   
     return (
        <>
      <nav className="navbar">
        {/* <div className="navbar-logo">ResumeBuilder</div> */}
        <img className='navbar-logo' src={logo} alt="" style={{width:"120px"}}/>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Navbar Menu */}
        <ul className={`navbar-menu ${isOpen ? "menu-open" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link" onClick={() => setIsOpen(false)}>Signup</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin" className="navbar-link" onClick={() => setIsOpen(false)}>Admin</Link>
          </li>
        </ul>
      </nav>

      {/* Page Content Wrapper (Fixes Hidden Content Issue) */}
      <div className={`content-wrapper ${isOpen ? "content-shift" : ""}`} onClick={() => setIsOpen(false)}></div>
    </>
    )
}

export default UserNavbar
