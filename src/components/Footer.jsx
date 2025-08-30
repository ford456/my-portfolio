
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='bg-black px-10 md:px-6 p-4 contianer flex flex-row space-x-4 md:space-x-100 justify-center'>
            <div className='text-sm md:text-base md:ml-10  mx-auto flex items-end '>
                <p className='pr-2'>© 2025 Patcharadol Portfolio. All Rights Reserved. </p>
            </div >
            <ul className='text-sm flex flex-col space-y-2 md:flex-row md:space-x-4 justify-center pr-10'>
                <Link href="/" className="text-white hover:text-blue-500" target='_parent' >Home</Link>
                <Link href="/about" className="text-white hover:text-blue-500" target='_parent' >About</Link>
                <Link href="/projects" className="text-white hover:text-blue-500" target='_parent' >Projects</Link>
                <Link href="/contact" className="text-white hover:text-blue-500" target='_parent' >Contact</Link>
            </ul>
        </footer>
    )
}

export default Footer
