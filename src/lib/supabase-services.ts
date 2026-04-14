/**
 * Supabase Services
 * Database operations for profile management
 */

import { supabase } from './supabase';
import type { ClientProfile, Project, SocialLink } from '@/types';

// Profile Operations
export async function fetchProfileBySlug(slug: string): Promise<ClientProfile | null> {
  try {
    const { data, error } = await supabase.from('profiles').select('*').eq('slug', slug).single();

    if (error) throw error;
    return data as ClientProfile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export async function fetchProfileById(id: string): Promise<ClientProfile | null> {
  try {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', id).single();

    if (error) throw error;
    return data as ClientProfile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export async function createProfile(
  profile: Omit<ClientProfile, 'id' | 'createdAt' | 'updatedAt' | 'tapCount'>
): Promise<ClientProfile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          ...profile,
          tapCount: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data as ClientProfile;
  } catch (error) {
    console.error('Error creating profile:', error);
    return null;
  }
}

export async function updateProfile(
  id: string,
  updates: Partial<ClientProfile>
): Promise<ClientProfile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...updates,
        updatedAt: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as ClientProfile;
  } catch (error) {
    console.error('Error updating profile:', error);
    return null;
  }
}

export async function deleteProfile(id: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('profiles').delete().eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting profile:', error);
    return false;
  }
}

// Tap Count Operations
export async function incrementTapCount(slug: string): Promise<boolean> {
  try {
    const profile = await fetchProfileBySlug(slug);
    if (!profile) return false;

    const { error } = await supabase
      .from('profiles')
      .update({ tapCount: (profile.tapCount || 0) + 1 })
      .eq('slug', slug);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error incrementing tap count:', error);
    return false;
  }
}

// Social Links Operations
export async function addSocialLink(
  profileId: string,
  socialLink: SocialLink
): Promise<ClientProfile | null> {
  try {
    const profile = await fetchProfileById(profileId);
    if (!profile) return null;

    const updatedSocialLinks = [...profile.socialLinks, socialLink];
    return updateProfile(profileId, { socialLinks: updatedSocialLinks });
  } catch (error) {
    console.error('Error adding social link:', error);
    return null;
  }
}

export async function removeSocialLink(
  profileId: string,
  platform: string
): Promise<ClientProfile | null> {
  try {
    const profile = await fetchProfileById(profileId);
    if (!profile) return null;

    const updatedSocialLinks = profile.socialLinks.filter(
      (link) => link.platform !== (platform as any)
    );
    return updateProfile(profileId, { socialLinks: updatedSocialLinks });
  } catch (error) {
    console.error('Error removing social link:', error);
    return null;
  }
}

// Projects Operations
export async function addProject(
  profileId: string,
  project: Project
): Promise<ClientProfile | null> {
  try {
    const profile = await fetchProfileById(profileId);
    if (!profile) return null;

    const updatedProjects = [...profile.projects, project];
    return updateProfile(profileId, { projects: updatedProjects });
  } catch (error) {
    console.error('Error adding project:', error);
    return null;
  }
}

export async function removeProject(
  profileId: string,
  projectId: string
): Promise<ClientProfile | null> {
  try {
    const profile = await fetchProfileById(profileId);
    if (!profile) return null;

    const updatedProjects = profile.projects.filter((p) => p.id !== projectId);
    return updateProfile(profileId, { projects: updatedProjects });
  } catch (error) {
    console.error('Error removing project:', error);
    return null;
  }
}

export async function updateProject(
  profileId: string,
  projectId: string,
  projectUpdates: Partial<Project>
): Promise<ClientProfile | null> {
  try {
    const profile = await fetchProfileById(profileId);
    if (!profile) return null;

    const updatedProjects = profile.projects.map((p) =>
      p.id === projectId ? { ...p, ...projectUpdates } : p
    );

    return updateProfile(profileId, { projects: updatedProjects });
  } catch (error) {
    console.error('Error updating project:', error);
    return null;
  }
}

// Real-time subscriptions
// NOTE: This function uses deprecated Supabase API. Update to v2 Realtime API if needed.
// export function subscribeToProfile(slug: string, callback: (profile: ClientProfile) => void) {
//   const subscription = supabase
//     .from('profiles')
//     .on('*', (payload) => {
//       if (payload.new.slug === slug) {
//         callback(payload.new as ClientProfile);
//       }
//     })
//     .subscribe();
//
//   return subscription;
// }
