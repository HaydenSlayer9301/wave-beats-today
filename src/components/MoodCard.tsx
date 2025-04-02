
import React from 'react';
import { cn } from '@/lib/utils';
import { Mood } from '@/data/musicData';

interface MoodCardProps {
  mood: Mood;
  className?: string;
}

const MoodCard = ({ mood, className }: MoodCardProps) => {
  // Function to generate the proper Tailwind border class
  const getBorderClass = () => {
    if (!mood.color) return "";
    
    const parts = mood.color.split('-');
    if (parts.length < 3) return "";
    
    return `border-b-4 border-${parts[1]}-${parts[2]}`;
  };

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
        getBorderClass()
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
