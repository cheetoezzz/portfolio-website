import type { ImageMetadata } from 'astro';
import concert from '../assets/eventracker.JPG';
import shopora from '../assets/sshopora.png';

export interface Project {
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Concert Event Tracker',
    description: 'A modern web application that allows users to discover and track upcoming concerts.',
    image: concert,
    imageAlt: 'Concert Event Tracker homepage with concert search and trending live music events',
    technologies: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Ticketmaster API', 'Bandsintown API'],
    githubUrl: 'https://github.com/cheetoezzz/concert-event-tracker',
    liveUrl: 'https://event-tracker-one-xi.vercel.app/',
    category: 'Web application', featured: true,
  },
  {
    title: 'SHOPORA – Minimalist E-Commerce Website',
    description: 'A modern minimalist e-commerce application that allows users to browse products and add items to their cart.',
    image: shopora,
    imageAlt: 'SHOPORA storefront showcasing its modern living collection and minimalist shopping interface',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Context API', 'REST API'],
    githubUrl: 'https://github.com/cheetoezzz/ecom',
    liveUrl: 'https://e-commerce-seven-mu-53.vercel.app/',
    category: 'E-commerce', featured: true,
  },
];
