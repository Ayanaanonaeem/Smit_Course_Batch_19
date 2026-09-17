import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  const data=useLoaderData()
  return (
    <div className='bg-gray-700 text-white text-center text-4xl py-4'>Github followers:{data.followers}
    
    </div>
  )
}

export default Github

export  const githubUserInfo= async ()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()

}