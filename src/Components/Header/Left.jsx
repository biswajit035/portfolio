import React from 'react'

const Left = (props) => {
  return (
    <div className='header_left'>
      <span className='header_left-heading'>Experienced fullstack designer.</span>
      <p className='header_left-content'>Hi, my name is Biswajit, a freelance designer who likes his design like his coffee: well crafted. Through considered and customised design, I deliver exceptional experiences that help businesses grow and brands shine.</p>
      <div className={`header_left-btn${props.darkTheme ? "-dark" : ""}`}>See my work </div>
    </div>
  )
}

export default Left