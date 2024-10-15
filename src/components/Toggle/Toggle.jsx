import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import './Toggle.css'

function Toggle() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const hanldeClick = ()=>{
      theme.dispatch({type: "toggle"})
  }
  return (
    <div className="toggle">
      <Moon />
      <Sun />
      <div className="t-button"
      onClick={hanldeClick}
       style={darkMode ? { left: "2px" } : {right: '2px'}}>

      </div>
    </div>
  )
}

export default Toggle
