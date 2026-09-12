import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import UserDetail from './Pages/UserDetail'
import Data from './Pages/Data'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='contact/userDetail' element={<UserDetail/>}/> 
        <Route path='contact/userDetail/:id' element={<UserDetail/>}/> 
      </Route>



    </Routes>
    </>
  )
}

export default App
