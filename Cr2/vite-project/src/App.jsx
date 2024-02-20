import { useEffect, useState } from 'react'

import './App.css'

import { ThemeProvider } from './Context/Setup'
import Checker from './Components/Checker'

function App() {
 
const [color,setcolor]=useState("white")

function dark (){

  setcolor("black")

}


function light(){

  setcolor("white")
}



useEffect(()=>{


  document.body.style.backgroundColor=color
},[color])
  return (

    <>
    <ThemeProvider  value={{color,dark,light}}>

    hello Button
<Checker />
    </ThemeProvider>

    </>
  )
}

export default App
