import { Routes,Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Product from "./Pages/Product.jsx"
import Productpage from "./Pages/Productpage.jsx"
function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Layout/>}>
       <Route path="" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="product" element={<Product/>}/>
       <Route path="product/:id" element={<Productpage/>}/>


      </Route>
     </Routes>
    </>
  )
}

export default App
