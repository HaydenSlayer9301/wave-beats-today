
import React from 'react';
import { Play, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Track } from '@/data/musicData';

interface MusicCardProps {
  track: Track;
  className?: string;
}

const MusicCard = ({ track, className }: MusicCardProps) => {
  return (
    <div className={cn("music-card", className)}>
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={track.cover}
          alt={`${track.title} by ${track.artist}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="music-card-play">
          <Play className="h-4 w-4" fill="white" />
        </button>
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div className="truncate pr-2">
            <h3 className="font-medium text-sm truncate" title={track.title}>
              {track.title}
            </h3>
            <p className="text-xs text-muted-foreground truncate" title={track.artist}>
              {track.artist}
            </p>
          </div>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>{track.duration}</span>
          <span>{track.plays} plays</span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
