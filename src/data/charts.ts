
import { Track } from './types';

// Top 10 charts
export const topCharts: Track[] = [
  {
    id: "chart1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    artistImage: "https://images.unsplash.com/photo-1643538661643-bff0756fb238?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRoZSUyMHdlZWtuZHxlbnwwfHwwfHx8MA%3D%3D",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyayUyMGFsYnVtfGVufDB8fDB8fHww",
    duration: "3:22",
    plays: "3.2B",
    preview_url: "https://p.scdn.co/mp3-preview/505483c4870b92d7383ed9aafffe98f288c78412"
  },
  {
    id: "chart2",
    title: "Shape of You",
    artist: "Ed Sheeran",
    artistImage: "https://images.unsplash.com/photo-1593698054509-8a169c287096?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    cover: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fHww",
    duration: "3:53",
    plays: "3.1B",
    preview_url: "https://p.scdn.co/mp3-preview/07c282f4785bdc6c10e76304ba82ce6cf68f7c3a"
  },
  {
    id: "chart3",
    title: "Someone Like You",
    artist: "Adele",
    artistImage: "https://images.unsplash.com/photo-1543486958-158c5e4f1a83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGlhbm98ZW58MHx8MHx8fDA%3D",
    duration: "4:45",
    plays: "1.8B",
    preview_url: "https://p.scdn.co/mp3-preview/5d7762df4688e4a90cd9dff51d6c1c4b5ee89098"
  }
];

// Top 50 charts - this is a subset for display purposes
export const top50Chart: Track[] = [
  ...topCharts,
  {
    id: "chart4",
    title: "Dance Monkey",
    artist: "Tones and I",
    artistImage: "https://images.unsplash.com/photo-1524207874394-5ec7c8c8e1a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHdvbWFuJTIwc2luZ2VyfGVufDB8fDB8fHww",
    cover: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhbmNlJTIwbW9ua2V5fGVufDB8fDB8fHww",
    duration: "3:29",
    plays: "2.6B",
    preview_url: "https://p.scdn.co/mp3-preview/4d06c54539fe2a9dc82d0893e453d107d99c4703"
  },
  {
    id: "chart5",
    title: "Bad Guy",
    artist: "Billie Eilish",
    artistImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFufGVufDB8fDB8fHww",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGdyZWVufGVufDB8fDB8fHww",
    duration: "3:14",
    plays: "2.4B",
    preview_url: "https://p.scdn.co/mp3-preview/6e0a996a29ac54ce83f912a652252daac44efe12"
  },
  {
    id: "chart6",
    title: "Starboy",
    artist: "The Weeknd",
    artistImage: "https://images.unsplash.com/photo-1643538661643-bff0756fb238?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRoZSUyMHdlZWtuZHxlbnwwfHwwfHx8MA%3D%3D",
    cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnN8ZW58MHx8MHx8fDA%3D",
    duration: "3:50",
    plays: "2.3B",
    preview_url: "https://p.scdn.co/mp3-preview/8bfb75894243f398335db3817019ba89fecf671d"
  }
];
