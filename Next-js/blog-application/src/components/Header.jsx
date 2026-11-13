"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
    const pathname=usePathname()
    
    
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyWebsite
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li><Link href="/home" className={` ${pathname==="/home"?"text-blue-600 font-bold":""}`}>Home</Link></li>
          <li><Link href="/aboutus" className={`${pathname==="/aboutus"?"text-blue-600 font-bold":""}`}>About</Link></li>
          <li><Link href="/blogs" className={`${pathname==="/blogs"?"text-blue-600 font-bold":""}`}>Blogs</Link></li>
          <li><Link href="/contactus"className={`${pathname==="/contactus"?"text-blue-600 font-bold":""}`}>Contact</Link></li>
          <li><Link href="/dashboard"className={`${pathname==="/dashboard"?"text-blue-600 font-bold":""}`}>Dashboard</Link></li>
          <li><Link href="/quotes"className={`${pathname==="/quotes"?"text-blue-600 font-bold":""}`}>Quotes</Link></li>
        </ul>

        {/* Login Button */}
        <Link
          href="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>

      </nav>
    </header>
  );
};

export default Header;
