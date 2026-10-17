import { useState } from "react";
import landingData from "../constants/landingData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {header}=landingData
  const {logo,navLinks,buttons}=header
  
  

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold text-white shadow-lg shadow-violet-600/20">
          N
          </div>

          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            {logo.name}<span className="text-violet-600">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
         {navLinks.map((val,idx)=>(
            <a key={idx} href={val.href} className="text-sm font-medium text-violet-600">
            {val.label}
          </a>
         ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            Log in
          </button>

          <button className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`grid transition-all duration-300 md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 border-t border-slate-100 px-5 py-4 sm:px-8">
            <a href="#home" onClick={() => setMenuOpen(false)} className="block rounded-xl bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700">
              Home
            </a>

            <a href="#features" onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-violet-50 hover:text-violet-700">
              Features
            </a>

            <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-violet-50 hover:text-violet-700">
              Testimonials
            </a>

            <a href="#pricing" onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-violet-50 hover:text-violet-700">
              Pricing
            </a>

            <div className="flex gap-3 pt-3">
              <button onClick={() => setMenuOpen(false)} className="flex-1 rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700">
                Log in
              </button>

              <button onClick={() => setMenuOpen(false)} className="flex-1 rounded-xl bg-violet-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
