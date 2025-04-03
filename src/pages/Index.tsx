
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
      <motion.div 
        className="lava-lamp-background fixed inset-0 -z-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{
            x: ['-10%', '60%', '-10%'],
            y: ['10%', '40%', '10%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            x: ['60%', '0%', '60%'],
            y: ['40%', '20%', '40%']
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>
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
