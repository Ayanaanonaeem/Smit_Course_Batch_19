import { createContext, useState } from "react";

export const CartContext=createContext()

export const CartContextProvider=({children})=>{
  const [cart,setCart]=useState([])
  
    return (
        <CartContext.Provider >
            {children}  
        </CartContext.Provider>
    )
}

