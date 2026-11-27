"use client"
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation';


import { Oswald } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Nav = () => {
    const pathname=usePathname()

  return (
    <div className='bg-amber-500 w-full h-[50px] flex justify-between px-4 text-white font-bold items-center fixed top-0 '>
        <div className={ `${oswald.className} font-bold `}>
            🌍Travel Agency
        </div>
        <div className='flex gap-4 '>
            <Link href={"/"} className={`${pathname=="/"?"font-bold text-black":"text-white font-bold"}`}>Home</Link>
            <Link href={"/contact"} className={`${pathname=="/contact"?"font-bold text-black":"text-white font-bold"}`}>Contact</Link>
            <Link href={"/destination"} className={`${pathname=="/destination"?"font-bold text-black":"text-white font-bold"}`}>Destination</Link>
            <Link href={"/about"} className={`${pathname=="/about"?"font-bold text-black":"text-white font-bold"}`}>About</Link>
        </div>

    </div>
  )
}

export default Nav