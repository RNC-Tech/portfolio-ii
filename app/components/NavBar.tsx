'use client'
import Link from 'next/link'
import React from 'react'
import useSound from './useSound'

const buttonHoverSound = 'https://d1aht2gieyw871.cloudfront.net/z8wx6w%2Ffile%2F443278c0d3195c51cb44af6a3d99fa4b_e8ac2773334397a4e048e9b174f041de.wav?response-content-disposition=inline%3Bfilename%3D%22443278c0d3195c51cb44af6a3d99fa4b_e8ac2773334397a4e048e9b174f041de.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683615&Signature=DwOEtbT8qs59JPSYTXktJonmAIrZR481vDRMYErm~ah1X6wyT1e-33nkyY9Bn6hB~xtmY8Eagex0tQYcYb2o8SW22gU3aOG0gb-3OUlRdNZTID2euxZ7cyx6c6xFlrrbQBGFXXUErRUt~7dpyEj5GFO28olszWc8g52j44U3md7Ns6PMgnF8~PCRzCzgpZTlA0Kf85J7Hg-9JhSezunMsJRbNgsi1V9cAuOID1xYgtosgJB8SNvscRLK4SGSx4s1e3lsSh2zwEcaLwjIMV79m8eG4Uyk9sixidPLgQhweVBmXe6K8pDQaF0UAspjmYReHa8Kr6cItUXu0oWCVKfqlQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';
const buttonClickSound = 'https://dz0i85a16ad4a.cloudfront.net/t8ux6w%2Ffile%2F9f99ae93281d3e862878318fd3696264_96dac53aebf63ab3236b8c1c1147ef19.wav?response-content-disposition=inline%3Bfilename%3D%229f99ae93281d3e862878318fd3696264_96dac53aebf63ab3236b8c1c1147ef19.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683645&Signature=E4nBeO5piFCL7Bmnd602FqJq5FDo9YfcgI6nn2CDV1OO-6IKoamDdQBnMeS1xRdUzEwGkkIKk~VYlAlYrroUIHHlr1Q7o0~0jgyBS9dZ6dzvedpSTnsdu8hC89ifPY8aBd-SdKg7pZLD4f8PYK-QaWBq4RToTuIXhh6-LAiBwskp80a4cMpYBFi~nN6v4n0Oq8GucZSouNRtkONxYvdsbGPoHmglKy1cvA26ULUVznxui8Ltgg11ACWBnCFV8O~dEKcYDVUCp85htyReXiUtol6yvCaLRJviNr7gDefwtddNcf67OJTYMxpNTiOE6Oii2Rx-M1i5-M7hKIN8wHMa0Q__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';

const NavBar = () => {
  const playButtonHover = useSound(buttonHoverSound, 0.2)
  const playButtonClick = useSound(buttonClickSound, 0.2)

  return (
    <div className='sticky top-0 z-50 w-full flex justify-center items-center h-24 p-4'>
        <div className='rounded-full flex justify-center items-center h-full w-fit px-4 bg-gray-800 2xl:px-16 2xl:px-16 gap-4'>
            <div className="relative flex flex-col items-center group">
                <Link href='/'>
                    <button className='btn btn-primary btn-ghost btn-circle hover:scale-180 transition-all duration-100 active:scale-150' onMouseEnter={playButtonHover} onClick={playButtonClick}>
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
                <span className="absolute top-14 scale-0 group-hover:scale-100 transition-all bg-gray-700 text-white text-xs rounded px-2 py-1 mt-1 z-50">
                    Home
                </span>
            </div>
            
            <div className="relative flex flex-col items-center group">
                <Link href='/about'>
                    <button className='btn btn-primary btn-ghost btn-circle hover:scale-180 transition-all duration-100 active:scale-150' onMouseEnter={playButtonHover} onClick={playButtonClick}>
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
                <span className="absolute top-14 scale-0 group-hover:scale-100 transition-all bg-gray-700 text-white text-xs rounded px-2 py-1 mt-1 z-50">
                    About
                </span>
            </div>
            
            <div className="relative flex flex-col items-center group">
                <Link href='/projects'>
                    <button className='btn btn-primary btn-ghost btn-circle hover:scale-180 transition-all duration-100 active:scale-150' onMouseEnter={playButtonHover} onClick={playButtonClick}>
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
                <span className="absolute top-14 scale-0 group-hover:scale-100 transition-all bg-gray-700 text-white text-xs rounded px-2 py-1 mt-1 z-50">
                    Projects
                </span>
            </div>
        </div>
    </div>
  )
}

export default NavBar