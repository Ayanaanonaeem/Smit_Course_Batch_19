import React, { useContext } from "react";
import { themeDataContext } from "../context/ThemeContext";


const Navbar = () => {
   const [theme,setTheme]=useContext(themeDataContext)
  
   
  return (
    <nav className={`text-white px-6 py-4 ${theme}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          MyLogo
        </h1>

        {/* Menu */}
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#" className="hover:text-blue-400">
            About
          </a>

          <a href="#" className="hover:text-blue-400">
            Services
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg" onClick={()=>{theme=="light"?setTheme("dark"):setTheme("light")}}>
          Change theme
        </button>
        

      </div>
    </nav>
  );
};

export default Navbar;