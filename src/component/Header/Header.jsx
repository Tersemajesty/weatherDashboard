import React from 'react'
import './Header.css'
import { LuSunMoon } from "react-icons/lu";
 const Header = () => {
    return (
        <div className='header'>
            <div className='headerwrap'>
               <h2>Weather Dashboard</h2>
            </div>
            <div className='iconwrap'>
            <LuSunMoon  size={40}/>
            </div>
        </div>
    )
}

export default Header