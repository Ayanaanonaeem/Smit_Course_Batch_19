import './App.css'
import { useState,useEffect } from 'react'
const App = () => {
  const [todo, setTodo] = useState([{id:Date.now(),todo:"hello"}])
  const [input,setInput]=useState('')
  
  const handleAddTodo=()=>{

    if(input){
      
      setTodo((prev)=>[...prev,{id:Date.now(),todo:input}])
    }
   
    setInput("")
    
    
    
    
    
  }

  
  
  return (
    <>
    <div>

      <input value={input} onChange={(e)=>{
       setInput(e.target.value)
       }} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      {todo.map((val)=>(
        <>
        <p key={val.id}>{val.todo} <span>del</span><span>Edit</span></p>
       
        </>
       
      ))}
    </div>
    </>
  )
}

export default App