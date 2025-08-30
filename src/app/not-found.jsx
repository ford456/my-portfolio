'use client'

import Link from 'next/link'


export default function NotFound() {


  return (
    <div className='container bg-[#131313] h-[300px] lg:h-[600px] w-fill mx-auto px-3 sm:px-3 lg:px-10 pt-20 lg:pt-5'>
      <div className='pt-[15%] flex flex-col items-center justify-center'>
        <h2 className='text-6xl p-4 font-bold'>404 Not Found</h2>
        <p>Could not find requested resource</p>
        <p className='pt-5'>
          <Link href="/" className="font-bold text-blue-200 hover:text-blue-500" target='_parent' >View all posts</Link>
        </p>
      </div>

    </div>
  )
}