import "../globals.css";
import React from 'react'

const layout = ({children}) => {
  return (
    <html>
      <body>
    <div className='flex min-h-screen'>
        <div className='w-1/2 bg-purple-400'></div>
        <div className='w-1/2'>{children}</div>
    </div>

      </body>
    </html>
  )
}

export default layout