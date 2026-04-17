'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ClientProfile } from '@/types';
import type { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserPlus,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { getProfileUrl } from '@/lib/profile-routes';
import { downloadVCard, generateWhatsAppLink } from '@/lib/vcard-generator';

interface ProfessionalTemplateProps {
  profile: ClientProfile & {
    icon?: string;
    logoImage?: string;
    whatsappMessage?: string;
    services?: Array<{
      title: string;
      icon: string;
      color: 'primary' | 'secondary' | 'primary-container';
      items: string[];
    }>;
    tagline?: string;
    businessHighlights?: Array<{
      icon: string;
      title: string;
      subtitle: string;
    }>;
  };
}

export default function ProfessionalTemplate({ profile }: ProfessionalTemplateProps) {
  const [, setActiveNav] = useState('location');
  const whatsappMessage =
    profile.whatsappMessage || `Hi ${profile.firstName}, I'm interested in your services!`;

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

  const handleWhatsApp = () => {
    const link = generateWhatsAppLink(profile.phone, whatsappMessage);
    window.open(link, '_blank');
  };

  const iconMap: Record<string, string> = {
    precision_manufacturing: '⚙️',
    ac_unit: '❄️',
    electric_bolt: '⚡',
    memory: '💾',
    bolt: '⚡',
    speed: '⚡',
    verified: '✓',
    person_add: '👤',
    chat: '💬',
    map: '📍',
    call: '📞',
    mail: '✉️',
    location_on: '📍',
    build_circle: '🔧',
  };

  const socialIconMap: Record<string, IconType> = {
    website: FaGlobe,
    instagram: FaInstagram,
    facebook: FaFacebookF,
    linkedin: FaLinkedinIn,
    youtube: FaYoutube,
  };

  const websiteUrl = profile.socialLinks.find((social) => social.platform === 'website')?.url;
  const socialProfiles = profile.socialLinks.filter((social) =>
    ['instagram', 'facebook', 'linkedin', 'youtube'].includes(social.platform)
  );
  const socialCount = socialProfiles.length;
  const hasProfileImage = Boolean(profile.profileImage);

  const highlights = profile.businessHighlights || [
    { icon: 'bolt', title: 'Expert Service', subtitle: 'Professional technicians' },
    { icon: 'speed', title: 'Fast Turnaround', subtitle: 'Quick diagnostics' },
    { icon: 'verified', title: 'Satisfaction', subtitle: 'Trusted quality' },
  ];

  const services = profile.services || [];

  return (
    <div className="min-h-screen bg-[#121212] text-[#e5e2e1] overflow-x-hidden pb-32 relative">
      <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[#e60000]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-48 -right-16 h-72 w-72 rounded-full bg-[#ffb4a8]/10 blur-3xl" />

      <main className="mt-4 px-4 space-y-4 max-w-sm mx-auto relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2rem] p-4 border border-[#5f3f3a]/30 bg-gradient-to-b from-[#1f1f1f] via-[#1b1b1b] to-[#151515]"
        >
          <div className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full bg-[#e60000]/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-10 h-28 w-28 rounded-full bg-[#ffb4a8]/10 blur-2xl" />

          <div className="relative z-10 space-y-4">
            <div className="rounded-2xl border border-[#5f3f3a]/25 bg-[#141414]/90 p-3">
              <div className="flex items-center gap-3">
                {profile.logoImage ? (
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#5f3f3a]/35 bg-[#242424]"
                  >
                    <Image
                      src={profile.logoImage}
                      alt={`${profile.company} logo`}
                      fill
                      className="object-fill"
                      sizes="56px"
                    />
                  </motion.div>
                ) : null}

                <div className="min-w-0 text-left">
                  <h2 className="truncate text-2xl font-extrabold tracking-tight text-white">
                    {profile.company}
                  </h2>
                  {profile.tagline && (
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-[#ffb4a8]">
                      {profile.tagline}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="w-full rounded-[1.5rem] border border-[#5f3f3a]/25 bg-[#1a1919] p-4"
            >
              <div className={hasProfileImage ? 'flex items-center gap-3' : 'text-left'}>
                {hasProfileImage ? (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-[#e60000] shadow-[0_0_0_4px_rgba(230,0,0,0.18)]">
                    <Image
                      src={profile.profileImage}
                      alt={`${profile.firstName} ${profile.lastName}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : null}

                <div className="min-w-0 text-left">
                  <p className="truncate text-xl font-bold text-white">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#ffb4a8]">
                    {profile.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-3"
        >
          <div className="bg-[#202020] rounded-[1.75rem] p-3 border border-[#5f3f3a]/25 shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
            <div className="space-y-3">
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 rounded-xl border border-[#5f3f3a]/20 bg-[#171717] p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e60000]/15 text-[#ff4d4d]">
                  <FiPhone className="text-[18px]" />
                </div>
                <p className="text-base font-bold leading-none text-[#e5e2e1]">{profile.phone}</p>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-[#5f3f3a]/20 bg-[#171717] p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e60000]/15 text-[#ff4d4d]">
                  <FiMail className="text-[18px]" />
                </div>
                <p className="text-[#e5e2e1] font-medium leading-none break-all">{profile.email}</p>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl border border-[#5f3f3a]/20 bg-[#171717] p-3"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e60000]/15 text-[#ff4d4d]">
                  <FiMapPin className="text-[18px]" />
                </div>
                <p className="text-[#e5e2e1] font-medium text-sm leading-relaxed">
                  {profile.location}
                </p>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#151515] p-5 rounded-[1.5rem] border border-[#5f3f3a]/25"
        >
          <h3 className="text-center text-2xl font-bold text-[#ffb4a8] mb-3">Quick Actions</h3>

          <div className="grid grid-cols-1 gap-2">
            <motion.button
              onClick={handleSaveContact}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 rounded-lg border border-[#5f3f3a]/30 bg-[#202020] px-4 py-3 text-[#f4f0ef] font-semibold"
            >
              <FaUserPlus className="text-[#ffb4a8]" /> Add to PhoneBook
            </motion.button>

            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 rounded-lg border border-[#5f3f3a]/30 bg-[#202020] px-4 py-3 text-[#f4f0ef] font-semibold"
            >
              <FaWhatsapp className="text-[#22c55e]" /> Whatsapp Chat
            </motion.button>

            <motion.a
              href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || '')}`}
              target="_blank"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 rounded-lg border border-[#5f3f3a]/30 bg-[#202020] px-4 py-3 text-[#f4f0ef] font-semibold"
            >
              <FaMapMarkerAlt className="text-[#3b82f6]" /> View Location
            </motion.a>

            {websiteUrl && (
              <motion.a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-lg border border-[#5f3f3a]/30 bg-[#202020] px-4 py-3 text-[#f4f0ef] font-semibold"
              >
                <FaGlobe className="text-[#ffb4a8]" /> Website Link
              </motion.a>
            )}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#151515] p-7 rounded-[1.75rem] space-y-6 border border-[#5f3f3a]/25"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#ffb4a8]">About {profile.company}</h3>
            <p className="text-[#c4c6cc] leading-relaxed text-sm">{profile.bio}</p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#ffb4a8] flex-shrink-0">
                  <span className="text-xl">{iconMap[highlight.icon]}</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-[#e5e2e1]">{highlight.title}</p>
                  <p className="text-xs text-[#c4c6cc]/90">{highlight.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Service Catalog */}
        {services.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-end">
              <h3 className="text-xl font-bold uppercase tracking-widest text-[#e5e2e1]">
                Service Catalog
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {services.map((service, idx) => {
                const colorClass =
                  service.color === 'primary'
                    ? '#ffb4a8'
                    : service.color === 'secondary'
                      ? '#c4c6cc'
                      : '#e60000';
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#202020] rounded-3xl p-6 border-l-4 border border-[#5f3f3a]/20"
                    style={{ borderColor: colorClass }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span style={{ color: colorClass }} className="text-2xl">
                        {iconMap[service.icon]}
                      </span>
                      <h4 className="font-bold text-lg uppercase tracking-tight text-[#e5e2e1]">
                        {service.title}
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-[#c4c6cc]">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: colorClass }}
                          ></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {socialProfiles.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#151515] p-4 rounded-[1.5rem] border border-[#5f3f3a]/25"
          >
            <h3 className="text-center text-sm font-bold uppercase tracking-widest text-[#ffb4a8] mb-3">
              Connect on Social Media
            </h3>
            <div
              className={
                socialCount <= 2
                  ? 'flex items-center justify-center gap-8'
                  : socialCount === 3
                    ? 'grid grid-cols-3 gap-3'
                    : 'grid grid-cols-4 gap-3'
              }
            >
              {socialProfiles.map((social) => {
                const SocialIcon = socialIconMap[social.platform] || FaGlobe;
                const colorClass =
                  social.platform === 'linkedin'
                    ? 'bg-[#0a66c2]'
                    : social.platform === 'instagram'
                      ? 'bg-gradient-to-br from-[#f97316] via-[#ec4899] to-[#7c3aed]'
                      : social.platform === 'youtube'
                        ? 'bg-[#ff0000]'
                        : 'bg-[#1877f2]';

                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-16 flex-col items-center gap-1"
                    title={social.platform}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md ${colorClass}`}
                    >
                      <SocialIcon className="text-xl" />
                    </div>
                    <span className="text-[10px] text-[#c4c6cc] capitalize">{social.platform}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.section>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center px-4 pt-3 pb-6 bg-[#1c1b1b] border-t border-[#5f3f3a]/20 shadow-2xl z-50 rounded-t-[2rem]">
        <motion.a
          href={`tel:${profile.phone}`}
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveNav('call')}
          className="flex flex-col items-center justify-center text-[#c4c6cc] px-4 py-2 hover:bg-[#2a2a2a] transition-all active:scale-90 duration-150 rounded-lg"
        >
          <FaPhoneAlt className="text-lg" />
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Call</span>
        </motion.a>

        <motion.a
          href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || '')}`}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveNav('location')}
          className="flex flex-col items-center justify-center bg-gradient-to-br from-[#e60000] to-[#b30000] text-white rounded-xl px-6 py-2 shadow-lg active:scale-90 transition-all duration-150"
        >
          <FaMapMarkerAlt className="text-lg" />
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Location</span>
        </motion.a>

        <motion.a
          href={generateWhatsAppLink(profile.phone, whatsappMessage)}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveNav('whatsapp')}
          className="flex flex-col items-center justify-center text-[#c4c6cc] px-4 py-2 hover:bg-[#2a2a2a] transition-all active:scale-90 duration-150 rounded-lg"
        >
          <FaWhatsapp className="text-lg" />
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">WhatsApp</span>
        </motion.a>
      </nav>
    </div>
  );
}
