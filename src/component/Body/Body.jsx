import React from 'react'
import "./Body.css"

const Body = ({ handleModeSwitch, modeSwitch }) => {
    return (
        <div className={`wrap ${modeSwitch ? 'wrapdark' : ''}`}>
            <div className={`body ${modeSwitch ? 'bodydark' : ''}`}>
             <p> please enter a city</p>
             <input type="text"
             placeholder='E.g Newyork, London' />
             <button  handleModeSwitch={handleModeSwitch}>Search</button>
             <>or</>
             <button>use Current Location</button>
            </div>
            <div className={`moon ${modeSwitch ? 'moondark' : ''}`}>
            <div className={`first ${modeSwitch ? 'firstdark' : ''}`}>
            <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                  <span>Temperature -  c</span>
                  <span>wind</span>
                  <span>condition</span>
                  <span>city</span>

                </div>

                <p>Five Days Forcast</p>

                <div className='second'>
                 <div className={`two ${modeSwitch ? 'twodark' : ''}`}>
                 <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                 <p>monday</p>
                 <span>Temperature -  c</span>
                  <span>wind</span>
                  <span>condition</span>
                  <span>city</span>
                 </div>

                 <div className={`three ${modeSwitch ? 'threedark' : ''}`}>
                 <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                <p>Tuesday</p>
                 <span>Temperature -  c</span>
                 <span>wind</span>
                  <span>condition</span>
                  <span>city</span>
                 </div>

                 <div className={`four ${modeSwitch ? 'fourdark' : ''}`}>
                 <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                 <p>Wednesday</p>
                 <span>Temperature -  c</span>
                 <span>wind</span>
                  <span>condition</span>
                  <span>city</span>
                 </div>

                 <div className={`five ${modeSwitch ? 'fivedark' : ''}`}>
                 <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                 <p>Thursday</p>
                 <span>Temperature -  c</span>
                 <span>wind</span>
                  <span>condition</span>
                  <span>city</span>
                 </div>
                 
                 </div>
                
            </div>
           
        </div>
    )
}

export default Body