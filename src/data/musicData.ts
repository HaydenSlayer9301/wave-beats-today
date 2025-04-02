export interface Track {
  id: string;
  title: string;
  artist: string;
  artistImage: string;
  cover: string;
  duration: string;
  plays: string;
}

export interface Genre {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface FeaturedArtist {
  id: string;
  name: string;
  image: string;
  genre: string;
}

export interface Mood {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
}

export const topHits: Track[] = [
  {
    id: "1",
    title: "Dancing With The Stars",
    artist: "Beyoncé",
    artistImage: "https://images.unsplash.com/photo-1618224665987-d2dcb343059a?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/f87171/ffffff?text=Beyoncé",
    duration: "3:42",
    plays: "2.4M"
  },
  {
    id: "2",
    title: "Midnight Rain",
    artist: "Taylor Swift",
    artistImage: "https://images.unsplash.com/photo-1615809398537-8695989a1b4f?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/fb923c/ffffff?text=Taylor+Swift",
    duration: "3:15",
    plays: "1.9M"
  },
  {
    id: "3",
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    artistImage: "https://images.unsplash.com/photo-1618826579934-a3fac9225ce3?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/fbbf24/ffffff?text=Lady+Gaga",
    duration: "3:58",
    plays: "1.7M"
  },
  {
    id: "4",
    title: "Paint The Town Red",
    artist: "Doja Cat",
    artistImage: "https://images.unsplash.com/photo-1622322062536-45abcaabfead?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/f97316/ffffff?text=Doja+Cat",
    duration: "3:05",
    plays: "1.5M"
  },
  {
    id: "5",
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    artistImage: "https://images.unsplash.com/photo-1618224096041-03ac9069388f?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/ef4444/ffffff?text=Kendrick",
    duration: "3:27",
    plays: "1.3M"
  }
];

export const trendingTracks: Track[] = [
  {
    id: "6",
    title: "Water",
    artist: "Tyla",
    artistImage: "https://images.unsplash.com/photo-1527697911963-13e7f5f12cf4?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/fb7185/ffffff?text=Tyla",
    duration: "3:22",
    plays: "1.2M"
  },
  {
    id: "7",
    title: "Texas Hold 'Em",
    artist: "Beyoncé",
    artistImage: "https://images.unsplash.com/photo-1618224665987-d2dcb343059a?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/f43f5e/ffffff?text=Beyoncé",
    duration: "3:42",
    plays: "1.1M"
  },
  {
    id: "8",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    artistImage: "https://images.unsplash.com/photo-1534960522182-bb0bb00c9197?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/e11d48/ffffff?text=Sabrina",
    duration: "2:33",
    plays: "1.0M"
  },
  {
    id: "9",
    title: "Good Luck, Babe!",
    artist: "Chappell Roan",
    artistImage: "https://images.unsplash.com/photo-1537700668413-fd23c66769f4?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/be123c/ffffff?text=Chappell",
    duration: "3:37",
    plays: "950K"
  },
  {
    id: "10",
    title: "Harley Quinn",
    artist: "Feid & ATL Jacob",
    artistImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/9f1239/ffffff?text=Feid",
    duration: "3:10",
    plays: "920K"
  }
];

export const genres: Genre[] = [
  {
    id: "1",
    name: "Pop",
    image: "https://placehold.co/500x500/f97316/ffffff?text=Pop",
    description: "Chart-topping hits and catchy melodies"
  },
  {
    id: "2",
    name: "Hip-Hop",
    image: "https://placehold.co/500x500/ea384c/ffffff?text=Hip-Hop",
    description: "Rap, beats and urban culture"
  },
  {
    id: "3",
    name: "R&B",
    image: "https://placehold.co/500x500/f43f5e/ffffff?text=R%26B",
    description: "Smooth rhythms and soulful vocals"
  },
  {
    id: "4",
    name: "Rock",
    image: "https://placehold.co/500x500/e11d48/ffffff?text=Rock",
    description: "Classic and contemporary rock anthems"
  },
  {
    id: "5",
    name: "Electronic",
    image: "https://placehold.co/500x500/be123c/ffffff?text=Electronic",
    description: "EDM, house and dance music"
  },
  {
    id: "6",
    name: "Latin",
    image: "https://placehold.co/500x500/fb7185/ffffff?text=Latin",
    description: "Reggaeton, bachata and more"
  }
];

export const moods: Mood[] = [
  {
    id: "mood1",
    name: "Happy",
    image: "https://placehold.co/500x500/fbbf24/ffffff?text=Happy",
    description: "Upbeat and joyful tracks to brighten your day",
    color: "bg-yellow-400"
  },
  {
    id: "mood2",
    name: "Chill",
    image: "https://placehold.co/500x500/60a5fa/ffffff?text=Chill",
    description: "Relaxed vibes for unwinding and relaxation",
    color: "bg-blue-400"
  },
  {
    id: "mood3",
    name: "Energetic",
    image: "https://placehold.co/500x500/f87171/ffffff?text=Energetic",
    description: "High-energy tracks to get you moving",
    color: "bg-red-400"
  },
  {
    id: "mood4",
    name: "Focus",
    image: "https://placehold.co/500x500/a78bfa/ffffff?text=Focus",
    description: "Concentration-enhancing music for work or study",
    color: "bg-purple-400"
  },
  {
    id: "mood5",
    name: "Blues",
    image: "https://placehold.co/500x500/3b82f6/ffffff?text=Blues",
    description: "Soulful and emotional blues classics",
    color: "bg-blue-600"
  },
  {
    id: "mood6",
    name: "Romantic",
    image: "https://placehold.co/500x500/ec4899/ffffff?text=Romantic",
    description: "Love songs and romantic melodies",
    color: "bg-pink-500"
  }
];

export const topCharts: Track[] = [
  {
    id: "chart1",
    title: "TEXAS HOLD 'EM",
    artist: "Beyoncé",
    artistImage: "https://images.unsplash.com/photo-1618224665987-d2dcb343059a?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/f87171/ffffff?text=Beyoncé",
    duration: "3:57",
    plays: "5.2M"
  },
  {
    id: "chart2",
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    artistImage: "https://images.unsplash.com/photo-1618826579934-a3fac9225ce3?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/fbbf24/ffffff?text=Lady+Gaga",
    duration: "3:58",
    plays: "4.7M"
  },
  {
    id: "chart3",
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    artistImage: "https://images.unsplash.com/photo-1618224096041-03ac9069388f?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/ef4444/ffffff?text=Kendrick",
    duration: "3:27",
    plays: "4.3M"
  },
  {
    id: "chart4",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    artistImage: "https://images.unsplash.com/photo-1534960522182-bb0bb00c9197?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/e11d48/ffffff?text=Sabrina",
    duration: "2:33",
    plays: "4.2M"
  },
  {
    id: "chart5",
    title: "We Can't Be Friends",
    artist: "Ariana Grande",
    artistImage: "https://images.unsplash.com/photo-1535712593684-dd9bd32a7280?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/f43f5e/ffffff?text=Ariana",
    duration: "3:31",
    plays: "3.9M"
  },
  {
    id: "chart6",
    title: "Lovin On Me",
    artist: "Jack Harlow",
    artistImage: "https://images.unsplash.com/photo-1523583798162-adbcedfe1c9e?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/be123c/ffffff?text=Jack+H",
    duration: "2:52",
    plays: "3.7M"
  },
  {
    id: "chart7",
    title: "Good Luck, Babe!",
    artist: "Chappell Roan",
    artistImage: "https://images.unsplash.com/photo-1537700668413-fd23c66769f4?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/be123c/ffffff?text=Chappell",
    duration: "3:37",
    plays: "3.5M"
  },
  {
    id: "chart8",
    title: "Fortnight",
    artist: "Taylor Swift",
    artistImage: "https://images.unsplash.com/photo-1615809398537-8695989a1b4f?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/fb923c/ffffff?text=Taylor+Swift",
    duration: "4:12",
    plays: "3.3M"
  },
  {
    id: "chart9",
    title: "Saturn",
    artist: "SZA",
    artistImage: "https://images.unsplash.com/photo-1548661574-c1197c82654d?w=150&h=150&fit=crop&auto=format", 
    cover: "https://placehold.co/400x400/7e69ab/ffffff?text=SZA",
    duration: "3:04",
    plays: "3.1M"
  },
  {
    id: "chart10",
    title: "Redrum",
    artist: "21 Savage",
    artistImage: "https://images.unsplash.com/photo-1543523195-e978d6ffcff9?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/dc2626/ffffff?text=21+Savage",
    duration: "3:46",
    plays: "3.0M"
  }
];

export const top50Chart: Track[] = [
  {
    id: "chart11",
    title: "Snooze",
    artist: "SZA",
    artistImage: "https://images.unsplash.com/photo-1548661574-c1197c82654d?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/7e69ab/ffffff?text=SZA",
    duration: "3:22",
    plays: "2.9M"
  },
  {
    id: "chart12",
    title: "Water",
    artist: "Tyla",
    artistImage: "https://images.unsplash.com/photo-1527697911963-13e7f5f12cf4?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/fb7185/ffffff?text=Tyla",
    duration: "3:22",
    plays: "2.8M"
  },
  {
    id: "chart13",
    title: "Harley Quinn",
    artist: "Feid & ATL Jacob",
    artistImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/9f1239/ffffff?text=Feid",
    duration: "3:10",
    plays: "2.7M"
  },
  {
    id: "chart14",
    title: "Paint The Town Red",
    artist: "Doja Cat",
    artistImage: "https://images.unsplash.com/photo-1622322062536-45abcaabfead?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/f97316/ffffff?text=Doja+Cat",
    duration: "3:05",
    plays: "2.6M"
  },
  {
    id: "chart15",
    title: "Rich Baby Daddy",
    artist: "Drake ft. Sexyy Red & SZA",
    artistImage: "https://images.unsplash.com/photo-1615386612448-15c891328d97?w=150&h=150&fit=crop&auto=format",
    cover: "https://placehold.co/400x400/a855f7/ffffff?text=Drake",
    duration: "4:18",
    plays: "2.5M"
  }
];

export const featuredArtists: FeaturedArtist[] = [
  {
    id: "1",
    name: "Beyoncé",
    image: "https://placehold.co/300x300/f97316/ffffff?text=Beyoncé",
    genre: "Pop"
  },
  {
    id: "2",
    name: "Drake",
    image: "https://placehold.co/300x300/ea384c/ffffff?text=Drake",
    genre: "Hip-Hop"
  },
  {
    id: "3",
    name: "The Weeknd",
    image: "https://placehold.co/300x300/f43f5e/ffffff?text=The+Weeknd",
    genre: "R&B"
  },
  {
    id: "4",
    name: "Bad Bunny",
    image: "https://placehold.co/300x300/e11d48/ffffff?text=Bad+Bunny",
    genre: "Latin"
  }
];

export const currentlyPlaying: Track = {
  id: "2",
  title: "Midnight Rain",
  artist: "Taylor Swift",
  artistImage: "https://images.unsplash.com/photo-1615809398537-8695989a1b4f?w=150&h=150&fit=crop&auto=format",
  cover: "https://placehold.co/400x400/fb923c/ffffff?text=Taylor+Swift",
  duration: "3:15",
  plays: "1.9M"
};

declare global {
  interface Window {
    musicData: {
      topHits: Track[];
      trendingTracks: Track[];
      genres: Genre[];
      featuredArtists: FeaturedArtist[];
      moods: Mood[];
      topCharts: Track[];
      top50Chart: Track[];
    };
  }
}

if (typeof window !== 'undefined') {
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
