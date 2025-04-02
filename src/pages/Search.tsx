
import React, { useState } from 'react';
import { searchTracks } from '@/utils/spotify';
import { Track } from '@/data/types';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import MusicCard from '@/components/MusicCard';
import NowPlayingVisualizer from '@/components/NowPlayingVisualizer';
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
  preview_url?: string;
  external_urls: {
    spotify: string;
  };
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
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

  // Handle audio play
  const handlePlay = (trackId: string) => {
    setCurrentlyPlaying(currentlyPlaying === trackId ? null : trackId);
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
      preview_url: track.preview_url,
      external_urls: track.external_urls,
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tracks.map((track) => (
                <motion.div
                  key={track.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl shadow-md"
                >
                  <img 
                    src={track.cover} 
                    alt={track.title} 
                    className="w-full h-48 object-cover rounded mb-4" 
                  />
                  <h2 className="text-lg font-semibold">{track.title}</h2>
                  <p className="text-sm text-gray-500">{track.artist}</p>
                  
                  <div className="mt-3">
                    {track.external_urls && (
                      <a 
                        href={track.external_urls.spotify} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-sm"
                      >
                        Open in Spotify
                      </a>
                    )}
                  </div>
                  
                  {track.preview_url && (
                    <div className="mt-2">
                      <audio 
                        controls 
                        className="w-full" 
                        src={track.preview_url}
                        onPlay={() => handlePlay(track.id)} 
                        onPause={() => setCurrentlyPlaying(null)}
                      >
                        <source src={track.preview_url} type="audio/mpeg" />
                      </audio>
                      {currentlyPlaying === track.id && <NowPlayingVisualizer />}
                    </div>
                  )}
                </motion.div>
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
