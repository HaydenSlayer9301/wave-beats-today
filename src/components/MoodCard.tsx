
import React from 'react';
import { cn } from '@/lib/utils';
import { Mood } from '@/data/musicData';

interface MoodCardProps {
  mood: Mood;
  className?: string;
}

const MoodCard = ({ mood, className }: MoodCardProps) => {
  return (
    <div 
      className={cn(
        "mood-card relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300", 
        className
      )}
      style={{ aspectRatio: '1/1' }}
    >
      <img 
        src={mood.image} 
        alt={mood.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 z-10",
        mood.color ? `border-b-4 border-${mood.color.split('-')[1]}-${mood.color.split('-')[2]}` : ""
      )}>
        <h3 className="text-lg font-bold text-white mb-1">
          {mood.name}
        </h3>
        <p className="text-xs text-white/80 line-clamp-2">
          {mood.description}
        </p>
      </div>
    </div>
  );
};

export default MoodCard;
