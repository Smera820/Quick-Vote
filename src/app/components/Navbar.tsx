"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const activeLink = (href: string) =>
        `border-b-2 px-1 ${pathname === href
            ? "border-white font-semibold"
            : " border-transparent hover:border-white"
        }`

    return (
        <nav className='flex justify-between items-center bg-black text-white p-5 fixed w-full z-50'>

            <div className='flex items-start gap-2'>
                <Image src="/logo.png" alt="logo" width={20} height={20} />
                <span className='text-xl font-bold'>VOTE</span>
            </div>
            {/* desktop menu */}
            <ul className="hidden md:flex items-center gap-8 text-sm">
                <li>
                    <Link href="/home" className={activeLink("/home")}>
                        Home
                    </Link>
                </li>
                <span className="text-gray-200">|</span>
                <li>
                    <Link href="/contact-us" className={activeLink("/contact-us")}>
                        Contact Us
                    </Link>
                </li>
                <span className="text-gray-200">|</span>
                <li>
                    <Link href="/about" className={activeLink("/about")}>
                        About Us
                    </Link>
                </li>
                <span className="text-gray-200">|</span>
                <li>
                    <Link href="/activities" className={activeLink("/activities")}>
                        Activities
                    </Link>
                </li>
            </ul>

            {/* mobile menu */}
            <button
                className='md:hidden text-2xl focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            {isOpen && (
            <div className="absolute top-16 left-2 w-full bg-black text-white flex justify-center items-center gap-6 py-6 md:hidden">
                <Link
                    href="/home"
                    className={activeLink("/home")}
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/contact-us"
                    className={activeLink("/contact-us")}
                    onClick={() => setIsOpen(false)}
                >
                    Contact Us
                </Link>
                <Link
                    href="/about"
                    className={activeLink("/about")}
                    onClick={() => setIsOpen(false)}
                >
                    About Us
                </Link>
                <Link
                    href="/activities"
                    className={activeLink("/activities")}
                    onClick={() => setIsOpen(false)}
                >
                    Activities
                </Link>
            </div>
             )} 
        </nav>
    )
}

export default Navbar