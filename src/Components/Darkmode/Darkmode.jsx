import React, { useEffect, useState } from 'react'
import './darkmode.css'

const Darkmode = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    // handle darkmode button toggle
    const handleChange=()=>{
        setDarkMode(!darkMode);
    }

    // update darkmode value to parrent component
    useEffect(() => {
        props.onChange(darkMode);
    }, [darkMode])
    
  return (
          <div className="container">
              <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
              <div className="switch-checkbox">
                  <label className="switch">
                      <input type="checkbox" onChange={handleChange} />
                      <span className="slider round"> </span>
                  </label>
              </div>
              <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
          </div>
  )
}

export default Darkmode