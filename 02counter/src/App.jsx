import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  
function rval()
{
  if(counter>0)
  setCounter(counter-1)
}
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={()=>{setCounter(counter+1)}}
     >Add value {counter}</button>
     <br/>
     <button
     onClick={rval}
     >Remove value {counter}</button>
    </>
  )
}

export default App
