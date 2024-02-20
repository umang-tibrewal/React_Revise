import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Display() {


    const {val,say}=useContext(UserContext);
  return (
   <>

<h2>hello i am {val.name} and my fav food is {val.food}</h2>
{say()}

   </>
  )
}

export default Display
