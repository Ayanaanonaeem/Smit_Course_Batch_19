import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
// import ProductCard from './components/ProductCard'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App