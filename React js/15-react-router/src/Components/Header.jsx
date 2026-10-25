import { useContext } from "react";
import { Link,NavLink,useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function Header() {
 
const {theme,setTheme}=useContext(ThemeContext)  

const handleTheme=()=>{
  theme=="light"?setTheme("dark"):setTheme("light")
}

const navigate=useNavigate()
const handleLogin=()=>navigate("/auth/login")
  return (
    <header className={`${theme=="light"?`bg-white text-black`:`bg-gray-700 text-white`}bg-gray-900 shadow-lg`}>
      <nav className="flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-cyan-400">Dev</span>Space
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          <NavLink to={"/about"} className={({isActive})=>`cursor-pointer transition hover:text-cyan-400 ${isActive?`text-2xl`:``}`}>
            About
          </NavLink>

           <Link to={"/contact"} className="cursor-pointer transition hover:text-cyan-400">
            Contact
          </Link>

          <button onClick={handleLogin} className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-gray-950 transition hover:bg-cyan-400">
            Login
          </button>
          <button onClick={handleTheme} className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-gray-950 transition hover:bg-cyan-400">
            Change theme
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Header;
