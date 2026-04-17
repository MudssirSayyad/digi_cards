import type { ClientProfile } from '@/types';
import { slugify } from '@/lib/utils';

type RouteProfile = Pick<ClientProfile, 'firstName' | 'lastName' | 'company' | 'slug'>;

export function getProfilePath(profile: RouteProfile): string {
  const companySlug = profile.company ? slugify(profile.company) : slugify(profile.slug);
  const ownerSlug = slugify(`${profile.firstName} ${profile.lastName}`);

  return profile.company ? `/${companySlug}/${ownerSlug}` : `/${companySlug}`;
}

export function getProfileUrl(profile: RouteProfile): string {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://digicards.app';
  return `${baseUrl}${getProfilePath(profile)}`;
}

export function matchesProfileRoute(
  profile: RouteProfile,
  companySlug: string,
  ownerSlug?: string
): boolean {
  const expectedCompanySlug = profile.company ? slugify(profile.company) : slugify(profile.slug);
  const expectedOwnerSlug = slugify(`${profile.firstName} ${profile.lastName}`);

  if (profile.company) {
    return expectedCompanySlug === companySlug && expectedOwnerSlug === ownerSlug;
  }

  return expectedCompanySlug === companySlug;
}