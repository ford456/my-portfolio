'use client'

import Link from 'next/link'


export default function NotFound() {


  return (
    <div className='flex items-center justify-center h-dvh max-h-1/2 mx-auto'>
      <div className=' flex flex-col items-center justify-center'>
        <h2 className='text-4xl lg:text-6xl p-4 font-bold'>404 Not Found</h2>
        <p>Could not find requested resource</p>
        <p className='pt-5'>
          <Link href="/" className="font-bold text-blue-200 hover:text-blue-500" target='_parent' >Back to Home</Link>
        </p>
      </div>

    </div>
  )
}