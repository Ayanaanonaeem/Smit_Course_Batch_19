import { useState } from 'react'
import Card from './components/Card'

import './App.css'



function App() {
  const [count, setCount] = useState(0)
  let myobj={
   name:"Ayan",
   age:12
  }
  

  return (
    <>
    <div className='box'>
    <Card obj="learn more" myobj={myobj}/>
    <Card  obj="click me"myobj={myobj}/>
    </div>
    </>
  )
}

export default App
