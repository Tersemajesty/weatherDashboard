import {  useState } from 'react'
import './App.css'
import Body from './component/Body/Body'
import Header from './component/Header/Header'  


function App() {
  const [modeSwitch, setModeSwitch] = useState(false)

   
  const handleModeSwitch = () => {
    setModeSwitch(!modeSwitch)
}

// const [loadState, setLoadState] = useState(true)
 
// useEffect(()=>{
//   setTimeout(()=>{
//     setLoadState(false)
//   }, 500)
// })
return (
    <>
    
      <div>
      <Header handleModeSwitch = {handleModeSwitch} modeSwitch = {modeSwitch}/>
      <Body handleModeSwitch = {handleModeSwitch} modeSwitch = {modeSwitch} />
        
      </div>
    </>
  )
}

export default App 
