
export enum ProjectCategory {
  CGI = 'CGI',
  FX_SIMULATION = 'FX Simulation',
  // LIGHTING = 'Lighting',
  MATTE_PAINTING = 'Matte Painting',
  // REEL = 'Showreel',
  COMPOSITING = 'Compositing',
  TRACKING = 'Tracking',
  PARTICLE_SIMULATION = 'Particle Simulation'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  thumbnail: string;
  beforeThumbnail?: string; // Image for the "before" state in slider
  videoUrl?: string; // Link to the project's breakdown reel
  youtubeId?: string; // YouTube video ID for large files
  description: string;
  software: string[];
  year: string;
  gallery?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}
