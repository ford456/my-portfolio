import React from 'react'

export default function Timelinedot() {
    return (
        <div
            className="h-4 left-1/2 absolute w-4 rounded-full -translate-x-1/2 items-center justify-center hidden md:block">
            <div className="absolute z-0  h-4 w-4 rounded-full animate-ping bg-sky-400 border border-blue-300 dark:border-b-blue-900 p-2" />
            <div
                className=" h-4 w-4 z-10 rounded-full bg-blue-500 border border-blue-300 dark:border-b-blue-900 p-2" />

        </div>
    )
}
