
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { topHits } from '@/data/musicData';

const HeroSection = () => {
  const featuredTrack = topHits[0];

  return (
    <section className="relative overflow-hidden hero-gradient py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Today's Top Hits
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-lg">
                The hottest tracks everyone's listening to right now. Updated daily.
              </p>
            </div>
            
            <div className="pt-2">
              <div className="inline-flex gap-4">
                <Button className="bg-white text-music-red-dark hover:bg-white/90 font-medium">
                  <Play className="mr-2 h-4 w-4" />
                  Play All
                </Button>
                <Button variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                  View Playlist
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="relative group">
              <img 
                src={featuredTrack.cover}
                alt={`${featuredTrack.title} by ${featuredTrack.artist}`}
                className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-2xl object-cover transform transition-transform group-hover:scale-[1.02] duration-300"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/40 rounded-full p-4">
                  <Play className="h-12 w-12 text-white" fill="white" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-bold text-white truncate">
                  {featuredTrack.title}
                </h3>
                <p className="text-white/80">{featuredTrack.artist}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
