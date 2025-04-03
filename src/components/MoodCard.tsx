
import React from 'react';
import { cn } from '@/lib/utils';
import { Mood } from '@/data/types';
import { Link } from 'react-router-dom';

interface MoodCardProps {
  mood: Mood;
  className?: string;
}

const MoodCard = ({ mood, className }: MoodCardProps) => {
  // Function to get a safe custom color class or use defaults
  const getColorClass = () => {
    if (!mood.color) return "border-b-4 border-rose-500";
    
    // Apply a default styling if the color string doesn't match Tailwind format
    if (!mood.color.includes('-')) {
      return "border-b-4 border-music-red";
    }
    
    return `border-b-4 ${mood.color}`;
  };

  return (
    <Link 
      to={`/explore?mood=${mood.id}`}
      className={cn(
        "mood-card relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300", 
        className
      )}
      style={{ aspectRatio: '1/1' }}
    >
      {/* Fallback background color in case image fails to load */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
      
      {/* Image with error handling */}
      <img 
        src={mood.image}
        alt={mood.name}
        className="absolute inset-0 h-full w-full object-cover z-10"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";
        }}
      />
      
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 z-20",
        getColorClass()
      )}>
        <h3 className="text-lg font-bold text-white mb-1">
          {mood.name}
        </h3>
        <p className="text-xs text-white/80 line-clamp-2">
          {mood.description}
        </p>
      </div>
    </Link>
  );
};

export default MoodCard;
