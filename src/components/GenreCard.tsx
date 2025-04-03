
import React from 'react';
import { cn } from '@/lib/utils';
import { Genre } from '@/data/types';
import { Link } from 'react-router-dom';

interface GenreCardProps {
  genre: Genre;
  className?: string;
}

const GenreCard = ({ genre, className }: GenreCardProps) => {
  return (
    <Link 
      to={`/genre/${genre.id}`}
      className={cn(
        "genre-card relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 block", 
        className
      )}
      style={{ aspectRatio: '1/1' }}
    >
      {/* Fallback background color in case image fails to load */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
      
      <img 
        src={genre.image} 
        alt={genre.name}
        className="absolute inset-0 h-full w-full object-cover z-10"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 z-20">
        <h3 className="text-lg font-bold text-white mb-1">
          {genre.name}
        </h3>
        <p className="text-xs text-white/80 line-clamp-2">
          {genre.description}
        </p>
      </div>
    </Link>
  );
};

export default GenreCard;
