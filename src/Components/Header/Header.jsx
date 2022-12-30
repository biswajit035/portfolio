import React from 'react'
import Left from './Left'
import Right from './Right'
import '../../Style/css/header.css'

const Header = () => {
  return (
    <div className='header'>
      {/* <div className="example"></div> */}
        <Left/>
        <Right/>
    </div>
  )
}

export default Header