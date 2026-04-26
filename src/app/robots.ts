import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/dashboard', '/.next'],
    },
    sitemap: 'https://diigicards.com/sitemap.xml',
  };
}
