import { useState } from 'react'
import React from 'react'
import './App.css'
import Hello from './Hello'

let a="Learning React with Umang Tibrewal"
let Customelemnt=React.createElement(

  'p',
  {style:{color:"Purple"}},
  a
)

function App() {
  const [count, setCount] = useState(25)

  function handleup(){

    setCount((prevcount)=>prevcount+1);
    setCount((prevcount)=>prevcount+1);
  }

  function handledown(){

    setCount(0)
  }

  return (
    
   <>
   <Hello  />
    { Customelemnt}
    <h1>{count}</h1>
  
    <button onMouseLeave={handleup}>COUNT UP</button>
    <button onMouseMove={handledown}>COUNT DOWN </button>
   </>
   
    
  )
}

export default App
