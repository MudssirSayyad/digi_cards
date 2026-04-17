/**
 * Clients Registry
 * Central hub for all client projects and profiles
 */

import type { ClientProfile } from '@/types';
import { AMJAD_SAYYED_PROFILE, DATAR_AUTO_PROFILE, SAMEER_SAYYED_PROFILE } from './datar-auto';
import { matchesProfileRoute } from '@/lib/profile-routes';

/**
 * All active client profiles
 * Add new clients here as they onboard
 */
export const ACTIVE_PROFILES: ClientProfile[] = [
  DATAR_AUTO_PROFILE,
  SAMEER_SAYYED_PROFILE,
  AMJAD_SAYYED_PROFILE,
];

/**
 * Get a profile by its slug
 * @param slug - Profile slug (e.g., 'datar-auto')
 */
export function getProfileBySlug(slug: string): ClientProfile | undefined {
  return ACTIVE_PROFILES.find((p) => p.slug === slug);
}

/**
 * Get a profile by route parameters
 * @param companySlug - Company slug from URL
 * @param ownerSlug - Owner slug from URL
 */
export function getProfileByRoute(
  companySlug: string,
  ownerSlug: string
): ClientProfile | undefined {
  return ACTIVE_PROFILES.find((profile) => matchesProfileRoute(profile, companySlug, ownerSlug));
}

// Export client configs
export { DATAR_AUTO_PROFILE } from './datar-auto';
export { SAMEER_SAYYED_PROFILE } from './datar-auto';
export { AMJAD_SAYYED_PROFILE } from './datar-auto';
export type * from './datar-auto';
