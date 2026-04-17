'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ClientProfile } from '@/types';
import { getProfileUrl } from '@/lib/profile-routes';
import { downloadVCard, generateWhatsAppLink } from '@/lib/vcard-generator';

interface PortfolioClientProps {
  profile: ClientProfile;
}

// Social media icon mapping
const socialIcons: Record<string, string> = {
  twitter: '𝕏',
  linkedin: 'in',
  github: '',
  instagram: '📷',
  facebook: 'f',
  tiktok: '♪',
  youtube: '▶',
  email: '✉',
  phone: '☎',
  website: '🌐',
};

export default function PortfolioClient({ profile }: PortfolioClientProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [projectsInView, setProjectsInView] = useState(3);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle scroll for sticky header effect
  const handleScroll = () => {
    if (contentRef.current) {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 300);
    }
  };

  // Handle Save Contact button
  const handleSaveContact = () => {
    downloadVCard({
      firstName: profile.firstName,
      lastName: profile.lastName,
      phone: profile.phone,
      email: profile.email,
      organization: profile.company,
      title: profile.title,
      photo: profile.profileImage,
      url: getProfileUrl(profile),
    });
  };

  // Handle WhatsApp redirect
  const handleWhatsApp = () => {
    const message = `Hi ${profile.firstName}, I found your digital card and would like to connect!`;
    const whatsappLink = generateWhatsAppLink(profile.phone, message);
    window.open(whatsappLink, '_blank');
  };

  // Handle Email
  const handleEmail = () => {
    window.location.href = `mailto:${profile.email}`;
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={contentRef}>
      {/* Sticky Header */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSticky ? 1 : 0 }}
            className="text-sm font-semibold"
          >
            {profile.firstName} {profile.lastName}
          </motion.div>

          <motion.button
            onClick={handleSaveContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-500/30 transition-colors"
          >
            Save Contact
          </motion.button>
        </div>
      </header>

      {/* Hero Profile Section */}
      <section className="pt-20 pb-12 px-4 max-w-2xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <Image
              src={profile.profileImage}
              alt={`${profile.firstName} ${profile.lastName}`}
              fill
              className="rounded-2xl object-cover border-2 border-cyan-500/50"
              priority
            />
            {/* Neon glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 pointer-events-none" />
          </div>
        </motion.div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-neon-text">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-cyan-400 text-lg font-semibold mb-2">{profile.title}</p>
          {profile.company && <p className="text-gray-400 text-sm mb-4">{profile.company}</p>}
          {profile.location && <p className="text-gray-500 text-sm mb-4">📍 {profile.location}</p>}
          <p className="text-gray-300 text-base leading-relaxed max-w-lg mx-auto">{profile.bio}</p>
        </motion.div>

        {/* Social Media Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {profile.socialLinks.map((social, idx) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
              className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all"
              title={social.platform}
            >
              {socialIcons[social.platform] || '🔗'}
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-4 mb-12"
        >
          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            💬 WhatsApp Me
          </motion.button>

          {/* Email Button */}
          <motion.button
            onClick={handleEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-4 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/30 transition-colors flex items-center justify-center gap-2"
          >
            ✉️ Email
          </motion.button>
        </motion.div>
      </section>

      {/* Project Gallery */}
      {profile.projects && profile.projects.length > 0 && (
        <section className="py-12 px-4 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center gradient-neon-text"
          >
            Featured Work
          </motion.h2>

          <div className="grid gap-6">
            {profile.projects.slice(0, projectsInView).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group overflow-hidden rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="relative h-64 md:h-80 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      {project.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          className="inline-block px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
                        >
                          View Project →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 bg-slate-900/30 border-t border-cyan-500/10">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {projectsInView < profile.projects.length && (
            <motion.button
              onClick={() => setProjectsInView((prev) => prev + 3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-8 px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors"
            >
              Load More Projects
            </motion.button>
          )}
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-cyan-500/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <motion.button
              onClick={handleSaveContact}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
            >
              Save Contact
            </motion.button>
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </motion.button>
          </div>

          <p className="text-gray-500 text-sm">Created with DigiCards • Tap to Connect</p>
        </div>
      </footer>
    </div>
  );
}
