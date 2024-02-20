import React from 'react'
import { useState } from 'react'

function Input({onsub}) {

    const [val,setval]=useState({a:"hello",b:24})
  return (
    <div>


      <form onSubmit={(e)=>{
        e.preventDefault()
      
      onsub && onsub( val)}}>

      <input  type='text '  onChange={(e)=>{setval({a:e.target.value})}} />

      <button type='submit'>Submit </button>

      </form>
    </div>
  )
}

export default Input
