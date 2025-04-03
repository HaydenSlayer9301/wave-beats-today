
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredArtists } from '@/data';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
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

const ArtistsSection = () => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <SectionHeader 
          title="Featured Artists" 
          subtitle="The artists everyone's talking about"
          action={
            <Link
              to="/artists" 
              className="inline-flex items-center text-sm font-medium text-music-red hover:underline"
            >
              All artists <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          }
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {featuredArtists.map((artist) => (
            <Link
              to={`/artists/${artist.id}`}
              key={artist.id}
              className="group flex flex-col items-center text-center"
            >
              <Avatar className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-2 border-white shadow-lg transition-transform group-hover:scale-105">
                <AvatarImage src={artist.image} alt={artist.name} className="object-cover" />
                <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 font-medium text-lg">{artist.name}</h3>
              <p className="text-sm text-muted-foreground">{artist.genre}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
