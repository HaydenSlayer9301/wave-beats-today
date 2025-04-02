
// Main export file that re-exports everything from our data modules
export * from './types';
export * from './tracks';
export * from './genres';
export * from './moods';
export * from './charts';
export * from './artists';

// Global data access for window object
declare global {
  interface Window {
    musicData: {
      topHits: typeof import('./tracks').topHits;
      trendingTracks: typeof import('./tracks').trendingTracks;
      genres: typeof import('./genres').genres;
      featuredArtists: typeof import('./artists').featuredArtists;
      moods: typeof import('./moods').moods;
      topCharts: typeof import('./charts').topCharts;
      top50Chart: typeof import('./charts').top50Chart;
    };
  }
}

// Initialize window.musicData
if (typeof window !== 'undefined') {
  const { topHits, trendingTracks } = require('./tracks');
  const { genres } = require('./genres');
  const { featuredArtists } = require('./artists');
  const { moods } = require('./moods');
  const { topCharts, top50Chart } = require('./charts');
  
  window.musicData = {
    topHits,
    trendingTracks,
    genres,
    featuredArtists,
    moods,
    topCharts,
    top50Chart
  };
}
