'use client';
import { useRef } from 'react';

declare global {
  interface Window {
    __SFX_MUTED?: boolean;
  }
}

const useSound = (src: string, volume = 1) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!audioRef.current && typeof Audio !== 'undefined') {
    audioRef.current = new Audio(src);
    audioRef.current.volume = volume;
  }

  const play = () => {
    if (typeof window !== 'undefined' && window.__SFX_MUTED) return;
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        // Silently handle autoplay policy errors
        if (error.name === 'NotAllowedError') {
          // This is expected - browser blocks autoplay until user interaction
          return;
        }
        // Log other errors for debugging
        console.log('Sound effect play failed:', error);
      });
    }
  };

  return play;
};

export default useSound; 