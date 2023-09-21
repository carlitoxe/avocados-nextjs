'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'}
]

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header>
            <nav>
                <ul className="flex gap-1 justify-around my-4 pb-2 border-gray-400 border-b text-2xl">
                {   
                    navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <li key={link.name} >
                                 <Link 
                                    key={link.name} 
                                    href={link.path} 
                                    className={isActive ? 'text-lime-400 font-medium': 'text-white'}
                                  >
                                    {link.name}
                                </Link>
                            </li>

                        )
                    })
                }
                </ul>
            </nav>
        </header>
    )
}