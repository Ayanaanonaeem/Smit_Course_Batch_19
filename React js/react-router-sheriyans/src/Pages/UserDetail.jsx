import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const params=useParams()
    console.log(params);
    
  return (
    <div>UserDetail{params.id}</div>
  )
}

export default UserDetail