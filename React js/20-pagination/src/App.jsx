import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import FormUsingReactHookForm from './Components/FormUsingReactHookForm'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<FormUsingReactHookForm/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App