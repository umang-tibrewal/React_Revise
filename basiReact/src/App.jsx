import { useState } from 'react'
import React from 'react'
import './App.css'
import Hello from './Hello'

let a="click with"
let Customelemnt=React.createElement(

  'p',
  {style:{color:"red"}},
  a
)

function App() {
  const [count, setCount] = useState({id:0,fno:0})

  function handleup(){

    setCount({id:count.id+1000});
  }

  function handledown(){

    setCount({id:1000})
  }

  return (
    
   <>

    <h1>{count.id}</h1>
    <button onMouseLeave={handleup}>COUNT UP</button>
    <button onMouseMove={handledown}>COUNT DOWN </button>
   </>
   
    
  )
}

export default App