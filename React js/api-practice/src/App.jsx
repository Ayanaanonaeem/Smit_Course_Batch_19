import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data,setData]=useState([])
  const showData=async ()=>{
      // const response=await fetch("https://jsonplaceholder.typicode.com/users")
      // const result=await response.json()
      // setData(result)
      
      const response=await axios("https://jsonplaceholder.typicode.com/users")
      setData(response.data)
       
     
      
  }

  return (
    <>
    <h1>hello user</h1>
      <button onClick={showData}>Show data</button>
      {
        data.map((val)=>(
           <div key={val.id}>
            <div>
            <p>{val.id}) name: {val.name} email:{val.email}</p>
           

            </div>
           </div>
        ))
      }
    </>
  )
}

export default App
