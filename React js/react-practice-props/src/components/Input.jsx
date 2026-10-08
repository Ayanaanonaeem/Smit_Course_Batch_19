import React from 'react'

const Input = ({onSubmit}) => {
  return (
    <>
     <button onClick={()=>{
        onSubmit("Ayan")
     }}>Click me</button>
    </>
  )
}

export default Input