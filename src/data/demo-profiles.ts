/**
 * Demo Profile Data
 * Sample business profiles for testing the Professional Template
 */

import type { ClientProfile } from '@/types';

export const DATAR_AUTO_PROFILE: ClientProfile & {
  icon?: string;
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
} = {
  id: 'demo-datar-auto',
  slug: 'datar-auto',
  firstName: 'Salim',
  lastName: 'Sayyed',
  email: 'datarauto@gmail.com',
  phone: '+91 98900 88832',
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  bio: 'Datar Auto represents the pinnacle of automotive diagnostics in Nashik. Our facility specializes in high-end vehicle electronics and climate control systems, ensuring your drive remains as precise as the day it left the factory.',
  title: 'Founder & Lead Specialist',
  company: 'Datar Auto',
  location: 'Near Dwarka Circle, Nashik, Maharashtra',
  tagline: 'Precision Automotive Electrical',
  icon: 'precision_manufacturing',
  whatsappMessage:
    'Hi Datar Auto, I need help with my car AC/electrical issue. Please share service availability and charges.',
  socialLinks: [
    { platform: 'phone', url: 'tel:+919890088832' },
    { platform: 'email', url: 'mailto:datarauto@gmail.com' },
  ],
  projects: [],
  tapCount: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
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
      subtitle: '99% positive service feedback',
    },
  ],
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

export const DEMO_PROFILES = [DATAR_AUTO_PROFILE];

export function getDemoProfile(slug: string) {
  return DEMO_PROFILES.find((p) => p.slug === slug);
}
