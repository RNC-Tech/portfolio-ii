'use client';

import React from 'react'

const SocMedLinks = () => {
    return (
        <div className='flex gap-2'>
            <button className="btn bg-[#1A77F2] text-white border-[#005fd8] h-8 w-fit rounded-full px-3 flex items-center gap-2">
                <svg aria-label="Facebook logo" width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.2 22 17.06 22 12.07z"/>
                </svg>
                Facebook
            </button>

            <button className="btn bg-[#dd3ab8] text-white border-[#dd3ab8] h-8 w-fit rounded-full px-3 flex items-center gap-2">
                <svg aria-label="Instagram logo" width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg>
                Instagram
            </button>

            <button className="btn bg-[#14A800] text-white border-[#0B6A0B] h-8 w-fit rounded-full px-3 flex items-center gap-2">
                <svg aria-label="Upwork logo" width="16" height="16" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.22 11.6c-.75-3.1-3.54-5.38-6.78-5.6-3.26-.22-5.9 1.5-6.89 4.08-.66-1.3-1.5-2.5-2.44-3.55v5.1c0 3.36-2.46 6.12-5.5 6.12s-5.5-2.76-5.5-6.12v-5h-3v5c0 5.02 3.78 9.12 8.5 9.12 2.6 0 4.93-1.28 6.5-3.28 1.07 2.1 2.56 4.02 4.39 5.5h3.7c-3.1-2.8-5.1-6.6-5.38-10.1.55-2.35 2.54-3.7 4.62-3.55 1.83.12 3.34 1.46 3.67 3.3.13.74.13 1.5 0 2.24v.1h2.85c.27-1.3.27-2.7-.03-4z"/>
                </svg>
                Upwork
            </button>

            <button className="btn bg-[#3A3D41] text-white border-[#2F3136] h-8 w-fit rounded-full px-3 flex items-center gap-2">
                <svg aria-label="Email logo" width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.25l7.47 6.27a1 1 0 001.06 0L20 8.25V18H4z"/>
                </svg>
                Email
            </button>
        </div>

       
     )
}

export default SocMedLinks;