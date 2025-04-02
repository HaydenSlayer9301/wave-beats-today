
import React from 'react';
import Navbar from '@/components/Navbar';
import PlayerBar from '@/components/PlayerBar';
import { genres } from '@/data/musicData';
import GenreCard from '@/components/GenreCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Explore = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <div className="container px-4 pt-8">
        <h1 className="text-3xl font-bold mb-6">Explore Music</h1>
        
        <Tabs defaultValue="genres">
          <TabsList className="mb-6">
            <TabsTrigger value="genres">Genres</TabsTrigger>
            <TabsTrigger value="moods">Moods</TabsTrigger>
            <TabsTrigger value="new">New Releases</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="genres" className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {genres.map((genre) => (
                <GenreCard key={genre.id} genre={genre} />
              ))}
            </div>
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
