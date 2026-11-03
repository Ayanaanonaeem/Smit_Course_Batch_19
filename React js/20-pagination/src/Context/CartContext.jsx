import { createContext, useState, useEffect} from "react";


export const CartContext=createContext()

export default function CartContextProvider({children}) {
    const [cartItems,setCartItems]=useState([])
    const [loading,setLoading]=useState(false)

     useEffect(() => {
        if(loading){

            localStorage.setItem("cartItems",JSON.stringify(cartItems))
        }
        }, [cartItems])
        useEffect(() => {
            const getDataFromStorage=localStorage.getItem("cartItems")
            
          if(getDataFromStorage){
            setCartItems([...JSON.parse(getDataFromStorage)])
          }
          setLoading(true)
        }, [])

    const AddToCart=(item)=>{
       const arr=cartItems;
       const findItemIndex=cartItems.findIndex((data)=>data.id==item.id)
       if(findItemIndex==-1){
        arr.push({...item,quantity:1})
       }else{
         arr[findItemIndex].quantity++
       }
      setCartItems([...arr])
    }
    const removeItemFromcart=(id)=>{
    //    const arr=cartItems;
    //    const findItemIndex=arr.filter((data)=>data.id!==id)
    //    setCartItems(findItemIndex)

    setCartItems((prev)=>prev.filter((data)=>data.id!==id))
    }

    const isItemAdded=(id)=>{
       const arr=cartItems;
       const findItemIndex=cartItems.findIndex((data)=>id===data.id)
       if(findItemIndex==-1){
        return null
       }else{
        return arr[findItemIndex];
       }
    }
    const handleDecreaseCounter=(id)=>{
     const arr=cartItems;
       const findItemIndex=cartItems.findIndex((data)=>data.id==id)
       arr[findItemIndex].quantity--
      setCartItems([...arr])
    
    }
 
    return(
        <CartContext.Provider value={{AddToCart,cartItems,removeItemFromcart,isItemAdded,handleDecreaseCounter}}>
          {children}
            
        </CartContext.Provider>
    )
}