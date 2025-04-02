
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import GenresSection from '@/components/GenresSection';
import PlayerBar from '@/components/PlayerBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <GenresSection />
      <PlayerBar />
    </div>
  );
};

export default Index;
