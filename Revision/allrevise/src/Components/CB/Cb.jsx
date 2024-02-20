import React, { useState } from 'react'

function Cb() {


    const[color,setcolor]=useState("red")

    function  changecolorvalue(e){

        setcolor(e.target.value)
    }


    function changecolor(){

        document.body.style.backgroundColor=color
    }

  return (
  <>

<input onChange={changecolorvalue}type='color' placeholder='red'/>
   <button onClick={changecolor} >Click to change</button>
  </>
  )
}

export default Cb
