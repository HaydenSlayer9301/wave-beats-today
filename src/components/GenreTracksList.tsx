
import React from 'react';
import MusicCard from './MusicCard';
import { Track } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

interface GenreTracksListProps {
  genreId: string;
}

// Simulated API function to fetch tracks by genre
const fetchTracksByGenre = async (genreId: string): Promise<Track[]> => {
  // This would be a real API call in a production app
  // For now, we'll simulate a delay and return sample data
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Use imported sample data and filter based on genre ID
  // In a real app, this would come from an API
  const allTracks = [...window.musicData.topHits, ...window.musicData.trendingTracks];
  
  // Just return some tracks for now - in a real app we'd filter by actual genre
  return allTracks.slice(0, 5);
};

const GenreTracksList = ({ genreId }: GenreTracksListProps) => {
  const { data: tracks, isLoading, error } = useQuery({
    queryKey: ['genreTracks', genreId],
    queryFn: () => fetchTracksByGenre(genreId),
  });

  if (isLoading) {
    return <div className="py-8 text-center">Loading tracks...</div>;
  }

  if (error) {
    return <div className="py-8 text-center text-red-500">Error loading tracks</div>;
  }

  if (!tracks || tracks.length === 0) {
    return <div className="py-8 text-center">No tracks found for this genre</div>;
  }

  return (
    <div className="py-4">
      <h3 className="text-xl font-medium mb-4">Popular in this genre</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tracks.map((track) => (
          <MusicCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default GenreTracksList;
