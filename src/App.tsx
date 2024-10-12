import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/context'
import './index.css'
import { Home } from './views/Home'
import About from './views/About'
import Projects from './views/Projects'

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
      <Home/>
      <About/>
      <Projects/>
        
    </ThemeContext.Provider>
  )
}

export default App
