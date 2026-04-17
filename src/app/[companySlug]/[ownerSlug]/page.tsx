import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ClientProfile } from '@/types';
import PortfolioClient from '@/app/v/[slug]/portfolio-client';
import ProfessionalTemplate from '@/components/ProfessionalTemplate';
import { getProfileByRoute } from '@/data/profile-data';
import { getProfileUrl } from '@/lib/profile-routes';

async function fetchClientProfile(
  companySlug: string,
  ownerSlug: string
): Promise<ClientProfile | null> {
  try {
    const ownerParts = ownerSlug.split('-').filter(Boolean);
    const companyName = companySlug
      .split('-')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    return {
      id: `${companySlug}-${ownerSlug}`,
      slug: companySlug,
      firstName: ownerParts[0] ? ownerParts[0].charAt(0).toUpperCase() + ownerParts[0].slice(1) : 'John',
      lastName: ownerParts.slice(1).join(' ') || 'Doe',
      email: 'hello@example.com',
      phone: '+1234567890',
      profileImage:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Product Designer & Digital Innovator | Passionate about crafting beautiful digital experiences',
      title: 'Product Designer',
      company: companyName || 'Creative Studio',
      location: 'San Francisco, CA',
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'github', url: 'https://github.com' },
        { platform: 'instagram', url: 'https://instagram.com' },
      ],
      projects: [],
      tapCount: 1250,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      theme: {
        primaryColor: '#00d4ff',
        accentColor: '#9d4edd',
        darkMode: true,
      },
    };
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

type Props = {
  params: Promise<{
    companySlug: string;
    ownerSlug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { companySlug, ownerSlug } = await params;

  const profileData = getProfileByRoute(companySlug, ownerSlug);
  const profile = profileData || (await fetchClientProfile(companySlug, ownerSlug));

  if (!profile) {
    return {
      title: 'Profile Not Found',
    };
  }

  const title = `${profile.firstName} ${profile.lastName} - Digital Card`;
  const description = profile.bio;
  const imageUrl = profile.profileImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: getProfileUrl(profile),
      firstName: profile.firstName,
      lastName: profile.lastName,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `${profile.firstName} ${profile.lastName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    other: {
      'og:type': 'profile',
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { companySlug, ownerSlug } = await params;

  const profileData = getProfileByRoute(companySlug, ownerSlug);
  if (profileData) {
    return <ProfessionalTemplate profile={profileData} />;
  }

  const profile = await fetchClientProfile(companySlug, ownerSlug);

  if (!profile) {
    notFound();
  }

  return <PortfolioClient profile={profile} />;
}