// Define all shared types here
export interface Track {
  id: string;
  title: string;
  artist: string;
  artistImage: string;
  cover: string;
  duration: string;
  plays: string;
  preview_url?: string;  // Optional preview URL for the track
  external_urls?: {      // Optional external URLs
    spotify: string;
  };
}

export interface Genre {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Mood {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
}

export interface FeaturedArtist {
  id: string;
  name: string;
  image: string;
  genre: string;
  followers?: string;
  bio?: string;
}
