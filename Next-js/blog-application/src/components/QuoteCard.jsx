import React from 'react'

const QuoteCard = ({author,quote}) => {
  return (
    <>
    
    <div className='flex flex-col text-xl  p-4  border-purple-400 border'>
        
        <h1>{quote}</h1>
        <h1>Said by <span className='underline'>{author}</span></h1>
       
    </div>
    </>
  )
}

export default QuoteCard