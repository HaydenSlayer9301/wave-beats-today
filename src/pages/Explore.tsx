
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PlayerBar from '@/components/PlayerBar';
import { genres } from '@/data/genres';
import { moods } from '@/data/moods';
import { topCharts, top50Chart } from '@/data/charts';
import GenreCard from '@/components/GenreCard';
import MoodCard from '@/components/MoodCard';
import MoodTracksList from '@/components/MoodTracksList';
import ChartsList from '@/components/ChartsList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Music, Headphones, Guitar, Mic } from 'lucide-react';

const Explore = () => {
  const [selectedMoodId, setSelectedMoodId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("genres");

  const handleMoodClick = (moodId: string) => {
    setSelectedMoodId(prevId => prevId === moodId ? null : moodId);
  };

  // Tab icon mapping
  const tabIcons = {
    genres: <Music className="h-4 w-4 mr-2" />,
    moods: <Headphones className="h-4 w-4 mr-2" />,
    new: <Guitar className="h-4 w-4 mr-2" />,
    charts: <Mic className="h-4 w-4 mr-2" />
  };

  // Tab background images
  const tabBackgrounds = {
    genres: "https://placehold.co/1200x200/ea384c/ffffff?text=Genres",
    moods: "https://placehold.co/1200x200/60a5fa/ffffff?text=Moods",
    new: "https://placehold.co/1200x200/22c55e/ffffff?text=New+Releases",
    charts: "https://placehold.co/1200x200/f97316/ffffff?text=Charts"
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <div className="container px-4 pt-8">
        <h1 className="text-3xl font-bold mb-6">Explore Music</h1>
        
        <Tabs defaultValue="genres" onValueChange={setActiveTab}>
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
          
          {/* Banner image that changes based on selected tab */}
          <div className="w-full h-32 mb-6 rounded-lg overflow-hidden">
            <img 
              src={tabBackgrounds[activeTab as keyof typeof tabBackgrounds]} 
              alt={`${activeTab} banner`} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <TabsContent value="genres" className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {genres.map((genre) => (
                <GenreCard
                  key={genre.id} 
                  genre={genre}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="moods" className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {moods.map((mood) => (
                <div 
                  key={mood.id} 
                  onClick={() => handleMoodClick(mood.id)}
                  className="cursor-pointer"
                >
                  <MoodCard 
                    mood={mood} 
                    className={selectedMoodId === mood.id ? "ring-4 ring-music-red" : ""}
                  />
                </div>
              ))}
            </div>
            
            {selectedMoodId && <MoodTracksList moodId={selectedMoodId} />}
          </TabsContent>
          
          <TabsContent value="new" className="p-4 text-center">
            <p className="text-muted-foreground">New releases coming soon!</p>
          </TabsContent>
          
          <TabsContent value="charts" className="space-y-8">
            <ChartsList top10Tracks={topCharts} top50Tracks={top50Chart} />
          </TabsContent>
        </Tabs>
      </div>
      
      <PlayerBar />
    </div>
  );
};

export default Explore;
