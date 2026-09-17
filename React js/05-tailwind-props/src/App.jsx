import { useState } from 'react'
// import Card from './components/Card'

import './App.css'



function App() {
  // const [count, setCount] = useState(0)
  // let myobj={
  //  name:"Ayan",
  //  age:12
  // }

  let [color,setColor]=useState("olive")
  

  return (
    <>
    {/* <div className='box'>
    <Card obj="learn more" myobj={myobj}/>
    <Card  obj="click me"myobj={myobj}/>
    </div> */}
    <div style={{height:"632px", background:color }} className='flex justify-center items-end pb-10  '>
    <div style={{border:"1px solid black", borderRadius:"5px"  
    }} className='flex justify-center items-center gap-7 px-4 py-2 bg-white'>
    <button className='border-black rounded-xl px-3 py-1 bg-red-700 text-white ' onClick={
      ()=>{
        setColor("red")
      }
    }>Red</button>
    <button className='border-black rounded-xl px-3 py-1 bg-blue-700 text-white '
    onClick={()=>{
      setColor("blue")
    }}>Blue</button>
    <button className='border-black rounded-xl px-3 py-1 bg-green-700 text-white'
    onClick={()=>{
      setColor("green")
    }}>Green</button>
    </div>
       
    </div>
    </>
  )
}

export default App
