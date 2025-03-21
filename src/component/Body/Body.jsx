import React from 'react'
import "./Body.css"

 const Body = () => {
    return (
        <div className='wrap'>
            <div className='body'>
             <p> please enter a city</p>
             <input type="text"
             placeholder='E.g Newyork, London' />
             <button>Search</button>
             <>or</>
             <button>use Current Location</button>
            </div>
            <div className='moon'>
                <div className='first'>
                    <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                  <span>Temperature -  c</span>
                  <span>wind</span>
                  <span>condition</span>
                  <span>city</span>

                </div>

                <p>Five Days Forcast</p>

                <div className='second'>
                 <div className='two'>
                 <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                 <p>monday</p>
                 <span>Temperature -  c</span>
                  <span>wind</span>
                  <span>condition</span>
                  <span>city</span>
                 </div>

                 <div className='three'>
                 <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                <p>Tuesday</p>
                 <span>Temperature -  c</span>
                 <span>wind</span>
                  <span>condition</span>
                  <span>city</span>
                 </div>

                 <div className='four'>
                 <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
                 <p>Wednesday</p>
                 <span>Temperature -  c</span>
                 <span>wind</span>
                  <span>condition</span>
                  <span>city</span>
                 </div>

                 <div className='five'>
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