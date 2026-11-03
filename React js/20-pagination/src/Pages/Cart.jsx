import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Image } from 'antd'
import { Button } from 'antd/es/radio'

const Cart = () => {
    const {cartItems,removeItemFromcart,AddToCart,handleDecreaseCounter}=useContext(CartContext)
    const totalPrice=cartItems.reduce((current,obj)=>current+obj.quantity*obj.price,0)
    const totalQuantity=cartItems.reduce((current,obj)=>current+obj.quantity,0)

   
    
  return (
    <div>
        
        <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-bold text-purple-400 '>Cart Items</h1>
            <div className='flex  items-center '>
            <h1 className='border w-80 h-20 flex  justify-center items-center'>Total Quantity: {totalQuantity}</h1>
            <h1 className='border w-80 h-20 flex  justify-center items-center'>Total Price: {Math.round(totalPrice)}$</h1>
            <h1 className='border w-80 h-20 flex  justify-center items-center'>Check out</h1>
            
        </div>
           
                {cartItems.map((data)=>(
                    <div key={data.id} className='flex ml-3 border-2 w-4/6 gap-4'>
                     <Image src={data.thumbnail} height={200} width={200}/>
                     <div className='flex flex-col gap-2'>
                        <h1>{data.title}</h1>
                        <h1 className='text-2xl'>Price {data.price}</h1>
                        <div className='flex gap-3'>
                            <Button onClick={()=>AddToCart(data)}>+</Button>
                             <h1>{data.quantity}</h1>
                            <Button disabled={data.quantity==1} onClick={()=>handleDecreaseCounter(data.id)}>-</Button>
                        </div>
                        <div>
                          <Button onClick={()=>removeItemFromcart(data.id)}> Remove Item</Button> 
                        </div>
                     </div>
                    </div>
                ))}
           
        </div>
    </div>
  )
}

export default Cart