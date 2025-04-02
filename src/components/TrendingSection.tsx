
import React from 'react';
import { ArrowRight } from 'lucide-react';
import MusicCard from './MusicCard';
import { trendingTracks } from '@/data/musicData';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const SectionHeader = ({ title, subtitle, action }: SectionHeaderProps) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
    </div>
    {action && <div className="mt-2 md:mt-0">{action}</div>}
  </div>
);

const TrendingSection = () => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <SectionHeader 
          title="What's Hot" 
          subtitle="The most played tracks this week"
          action={
            <a 
              href="#" 
              className="inline-flex items-center text-sm font-medium text-music-red hover:underline"
            >
              See all <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          }
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingTracks.map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
