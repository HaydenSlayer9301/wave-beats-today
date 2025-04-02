
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
  // Import modules using ES modules syntax
  import('./tracks').then(tracks => {
    import('./genres').then(genres => {
      import('./moods').then(moods => {
        import('./charts').then(charts => {
          import('./artists').then(artists => {
            window.musicData = {
              topHits: tracks.topHits,
              trendingTracks: tracks.trendingTracks,
              genres: genres.genres,
              featuredArtists: artists.featuredArtists,
              moods: moods.moods,
              topCharts: charts.topCharts,
              top50Chart: charts.top50Chart
            };
          });
        });
      });
    });
  });
}
