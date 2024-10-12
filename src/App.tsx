import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/context'
import './index.css'

function App() {
  const [theme, setTheme]= useState('theme-light');
  
  const handleThemeChange = () =>{
    if (theme === "theme-light"){
      setTheme("theme-dark");
    }else{
      setTheme("theme-light");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>

      <Navbar  handleThemeChange = {handleThemeChange} />
        
    </ThemeContext.Provider>
  )
}

export default App
