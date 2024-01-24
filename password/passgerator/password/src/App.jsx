import { useState } from 'react'



function App() {
  const [length, setlength] = useState(6)
  const[ychar,setychar]=useState(false)
const [ynum,setnum]=useState(false)

  return (
    <>
      <div>

        <form>
          <input 
            type='text'
            readOnly
            placeholder='password'
            

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
       
       
      </div>
    </>
  )
}

export default App
