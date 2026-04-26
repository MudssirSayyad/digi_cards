/**
 * Datar Auto - Client Configuration
 * Premium automotive diagnostics and electrical services in Nashik, Maharashtra.
 */

import type { ClientProfile } from '@/types';

type DatarAutoProfile = ClientProfile & {
  icon?: string;
  logoImage?: string;
  whatsappMessage?: string;
  services?: Array<{
    title: string;
    icon: string;
    color: 'primary' | 'secondary' | 'primary-container';
    items: string[];
  }>;
  tagline?: string;
  businessHighlights?: Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>;
};

const DATAR_AUTO_SHARED = {
  email: 'contactdatarauto@gmail.com',
  profileImage: '',
  logoImage: '/assets/datar_logo.png',
  company: 'Datar Auto',
  icon: 'precision_manufacturing',
  businessHighlights: [
    {
      icon: 'bolt',
      title: 'Experienced Technicians',
      subtitle: 'Certified master mechanics',
    },
    {
      icon: 'speed',
      title: 'Fast Service',
      subtitle: 'Rapid diagnostics & turnaround',
    },
    {
      icon: 'verified',
      title: 'Customer Satisfaction',
      subtitle: 'Trusted local automotive care',
    },
  ],
} satisfies Pick<
  DatarAutoProfile,
  'email' | 'profileImage' | 'logoImage' | 'company' | 'location' | 'icon' | 'businessHighlights'
>;

export const DATAR_AUTO_PROFILE: DatarAutoProfile = {
  ...DATAR_AUTO_SHARED,
  id: 'datar-auto-founder',
  slug: 'datar-auto',
  firstName: 'Salim',
  lastName: 'Sayyed',
  phone: '+91 98900 88832',
  profileImage: '/assets/datar_founder.png',
  location:
    'Shop No 9, DATAR AUTO ELECTRICALS WORKS, Prabhu Business Centre, Param Pujya Ravishankarji Marg, Nashik Road, Nasik, Nashik, Maharashtra 422006',
  bio: 'Datar Auto is a trusted automotive service provider in Nashik, Maharashtra, specializing in car AC and electrical repairs. With over 40 years of experience, we offer expert diagnostics, fast turnaround, and dependable service quality.',
  title: 'Founder & Lead Specialist',
  tagline: 'Since 1986, 40+ years of trusted automotive care',
  whatsappMessage:
    'Hi Datar Auto, I need help with my car AC/electrical issue. Please share service availability and charges.',
  socialLinks: [
    { platform: 'phone', url: 'tel:+919890088832' },
    { platform: 'email', url: 'mailto:contactdatarauto@gmail.com' },
    { platform: 'instagram', url: 'https://www.instagram.com/' },
    { platform: 'youtube', url: 'https://www.youtube.com/' },
    { platform: 'facebook', url: 'https://www.facebook.com/' },
  ],
  projects: [],
  tapCount: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  services: [
    {
      title: 'Car AC',
      icon: 'ac_unit',
      color: 'primary',
      items: ['Repair & Gas Refill', 'Cooling Diagnostics', 'Compressor Repair'],
    },
    {
      title: 'Electrical',
      icon: 'electric_bolt',
      color: 'secondary',
      items: ['Master Wiring', 'Fault Diagnosis', 'Meter/Dashboard Repair'],
    },
    {
      title: 'Advanced',
      icon: 'memory',
      color: 'primary-container',
      items: ['ECM/ECU Repair', 'Smart Sensors', 'Battery & Charging'],
    },
    {
      title: 'Support',
      icon: 'build_circle',
      color: 'primary',
      items: ['Authorized Battery Dealer', 'On-site Support', 'Preventive Maintenance'],
    },
  ],
};

export const SAMEER_SAYYED_PROFILE: DatarAutoProfile = {
  ...DATAR_AUTO_SHARED,
  id: 'datar-auto-sameer',
  slug: 'sameer-sayyed',
  firstName: 'Sameer',
  lastName: 'Sayyed',
  phone: '+91 9766338632',
  profileImage: '',
  location: 'DATAR AUTO COOLING, Shingada Talav, Renuka Nagar, Nashik, Maharashtra 422001',
  bio: 'Sameer Sayyed handles ECM/ECU diagnostics and electrical work at Datar Auto, focusing on dependable fault tracing, wiring repairs, and control unit support for modern vehicles.',
  title: 'ECM/ECU & Electrical Work',
  tagline: 'ECM/ECU diagnostics and electrical repair',
  whatsappMessage:
    'Hi Sameer, I need help with ECM/ECU or electrical work. Please share service availability and charges.',
  socialLinks: [
    { platform: 'phone', url: 'tel:+919766338632' },
    { platform: 'email', url: 'mailto:contactdatarauto@gmail.com' },
    { platform: 'instagram', url: 'https://www.instagram.com/' },
    { platform: 'facebook', url: 'https://www.facebook.com/' },
  ],
  projects: [],
  tapCount: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  services: [
    {
      title: 'ECM/ECU Diagnostics',
      icon: 'memory',
      color: 'primary-container',
      items: ['ECM/ECU Fault Finding', 'Sensor Mapping', 'Module Testing'],
    },
    {
      title: 'Electrical Work',
      icon: 'electric_bolt',
      color: 'secondary',
      items: ['Wiring Repairs', 'Short Circuit Diagnosis', 'Dash & Meter Work'],
    },
    {
      title: 'Advanced Support',
      icon: 'bolt',
      color: 'primary',
      items: ['Charging System Checks', 'Battery Testing', 'Preventive Inspection'],
    },
  ],
};

export const AMJAD_SAYYED_PROFILE: DatarAutoProfile = {
  ...DATAR_AUTO_SHARED,
  id: 'datar-auto-amjad',
  slug: 'amjad-sayyed',
  firstName: 'Amjad',
  lastName: 'Sayyed',
  phone: '+91 9766338634',
  profileImage: '',
  location: 'DATAR AUTO COOLING, Shingada Talav, Renuka Nagar, Nashik, Maharashtra 422001',
  bio: 'Amjad Sayyed manages car AC and electrical work at Datar Auto, with a practical focus on cooling performance, leak tracing, compressor issues, and everyday electrical repairs.',
  title: 'AC & Electrical Work',
  tagline: 'Car AC and electrical service specialist',
  whatsappMessage:
    'Hi Amjad, I need help with car AC or electrical work. Please share service availability and charges.',
  socialLinks: [
    { platform: 'phone', url: 'tel:+919766338634' },
    { platform: 'email', url: 'mailto:contactdatarauto@gmail.com' },
    { platform: 'instagram', url: 'https://www.instagram.com/' },
    { platform: 'facebook', url: 'https://www.facebook.com/' },
  ],
  projects: [],
  tapCount: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  services: [
    {
      title: 'Car AC Services',
      icon: 'ac_unit',
      color: 'primary',
      items: ['AC Gas Refill', 'Leak Checking', 'Compressor Service'],
    },
    {
      title: 'Electrical Work',
      icon: 'electric_bolt',
      color: 'secondary',
      items: ['Wiring Repairs', 'Fuse & Relay Issues', 'General Diagnostics'],
    },
    {
      title: 'Cooling Support',
      icon: 'speed',
      color: 'primary-container',
      items: ['Cooling Performance Check', 'Cabin Airflow Review', 'Routine Maintenance'],
    },
  ],
};
