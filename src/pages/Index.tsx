
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import GenresSection from '@/components/GenresSection';
import PlayerBar from '@/components/PlayerBar';
import NewsletterSection from '@/components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="lava-lamp-background fixed inset-0 -z-10"></div>
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <GenresSection />
      <NewsletterSection />
      <PlayerBar />
    </div>
  );
};

export default Index;
