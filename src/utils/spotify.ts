
/**
 * Spotify API utilities
 */

// These should ideally come from environment variables
// Using demo values for testing - these are sample values and will need to be replaced with real credentials
const CLIENT_ID = "spotify_client_id_placeholder";
const CLIENT_SECRET = "spotify_client_secret_placeholder";

/**
 * Gets an access token from Spotify's API using client credentials flow
 * @returns Promise containing the access token
 */
export const getSpotifyToken = async () => {
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      },
      body: "grant_type=client_credentials",
    });
    
    if (!res.ok) {
      // For demo purposes, return mock data if credentials aren't set up
      console.warn("Using mock Spotify token - please set up real Spotify API credentials");
      return "mock_token";
    }
    
    const data = await res.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify token:", error);
    // Return a mock token for demonstration purposes
    return "mock_token";
  }
};

/**
 * Search Spotify for tracks matching the query
 * @param query The search query
 * @param token Spotify API token
 * @returns Promise containing the tracks that match the query
 */
export const searchSpotify = async (query: string, token: string) => {
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    if (!res.ok) {
      console.warn("Error searching Spotify - using mock data");
      return getMockSearchResults(query);
    }
    
    const data = await res.json();
    return data.tracks.items;
  } catch (error) {
    console.error("Error searching Spotify:", error);
    return getMockSearchResults(query);
  }
};

/**
 * Example function to search for tracks
 * @param query Search query
 * @returns Promise containing search results
 */
export const searchTracks = async (query: string) => {
  try {
    const token = await getSpotifyToken();
    
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    if (!response.ok) {
      // If API request fails (likely due to invalid credentials), return mock data
      console.warn("Using mock search results - please set up real Spotify API credentials");
      return getMockSearchResults(query);
    }
    
    return response.json();
  } catch (error) {
    console.error("Error searching tracks:", error);
    // Return mock data for demonstration purposes
    return getMockSearchResults(query);
  }
};

/**
 * Function to generate mock search results when Spotify API is not available
 */
function getMockSearchResults(query: string) {
  // Use trending tracks as mock data
  const mockResults = window.musicData?.trendingTracks?.slice(0, 5) || [];
  
  return {
    tracks: {
      items: mockResults.map(track => ({
        id: track.id,
        name: track.title,
        artists: [{ name: track.artist }],
        album: {
          name: `Album for ${track.title}`,
          images: [
            { url: track.cover },
            { url: track.cover },
            { url: track.artistImage },
          ],
        },
        duration_ms: 180000, // 3 minutes
        preview_url: "https://p.scdn.co/mp3-preview/sample-preview.mp3", // Mock preview URL
        external_urls: {
          spotify: `https://open.spotify.com/track/${track.id}`
        }
      })),
    },
  };
}
