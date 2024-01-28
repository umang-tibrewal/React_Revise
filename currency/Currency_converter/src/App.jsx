import { useState } from 'react'
import './App.css'
import Currencyinfo from './assets/Hooks/Currencyinfo'
import { useEffect } from 'react'
import Index from './assets/Component/Input'

let a;
function App() {
  const [from, setfrom] = useState("usd")
  const[amount,setamount]=useState(500)
  const [To,setTO]=useState("Inr")
  const[calamount,setcalamount]=useState(0)


let rate=Currencyinfo(from)
  let option =Object.keys(Currencyinfo(from))

  let swap=()=>{

    setfrom(To)
    setTO(from)
     a=amount
    setamount(calamount)
    setcalamount(a)
  }
  
 

  let calculate= ()=>{

    let ramount=amount*rate[To];

    setcalamount(ramount)
  }
 
  

 



 
 

  return (
    <>
   <form  onSubmit={(e)=>{e.preventDefault()

   calculate()
   
   
   }}>
   <Index  lable={from} amount={amount}  countrylist={option} onchangecountrylist={(e)=>{setfrom(e)}}   onchangeamount={(e)=>{setamount(e)}}/>
    <button onClick={swap}> swap</button>
    <Index  lable={To} amount={calamount}  countrylist={option} onchangecountrylist={(e)=>{setTO(e)}}   />

    <button>Submit</button>
   
   </form>
    </>
  )
}

export default App
