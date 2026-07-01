import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProfessionalTemplate from '@/components/ProfessionalTemplate';
import LawyerTemplate from '@/components/LawyerTemplate';
import DeveloperTemplate from '@/components/DeveloperTemplate';
import { getProfileByRoute } from '@/clients';
import { getProfileUrl } from '@/lib/profile-routes';

type Props = {
  params: Promise<{
    companySlug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { companySlug } = await params;

  const profile = getProfileByRoute(companySlug);

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
          url: imageUrl || '',
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
      images: imageUrl ? [imageUrl] : [],
    },
    other: {
      'og:type': 'profile',
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { companySlug } = await params;

  const profile = getProfileByRoute(companySlug);

  if (!profile) {
    notFound();
  }

  if (profile.template === 'lawyer') {
    return <LawyerTemplate profile={profile} />;
  }

  if (profile.template === 'developer') {
    return <DeveloperTemplate profile={profile} />;
  }

  return <ProfessionalTemplate profile={profile} />;
}
