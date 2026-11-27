import React from 'react'

const layoutPage = ({children,description}) => {
  return (
    <div className='w-full h-[400px] flex border'>
        <div className='w-[50%]'>{children}</div>
        <div className='w-[50%]  mt-15'>{description}</div>
        
    </div>
  )
}

export default layoutPage