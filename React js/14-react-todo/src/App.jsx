import { useState } from 'react'
import './App.css'
import Input from './Components/input'

function App() {
  const [todos,setTodos]=useState([{
    todo:"First todo",
    id:Date.now(),
    completed:false,
  }])
  
  const [todo,setTodo]=useState("")


  return (
    <>
      <Input todos={todos} value={todo} onchange={(e)=>setTodo(e.target.value) }/>
    </>
  )
}

export default App
