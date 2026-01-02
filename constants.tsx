
import React from 'react';
import { Magazine, Service } from './types';

export const MAGAZINES: Magazine[] = [
  {
    id: 'best-practices',
    title: 'Best Practices Quarterly',
    description: 'Promoting world-class healthcare and medical professionals in the Bay Area Houston and Galveston County.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop',
    siteUrl: '#'
  },
  {
    id: 'bay-area-houston',
    title: 'Bay Area Houston Magazine',
    description: 'The premier information source and lifestyle publication for Houston’s vibrant Bay Area community.',
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2070&auto=format&fit=crop',
    siteUrl: '#'
  },
  {
    id: 'gulf-coast-mariner',
    title: 'Gulf Coast Mariner',
    description: 'Celebrating the coastal lifestyle: boating, yachting, sport fishing, and the maritime industry.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-47a0159f963f?q=80&w=2070&auto=format&fit=crop',
    siteUrl: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'video-production',
    name: 'Video Production',
    path: '/services/video-production',
    description: 'Cinematic storytelling for your brand.',
    longDescription: 'Our highly trained filmmaking professionals specialize in cinematic storytelling that elevates your brand beyond the screen. We create high-impact web commercials, feature-length documentaries, and promotional shorts that make your company stand out in a crowded digital landscape. From script development and storyboarding to high-definition filming and professional post-production editing, we handle every aspect of the filmmaking process to ensure your message is delivered with clarity and emotional resonance.',
    features: [
      'High-Impact Web Commercials',
      'Cinematic Documentary Styles',
      'Professional Script & Storyboarding',
      'Corporate Training Videos',
      'Event & Conference Coverage',
      '4K Aerial Drone Cinematography',
      'Custom Sound Design & Color Grading'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    path: '/services/graphic-design',
    description: 'World-class visual communication.',
    longDescription: 'At Bay Group Media, we believe that world-class design is the cornerstone of effective communication. Our high-end graphic design services ensure that your brand maintains a consistent, professional, and aesthetically excellent presence across all platforms. We define your visual identity by focusing on legibility, color theory, and modern design trends. Whether you need a complete brand overhaul or elegant editorial layouts for print, our designers work meticulously to ensure your brand\'s aesthetic is as high-caliber as your services.',
    features: [
      'Logo & Brand Identity Development',
      'Editorial & Magazine Layout',
      'Marketing Collateral & Brochures',
      'Custom Digital Asset Creation',
      'Large Format Print Design',
      'Typography & Color Strategy',
      'Packaging Design Solutions'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'print-advertising',
    name: 'Print Advertising',
    path: '/services/print-advertising',
    description: 'High-gloss exposure in premier publications.',
    longDescription: 'Reach an upscale, targeted audience through our portfolio of professional publications. Print advertising with Bay Group Media offers your business high-gloss exposure in the Bay Area\'s most respected magazines. We provide high-caliber advertising solutions that range from full-page spreads to strategic directory listings. Our team assists with ad design and placement strategy, ensuring that your message reaches an affluent demographic with high purchasing power. In a digital world, the permanence and prestige of a high-quality print ad remain unmatched.',
    features: [
      'High-Gloss Premium Placements',
      'Targeted Local Demographics',
      'Strategic Distribution Channels',
      'Professional Ad Design Services',
      'Affluent Readership Access',
      'Editorial Integration Opportunities',
      'Cross-Publication Discounting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'media-kit',
    name: 'Media Kit',
    path: '/services/media-kit',
    description: 'Your blueprint for marketing success.',
    longDescription: 'A Bay Group Media kit is more than just a document—it is a comprehensive blueprint for your marketing success. It contains a collection of tools specifically designed to help your company succeed in the competitive Bay Area Houston market. Our kits provide deep-dive demographic data, reader profiles, advertising rates, and strategic outreach plans. By understanding our audience\'s behaviors and preferences, we empower you to make data-driven decisions that maximize the ROI of your advertising spend.',
    features: [
      'Detailed Reader Demographics',
      'Strategic Outreach Blueprints',
      'Circulation & Distribution Maps',
      'Comprehensive Advertising Rates',
      'Success Tools & Best Practices',
      'Custom Marketing Recommendations',
      'Technical Specification Guides'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1760&auto=format&fit=crop'
  },
  {
    id: 'public-relations',
    name: 'Public Relations',
    path: '/services/public-relations',
    description: 'Managing your reputation with excellence.',
    longDescription: 'Our public relations services are designed to manage your brand\'s reputation with absolute excellence. We believe in building close, lasting relationships between your brand and the local community. We craft strategic press releases, coordinate impactful special events, and manage brand messaging to ensure you are seen in the best possible light. Whether you are launching a new project or looking to increase community involvement, our PR team ensures your story is heard by the right people at the right time.',
    features: [
      'Strategic Press Release Campaigns',
      'Special Event Planning & Execution',
      'Reputation & Brand Management',
      'Community Outreach Programs',
      'Media Relations & Pitching',
      'Crisis Communication Support',
      'Brand Storytelling & Advocacy'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop'
  }
];
