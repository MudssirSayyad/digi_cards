import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';
import type { ClientProfile } from '@/types';
import { getProfileBySlug } from '@/data/profile-data';
import { getProfilePath, getProfileUrl } from '@/lib/profile-routes';

// Mock Supabase fetch - replace with your actual Supabase client
// This would typically use createClient from '@supabase/supabase-js'
async function fetchClientProfile(slug: string): Promise<ClientProfile | null> {
  try {
    // TODO: Replace with actual Supabase query
    // const { data } = await supabase
    //   .from('profiles')
    //   .select('*')
    //   .eq('slug', slug)
    //   .single();
    // return data;

    // Mock data for demonstration
    return {
      id: '1',
      slug,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      profileImage:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Product Designer & Digital Innovator | Passionate about crafting beautiful digital experiences',
      title: 'Product Designer',
      company: 'Creative Studio',
      location: 'San Francisco, CA',
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'github', url: 'https://github.com' },
        { platform: 'instagram', url: 'https://instagram.com' },
      ],
      projects: [
        {
          id: '1',
          title: 'E-Commerce Platform Redesign',
          description: 'Complete redesign of a major e-commerce platform',
          image:
            'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop',
          url: 'https://example.com',
          tags: ['UI/UX', 'Web', 'E-Commerce'],
        },
        {
          id: '2',
          title: 'Mobile App Design System',
          description: 'Comprehensive design system for mobile applications',
          image:
            'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop',
          url: 'https://example.com',
          tags: ['Design System', 'Mobile', 'UI Kit'],
        },
        {
          id: '3',
          title: 'AI Dashboard Interface',
          description: 'Dashboard interface for AI-powered analytics platform',
          image:
            'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=600&h=400&fit=crop',
          url: 'https://example.com',
          tags: ['Dashboard', 'Analytics', 'UI/UX'],
        },
      ],
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
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Check for profile data first
  const profileData = getProfileBySlug(slug);
  const profile = profileData || (await fetchClientProfile(slug));

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

export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params;

  // Check for profile data first
  const profileData = getProfileBySlug(slug);
  if (profileData) {
    redirect(getProfilePath(profileData));
  }

  // Otherwise fetch from database
  const profile = await fetchClientProfile(slug);

  if (!profile) {
    notFound();
  }

  redirect(getProfilePath(profile));
}
