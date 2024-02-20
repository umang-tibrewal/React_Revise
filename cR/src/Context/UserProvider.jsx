import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


const UserProvider=({children})=>{

    const [val,setval]=useState("")
    let say =()=>{

        console.log("yes motherfucker")
    }

 return(

    <UserContext.Provider value={{val,setval,say}}>

    {children}
</UserContext.Provider>
 )
}




export default UserProvider;