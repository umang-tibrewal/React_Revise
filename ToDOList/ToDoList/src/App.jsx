import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from '../Context/Index.js'
import Form from "../Components/Form.jsx"
import Viewvalue from '../Components/Viewvalue.jsx'


function App() {

let [Items,setitems]=useState([])


let AddTodo=(items)=>{

  setitems((prev)=>[...prev,{id:Date.now(),...items}])


}

let UpdateTodo=(id,items)=>{

  setitems((prev)=>prev.map((current)=>current.id===id?items:prev))
}

let DeleteTodp=(id)=>{

  setitems((prev)=>prev.filter((current)=>current.id!=id))
}


let ToggleTodo=(id)=>{setitems((prev)=>prev.map((current)=>current.id===id?{...prev,completed:!(prev.completed)}:current))}

// Getting Data from localstorage

useEffect((()=>{

const todos=JSON.parse(localStorage.getItem("todos"))

if( todos && todos.length>0 ){

  setitems(todos)
}

}),[])

// Setting data to local storage

useEffect((()=>{

localStorage.setItem("todos",JSON.stringify(Items))

}),[Items])

  return (
    <>

 <TodoProvider value={{Items,AddTodo,UpdateTodo,DeleteTodp,ToggleTodo}}>
    <h4>Hello todolist</h4>
    <Form />
    <Viewvalue />
    </TodoProvider>

  
    </>
  )
}

export default App
