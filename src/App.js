import Header from "./Components/Header/Header"
import Navbar from './Components/Navbar/Navbar'
import Darkmode from "./Components/Darkmode/Darkmode";
import './Style/css/header.css'
import './Style/css/main.css'
import { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  // function to hadle darkmode from child component
  const handleChange=(value)=>{
    setDarkTheme(value)
  }

  return (
    <div className={`app${darkTheme? "-dark" : ""}`}>
      <Darkmode darkTheme={darkTheme} onChange={handleChange}/>
      <div className="back_line"></div>
      <Navbar darkTheme={darkTheme} />
      <Header darkTheme={darkTheme} />
    </div>
  );
}

export default App;
