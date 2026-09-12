import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const {id}=useParams()
   console.log(id);
   
        
  return (
    <div>UserDetail</div>
  )
}

export default UserDetail