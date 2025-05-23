import React, { createContext, useContext, useState, useRef } from 'react';
import { Track } from '@/data';

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  play: (track: Track) => void;
  pause: () => void;
  resume: () => void;
  setVolume: (volume: number) => void;
  progress: number;
  duration: number;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = (track: Track) => {
    if (currentTrack && currentTrack.id === track.id) {
      if (isPlaying) {
        pause();
      } else {
        resume();
      }
      return;
    }

    setCurrentTrack(track);
    setIsPlaying(true);
    
    if (audioRef.current) {
      audioRef.current.src = `https://example.com/audio/${track.id}.mp3`;
      
      audioRef.current.oncanplay = () => {
        audioRef.current?.play().catch(err => {
          console.error('Error playing audio:', err);
          setIsPlaying(false);
        });
      };
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const resume = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.error('Error resuming audio:', err);
      });
    }
    setIsPlaying(true);
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        play,
        pause,
        resume,
        setVolume,
        progress,
        duration,
        audioRef
      }}
    >
      {children}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  
  return context;
};
