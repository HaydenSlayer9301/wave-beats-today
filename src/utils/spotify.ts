
/**
 * Spotify API utilities
 */

// These should ideally come from environment variables
const CLIENT_ID = "YOUR_SPOTIFY_CLIENT_ID";
const CLIENT_SECRET = "YOUR_SPOTIFY_CLIENT_SECRET";

/**
 * Gets an access token from Spotify's API using client credentials flow
 * @returns Promise containing the access token
 */
export const getSpotifyToken = async () => {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: "grant_type=client_credentials",
  });
  const data = await res.json();
  return data.access_token;
};

/**
 * Example function to search for tracks
 * @param query Search query
 * @returns Promise containing search results
 */
export const searchTracks = async (query: string) => {
  const token = await getSpotifyToken();
  
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  return response.json();
};
