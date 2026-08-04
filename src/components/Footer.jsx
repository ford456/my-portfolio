
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='bg-[#1d3a51] px-10 md:px-6 p-4 relative max-md:flex max-md:flex-col md:grid md:grid-cols-3 justify-center'>
            
            <div className='flex items-center col-span-2 text-white text-sm md:text-base lg:text-sm md:ml-10  mx-auto'>
                <img src="/PortLogoWhite.svg" alt="Logo" className='w-10 h-auto px-2' />
                <p className='pr-2'>© 2025 Patcharadol Portfolio. All Rights Reserved. </p>
            </div >
            <ul className='col-start-3 text-sm flex flex-col space-y-2 md:flex-row md:space-x-4 sm:justify-center items-center sm:items-baseline '>
                <Link href="/" className="font-medium text-white hover:text-blue-500" target='_parent' >Home</Link>
                <Link href="/about" className="font-medium  text-white hover:text-blue-500 " target='_parent' >About</Link>
                <Link href="/projects" className="font-medium  text-white hover:text-blue-500" target='_parent' >Projects</Link>
                <Link href="/contact" className="font-medium  text-white hover:text-blue-500" target='_parent' >Contact</Link>
            </ul>
        </footer>
    )
}

export default Footer
