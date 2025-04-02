import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PlayerBar from '@/components/PlayerBar';
import { Radio as RadioIcon, ListMusic, Headphones } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MusicCard from '@/components/MusicCard';
import { topHits, trendingTracks } from '@/data';
import InstallApp from '@/components/InstallApp';

// Group tracks by genre to simulate radio stations
const tracksByGenre = {
  "Pop": topHits.filter(track => ["Beyoncé", "Taylor Swift", "Sabrina Carpenter"].includes(track.artist)),
  "Hip-Hop": trendingTracks.filter(track => ["Kendrick Lamar", "Doja Cat"].includes(track.artist)),
  "Rock": topHits.filter(track => track.id === "3").concat(trendingTracks.filter(track => track.id === "10")),
  "Lo-Fi": trendingTracks.filter(track => ["Chappell Roan"].includes(track.artist)),
  "Electronic": trendingTracks.filter(track => track.id === "6"),
  "Jazz": trendingTracks.filter(track => track.id === "7"),
};

const RadioStation = ({ name, genre, listeners, isActive, onClick }: { 
  name: string, 
  genre: string, 
  listeners: string,
  isActive: boolean,
  onClick: () => void 
}) => (
  <div 
    className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${isActive ? 'bg-gray-100 border-music-red' : 'hover:bg-gray-50'}`}
    onClick={onClick}
  >
    <div className={`h-12 w-12 rounded-full flex items-center justify-center ${isActive ? 'bg-music-red text-white' : 'bg-music-red/10 text-music-red'} mr-4`}>
      <RadioIcon size={20} />
    </div>
    <div className="flex-1">
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-muted-foreground">{genre}</p>
    </div>
    <div className="text-sm text-muted-foreground">{listeners} listening</div>
  </div>
);

const Radio = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedStation, setSelectedStation] = useState<string>("Top Hits Radio");
  
  const stations = [
    { name: "Top Hits Radio", genre: "Pop", listeners: "2.4K" },
    { name: "Hip-Hop Vibes", genre: "Hip-Hop", listeners: "1.8K" },
    { name: "Rock Classics", genre: "Rock", listeners: "1.5K" },
    { name: "Chill & Relax", genre: "Lo-Fi", listeners: "1.2K" },
    { name: "EDM Party", genre: "Electronic", listeners: "1.0K" },
    { name: "Jazz Lounge", genre: "Jazz", listeners: "850" },
  ];

  const getTracksForStation = (stationName: string) => {
    const station = stations.find(s => s.name === stationName);
    return station ? tracksByGenre[station.genre as keyof typeof tracksByGenre] || [] : [];
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      <InstallApp />
      
      <div className="container px-4 pt-8">
        <h1 className="text-3xl font-bold mb-6">Radio Stations</h1>
        
        <p className="text-muted-foreground mb-8">
          Listen to curated radio stations from around the world
        </p>
        
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md mb-6 bg-gray-100">
            <TabsTrigger value="overview" className="flex-1">
              <RadioIcon className="h-4 w-4 mr-2" />
              Stations
            </TabsTrigger>
            <TabsTrigger value="tracks" className="flex-1">
              <ListMusic className="h-4 w-4 mr-2" />
              Tracks
            </TabsTrigger>
            <TabsTrigger value="listening" className="flex-1">
              <Headphones className="h-4 w-4 mr-2" />
              Now Playing
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            {stations.map((station, index) => (
              <RadioStation 
                key={index} 
                name={station.name} 
                genre={station.genre} 
                listeners={station.listeners}
                isActive={station.name === selectedStation}
                onClick={() => {
                  setSelectedStation(station.name);
                  setActiveTab("tracks");
                }}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="tracks">
            <div className="mb-4 flex items-center">
              <h2 className="text-xl font-semibold">
                {selectedStation}
              </h2>
              <button 
                className="ml-auto text-sm text-music-red"
                onClick={() => setActiveTab("overview")}
              >
                Back to Stations
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getTracksForStation(selectedStation).map(track => (
                <MusicCard key={track.id} track={track} />
              ))}
              {getTracksForStation(selectedStation).length === 0 && (
                <div className="col-span-full py-8 text-center text-muted-foreground">
                  No tracks available for this station yet
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="listening">
            <div className="p-8 text-center bg-gray-50 rounded-lg">
              <Headphones className="mx-auto h-12 w-12 text-music-red mb-4" />
              <h3 className="text-xl font-medium mb-2">Streaming Now</h3>
              <p className="text-muted-foreground mb-4">
                {selectedStation} - {stations.find(s => s.name === selectedStation)?.genre}
              </p>
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-music-red text-white">
                <span>{stations.find(s => s.name === selectedStation)?.listeners} listeners</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <PlayerBar />
    </div>
  );
};

export default Radio;
