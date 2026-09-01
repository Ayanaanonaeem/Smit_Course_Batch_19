import React from 'react'
import { useState } from 'react'

const ObjectPractice = () => {
    const [obj, setObj] = useState({name:"Ayan",age:20})
    const [arr, setarr] = useState([10,20,30,40])
    const handleArr=()=>{
        const newArr=[...arr]
        newArr.push(50)
        setarr(newArr)
    }
    const handleObj=()=>{
    //    const newObj={...obj,age:30}
    //    newObj.name="jwaid"
    //    setObj(newObj)

    setObj(prev=>({...prev,name:"faraz"}))
    }
  return (
    <div>
        <p>{obj.name}{obj.age}</p>
        <p>{arr}</p>
        <button onClick={handleObj}>Click to change obj</button>
        <button onClick={handleArr}>Click to change Arr</button>
    </div>
  )
}

export default ObjectPractice