
import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { currentlyPlaying } from '@/data/musicData';

const PlayerBar = () => {
  // In a real app, these would be controlled by state
  const isPlaying = false;
  const progress = 35;
  const volume = 70;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center">
        <div className="grid grid-cols-3 w-full gap-4">
          {/* Track info */}
          <div className="flex items-center gap-3">
            <img 
              src={currentlyPlaying.cover}
              alt={currentlyPlaying.title}
              className="h-10 w-10 rounded object-cover"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm font-medium truncate">{currentlyPlaying.title}</h4>
              <p className="text-xs text-muted-foreground truncate">{currentlyPlaying.artist}</p>
            </div>
          </div>
          
          {/* Player controls */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex h-8 w-8 text-gray-600">
                <Shuffle className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600">
                <SkipBack className="h-4 w-4" />
              </Button>
              
              <Button size="icon" className="h-9 w-9 rounded-full bg-music-red text-white hover:bg-music-red-dark">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600">
                <SkipForward className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="icon" className="hidden md:flex h-8 w-8 text-gray-600">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="hidden md:flex w-full max-w-md mt-1 items-center gap-2">
              <span className="text-xs text-muted-foreground">1:08</span>
              <Slider
                defaultValue={[progress]}
                max={100}
                step={1}
                className="w-full"
              />
              <span className="text-xs text-muted-foreground">{currentlyPlaying.duration}</span>
            </div>
          </div>
          
          {/* Volume control */}
          <div className="flex items-center justify-end gap-2">
            <Volume2 className="hidden md:block h-4 w-4 text-gray-500" />
            <Slider
              defaultValue={[volume]}
              max={100}
              step={1}
              className="hidden md:flex w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
