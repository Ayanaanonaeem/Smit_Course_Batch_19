import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Product from './Pages/Product'
import Cart from './Pages/Cart'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App