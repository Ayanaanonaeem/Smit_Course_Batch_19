import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
// import Signin from './pages/Login'
import Header from './components/Header'
import Login from './pages/Login'
import Home from './pages/Home'



function App() {
  


  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     
     
     </BrowserRouter>
    


    </>
  )
}

export default App
