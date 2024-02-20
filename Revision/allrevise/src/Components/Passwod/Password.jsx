import React, { useCallback, useEffect, useRef, useState } from 'react'

function password() {
  const [length,setlength]=useState(8)
  const[ychar,setychar]=useState(true)
  const[ynum,setynum]=useState(true)
  const[pass,setpass]=useState("")
  let str
let copypass=useRef()
  let generatepass=useCallback(()=>{
    let result=""
 str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 if(ychar){

  str+="`~!@#$%^&*()-_=+[]{}|;:',.<>?`"
 }
 if(ynum){

  str+="0123456789"
 }

 for(let i=0;i<length;i++){
  
  let a= Math.floor(Math.random()*(str.length))
result+=str[a]
  
 }

 setpass(result)





  },[pass,ychar,ynum,length])

  useEffect(()=>{
generatepass()

  },[length,ychar,ynum])


 let copy= useCallback(()=>{
copypass.current?.select()
window.navigator.clipboard.writeText(pass)
  },[pass])

  return (
   <>
<label htmlFor='password'> Passwod</label>


    <input type='text' id='password'  placeholder='Password'  readOnly value={pass}   ref={copypass}/>
    <input onChange={(e)=>{setlength(e.target.value)}} type='range' defaultValue={length}  min={8} max={20}/>
    <label>{length}</label>
    <label htmlFor='char' >Character</label>
    <input id="char" type='checkbox' defaultChecked   onChange={()=>setychar((prev)=>!prev)}/>
 
    <label htmlFor='num' >Number</label>
    <input id="num" type='checkbox' defaultChecked    onChange={()=>setynum((prev)=>!prev)}/>

<button onClick={copy}>copy</button>




   </>
  )
}

export default password
