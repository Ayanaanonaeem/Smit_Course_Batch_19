import { useContext, useState } from "react";
import "./App.css";
import {
  CartContext,
  CartContextProvider,
} from "./context/cartContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contactus from "./pages/Contactus";
import ProductDetail from "./pages/ProductDetail";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:id" element={<ProductDetail />} />
          
          <Route path="/contact" element={<Contactus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
