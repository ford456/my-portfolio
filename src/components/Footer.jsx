
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <footer className='bg-[#1d3a51] px-10 md:px-6 p-4 relative max-md:flex max-md:flex-col md:grid md:grid-cols-3 justify-center'>
            
            <div className='flex items-center col-span-2 text-white text-sm md:text-base lg:text-sm md:ml-10  mx-auto'>
                <img src="/FriendalyLogo.png" alt="Logo" loading="eager" className='w-10 h-10 px-2'  />
                <p className='pr-2'>© 2025 Patcharadol Portfolio. All Rights Reserved. </p>
            </div >
            <ul className='col-start-3 text-sm flex flex-col space-y-2 md:flex-row md:space-x-4 sm:justify-center items-center sm:items-baseline '>
                <li><Link href="/" className="font-medium text-white hover:text-blue-500" target='_parent' >Home</Link></li>
                <li><Link href="/about" className="font-medium  text-white hover:text-blue-500 " target='_parent' >About</Link></li>
                <li><Link href="/projects" className="font-medium  text-white hover:text-blue-500" target='_parent' >Projects</Link></li>
                <li><Link href="/contact" className="font-medium  text-white hover:text-blue-500" target='_parent' >Contact</Link></li>
            <li className="text-white">|</li>
            <li className=" text-gray-200 hover:underline hover:underline-offset-2"><Link href="/privacy-policy">Privacy policy</Link></li>
            </ul>
            
        </footer>
    )
}

export default Footer
