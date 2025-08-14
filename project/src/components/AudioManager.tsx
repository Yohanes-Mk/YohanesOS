import React, { useRef, useEffect } from 'react';

interface AudioManagerProps {
  isMuted: boolean;
}

const AudioManager: React.FC<AudioManagerProps> = ({ isMuted }) => {
  const bootChimeRef = useRef<HTMLAudioElement>(null);
  const clickRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio context for subtle system sounds
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Boot chime sound (synthesized)
    const createBootChime = () => {
      if (isMuted || !audioContext) return;
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.2); // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.4); // G5
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.8);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.8);
    };

    // Click sound (synthesized)
    const createClickSound = () => {
      if (isMuted || !audioContext) return;
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.01);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    };

    // Listen for custom audio events
    const handleBootChime = () => createBootChime();
    const handleClick = () => createClickSound();

    window.addEventListener('yohannes-boot-chime', handleBootChime);
    window.addEventListener('yohannes-click', handleClick);

    return () => {
      window.removeEventListener('yohannes-boot-chime', handleBootChime);
      window.removeEventListener('yohannes-click', handleClick);
    };
  }, [isMuted]);


  return null; // This component doesn't render anything visual
};

export default AudioManager;