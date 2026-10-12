import React from 'react'
import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1,text:"todo"}]
}

export const todoSlice=createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((prev)=>prev.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,text}=action.payload
            state.todos=state.todos.map((prev)=>prev.id==id?{id:prev.id,text:text}:prev)

            
            
        }
    }

})

export const {addTodo,removeTodo,updateTodo}= todoSlice.actions
export default todoSlice.reducer