import React from 'react'

const Navbar = (props) => {
  return (
    <div className='navbar'>
        <span className='navbar-link'>About</span>
        <span className='navbar-link'>Services</span>
        <span className='navbar-link'>Work</span>
        <div className={`navbar-btn${props.darkTheme ? "-dark" : ""}`}>Download CV</div>
    </div>
  )
}

export default Navbar