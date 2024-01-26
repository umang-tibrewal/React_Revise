import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setlength] = useState(6)
  const[ychar,setychar]=useState(false)
const [ynum,setnum]=useState(false)

const[pass,setpass]=useState("password")

let passref=useRef(null)


let passwordGenerator=useCallback(()=>{

  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let pass=""
  if(ychar){
    str+="~!@#$%^&*()-_+=[]{}|;:',.<>?/"
  }
  if(ynum){

    str+="0123456789"
  }

  for(let i=0;i<length;i++){
   let value=Math.floor((Math.random()*str.length))
    pass+=str[value];
  }
  setpass(pass)


},[length,ychar,ynum])

let copytoclip=useCallback(()=>{

  passref.current?.select()
  passref.current?.setSelectionRange(0,2)

  window.navigator.clipboard.writeText(pass)
},[pass])


useEffect(()=>{

  passwordGenerator()
},[length,ychar,ynum])


  return (
    <>
      <div>

        <form>
          <input 
            type='text'
            value={pass}
            readOnly
            placeholder='password'
            ref={passref}

            

          />
{/* -------------------------for range -------------------------------- */}
          <input 
            type='range'
            min="5"
            max="100"
            value={length}
         onChange={(e)=>{setlength(e.target.value)}} />
         <label>length:{length}</label>

{/* 
 ----------------------------------------xx-------------------------- */}
 {/* --------------------------------char checkbox---------------- */}
<input 

  type='checkbox'

  onChange={()=>{setychar((prev)=> !prev)}}




/>
<lable>Character</lable>

{/* --------------------------xx------------------------------------- */}


<input 

  type='checkbox'

  onChange={()=>{setnum((prev)=> !prev)}}




/>
<lable>Number</lable>
        </form>

        <button onClick={copytoclip}>Copy </button>
       
       
      </div>
    </>
  )
}

export default App
