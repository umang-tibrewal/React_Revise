import React, { useState } from 'react'
import { useTodo } from '../Context/Setup'

function Form() {

    const {AddTodo}=useTodo()

    const[etodo,setetodo]=useState("")

    function Addtask(e){

        e.preventDefault();
        AddTodo({msg:etodo,completed:"false"})

        setetodo("")


    }
  return (
   <>

    <form  onSubmit={Addtask}> 


        <input onChange={(e)=>{setetodo(e.target.value)}} type="text"  placeholder='add task'/>

        <button type='submit' >ADD </button>
    </form>
   </>
  )
}

export default Form
