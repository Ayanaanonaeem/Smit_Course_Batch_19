import QuoteCard from '@/components/QuoteCard'
import Link from 'next/link'
import React from 'react'

const Quotes =async () => {
    let quotesData=await fetch('https://dummyjson.com/quotes',{cache:"force-cache"})
    quotesData= await quotesData.json()
   
    
    
    
  return (
    <>
    <h1 className='text-center text-3xl font-bold'>Quotes</h1>
    <div className='flex flex-col gap-4 mx-4'>
        {
           quotesData.quotes.map((data)=>(
            <Link key={data.id} href={`/quotes/${data.id}`}>
            <QuoteCard  author={data.author} quote={data.quote}/>
            
            </Link>
           ))
        }
    </div>
    </>
  )
}

export default Quotes