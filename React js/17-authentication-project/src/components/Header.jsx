import { useContext, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Button } from "@heroui/react";
import { auth, app } from "../utils/firebase";
import { signOut } from "firebase/auth";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useContext(AuthContext);
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#09090b]/80 px-5 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black font-bold text-lg">
            A
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            Ayan<span className="text-zinc-500">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition duration-200 hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        {user.userinfo.username ? (
          <div className="text-white flex gap-3 ">
            <h1>{user.userinfo.username}</h1>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to={"/login"}
              className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200 md:flex"
            >
              Login
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to={"/signup"}
              className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200 md:flex"
            >
              Signup
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute left-4 right-4 top-[calc(100%+10px)] rounded-2xl border border-white/10 bg-[#09090b]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
