
import { Project, ProjectCategory, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Heli VFX',
    category: [ProjectCategory.CGI],
    thumbnail: '/Heli_Final.png',
    beforeThumbnail: '/Heli_Before.png',
    // videoUrl: '/heli vfx.mp4',
    youtubeId: 'g5F1NTSqU_8',
    description: 'A seamless blend of 3D vehicle assets and digital matte painting to create a moody, cinematic sequence.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },
  {
    id: '2',
    title: 'Explosion Soldier',
    category: [ProjectCategory.FX_SIMULATION],
    thumbnail: '/Explosion_Final.png',
    beforeThumbnail: '/Explosion_Before.png',
    // videoUrl: '/explosion soldier.mov',
    youtubeId: 'KHZ9qdXWPKI',
    description: 'A high-intensity sequence featuring a massive CG explosion with realistic fire, smoke plumes, and ground-shaking shockwaves.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },

  {
    id: '3',
    title: 'Escape',
    category: [ProjectCategory.COMPOSITING],
    thumbnail: '/Escape_Final.png',
    beforeThumbnail: '/Escape_Before.png',
    // videoUrl: '/Escape.mov',
    youtubeId: '5Nb0sNmbjgs',
    description: 'A dramatic escape sequence utilizing heavy practical fog and rhythmic, warm ground lighting for depth.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },
  {
    id: '4',
    title: 'Mysterious Cave',
    category: [ProjectCategory.TRACKING, ProjectCategory.FX_SIMULATION],
    thumbnail: '/MysteriousCave_Final.png',
    beforeThumbnail: '/MysteriousCave_Before.png',
    // videoUrl: '/Mysterious Cave.mov',
    youtubeId: '8KsH7icBBZk',
    description: 'A masterclass in digital fire simulation and shadow manipulation, creating a sense of depth and mystery in a high-contrast subterranean setting.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },
  {
    id: '5',
    title: 'Echoes',
    category: [ProjectCategory.CGI, ProjectCategory.PARTICLE_SIMULATION],
    thumbnail: '/Echoes_Final.png',
    beforeThumbnail: '/Echoes_Before.png',
    // videoUrl: '/Echoes.mp4',
    youtubeId: 'z63w0SG3X74',
    description: 'A massive sci-fi freighter looms over a sprawling cityscape, utilizing a teal-heavy color grade to create a cold, dystopian atmosphere.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },
  {
    id: '6',
    title: 'Snowy Lake',
    category: [ProjectCategory.MATTE_PAINTING, ProjectCategory.PARTICLE_SIMULATION],
    thumbnail: '/SnowkyLake_Final.png',
    beforeThumbnail: '/SnowkyLake_Before.png',
    // videoUrl: '/Snowy lake.mp4',
    youtubeId: 'n4xJbJkvvlU',
    description: 'Highlights advanced matte painting and realistic snow simulations to create a serene, high-altitude cinematic environment.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },
  {
    id: '7',
    title: 'The Hunt',
    category: [ProjectCategory.COMPOSITING],
    thumbnail: '/Hunt_Final.png',
    beforeThumbnail: '/Hunt_Before.png',
    // videoUrl: '/Hunt.mp4',
    youtubeId: 'o9j4D8_W_e8', // Replace with actual YouTube ID
    description: 'A high-stakes shootout featuring integrated muzzle flashes, realistic blood hits.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },
  {
    id: '8',
    title: 'The Jaguar',
    category: [ProjectCategory.COMPOSITING],
    thumbnail: '/Jaguar_Final.png',
    beforeThumbnail: '/Jaguar_Before.png',
    // videoUrl: '/Jaguar.mp4',
    youtubeId: 'X8erVBb7qvg',
    description: 'A high-stakes shootout featuring integrated muzzle flashes, realistic blood hits.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },
  {
    id: '9',
    title: 'Wounded Girl',
    category: [ProjectCategory.COMPOSITING],
    thumbnail: '/Girl_Final.png',
    beforeThumbnail: '/Girl_Before.png',
    // videoUrl: '/Jaguar.mp4',
    youtubeId: 'JivWMDyr7L0',
    description: 'A high-stakes shootout featuring integrated muzzle flashes, realistic blood hits.',
    software: ['After Effects', 'Da vinci Resolve'],
    year: '2025'
  },



];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'FilmBro',
    role: 'FX Artist',
    period: '2024-2025',
    description: 'Contributed to major franchise projects. Focused on particle dynamics, After Effects compositing.'
  },
  {
    id: 'e2',
    company: 'PhantomFx',
    role: 'Compositor',
    period: '2023-2024',
    description: 'Leading a team of artists for high-budget feature films.'
  },

  // {
  //   id: 'e3',
  //   company: 'Double Negative (DNEG)',
  //   role: 'Junior Compositor',
  //   period: '2016 - 2018',
  //   description: 'Executed high-quality rotoscoping, paint-outs, and multi-pass integration for commercial and television projects.'
  // }
];
