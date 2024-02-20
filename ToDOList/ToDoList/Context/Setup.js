import { useContext,createContext } from "react";

  export const Todo=createContext({

  Items:[{

    id:1,
    msg:"hello",
    completed:true
  }],

  AddTodo:(item)=>{},
  UpdateTodo:(item,id)=>{},
  DeleteTodp:(id)=>{},
  ToggleTodo:(id)=>{}
  

})

export const TodoProvider=Todo.Provider

export   const  useTodo=()=>{


    return useContext(Todo)

}