
import React from 'react';
import Navbar from '@/components/Navbar';
import PlayerBar from '@/components/PlayerBar';
import { featuredArtists } from '@/data/musicData';
import { Button } from '@/components/ui/button';
import { Music, Play } from 'lucide-react';

const ArtistCard = ({ name, image, genre }: { name: string, image: string, genre: string }) => (
  <div className="flex flex-col items-center p-4">
    <div className="relative mb-4">
      <img 
        src={image} 
        alt={name} 
        className="h-40 w-40 object-cover rounded-full"
      />
      <Button 
        size="icon" 
        className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-music-red text-white hover:bg-music-red-dark shadow-md"
      >
        <Play className="h-5 w-5" fill="white" />
      </Button>
    </div>
    <h3 className="font-medium text-center">{name}</h3>
    <p className="text-sm text-muted-foreground">{genre}</p>
  </div>
);

const Artists = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <div className="container px-4 pt-8">
        <h1 className="text-3xl font-bold mb-6">Featured Artists</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredArtists.map((artist) => (
            <ArtistCard 
              key={artist.id} 
              name={artist.name} 
              image={artist.image} 
              genre={artist.genre} 
            />
          ))}
        </div>
      </div>
      
      <PlayerBar />
    </div>
  );
};

export default Artists;
