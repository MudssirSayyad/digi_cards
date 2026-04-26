import { MetadataRoute } from 'next';
import { ACTIVE_PROFILES } from '@/clients';
import { getProfileUrl } from '@/lib/profile-routes';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://diigicards.com';

  // TODO: Fetch all profiles from Supabase and generate URLs
  // For now, return base URLs
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...ACTIVE_PROFILES.map((profile) => ({
      url: getProfileUrl(profile),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ];
}
