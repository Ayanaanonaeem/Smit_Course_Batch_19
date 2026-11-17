import React from 'react'
import Link from 'next/link'    

const notFound = () => {
  return (
    <>
    <div>Not Found</div>
    <Link href={"/quotes"}> 
    Show All Quotes
    </Link>
    
    
    </>
  )
}

export default notFound