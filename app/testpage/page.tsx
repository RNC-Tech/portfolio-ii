'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Dither from '../components/Dither';

interface AudioData {
  frequency: number;
  amplitude: number;
  bass: number;
  mid: number;
  treble: number;
}

export default function AudioResponsiveBackground() {
  const [isListening, setIsListening] = useState(false);
  const [audioData, setAudioData] = useState<AudioData>({
    frequency: 0,
    amplitude: 0.5,
    bass: 0,
    mid: 0,
    treble: 0,
  });
  const [error, setError] = useState<string>('');
  const [isClient, setIsClient] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fireAnimRef = useRef<number | null>(null);
  const amplitudeRef = useRef<number>(0);
  const bassRef = useRef<number>(0);
  const frequencyRef = useRef<number>(0);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const startAudioAnalysis = useCallback(async () => {
    try {
      setError('');
      
      // Clean up any existing audio context first
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      if (microphoneRef.current) {
        microphoneRef.current.disconnect();
        microphoneRef.current = null;
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;
      }
      
      // Create audio context
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const audioContext = audioContextRef.current;

      // Create analyser
      analyserRef.current = audioContext.createAnalyser();
      analyserRef.current.fftSize = 512;
      analyserRef.current.smoothingTimeConstant = 0.8;

      let stream: MediaStream;
      
      try {
        // Try to get desktop audio output directly
        stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: false,
            noiseSuppression: false,
            autoGainControl: false,
            // Try to capture system audio output
            deviceId: 'default',
            groupId: 'default'
          }
        });
      } catch (desktopAudioError) {
        // Fallback to microphone if desktop audio capture fails
        console.warn('Desktop audio capture failed, falling back to microphone...', desktopAudioError);
        stream = await navigator.mediaDevices.getUserMedia({ 
          audio: {
            echoCancellation: false,
            noiseSuppression: false,
            autoGainControl: false,
          } 
        });
      }

      mediaStreamRef.current = stream;

      // Create audio source
      microphoneRef.current = audioContext.createMediaStreamSource(stream);
      microphoneRef.current.connect(analyserRef.current);

      // Create data array for frequency analysis
      const bufferLength = analyserRef.current.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);

      setIsListening(true);

      // Start animation loop (audio analysis)
      const animate = () => {
        if (!analyserRef.current || !dataArrayRef.current) return;

        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        
        // Calculate frequency bands with better distribution
        const bass = dataArrayRef.current.slice(0, 16).reduce((a, b) => a + b, 0) / 16;
        const mid = dataArrayRef.current.slice(16, 48).reduce((a, b) => a + b, 0) / 32;
        const treble = dataArrayRef.current.slice(48, 128).reduce((a, b) => a + b, 0) / 80;
        
        // Calculate overall amplitude
        const amplitude = dataArrayRef.current.reduce((a, b) => a + b, 0) / dataArrayRef.current.length;
        
        // Find dominant frequency
        const maxIndex = dataArrayRef.current.indexOf(Math.max(...dataArrayRef.current));
        const frequency = maxIndex * (audioContext.sampleRate / 2) / analyserRef.current.fftSize;

        // Keep latest values in refs for the fire renderer (avoids excessive re-renders)
        amplitudeRef.current = amplitude / 255;
        bassRef.current = bass / 255;
        frequencyRef.current = frequency;

        setAudioData({
          frequency,
          amplitude: amplitude / 255,
          bass: bass / 255,
          mid: mid / 255,
          treble: treble / 255,
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();
         } catch (err) {
       setError('Failed to access desktop audio. Please check audio permissions and ensure audio is playing.');
       console.error('Audio analysis error:', err);
     }
  }, []);

  const stopAudioAnalysis = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
      microphoneRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }

    setIsListening(false);
    setAudioData({
      frequency: 0,
      amplitude: 0.5,
      bass: 0,
      mid: 0,
      treble: 0,
    });
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-start audio analysis when component mounts
  useEffect(() => {
    if (isClient && !isListening) {
      startAudioAnalysis();
    }
  }, [isClient, startAudioAnalysis, isListening]);

  useEffect(() => {
    return () => {
      stopAudioAnalysis();
    };
  }, [stopAudioAnalysis]);

  // Setup FIREWORKS canvas particle system, driven by audio
  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas sizing
    const setCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Render at device pixel ratio for crisp glow
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Firework particle model
    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      ttl: number;
      hue: number;
      glow: number;
      phase: number;
      type: 'rocket' | 'spark' | 'trail';
      gravity: number;
      drag: number;
    };
    const particles: Particle[] = [];
    const maxParticles = 800;

    const spawnRocket = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const amp = amplitudeRef.current;
      const bass = bassRef.current;
      const freq = frequencyRef.current;
      
      // Only spawn rockets when there's significant audio
      if (amp < 0.1 && bass < 0.1) return;
      
      const hueBase = (freq / 10) % 360;
      const rocket: Particle = {
        x: Math.random() * width * 0.8 + width * 0.1, // Random position across screen
        y: height + 20, // Start from bottom
        vx: (Math.random() - 0.5) * (2 + amp * 4), // Horizontal drift
        vy: -(15 + Math.random() * 10 + amp * 20 + bass * 15), // Upward velocity
        size: 3 + Math.random() * 4 + amp * 8,
        life: 0,
        ttl: 120 + Math.random() * 60, // Rocket lifetime
        hue: (hueBase + Math.random() * 60 - 30 + 360) % 360,
        glow: 0.8 + bass * 1.2 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        type: 'rocket',
        gravity: 0.3 + Math.random() * 0.2,
        drag: 0.98 + Math.random() * 0.01,
      };
      particles.push(rocket);
    };

    const explode = (x: number, y: number, hue: number, intensity: number) => {
      const sparkCount = Math.floor(30 + intensity * 50 + Math.random() * 40);
      const amp = amplitudeRef.current;
      const bass = bassRef.current;
      
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + Math.random() * 0.5;
        const speed = 3 + Math.random() * 8 + intensity * 10;
        const spark: Particle = {
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 3 + amp * 4,
          life: 0,
          ttl: 80 + Math.random() * 60 + intensity * 40,
          hue: (hue + Math.random() * 40 - 20 + 360) % 360,
          glow: 0.6 + bass * 1.0 + Math.random() * 0.4,
          phase: Math.random() * Math.PI * 2,
          type: 'spark',
          gravity: 0.15 + Math.random() * 0.1,
          drag: 0.99 + Math.random() * 0.005,
        };
        particles.push(spark);
      }
      
      // Add trail particles
      for (let i = 0; i < 10; i++) {
        const trail: Particle = {
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: 2 + Math.random() * 4,
          life: 0,
          ttl: 40 + Math.random() * 30,
          hue: hue,
          glow: 0.4 + Math.random() * 0.3,
          phase: Math.random() * Math.PI * 2,
          type: 'trail',
          gravity: 0.1 + Math.random() * 0.1,
          drag: 0.95 + Math.random() * 0.03,
        };
        particles.push(trail);
      }
    };

    const step = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const amp = Math.max(0, Math.min(1, amplitudeRef.current));
      const bass = Math.max(0, Math.min(1, bassRef.current));
      const freq = frequencyRef.current;

      // Trail fade (dark translucent fill)
      ctx.globalCompositeOperation = 'source-over';
      // Lower alpha to keep trails lingering longer
      ctx.fillStyle = 'rgba(5, 8, 12, 0.08)';
      ctx.fillRect(0, 0, width, height);

      // Background subtle vignette
      const grad = ctx.createRadialGradient(width * 0.5, height * 0.6, Math.min(width, height) * 0.1,
                                           width * 0.5, height * 0.6, Math.max(width, height) * 0.8);
      grad.addColorStop(0, 'rgba(10, 14, 20, 0.0)');
      grad.addColorStop(1, 'rgba(5, 8, 12, 0.15)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Spawn rockets based on audio intensity
      const spawnChance = (amp * 0.8 + bass * 0.4) * 0.3;
      if (Math.random() < spawnChance) {
        spawnRocket();
      }

      // Wind affected by frequency and amplitude
      const wind = Math.sin(performance.now() * 0.0008 + freq * 0.002) * (0.2 + amp * 1.2);

      ctx.globalCompositeOperation = 'lighter';

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        
        // Apply physics based on particle type
        if (p.type === 'rocket') {
          // Rocket physics
          p.vy += p.gravity; // Apply gravity
          p.vx *= p.drag; // Apply drag
          p.vy *= p.drag;
          
          // Add wind effect
          p.vx += wind * 0.02;
          
          // Check if rocket should explode
          if (p.vy > 0 && p.life > 30) { // Explode when rocket starts falling
            const intensity = (amp * 0.7 + bass * 0.3);
            explode(p.x, p.y, p.hue, intensity);
            particles.splice(i, 1);
            continue;
          }
          
          // Draw rocket trail
          ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${0.3 * (1 - p.life / p.ttl)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          
        } else if (p.type === 'spark') {
          // Spark physics
          p.vy += p.gravity;
          p.vx *= p.drag;
          p.vy *= p.drag;
          
          // Add wind effect
          p.vx += wind * 0.01;
          
          // Draw spark with glow
          const alpha = Math.max(0, 1 - p.life / p.ttl);
          const glow = Math.min(2.0, p.glow * (0.8 + amp * 1.5 + bass * 0.8));
          const radius = p.size * (0.6 + amp * 2.5 + bass * 0.8);
          
          // Glow gradient
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 6);
          g.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${0.15 * glow * alpha})`);
          g.addColorStop(1, `hsla(${p.hue}, 90%, 50%, 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 6, 0, Math.PI * 2);
          ctx.fill();
          
          // Core
          ctx.fillStyle = `hsla(${p.hue}, 95%, 75%, ${Math.min(1, 0.8 + amp * 0.4) * alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fill();
          
        } else if (p.type === 'trail') {
          // Trail physics
          p.vy += p.gravity * 0.5;
          p.vx *= p.drag;
          p.vy *= p.drag;
          
          // Draw trail particle
          const alpha = Math.max(0, 1 - p.life / p.ttl);
          ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${0.4 * alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Remove particles that are off-screen or expired
        if (p.life > p.ttl || p.y > height + 50 || p.x < -50 || p.x > width + 50) {
          particles.splice(i, 1);
        }
      }
      
      // Trim particles if too many
      if (particles.length > maxParticles) {
        particles.splice(0, particles.length - maxParticles);
      }

      fireAnimRef.current = requestAnimationFrame(step);
    };

    step();

    return () => {
      if (fireAnimRef.current) cancelAnimationFrame(fireAnimRef.current);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [isClient]);

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading Audio Visualizer...</div>
      </div>
    );
  }

    return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fireworks canvas background (audio-reactive) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ display: 'block' }}
      />
      
      {/* Dither Component */}
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.5}
          colorNum={4}
          pixelSize={3}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
          audioData={audioData}
        />
      </div>
 
      {/* Audio Status Panel */}
      <div className="absolute top-8 right-8 bg-black/20 backdrop-blur-md rounded-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-4">Audio Status</h2>
        
        <div className="space-y-4">
          {error && (
            <div className="text-red-300 text-sm bg-red-900/30 p-2 rounded">
              {error}
            </div>
          )}

          {isListening && (
            <div className="text-green-300 text-sm bg-green-900/30 p-2 rounded">
              ✓ Listening to audio
            </div>
          )}

          {/* Audio Data Display */}
          <div className="space-y-2 text-sm">
            <div>Frequency: {Math.round(audioData.frequency)} Hz</div>
            <div>Amplitude: {Math.round(audioData.amplitude * 100)}%</div>
            <div className="flex space-x-4">
              <div>Bass: {Math.round(audioData.bass * 100)}%</div>
              <div>Mid: {Math.round(audioData.mid * 100)}%</div>
              <div>Treble: {Math.round(audioData.treble * 100)}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
