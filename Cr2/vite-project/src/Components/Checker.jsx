import React from 'react'
import useTheme from '../Context/Setup'

function Checker() {

    const {color,light,dark}=useTheme()

function HandleChange(e){
let status=e.target.checked
if(status){

light()
}

else{

    dark()
}
    
}
  return (
    <>
<input onChange={HandleChange} type="checkbox" checked={color==="white"} />

    </>
  )
}

export default Checker
