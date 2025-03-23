import React, { useState } from 'react'
import "./Body.css"
import axios from 'axios'


function Body ({modeSwitch}){

    const [loading, setLoading] = useState(false)

    const [weatherData, setWeatherData] = useState({
        city: "",
        temperature: "",
        condition: "",
        wind_speed: "",
        humidity: "",
      });
      const [city, setCity] = useState("Lagos");
      const url = "https://weather-1-n1wt.onrender.com/weather"
    
      const fetchWeatherData = async () => {
        try{
        setLoading(true)
        const response = await axios.get(`${url}?city=${city}`);
        const data = response.data;
        setLoading(false)
    
        if (!data.data || Object.keys(data.data).length === 0) {
          setWeatherData({ city: "", temperature: "", condition: "", wind_speed: "", humidity: "" });
        }else {

          setWeatherData({
            city: data.data.city,
            temperature: data.data.temperature,
            condition: data.data.condition,
            wind_speed: data.data.wind_speed,
            humidity: data.data.humidity,
          });
          setLoading(false)
        }
        setLoading(false)
    }


catch (err) {   

    setLoading(false)
    console.error("Error fetching weather data:", err);
  }


  
}
return(
    <div className={`wrap ${modeSwitch ? 'wrapdark' : ''}`}>
    <div className={`body ${modeSwitch ? 'bodydark' : ''}`}>
     <p> please enter a city</p>
     <input type="text"
     placeholder='E.g Newyork, London' 
     value={city}
     onChange={(e) => setCity(e.target.value)}
     />
     {
        loading ? (<button disabled>loading</button>): (<button onClick={fetchWeatherData}>Search</button>)
     }
     {/* <button onClick={fetchWeatherData}>Search</button> */}
     <>or</>
     <button >use Current Location</button>
    </div>
    <div className={`moon ${modeSwitch ? 'moondark' : ''}`}>
    <div className={`first ${modeSwitch ? 'firstdark' : ''}`}>
    <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
          <span>Temperature: {weatherData.temperature} </span>
          <span>wind: {weatherData.wind_speed}</span>
          <span>condition: {weatherData.condition}</span> 
          <span>city: {weatherData.city}</span>
        </div>
        
        <p>Five Days Forcast</p>

        <div className='second'>
         <div className={`two ${modeSwitch ? 'twodark' : ''}`}>
         <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
         <p>monday</p>
         <span>Temperature: {weatherData.temperature} </span>
          <span>wind: {weatherData.wind_speed}</span>
          <span>condition: {weatherData.condition}</span> 
          <span>city: {weatherData.city}</span>
         </div>

         <div className={`three ${modeSwitch ? 'threedark' : ''}`}>
         <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
        <p>Tuesday</p>
        <span>Temperature: {weatherData.temperature} </span>
          <span>wind: {weatherData.wind_speed}</span>
          <span>condition: {weatherData.condition}</span> 
          <span>city: {weatherData.city}</span>
         </div>

         <div className={`four ${modeSwitch ? 'fourdark' : ''}`}>
         <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
         <p>Wednesday</p>
         <span>Temperature: {weatherData.temperature} </span>
          <span>wind: {weatherData.wind_speed}</span>
          <span>condition: {weatherData.condition}</span> 
          <span>city: {weatherData.city}</span>
         </div>

         <div className={`five ${modeSwitch ? 'fivedark' : ''}`}>
         <img src="/Cloud With Raining Clip Art Transparent Free Download, Raining, Cloud Rain, Cloud With Raining PNG Transparent Image and Clipart for Free Download.jpeg" alt="" />
         <p>Thursday</p>
         <span>Temperature: {weatherData.temperature} </span>
          <span>wind: {weatherData.wind_speed}</span>
          <span>condition: {weatherData.condition}</span> 
          <span>city: {weatherData.city}</span>
         </div>
         
         </div>
        
    </div>
   
</div>
)
} 

export default Body;