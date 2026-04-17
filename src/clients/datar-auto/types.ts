/**
 * Datar Auto Type Definitions
 */

import type { ClientProfile } from '@/types';

export interface DatarAutoProfile extends ClientProfile {
  icon?: string;
  logoImage?: string;
  whatsappMessage?: string;
  tagline?: string;
  businessHighlights?: Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>;
  services?: Array<{
    title: string;
    icon: string;
    color: 'primary' | 'secondary' | 'primary-container';
    items: string[];
  }>;
}
