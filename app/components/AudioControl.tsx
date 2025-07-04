'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import useSound from './useSound';

declare global {
  interface Window {
    __SFX_MUTED?: boolean;
    startBackgroundMusic?: () => void;
  }
}

const buttonHoverSound = 'https://d1aht2gieyw871.cloudfront.net/z8wx6w%2Ffile%2F443278c0d3195c51cb44af6a3d99fa4b_e8ac2773334397a4e048e9b174f041de.wav?response-content-disposition=inline%3Bfilename%3D%22443278c0d3195c51cb44af6a3d99fa4b_e8ac2773334397a4e048e9b174f041de.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751683615&Signature=DwOEtbT8qs59JPSYTXktJonmAIrZR481vDRMYErm~ah1X6wyT1e-33nkyY9Bn6hB~xtmY8Eagex0tQYcYb2o8SW22gU3aOG0gb-3OUlRdNZTID2euxZ7cyx6c6xFlrrbQBGFXXUErRUt~7dpyEj5GFO28olszWc8g52j44U3md7Ns6PMgnF8~PCRzCzgpZTlA0Kf85J7Hg-9JhSezunMsJRbNgsi1V9cAuOID1xYgtosgJB8SNvscRLK4SGSx4s1e3lsSh2zwEcaLwjIMV79m8eG4Uyk9sixidPLgQhweVBmXe6K8pDQaF0UAspjmYReHa8Kr6cItUXu0oWCVKfqlQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ';

const AudioControl = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playHover = useSound(buttonHoverSound, 0.2);

  // Mark as client-side after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Create the startBackgroundMusic function with useCallback
  const startBackgroundMusic = useCallback(() => {
    if (audioRef.current && audioRef.current.paused && !isMuted) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Background music play failed:', error);
      });
    }
  }, [isMuted]);

  // Set up global function to start background music
  useEffect(() => {
    if (!isClient) return;
    
    window.startBackgroundMusic = startBackgroundMusic;
  }, [isClient, startBackgroundMusic]);

  // Sync mute state with localStorage and window for SFX (only on client)
  useEffect(() => {
    if (!isClient) return;
    
    // On mount, check localStorage for mute state
    const stored = localStorage.getItem('global-audio-muted');
    if (stored === 'true') {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.muted = true;
      window.__SFX_MUTED = true;
    } else {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
      window.__SFX_MUTED = false;
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    window.__SFX_MUTED = isMuted;
    localStorage.setItem('global-audio-muted', isMuted ? 'true' : 'false');
  }, [isMuted, isClient]);

  useEffect(() => {
    // Initialize audio when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set volume to 20%
      audioRef.current.loop = true; // Enable looping
      // Don't auto-play - wait for user interaction
    }
  }, []);

  const handleAudioError = () => {
    console.log('Audio failed to load');
    setAudioError(true);
  };

  const toggleAudio = () => {
    if (audioRef.current && !audioError) {
      try {
        if (isMuted) {
          audioRef.current.muted = false;
          setIsMuted(false);
          if (!isPlaying) {
            audioRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch((error) => {
              console.log('Audio play failed:', error);
              setAudioError(true);
            });
          }
        } else {
          audioRef.current.muted = true;
          setIsMuted(true);
        }
      } catch (error) {
        console.log('Audio operation failed:', error);
        setAudioError(true);
      }
    }
  };

  // Don't render audio control if there's an error
  if (audioError) {
    return null;
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        onError={handleAudioError}
      >
        <source src="https://d1qde0807mi10y.cloudfront.net/s23u5w%2Ffile%2F3d808671240d57c8b9bfe0859170ae24_7612929eb02a07f253a8fd46cd84ded3.wav?response-content-disposition=inline%3Bfilename%3D%223d808671240d57c8b9bfe0859170ae24_7612929eb02a07f253a8fd46cd84ded3.wav%22%3B&response-content-type=audio%2Fx-wav&Expires=1751682115&Signature=e15WegeGMwZeIyRc1LcQqsg2-7z1t9~iTZJsIHpXD4w~B7knAfPcEcPRcx2kJ0qO5A9XpwuvxAM~bcdlSZy2kH4c0~biyrKB2ZIQT~6iAM9GVvr1pvatnleuUdvPshXVY2dhIWbOHnl2rjRp1f88f8-O~FfyAkVNoGlZ7g6peO9Xnc~jLQ8robvQyxgNavw7GcEmBkxxLD-3g4peYZziJClqW6iuKR-pBIaJ-BeXok1ExpFm8fe~TcCAyQ5Mki5U8uX0PEok9o9kcvAbZhSux~nDkvkYmG~u8nXkrpMM4ZGXXBpaqBag7alkcJVvzEnRG6U-ibEzqT7WEu7C2quS6w__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating audio control bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleAudio}
          onMouseEnter={playHover}
          className={`btn btn-primary btn-ghost btn-circle w-14 h-14 
            ${isMuted ? 'bg-red-200 border-red-300 hover:bg-red-300 hover:border-red-400' : 'bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500'}
            rounded-full shadow-lg 
            hover:scale-180 transition-all duration-100 active:scale-150 flex items-center justify-center group`}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            // Muted icon
            <svg 
              className={`w-6 h-6 ${isMuted ? 'text-gray-800' : 'text-gray-300'} group-hover:text-white transition-colors duration-200`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            // Unmuted icon
            <svg 
              className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default AudioControl; 