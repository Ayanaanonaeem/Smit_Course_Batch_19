import React from 'react'
import { useState } from 'react'

const useData = () => {
  const [data,setData]=useState("")
 
    fetch('https://dummyjson.com/products?limit=10&skip=0')
.then(res => res.json())
.then(res=> setData(res.products)
)

return data
  
}

export default useData