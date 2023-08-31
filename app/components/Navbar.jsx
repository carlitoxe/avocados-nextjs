import Link from "next/link"

export default function Navbar() {
    return (
        <header>
            <nav className=''>
                <ul className="flex gap-1 justify-between my-4 pb-2 px-40 border-gray-400 border-b shadow shadow-slate-500 text-2xl">
                    <li className="">
                       <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                       <Link href={'/about'}>Cart</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}