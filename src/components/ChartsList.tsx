
import React, { useState } from 'react';
import MusicCard from './MusicCard';
import { Track } from '@/data/types';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ChartsListProps {
  top10Tracks: Track[];
  top50Tracks: Track[];
}

const ChartsList = ({ top10Tracks, top50Tracks }: ChartsListProps) => {
  const [chartType, setChartType] = useState<"top10" | "top50">("top10");
  
  const tracks = chartType === "top10" ? top10Tracks : top50Tracks;
  
  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h3 className="text-xl font-medium">Charts</h3>
        <div className="mt-2 md:mt-0">
          <RadioGroup 
            defaultValue="top10" 
            className="flex space-x-4" 
            onValueChange={(value) => setChartType(value as "top10" | "top50")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="top10" id="top10" />
              <Label htmlFor="top10">Top 10</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="top50" id="top50" />
              <Label htmlFor="top50">Top 50</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tracks.slice(0, chartType === "top10" ? 10 : 15).map((track, index) => (
          <div key={track.id} className="relative">
            <div className="absolute top-2 left-2 z-20 bg-music-red text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
              {index + 1}
            </div>
            <MusicCard track={track} />
          </div>
        ))}
      </div>
      
      {chartType === "top50" && (
        <div className="mt-4 text-center">
          <button className="text-music-red hover:underline">
            View all 50 tracks
          </button>
        </div>
      )}
    </div>
  );
};

export default ChartsList;
