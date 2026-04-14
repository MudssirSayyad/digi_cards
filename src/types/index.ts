/**
 * Core type definitions for the NFC Digital Business Card platform
 */

export interface SocialLink {
  platform:
    | 'twitter'
    | 'linkedin'
    | 'github'
    | 'instagram'
    | 'facebook'
    | 'tiktok'
    | 'youtube'
    | 'email'
    | 'phone'
    | 'website';
  url: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  tags?: string[];
}

export interface ClientProfile {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profileImage: string;
  bio: string;
  title: string; // e.g., "Product Designer"
  company?: string;
  location?: string;
  socialLinks: SocialLink[];
  projects: Project[];
  tapCount: number;
  createdAt: string;
  updatedAt: string;
  theme?: {
    primaryColor?: string;
    accentColor?: string;
    darkMode?: boolean;
  };
}

export interface VCardData {
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
  organization?: string;
  title?: string;
  photo?: string;
  url?: string;
}
