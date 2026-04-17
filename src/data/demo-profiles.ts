/**
 * Profile Data
 * Sample business profiles for the Professional Template
 */

import type { ClientProfile } from '@/types';
import { matchesProfileRoute } from '@/lib/profile-routes';

export const DATAR_AUTO_PROFILE: ClientProfile & {
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
} = {
  id: 'datar-auto',
  slug: 'datar-auto',
  firstName: 'Salim',
  lastName: 'Sayyed',
  email: 'datarauto@gmail.com',
  phone: '+91 98900 88832',
  profileImage: '/assets/datar_owner.png',
  logoImage: '/assets/datar_logo.png',
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
    { platform: 'website', url: 'https://maps.app.goo.gl/' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/' },
    { platform: 'instagram', url: 'https://www.instagram.com/' },
    { platform: 'youtube', url: 'https://www.youtube.com/' },
    { platform: 'facebook', url: 'https://www.facebook.com/' },
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

export const PROFILES = [DATAR_AUTO_PROFILE];

export function getProfileBySlug(slug: string) {
  return PROFILES.find((p) => p.slug === slug);
}

export function getProfileByRoute(companySlug: string, ownerSlug: string) {
  return PROFILES.find((profile) => matchesProfileRoute(profile, companySlug, ownerSlug));
}
