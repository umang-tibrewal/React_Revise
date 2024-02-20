import { useState } from 'react'

import './App.css'
import Input from './assets/component/input'

function App() {
const [val,setval]=useState({a:"he",b:24})

  return (
    <>
    <h1>{val.a}</h1>
    <Input  onsub={(values)=>{setval({a:values.a})}}   />
    </>
  )
}

export default App
