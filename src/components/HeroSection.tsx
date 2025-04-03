
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { topHits } from '@/data/tracks';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const featuredTrack = topHits[0];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position when hovering over the section
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    if (!isHovering) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section 
      className="relative overflow-hidden py-16 md:py-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-800 to-rose-800 -z-10">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-orange-700/60 blur-3xl"
          animate={{
            x: ['5%', '30%', '15%', '40%', '5%'],
            y: ['10%', '30%', '60%', '20%', '10%'],
            scale: [1, 1.2, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div 
          className="absolute w-72 h-72 rounded-full bg-rose-700/50 blur-3xl"
          animate={{
            x: ['70%', '40%', '60%', '30%', '70%'],
            y: ['20%', '50%', '30%', '60%', '20%'],
            scale: [1.2, 1, 1.3, 0.9, 1.2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-amber-700/40 blur-3xl"
          animate={{
            x: ['35%', '65%', '25%', '55%', '35%'],
            y: ['60%', '20%', '40%', '70%', '60%'],
            scale: [1, 1.4, 1.2, 1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Cursor following bubbles */}
        {isHovering && (
          <>
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-rose-800/70 blur-xl pointer-events-none"
              animate={{
                x: mousePosition.x - 64,
                y: mousePosition.y - 64,
                scale: [1, 1.1, 1],
              }}
              transition={{
                x: { duration: 0.2, ease: "easeOut" },
                y: { duration: 0.2, ease: "easeOut" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-orange-900/60 blur-xl pointer-events-none"
              animate={{
                x: mousePosition.x - 48,
                y: mousePosition.y - 48,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                x: { duration: 0.3, ease: "easeOut" },
                y: { duration: 0.3, ease: "easeOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            />
            <motion.div
              className="absolute w-16 h-16 rounded-full bg-amber-800/50 blur-lg pointer-events-none"
              animate={{
                x: mousePosition.x - 32,
                y: mousePosition.y - 32,
                scale: [1, 1.2, 1],
              }}
              transition={{
                x: { duration: 0.4, ease: "easeOut" },
                y: { duration: 0.4, ease: "easeOut" },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            />
          </>
        )}
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
