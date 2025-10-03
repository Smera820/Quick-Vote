"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname()
    const activeLink = (href: string) =>
        `border-b-2 px-1 ${pathname === href
            ? "border-white font-semibold" // active link
            : " border-transparent hover:border-white"
        }`;
    return (
        <nav className='flex justify-between items-center bg-black text-white p-5 fixed w-full z-50'>

            <div className='flex items-start gap-2'>
                <Image src="/logo.png" alt="logo" width={20} height={20} />
                <span className='text-xl font-bold'>VOTE</span>
            </div>

            <ul className="hidden md:flex items-center gap-8 text-sm">
                <li>
                    <Link href="/home" className={activeLink("/home")}> 
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/contact-us" className={activeLink("/contact-us")}>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={activeLink("/about")}>
                        About Us
                    </Link>
                </li>
                 <li>
                    <Link href="/activities" className={activeLink("/activities")}>
                        Activities
                    </Link>
                </li>
             
            </ul>


        </nav>

    )
}

export default Navbar