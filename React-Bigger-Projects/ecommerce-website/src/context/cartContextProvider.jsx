import { createContext, useState } from "react";

export const CartContext=createContext()

export const CartContextProvider=({children})=>{
  const [carts,setCarts]=useState([])

  const AddToCart=(product)=>{
       let cartItems=[...carts]

       let productExist=cartItems.find((item)=>item.id===product.id)

       if(productExist){
        cartItems =cartItems.map((item)=>item.id===product.id? {...item,quantity:item.quantity+1}:item)
       }
       else{
        cartItems.push({...product,quantity:1})
       }

       setCarts(cartItems)

  }

  const RemoveCart=(id)=>{
     let cartItems=[...carts]
     
     cartItems=cartItems.filter((val)=>val.id!==id)

     setCarts(cartItems)
  }

const plusCount=(id)=>{
    const cartItems=[...carts]
    cartItems.map((item)=>item.id===id?{...item,quantity:item.quantity++}:item)
    setCarts(cartItems)
    
}
const minusCount=(id)=>{
    const cartItems=[...carts]
    cartItems.map((item)=>item.id===id?{...item,quantity:item.quantity--}:item)
    setCarts(cartItems)
    
}
  
    return (
        <CartContext.Provider value={{AddToCart,carts,RemoveCart,plusCount,minusCount}} >
            {children}  
        </CartContext.Provider>
    )
}

