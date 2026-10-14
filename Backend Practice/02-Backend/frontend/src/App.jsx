import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import axios from "axios";
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes,setJokes]=useState([])
  useEffect(() => {
   axios.get('/api/jokes')
   .then((response)=>{
     setJokes(response.data)
     console.log(response.data);
     
     
   }).catch((error)=>{
      console.log(error);
      
   })
  }, [])
  

  return (
    <>
    <div>
      <p>{jokes.length}</p>
      {
        jokes.map((val,idx)=>(
          <div key={idx}>
           <p>{val.setup}</p>
           <p>{val.punchline}</p>
          </div>
        ))
      }
    </div>
    
    </>
  )
}

export default App
