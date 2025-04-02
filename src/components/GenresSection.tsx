
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import GenreCard from './GenreCard';
import { genres } from '@/data/musicData';
import GenreTracksList from './GenreTracksList';
import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const SectionHeader = ({ title, subtitle, action }: SectionHeaderProps) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
    </div>
    {action && <div className="mt-2 md:mt-0">{action}</div>}
  </div>
);

const GenresSection = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);

  const handleGenreClick = (genreId: string) => {
    setSelectedGenreId(prevId => prevId === genreId ? null : genreId);
  };

  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container px-4">
        <SectionHeader 
          title="Browse Categories" 
          subtitle="Find music by genre and mood"
          action={
            <Link 
              to="/explore" 
              className="inline-flex items-center text-sm font-medium text-music-red hover:underline"
            >
              All genres <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          }
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre) => (
            <div 
              key={genre.id} 
              onClick={() => handleGenreClick(genre.id)}
              className="cursor-pointer"
            >
              <GenreCard 
                genre={genre} 
                className={selectedGenreId === genre.id ? "ring-4 ring-music-red" : ""}
              />
            </div>
          ))}
        </div>
        
        {selectedGenreId && (
          <div className="mt-8">
            <GenreTracksList genreId={selectedGenreId} />
          </div>
        )}
      </div>
    </section>
  );
};

export default GenresSection;
