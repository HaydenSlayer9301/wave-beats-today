
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { moods } from '@/data';
import MoodCard from './MoodCard';
import { Link } from 'react-router-dom';

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

const MoodsSection = () => {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container px-4">
        <SectionHeader 
          title="Music by Mood" 
          subtitle="Find the perfect soundtrack for every moment"
          action={
            <Link
              to="/explore?tab=moods" 
              className="inline-flex items-center text-sm font-medium text-music-red hover:underline"
            >
              All moods <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          }
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {moods.map((mood) => (
            <div key={mood.id}>
              <MoodCard mood={mood} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodsSection;
