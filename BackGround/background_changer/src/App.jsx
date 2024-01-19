import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("lavender")
  let a= document.getElementsByTagName("body")[0];
  a.style.backgroundColor=color;
function colorfun(colorvalue){

  return (function colorwill(){

     setColor(colorvalue);
  }
  )
}
  return (
    
<>
   <button onClick={setColor("olive")}>Olive</button>
   </>
   
    
  )
}


export default App;
