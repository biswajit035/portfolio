import React from 'react'
import '../../Style/css/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='navbar-link'>About</span>
        <span className='navbar-link'>Services</span>
        <span className='navbar-link'>Work</span>
        <div className="navbar-btn">Download CV</div>
    </div>
  )
}

export default Navbar