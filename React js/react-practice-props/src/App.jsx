import { useState } from 'react'
import './App.css'
import Input from './components/input'

function App() {
  // const [count, setCount] = useState(0)
 
  function handleSubmit(data) {
    console.log(data);
    
  }
  return (
    <>
      <Input  onSubmit={handleSubmit}/>
    </>
  )
}

export default App
