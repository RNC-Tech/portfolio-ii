'use client';

import React, { useState } from 'react'
import useSound from './useSound';

const buttonHoverSound = 'https://cdn.pixabay.com/audio/2025/01/14/audio_5ba8ff5311.mp3';
const buttonClickSound = 'https://cdn.pixabay.com/audio/2024/09/22/audio_6b77bae3cf.mp3';

const SocMedLinks = () => {
    const playButtonHover = useSound(buttonHoverSound, 0.2);
    const playButtonClick = useSound(buttonClickSound, 0.2);
    const [emailButtonText, setEmailButtonText] = useState('Email');
    const [showTooltip, setShowTooltip] = useState(false);

    const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        playButtonClick();
        const emailAddress = 'rncsimbaya@gmail.com';
        setEmailButtonText(emailAddress);

        try {
            await navigator.clipboard.writeText(emailAddress);
            setShowTooltip(true);
            setTimeout(() => {
                setShowTooltip(false);
            }, 2000); // Tooltip visible for 2 seconds
        } catch (err) {
            console.error('Failed to copy email to clipboard:', err);
        }

        setTimeout(() => {
            setEmailButtonText('Email');
        }, 5000); // Revert after 5 seconds
    };
    return (
        <div className='flex gap-2'>
            <a
                href="https://www.linkedin.com/in/rncsimbaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn glass-hover h-12 px-5 text-base md:h-8 md:px-3 md:text-sm w-fit rounded-full flex items-center gap-2"
                onMouseEnter={playButtonHover}
                onClick={playButtonClick}
            >
                <svg aria-label="LinkedIn logo" width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-4 md:h-4">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.4-2.2 4.7 0 5.6 3.1 5.6 7.1V24h-5v-7.7c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/>
                </svg>
                <span className="hidden md:inline">LinkedIn</span>
            </a>

            <a
                href="https://www.upwork.com/freelancers/~014bdc570b02230b5b?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn glass-hover h-12 px-5 text-base md:h-8 md:px-3 md:text-sm w-fit rounded-full flex items-center gap-2"
                onMouseEnter={playButtonHover}
                onClick={playButtonClick}
            >
                <svg aria-label="Upwork logo" width="20" height="20" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-4 md:h-4">
                    <path d="M29.22 11.6c-.75-3.1-3.54-5.38-6.78-5.6-3.26-.22-5.9 1.5-6.89 4.08-.66-1.3-1.5-2.5-2.44-3.55v5.1c0 3.36-2.46 6.12-5.5 6.12s-5.5-2.76-5.5-6.12v-5h-3v5c0 5.02 3.78 9.12 8.5 9.12 2.6 0 4.93-1.28 6.5-3.28 1.07 2.1 2.56 4.02 4.39 5.5h3.7c-3.1-2.8-5.1-6.6-5.38-10.1.55-2.35 2.54-3.7 4.62-3.55 1.83.12 3.34 1.46 3.67 3.3.13.74.13 1.5 0 2.24v.1h2.85c.27-1.3.27-2.7-.03-4z"/>
                </svg>
                <span className="hidden md:inline">Upwork</span>
            </a>

            <div className="relative">
                {showTooltip && (
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-white text-xs rounded py-1 px-2 flex items-center gap-1 z-10 whitespace-nowrap opacity-0 animate-fade-in-out-tooltip glass-tooltip-bg">
                        <svg className="w-4 h-4" fill="none" stroke="#ee8e08" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Copied to clipboard!
                    </div>
                )}
                <a
                    href="mailto:rncsimbaya@gmail.com"
                    className="glass-btn glass-hover h-12 px-5 text-base md:h-8 md:px-3 md:text-sm w-fit rounded-full flex items-center gap-2"
                    onMouseEnter={playButtonHover}
                    onClick={handleEmailClick}
                >
                    <svg aria-label="Email logo" width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-4 md:h-4">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.25l7.47 6.27a1 1 0 001.06 0L20 8.25V18H4z"/>
                    </svg>
                    <span className={`hidden md:inline ${emailButtonText !== 'Email' ? 'animate-fade-in-out' : ''}`}>{emailButtonText}</span>
                </a>
            </div>
        </div>

       
     )
}

export default SocMedLinks;