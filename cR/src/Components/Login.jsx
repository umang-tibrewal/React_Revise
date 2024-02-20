import React ,{useContext}from 'react'
import UserContext from '../Context/UserContext'
import { useState } from 'react'


export default function Login() {

    const {setval}=useContext(UserContext)

    const[name,setname]=useState("")
    const [food,setfood]=useState("")

    let HandleName=(e)=>{

        setname(e.target.value);


    }


    let HandleFood=(e)=>{

setfood(e.target.value)
    }

    let HandleSubmit=(e)=>{

        e.preventDefault()
        setval({name,food})


    }
  return (
   <>
<form onSubmit={HandleSubmit}>
    <input  onChange={HandleName} type='text' placeholder='write name' />

    <input onChange={HandleFood} type ="text" placeholder="fav food "/>

    <button>Submit</button>


    </form>
   </>
  )
}
