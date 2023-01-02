import React from 'react'
import Left from './Left'
import Right from './Right'
import '../../Style/css/header.css'

const Header = (props) => {
  return (
    <div className='header'>
        <Left darkTheme={props.darkTheme}/>
        <Right darkTheme={props.darkTheme}/>
    </div>
  )
}

export default Header