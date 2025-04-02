
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PlayerBar from '@/components/PlayerBar';
import { genres } from '@/data/musicData';
import GenreCard from '@/components/GenreCard';
import GenreTracksList from '@/components/GenreTracksList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Music, Headphones, Guitar, Mic } from 'lucide-react';

const Explore = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);

  const handleGenreClick = (genreId: string) => {
    setSelectedGenreId(prevId => prevId === genreId ? null : genreId);
  };

  // Tab icon mapping
  const tabIcons = {
    genres: <Music className="h-4 w-4 mr-2" />,
    moods: <Headphones className="h-4 w-4 mr-2" />,
    new: <Guitar className="h-4 w-4 mr-2" />,
    charts: <Mic className="h-4 w-4 mr-2" />
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <div className="container px-4 pt-8">
        <h1 className="text-3xl font-bold mb-6">Explore Music</h1>
        
        <Tabs defaultValue="genres">
          <TabsList className="mb-6">
            <TabsTrigger value="genres" className="flex items-center">
              {tabIcons.genres} Genres
            </TabsTrigger>
            <TabsTrigger value="moods" className="flex items-center">
              {tabIcons.moods} Moods
            </TabsTrigger>
            <TabsTrigger value="new" className="flex items-center">
              {tabIcons.new} New Releases
            </TabsTrigger>
            <TabsTrigger value="charts" className="flex items-center">
              {tabIcons.charts} Charts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="genres" className="space-y-8">
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
            
            {selectedGenreId && <GenreTracksList genreId={selectedGenreId} />}
          </TabsContent>
          
          <TabsContent value="moods" className="p-4 text-center">
            <p className="text-muted-foreground">Mood-based exploration coming soon!</p>
          </TabsContent>
          
          <TabsContent value="new" className="p-4 text-center">
            <p className="text-muted-foreground">New releases coming soon!</p>
          </TabsContent>
          
          <TabsContent value="charts" className="p-4 text-center">
            <p className="text-muted-foreground">Charts coming soon!</p>
          </TabsContent>
        </Tabs>
      </div>
      
      <PlayerBar />
    </div>
  );
};

export default Explore;
