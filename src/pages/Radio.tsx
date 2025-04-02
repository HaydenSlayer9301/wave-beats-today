
import React from 'react';
import Navbar from '@/components/Navbar';
import PlayerBar from '@/components/PlayerBar';
import { Music } from 'lucide-react';

const RadioStation = ({ name, genre, listeners }: { name: string, genre: string, listeners: string }) => (
  <div className="flex items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors">
    <div className="h-12 w-12 rounded-full flex items-center justify-center bg-music-red/10 text-music-red mr-4">
      <Music size={20} />
    </div>
    <div className="flex-1">
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-muted-foreground">{genre}</p>
    </div>
    <div className="text-sm text-muted-foreground">{listeners} listening</div>
  </div>
);

const Radio = () => {
  const stations = [
    { name: "Top Hits Radio", genre: "Pop", listeners: "2.4K" },
    { name: "Hip-Hop Vibes", genre: "Hip-Hop", listeners: "1.8K" },
    { name: "Rock Classics", genre: "Rock", listeners: "1.5K" },
    { name: "Chill & Relax", genre: "Lo-Fi", listeners: "1.2K" },
    { name: "EDM Party", genre: "Electronic", listeners: "1.0K" },
    { name: "Jazz Lounge", genre: "Jazz", listeners: "850" },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <div className="container px-4 pt-8">
        <h1 className="text-3xl font-bold mb-6">Radio Stations</h1>
        
        <p className="text-muted-foreground mb-8">
          Listen to curated radio stations from around the world
        </p>
        
        <div className="space-y-4">
          {stations.map((station, index) => (
            <RadioStation 
              key={index} 
              name={station.name} 
              genre={station.genre} 
              listeners={station.listeners} 
            />
          ))}
        </div>
      </div>
      
      <PlayerBar />
    </div>
  );
};

export default Radio;
