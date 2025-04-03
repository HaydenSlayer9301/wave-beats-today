
import React, { useState } from 'react';
import { searchTracks } from '@/utils/spotify';
import { Track } from '@/data/types';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import MusicCard from '@/components/MusicCard';
import NowPlayingVisualizer from '@/components/NowPlayingVisualizer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import PlayerBar from '@/components/PlayerBar';
import { useAudio } from '@/contexts/AudioContext';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

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
  const { toast } = useToast();
  const { play, pause, isPlaying, currentTrack } = useAudio();

  // Search query with loading state
  const { data, isLoading, error } = useQuery({
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

  // Handle play via AudioContext
  const handlePlayTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      // Toggle play/pause if it's the same track
      isPlaying ? pause() : play(track);
    } else {
      // Play new track
      play(track);
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
            placeholder="Search for songs, artists, or albums..."
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <SearchIcon className="mr-2 h-4 w-4" />
            )}
            Search
          </Button>
        </form>
        
        {/* Loading state */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4">
                    <Skeleton className="h-5 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {/* Error state */}
        {error && !isLoading && (
          <div className="text-center py-12 text-red-500">
            <p>Error loading search results. Please try again.</p>
          </div>
        )}
        
        {/* Empty results */}
        {!isLoading && !error && searchTerm && tracks.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No results found for "{searchTerm}"</p>
          </div>
        )}
        
        {/* Search results */}
        {!isLoading && tracks.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Results for "{searchTerm}"</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tracks.map((track) => (
                <motion.div
                  key={track.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all"
                >
                  <div 
                    className="relative cursor-pointer"
                    onClick={() => track.preview_url && handlePlayTrack(track)}
                  >
                    <img 
                      src={track.cover} 
                      alt={track.title} 
                      className="w-full h-48 object-cover" 
                    />
                    
                    {track.preview_url && currentTrack?.id === track.id && isPlaying && (
                      <div className="absolute bottom-2 right-2">
                        <NowPlayingVisualizer />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold line-clamp-1">{track.title}</h3>
                    <p className="text-sm text-gray-500">{track.artist}</p>
                    
                    {track.external_urls && (
                      <div className="mt-3">
                        <a 
                          href={track.external_urls.spotify} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Open in Spotify
                        </a>
                      </div>
                    )}
                    
                    {!track.preview_url && (
                      <p className="mt-2 text-xs text-amber-600">
                        Preview not available
                      </p>
                    )}
                  </div>
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
