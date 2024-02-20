import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState("red")

let  colorValue=useCallback((e)=>{
  

  document.body.style.backgroundColor=e.target.value


 },[])
 

 
  return (
    <>
    <h1>{count}</h1>
    <input  onChange={colorValue} type='color' placeholder='red' />
   


    </>
  )
}

export default App
