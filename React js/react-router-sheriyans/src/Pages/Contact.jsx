import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate=useNavigate()
  return (
    <div>Contact
        <button onClick={()=>{
            navigate("userDetail")
        }}>go to the useretail</button>
        <Outlet/>
    </div>
    
  )
}

export default Contact