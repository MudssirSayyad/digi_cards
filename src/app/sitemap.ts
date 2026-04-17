import { MetadataRoute } from 'next';
import { DATAR_AUTO_PROFILE } from '@/data/profile-data';
import { getProfileUrl } from '@/lib/profile-routes';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://digicards.app';

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
    {
      url: getProfileUrl(DATAR_AUTO_PROFILE),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
