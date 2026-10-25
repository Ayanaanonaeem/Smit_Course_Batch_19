import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Auth from './auth/Index'
import Signup from './auth/Signup.'
import Login from './auth/Login'
import BookDetails from './Books/BookDetails'
import Books from './Books/Books'
import NotFound from './Components/NotFound'
import {ThemeContextProvider} from './context/ThemeContext'

function App() {


  return (
    <>
    <ThemeContextProvider>
     <BrowserRouter>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='/auth'>
      <Route index element={<Auth/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      </Route>

      <Route path='/books'>
        <Route index element={<Books/>}/>
        <Route path=":id" element={<BookDetails/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     </ThemeContextProvider>
    </>
  )
}

export default App
