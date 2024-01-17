import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'
let obj1={

  age:"24",
  class:"4"
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="umang " value= {obj1} />
     <h1 className='bg-green-500 text-blue-100 rounded-xl text-md p-7'>Hello tailwind with reacts</h1>
    </>
  )
}

export default App
