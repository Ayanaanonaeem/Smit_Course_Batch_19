import React from 'react'

const SingleQuote = async ({params}) => {

    const {id}= await params
    let singlequote=await fetch(`https://dummyjson.com/quotes/${id}`,{cache:"force-cache"})
     singlequote=await singlequote.json()
  return (
   <>
        <h1 className='text-center text-2xl font-bold m-4'>Single Quotes</h1>
     <div className='  flex flex-col gap-3 p-4 mx-6'>
        <h1 className='font-mono text-4xl '>{singlequote.quote}</h1>
        <h1 className='text-2xl underline'>{singlequote.author}</h1>
     </div>
   </>  
  )
}

export default SingleQuote