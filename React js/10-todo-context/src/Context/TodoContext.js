import { useContext,createContext } from "react";

export const TodoContext=createContext({
  todos:{
    id:1,
    todo:"My Todo",
    completed:false,
  },
  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplete:(id)=>{}
})

export function useTodo() {
  return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider
