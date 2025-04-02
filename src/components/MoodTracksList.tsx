
import React from 'react';
import MusicCard from './MusicCard';
import { Track } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

interface MoodTracksListProps {
  moodId: string;
}

// Simulated API function to fetch tracks by mood
const fetchTracksByMood = async (moodId: string): Promise<Track[]> => {
  // This would be a real API call in a production app
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Use imported sample data - in a real app, this would come from an API
  const allTracks = [
    ...window.musicData.topHits, 
    ...window.musicData.trendingTracks, 
    ...window.musicData.topCharts.slice(0, 3)
  ];
  
  // Just return some tracks for now - in a real app we'd filter by actual mood
  return allTracks.slice(0, 5);
};

const MoodTracksList = ({ moodId }: MoodTracksListProps) => {
  const { data: tracks, isLoading, error } = useQuery({
    queryKey: ['moodTracks', moodId],
    queryFn: () => fetchTracksByMood(moodId),
  });

  if (isLoading) {
    return <div className="py-8 text-center">Loading tracks...</div>;
  }

  if (error) {
    return <div className="py-8 text-center text-red-500">Error loading tracks</div>;
  }

  if (!tracks || tracks.length === 0) {
    return <div className="py-8 text-center">No tracks found for this mood</div>;
  }

  return (
    <div className="py-4">
      <h3 className="text-xl font-medium mb-4">Popular in this mood</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tracks.map((track) => (
          <MusicCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default MoodTracksList;
