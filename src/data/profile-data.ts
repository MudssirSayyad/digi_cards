/**
 * Legacy profile data entrypoint.
 *
 * Keep this as a compatibility layer so older imports continue to work,
 * but source the data from the production client registry.
 */

export {
  DATAR_AUTO_PROFILE,
  ACTIVE_PROFILES as PROFILES,
  getProfileBySlug,
  getProfileByRoute,
} from '@/clients';
