
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
      <img 
        src={genre.image} 
        alt={genre.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 z-10">
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
