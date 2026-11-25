import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-[#AD8B73]" : "text-[#4A382B] hover:text-[#AD8B73]"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#FFFBE9] text-[#4A382B] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Navbar Main Content */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="bg-[#AD8B73] text-[#FFFBE9] p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 7h12l1 14H5L6 7Z" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-[3px]">AUREL</h1>
              <p className="text-[9px] tracking-[3px] text-[#AD8B73]">
                EVERYDAY ESSENTIALS
              </p>
            </div>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={linkStyle}
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#AD8B73] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors ${
                  isActive
                    ? "bg-[#AD8B73] text-white"
                    : "bg-[#E3CAA5] hover:bg-[#CEAB93]"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              <span className="hidden sm:block text-sm font-medium">Cart</span>

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#AD8B73] text-white text-xs flex items-center justify-center">
                2
              </span>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#E3CAA5] transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-5 pt-4 border-t border-[#CEAB93]">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#E3CAA5] text-[#6B4934] font-semibold"
                        : "hover:bg-[#E3CAA5]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/cart"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#E3CAA5] text-[#6B4934] font-semibold"
                      : "hover:bg-[#E3CAA5]"
                  }`
                }
              >
                Shopping Cart
              </NavLink>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;