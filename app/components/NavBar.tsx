'use client'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='sticky top-0 z-50 w-full flex justify-center items-center h-24 p-4'>
        <div className='rounded-full flex justify-center items-center h-full w-fit px-4 bg-gray-800 2xl:px-16 2xl:px-16 gap-4'>
            <div>
                <Link href='/'>
                    <button className='btn btn-primary btn-ghost btn-circle'>
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </button>
                </Link>
            </div>
              
            <div>
                <Link href='/about'>
                    <button className='btn btn-primary btn-ghost btn-circle'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </Link>
            </div>
            
            <div>
                <Link href='/projects'>
                    <button className='btn btn-primary btn-ghost btn-circle'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h5l2 2h7a2 2 0 012 2v1M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9M9 14l2 2 4-4"/>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar