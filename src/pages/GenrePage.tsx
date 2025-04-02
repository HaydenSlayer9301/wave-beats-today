
import React from 'react';
import Navbar from '@/components/Navbar';
import PlayerBar from '@/components/PlayerBar';
import { useParams } from 'react-router-dom';
import { genres, topHits, trendingTracks } from '@/data';
import { Track } from '@/data/types';
import MusicCard from '@/components/MusicCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const GenrePage = () => {
  const { id } = useParams<{ id: string }>();
  const genre = genres.find(genre => genre.id === id);
  
  if (!genre) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Genre not found</h1>
        <Link to="/explore" className="text-music-red mt-4 hover:underline">
          Return to Explore
        </Link>
      </div>
    );
  }

  // In a real app, this would come from an API filtered by genre
  // Here we're just taking some sample tracks
  const genreTracks: Track[] = [...topHits, ...trendingTracks].slice(0, 10);

  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <div className="container px-4 pt-8">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/explore">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">{genre.name}</h1>
        </div>
        
        {/* Genre Header */}
        <div className="relative h-64 rounded-lg overflow-hidden mb-8">
          <img 
            src={genre.image} 
            alt={genre.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-3xl font-bold text-white mb-2">{genre.name}</h2>
            <p className="text-white/90">{genre.description}</p>
          </div>
        </div>
        
        {/* Top Tracks for this genre */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4">Top Tracks in {genre.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {genreTracks.slice(0, 5).map((track) => (
              <MusicCard key={track.id} track={track} />
            ))}
          </div>
        </div>
        
        {/* More Tracks */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4">Popular {genre.name} Hits</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {genreTracks.slice(5, 10).map((track) => (
              <MusicCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </div>
      
      <PlayerBar />
    </div>
  );
};

export default GenrePage;
