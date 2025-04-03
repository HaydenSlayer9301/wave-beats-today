
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import GenresSection from '@/components/GenresSection';
import ArtistsSection from '@/components/ArtistsSection';
import MoodsSection from '@/components/MoodsSection';
import NewsletterSection from '@/components/NewsletterSection';
import PlayerBar from '@/components/PlayerBar';
import InstallApp from '@/components/InstallApp';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Enhanced Lava Lamp Background with brighter bubbles */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-rose-300/20" />
        
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-orange-300/30 blur-3xl"
          animate={{
            x: ['0%', '50%', '20%', '80%', '0%'],
            y: ['0%', '40%', '80%', '20%', '0%'],
            scale: [1, 1.2, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-rose-300/30 blur-3xl"
          animate={{
            x: ['80%', '30%', '70%', '10%', '80%'],
            y: ['10%', '60%', '30%', '70%', '10%'],
            scale: [1.2, 1, 1.3, 0.9, 1.2],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute w-72 h-72 rounded-full bg-amber-300/30 blur-3xl"
          animate={{
            x: ['20%', '70%', '20%', '50%', '20%'],
            y: ['60%', '20%', '40%', '70%', '60%'],
            scale: [1, 1.4, 1.2, 1, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-red-300/20 blur-3xl"
          animate={{
            x: ['70%', '20%', '50%', '30%', '70%'],
            y: ['80%', '30%', '10%', '60%', '80%'],
            scale: [1.1, 0.9, 1.3, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <Navbar />
      <HeroSection />
      <TrendingSection />
      <ArtistsSection />
      <GenresSection />
      <MoodsSection />
      <NewsletterSection />
      <PlayerBar />
      <InstallApp />
    </div>
  );
};

export default Index;
