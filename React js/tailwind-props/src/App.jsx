import { useState } from 'react'
import Card from './components/Card'

import './App.css'



function App() {
  const [count, setCount] = useState(0)
  let obj={
   name:"Ayan",
   age:12
  }
  

  return (
    <>
    <div className='box'>
    <Card obj={obj} btnClick="learn more"/>
    <Card obj={obj} btnClick="click me"/>
    </div>
    </>
  )
}

export default App
