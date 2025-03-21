import React from 'react'
import './Header.css'
import { LuSunMoon } from "react-icons/lu";

const Header = ({handleModeSwitch, modeSwitch}) => {

    
    return (
        <div className={`header ${modeSwitch ? 'headerwrapDark' : ''}`}>
            <div className='headerwrap'>
               <h2>Weather Dashboard</h2>
            </div>
            <div className='iconwrap' onClick={handleModeSwitch}>
            <LuSunMoon  size={40}/>
            </div>
        </div>
    )
}

export default Header