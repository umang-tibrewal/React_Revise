import React ,{useState,useContext}from 'react'
import UserContext from '../Context/Usercontext'


export default function Login() {

  const{setuser}=useContext(UserContext)

  const [value,setvalue]=useState("")


  
  return (
   <>

    <input  onChange={(e)=>{   


   setuser(e.target.value)  
    
    }} type='text' placeholder='write your name '/>

   
   </>
  )
}
