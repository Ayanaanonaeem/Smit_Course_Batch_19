import React from 'react'
import useData from '../Hooks/useData'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ProductItem from '../components/ProductItem'

const Products = () => {
  const data = useData()


  


  return (
    <div className='bg-[#FFFBE9] min-h-screen px-6 py-16'>

      <div className='max-w-7xl mx-auto'>

        <div className='mb-12'>
          <p className='text-[#AD8B73] uppercase tracking-[3px] text-sm mb-3'>
            Explore Our Collection
          </p>

          <h1 className='text-4xl md:text-5xl text-[#3D3028] font-light'>
            Our Products
          </h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          
          {
            data==""? <h1>Loading.....</h1>:
            data && data.map((val) => (
              <ProductItem key={val.id} val={val}/>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Products