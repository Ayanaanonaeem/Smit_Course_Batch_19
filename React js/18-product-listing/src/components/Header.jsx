import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Header = () => {
  const { cartCount } = useContext(CartContext);
  
  const navigate=useNavigate()
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg font-medium cursor-pointer transition-all duration-200 ${
      isActive
        ? "text-purple-700 bg-purple-100"
        : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
    }`

  return (
    <div>
      <header className="bg-white text-gray-700 shadow-sm border-b border-purple-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          {/* Logo */}
          <Link to="/" className="flex title-font font-semibold items-center text-purple-700 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-purple-600 rounded-xl shadow-md"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>

            <span className="ml-3 text-2xl tracking-tight">
              Shop<span className="text-purple-500">ora</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-2 md:gap-6">

            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>

            <NavLink to="/products" className={navClass}>
              Products
            </NavLink>

          

          </nav>

          {/* Cart Button */}
          <button onClick={()=>navigate("/cart")} className="inline-flex items-center gap-2 bg-purple-600 text-white border-0 py-2.5 px-5 focus:outline-none hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 rounded-xl text-sm font-semibold transition-all duration-300 mt-4 md:mt-0 md:ml-6">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6" />
              <circle cx="10" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
            </svg>

            {cartCount}
          </button>

        </div>
      </header>
    </div>
  )
}

export default Header