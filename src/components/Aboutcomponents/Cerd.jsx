import React from 'react'

export default function Card({ data }) {
    return (
        <div  >


            <div key={data.id} className=' flex flex-col outline-0 outline-blue-400  mt-10 mb-2 items-center  mx-auto h-[300px] md:h-[450px] max-w-[1320px] rounded-4xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:outline-2 hover:outline-blue-400 hover:outline-offset-4 ' >

                <h3 className='text-[#FFFFF] text-start font-medium text-base lg:text-xl indent-8 lg:pt-6'>{data.title}</h3>
                <div className='flex mt-5 justify-center h-full'>
                    {data.Content}
                </div>


            </div>

        </div>


    )
}

 
