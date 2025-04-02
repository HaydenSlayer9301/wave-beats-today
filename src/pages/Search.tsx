
import React, { useState } from 'react';
import { searchTracks } from '@/utils/spotify';
import { Track } from '@/data/types';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import MusicCard from '@/components/MusicCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import PlayerBar from '@/components/PlayerBar';

interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  duration_ms: number;
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['spotifySearch', searchTerm],
    queryFn: async () => {
      if (!searchTerm) return { tracks: { items: [] } };
      try {
        return await searchTracks(searchTerm);
      } catch (error) {
        console.error("Error searching tracks:", error);
        toast({
          title: "Error",
          description: "Failed to search tracks. Please try again later.",
          variant: "destructive",
        });
        return { tracks: { items: [] } };
      }
    },
    enabled: !!searchTerm,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery.trim());
    }
  };

  // Convert Spotify track format to our app's Track format
  const formatTracks = (spotifyTracks: SpotifyTrack[]): Track[] => {
    return spotifyTracks.map(track => ({
      id: track.id,
      title: track.name,
      artist: track.artists.map(artist => artist.name).join(', '),
      artistImage: track.album.images[2]?.url || 'https://placehold.co/40x40/gray/white?text=A',
      cover: track.album.images[0]?.url || 'https://placehold.co/300x300/gray/white?text=Album',
      duration: formatDuration(track.duration_ms),
      plays: 'N/A',
    }));
  };

  const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const tracks = data?.tracks?.items ? formatTracks(data.tracks.items as SpotifyTrack[]) : [];

  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-8 px-4"
      >
        <h1 className="text-3xl font-bold mb-6">Search Music</h1>
        
        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <Input
            type="text"
            placeholder="Search for songs, artists, or albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            <SearchIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>
        
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-music-red border-r-transparent"></div>
            <p className="mt-2 text-gray-600">Searching...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12 text-red-500">
            <p>Error loading search results. Please try again.</p>
          </div>
        )}
        
        {!isLoading && !error && searchTerm && tracks.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No results found for "{searchTerm}"</p>
          </div>
        )}
        
        {tracks.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Results for "{searchTerm}"</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tracks.map((track) => (
                <MusicCard key={track.id} track={track} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
      
      <PlayerBar />
    </div>
  );
};

export default Search;
