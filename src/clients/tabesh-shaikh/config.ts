/**
 * Tabesh Shaikh - Client Configuration
 * Advocate associated with MTQ Sayyed Legal Pvt. Ltd. in Nashik, Maharashtra.
 */

import type { ClientProfile } from '@/types';

type TabeshShaikhProfile = ClientProfile & {
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

export const TABESH_SHAIKH_PROFILE: TabeshShaikhProfile = {
  id: 'tabesh-shaikh',
  slug: 'tabesh-shaikh',
  useFlatRoute: true,
  template: 'lawyer',
  firstName: 'Tabesh',
  lastName: 'Shaikh',
  phone: '+91 70589 79330',
  email: 'tabeshshaikh017@gmail.com',
  profileImage: '/assets/tabesh_shaikh.png',
  company: 'MTQ Sayyed Legal Pvt. Ltd.',
  location:
    'MTQ Sayyed Legal Pvt. Ltd., Opp. District Court, Old CBS, Nashik, Maharashtra 422001, India',
  bio: 'Advocate Tabesh Shaikh is a dedicated legal professional associated with MTQ Sayyed Legal Pvt. Ltd., Nashik. Having gained practical legal exposure over the past few years, he has been involved in legal research, drafting, documentation, case preparation, and assisting in court proceedings. Recently enrolled as an Advocate, he is committed to providing ethical, client-focused, and practical legal solutions while continuously expanding his legal expertise.',
  title: 'Advocate',
  tagline: 'Associated with MTQ Sayyed Legal Pvt. Ltd.',
  whatsappMessage:
    'Hi Tabesh, I found your digital card and would like to connect for legal consultation.',
  socialLinks: [
    { platform: 'phone', url: 'tel:+917058979330' },
    { platform: 'email', url: 'mailto:tabeshshaikh017@gmail.com' },
    // { platform: 'website', url: 'https://mtqslegal.in/' },
  ],
  projects: [],
  tapCount: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  businessHighlights: [
    {
      icon: 'work',
      title: 'Practical Legal Experience',
      subtitle: 'Legal research & case preparation',
    },
    {
      icon: 'business',
      title: 'MTQ Sayyed Legal Pvt. Ltd.',
      subtitle: 'Associated Advocate',
    },
    {
      icon: 'handshake',
      title: 'Ethical & Client-Focused',
      subtitle: 'Dedicated & practical solutions',
    },
  ],
  services: [
    {
      title: 'Legal Consultation',
      icon: 'chat',
      color: 'primary',
      items: ['Legal Advice', 'Case Evaluation', 'Legal Guidance', 'Client Consultation'],
    },
    {
      title: 'Civil Law',
      icon: 'scale',
      color: 'secondary',
      items: ['Civil Disputes', 'Property Matters', 'Contract Review', 'Recovery Matters'],
    },
    {
      title: 'Criminal Law',
      icon: 'shield',
      color: 'primary-container',
      items: [
        'Criminal Consultation',
        'Bail Assistance',
        'Complaint Drafting',
        'Legal Representation',
      ],
    },
    {
      title: 'Banking & Financial',
      icon: 'work',
      color: 'primary',
      items: [
        'SARFAESI Matters',
        'Debt Recovery',
        'Banking Documentation',
        'Financial Dispute Assistance',
      ],
    },
    {
      title: 'Documentation & Drafting',
      icon: 'description',
      color: 'secondary',
      items: ['Legal Notices', 'Affidavits', 'Agreements', 'Petitions & Applications'],
    },
  ],
};
