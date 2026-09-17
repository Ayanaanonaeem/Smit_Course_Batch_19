import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
  
    
    const {userid}=useParams()
    
    
    
  return (
    <div className='bg-gray-400 text-center'>User:{userid}</div>
  )
}

export default User 