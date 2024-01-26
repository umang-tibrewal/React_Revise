import { useState } from 'react'
import './App.css'


import Currencyinfo from './assets/Hooks/Currencyinfo'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0.00)
 
  useEffect(()=>{  let money= Currencyinfo("usd")
  let c="inr"
  let mval=money[c]
  setCount(mval)},[])



 
 

  return (
    <>
      <h1>{count}</h1>

  
    </>
  )
}

export default App
