/**
 * API Examples and Code Snippets
 * Common patterns and workflows for DigiCards development
 */

// ============================================
// 1. FETCHING AND DISPLAYING A PROFILE
// ============================================

import type { ClientProfile } from '@/types';
import { fetchProfileBySlug } from '@/lib/supabase-services';

export async function loadProfile(slug: string) {
  const profile: ClientProfile | null = await fetchProfileBySlug(slug);

  if (!profile) {
    console.error('Profile not found');
    return null;
  }

  console.log(`${profile.firstName} ${profile.lastName}`);
  console.log(`Tap count: ${profile.tapCount}`);
  return profile;
}

// ============================================
// 2. GENERATING vCard FILES
// ============================================

import { downloadVCard, generateWhatsAppLink, generateMailtoLink } from '@/lib/vcard-generator';

export function handleSaveContact(profile: ClientProfile) {
  downloadVCard({
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    phone: profile.phone,
    organization: profile.company,
    title: profile.title,
    photo: profile.profileImage,
    url: `https://digicards.app/v/${profile.slug}`,
  });
}

export function handleWhatsAppShare(profile: ClientProfile) {
  const message = `Hey! Check out my digital card: ${profile.firstName} ${profile.lastName}`;
  const link = generateWhatsAppLink(profile.phone, message);
  window.open(link, '_blank');
}

export function handleEmailShare(profile: ClientProfile) {
  const subject = `Connect with ${profile.firstName}`;
  const body = `I'd like to connect with ${profile.firstName}. You can find their digital card at: https://digicards.app/v/${profile.slug}`;
  const link = generateMailtoLink(profile.email, subject, body);
  window.location.href = link;
}

// ============================================
// 3. TRACKING TAP EVENTS
// ============================================

import { incrementTapCount } from '@/lib/supabase-services';

export async function recordPortfolioTap(slug: string) {
  const success = await incrementTapCount(slug);
  if (success) {
    console.log('Tap recorded successfully');
  }
}

// ============================================
// 4. ADDING NEW PROJECTS
// ============================================

import { addProject } from '@/lib/supabase-services';
import type { Project } from '@/types';

export async function addNewProject(profileId: string) {
  const newProject: Project = {
    id: 'proj-' + Math.random().toString(36).substr(2, 9),
    title: 'Amazing Project',
    description: 'This is an amazing project I worked on',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600',
    url: 'https://example.com/project',
    tags: ['Web Design', 'UI/UX'],
  };

  const updatedProfile = await addProject(profileId, newProject);
  console.log('Project added:', updatedProfile?.projects);
}

// ============================================
// 5. MANAGING SOCIAL LINKS
// ============================================

import { addSocialLink, removeSocialLink } from '@/lib/supabase-services';
import type { SocialLink } from '@/types';

export async function addUserSocialLink(profileId: string) {
  const twitterLink: SocialLink = {
    platform: 'twitter',
    url: 'https://twitter.com/username',
  };

  const updatedProfile = await addSocialLink(profileId, twitterLink);
  console.log('Social link added:', updatedProfile?.socialLinks);
}

export async function removeUserSocialLink(profileId: string, platform: string) {
  const updatedProfile = await removeSocialLink(profileId, platform);
  console.log('Social link removed:', updatedProfile?.socialLinks);
}

// ============================================
// 6. CREATING A NEW PROFILE
// ============================================

import { createProfile } from '@/lib/supabase-services';

export async function createNewProfile() {
  const newProfile = await createProfile({
    slug: 'john-doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Passionate designer and developer',
    title: 'Product Designer',
    company: 'Acme Corp',
    location: 'San Francisco, CA',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
    projects: [],
  });

  console.log('Profile created:', newProfile);
}

// ============================================
// 7. UPDATING PROFILE INFORMATION
// ============================================

import { updateProfile } from '@/lib/supabase-services';

export async function updateProfileInfo(profileId: string) {
  const updated = await updateProfile(profileId, {
    bio: 'Updated bio text',
    title: 'Senior Designer',
  });

  console.log('Profile updated:', updated);
}

// ============================================
// 8. UTILITY FUNCTIONS USAGE
// ============================================

import { 
  slugify, 
  formatNumber, 
  isValidEmail, 
  isValidPhone,
  getInitials,
  debounce,
  throttle,
  copyToClipboard,
} from '@/lib/utils';

export function utilityExamples() {
  // Slugify text for URLs
  const slug = slugify('John Doe Profile'); // 'john-doe-profile'

  // Format large numbers
  const formatted = formatNumber(1250000); // '1.2M'

  // Validation
  const validEmail = isValidEmail('john@example.com'); // true
  const validPhone = isValidPhone('+1 (234) 567-8901'); // true

  // Get initials
  const initials = getInitials('John', 'Doe'); // 'JD'

  // Debounce for search
  const debouncedSearch = debounce((term: string) => {
    console.log('Searching for:', term);
  }, 300);

  debouncedSearch('javascript');
  debouncedSearch('typescript'); // Only this one will execute

  // Throttle for scroll events
  const throttledScroll = throttle(() => {
    console.log('Scroll detected');
  }, 1000);

  window.addEventListener('scroll', throttledScroll);

  // Copy to clipboard
  copyToClipboard('Hello World').then((success) => {
    console.log('Copied:', success);
  });
}

// ============================================
// 9. USING IN NEXT.JS COMPONENTS
// ============================================

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ClientProfile } from '@/types';
import { downloadVCard, generateWhatsAppLink } from '@/lib/vcard-generator';

export function ProfileCard({ profile }: { profile: ClientProfile }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    downloadVCard({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      phone: profile.phone,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-gray-900 rounded-lg border border-cyan-500"
    >
      <h2 className="text-2xl font-bold mb-2">
        {profile.firstName} {profile.lastName}
      </h2>
      <p className="text-cyan-400 mb-4">{profile.title}</p>
      <p className="text-gray-300 mb-6">{profile.bio}</p>

      <motion.button
        onClick={handleSave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
          isSaved
            ? 'bg-green-500 text-white'
            : 'bg-cyan-500 text-black hover:bg-cyan-400'
        }`}
      >
        {isSaved ? '✓ Saved' : 'Save Contact'}
      </motion.button>
    </motion.div>
  );
}

// ============================================
// 10. ERROR HANDLING PATTERNS
// ============================================

export async function safeProfileFetch(slug: string) {
  try {
    const profile = await fetchProfileBySlug(slug);

    if (!profile) {
      throw new Error(`Profile with slug "${slug}" not found`);
    }

    return profile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    
    if (error instanceof Error && error.message.includes('not found')) {
      // Handle 404
      return null;
    }

    // Handle other errors
    throw error;
  }
}

// ============================================
// 11. REAL-TIME UPDATES PATTERN
// ============================================

import { subscribeToProfile } from '@/lib/supabase-services';

export function setupRealtimeUpdates(slug: string, onUpdate: (profile: ClientProfile) => void) {
  const subscription = subscribeToProfile(slug, (profile) => {
    console.log('Profile updated in real-time:', profile);
    onUpdate(profile);
  });

  // Return unsubscribe function
  return () => {
    subscription.unsubscribe();
  };
}

// ============================================
// 12. FORM SUBMISSION EXAMPLE
// ============================================

'use client';

import { FormEvent } from 'react';
import { createProfile } from '@/lib/supabase-services';
import { slugify, isValidEmail, isValidPhone } from '@/lib/utils';

export function ProfileForm() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;

    // Validation
    if (!firstName.trim()) {
      alert('First name is required');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Invalid email address');
      return;
    }

    // Create profile
    try {
      const profile = await createProfile({
        slug: slugify(firstName),
        firstName,
        lastName: formData.get('lastName') as string,
        email,
        phone: formData.get('phone') as string,
        profileImage: '',
        bio: '',
        title: '',
        socialLinks: [],
        projects: [],
      });

      if (profile) {
        console.log('Profile created successfully!');
        // Redirect or show success message
      }
    } catch (error) {
      console.error('Failed to create profile:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="firstName" placeholder="First Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="phone" placeholder="Phone" />
      <button type="submit" className="px-4 py-2 bg-cyan-500 text-black rounded-lg">
        Create Profile
      </button>
    </form>
  );
}
