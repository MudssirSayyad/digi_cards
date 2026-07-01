/**
 * Mudssir Sayyad - Client Configuration
 * Software Engineer and Mobile App Developer.
 */

import type { ClientProfile } from '@/types';

type DeveloperProfile = ClientProfile & {
  icon?: string;
  logoImage?: string;
  whatsappMessage?: string;
  services?: Array<{
    title: string;
    items: string[];
  }>;
  technologies?: string[];
  tagline?: string;
  businessHighlights?: Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>;
};

export const MUDSSIR_SAYYED_PROFILE: DeveloperProfile = {
  id: 'mudssir-sayyad',
  slug: 'mudssir-sayyad',
  useFlatRoute: true,
  template: 'developer',
  firstName: 'Mudssir',
  lastName: 'Sayyad',
  phone: '+91 95038 24431',
  email: 'mudssir.sayyad.ms@example.com',
  profileImage: '/assets/mudssir_sayyad.png',
  company: 'Freelance Software Developer',
  location: 'Nashik, Maharashtra, India',
  bio: 'Results-driven Software Engineer with 4+ years of experience in Flutter and 1.4+ years in React Native development. Skilled in building scalable, high-performance mobile applications and custom software solutions tailored to business needs. Experienced in GraphQL, REST APIs, Firebase, payment gateway integration, and modern mobile architectures. Passionate about transforming ideas into reliable, user-friendly digital products for startups, enterprises, and growing businesses.',
  title: 'Software Engineer | Mobile Application Developer',
  tagline: 'Transforming ideas into high-performance digital products',
  whatsappMessage:
    'Hi Mudssir, I found your digital card and would like to discuss a software project.',
  socialLinks: [
    { platform: 'phone', url: 'tel:+919503824431' },
    { platform: 'email', url: 'mailto:mudssir.sayyad.ms@example.com' },
  ],
  projects: [],
  tapCount: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  businessHighlights: [
    {
      icon: 'code',
      title: '4+ Years Flutter Experience',
      subtitle: 'Native-speed cross-platform apps',
    },
    {
      icon: 'react',
      title: '1.4+ Years React Native',
      subtitle: 'Robust JavaScript/TypeScript apps',
    },
    {
      icon: 'api',
      title: 'GraphQL & REST APIs',
      subtitle: 'Seamless and fast backend integration',
    },
    {
      icon: 'automation',
      title: 'Custom Software Systems',
      subtitle: 'Business automation, billing, and CRM',
    },
  ],
  technologies: [
    'Flutter',
    'React Native',
    'GraphQL',
    'REST API',
    'Firebase',
    'Payment Gateway',
    'Dart',
    'JavaScript',
    'TypeScript',
    'GetX',
    'BLoC',
    'Git',
    'GitHub',
    'Figma',
    'Android Studio',
    'VS Code',
  ],
  services: [
    {
      title: 'Mobile App Development',
      items: [
        'Flutter App Development',
        'React Native App Development',
        'Android Applications',
        'Cross-Platform Mobile Apps',
      ],
    },
    {
      title: 'Custom Software Development',
      items: [
        'Business Management Software',
        'CRM & ERP Solutions',
        'Restaurant & Hotel Management Systems',
        'LMS & Educational Platforms',
        'Inventory & Billing Systems',
        'Any Custom Software as per Business Requirements',
      ],
    },
    {
      title: 'Backend & API Integration',
      items: [
        'REST API Integration',
        'GraphQL Integration',
        'Firebase Services',
        'Authentication & Authorization',
        'Payment Gateway Integration',
      ],
    },
    {
      title: 'UI/UX Development',
      items: [
        'Modern UI Design',
        'Responsive Layouts',
        'Custom Animations',
        'Pixel Perfect Interfaces',
      ],
    },
    {
      title: 'Maintenance & Support',
      items: [
        'App Maintenance',
        'Bug Fixes',
        'Performance Optimization',
        'Play Store & App Store Deployment',
        'Feature Enhancements',
      ],
    },
  ],
};
