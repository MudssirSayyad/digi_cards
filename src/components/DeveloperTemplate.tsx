'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { ClientProfile } from '@/types';
import {
  FaPhoneAlt,
  FaUserPlus,
  FaWhatsapp,
  FaRegEnvelope,
  FaCode,
  FaReact,
  FaServer,
  FaCogs,
  FaCheckCircle,
} from 'react-icons/fa';
import { getProfileUrl } from '@/lib/profile-routes';
import { downloadVCard, generateWhatsAppLink } from '@/lib/vcard-generator';

interface DeveloperTemplateProps {
  profile: ClientProfile & {
    services?: Array<{
      title: string;
      items: string[];
    }>;
    technologies?: string[];
    tagline?: string;
    businessHighlights?: Array<{
      icon: string;
      title: string;
      subtitle: string;
    }>;
  };
}

export default function DeveloperTemplate({ profile }: DeveloperTemplateProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'services' | 'skills'>('profile');
  const whatsappMessage = `Hi Mudssir, I found your digital card and would like to discuss a software project.`;

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

  // Group technologies dynamically
  const techCategories = {
    Frameworks: ['Flutter', 'React Native', 'GetX'],
    Languages: ['Dart', 'JavaScript', 'TypeScript'],
    'Backend & APIs': ['GraphQL', 'REST API', 'Firebase'],
    Tools: ['Git', 'Android Studio', 'VS Code'],
  };

  const highlightsIconMap: Record<string, React.ReactNode> = {
    code: <FaCode className="text-indigo-400" />,
    react: <FaReact className="text-indigo-400" />,
    api: <FaServer className="text-indigo-400" />,
    automation: <FaCogs className="text-indigo-400" />,
  };

  return (
    <div className="min-h-screen bg-[#070a13] text-[#f8fafc] pb-24 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Dynamic digital overlay background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.06),_transparent_70%)] blur-3xl" />

      <main className="mx-auto max-w-md px-4 pt-8 relative z-10 space-y-6">
        {/* App-Style Horizontal Header Card */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#0c1222]/85 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-4">
            {/* Rounded square avatar */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-slate-800 bg-[#161e31] shadow-inner">
              {profile.profileImage ? (
                <Image
                  src={profile.profileImage}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-950 to-[#0c1222] border border-indigo-500/20">
                  <span className="text-2xl font-black text-indigo-400">
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                  </span>
                </div>
              )}
            </div>

            {/* Title details */}
            <div className="min-w-0 text-left space-y-1">
              <h1 className="text-xl font-bold tracking-tight text-white truncate">
                {profile.firstName} {profile.lastName}
              </h1>
              <p className="text-xs font-semibold text-indigo-400 tracking-wide font-mono line-clamp-2">
                {profile.title}
              </p>
              {profile.company && (
                <p className="text-[10px] text-slate-400 font-light truncate">{profile.company}</p>
              )}
            </div>
          </div>

          {/* Quick contact inline row */}
          <div className="flex items-center gap-2 mt-4 border-t border-slate-800/80 pt-4">
            <a
              href={`tel:${profile.phone}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-indigo-500/20 hover:bg-slate-900/60 text-slate-300 text-xs font-semibold transition"
            >
              <FaPhoneAlt className="text-indigo-400 text-xs" /> Call
            </a>
            <button
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-emerald-500/20 hover:bg-slate-900/60 text-slate-300 text-xs font-semibold transition"
            >
              <FaWhatsapp className="text-emerald-400 text-sm" /> WhatsApp
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-indigo-500/20 hover:bg-slate-900/60 text-slate-300 text-xs font-semibold transition"
            >
              <FaRegEnvelope className="text-indigo-400 text-xs" /> Email
            </a>
          </div>
        </section>

        {/* Big Action: Save Contact Card */}
        <motion.button
          onClick={handleSaveContact}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 py-4 px-6 text-white font-extrabold tracking-wider uppercase text-xs shadow-[0_4px_20px_rgba(99,102,241,0.25)] transition duration-200"
        >
          <FaUserPlus className="text-sm" /> Save Contact Card
        </motion.button>

        {/* Segmented Control / Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-950/80 p-1 border border-slate-800/80 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          {(['profile', 'services', 'skills'] as const).map((tab) => {
            const label =
              tab === 'profile' ? 'Profile' : tab === 'services' ? 'Services' : 'Tech Stack';
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 py-3 text-xs font-bold text-center uppercase tracking-wider rounded-xl transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-4 text-left"
              >
                {/* Profile Bio */}
                <div className="rounded-2xl border border-slate-800 bg-[#0c1222]/40 p-5 space-y-3">
                  <h2 className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest">
                    About Me
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-light font-sans">
                    {profile.bio}
                  </p>
                </div>

                {/* Highlights List */}
                {profile.businessHighlights && profile.businessHighlights.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.25em] px-1 pt-2">
                      Key Highlights
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {profile.businessHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-900/20 p-4"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/5 border border-indigo-500/15">
                            {highlightsIconMap[highlight.icon] || highlightsIconMap['code']}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-200">
                              {highlight.title}
                            </p>
                            <p className="text-xs text-slate-400 truncate">{highlight.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-3 text-left"
              >
                {/* Services Grid (Static cards, no accordions) */}
                {profile.services && profile.services.length > 0 ? (
                  profile.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-800 bg-[#0c1222]/40 p-5 space-y-3"
                    >
                      <div className="flex items-center gap-3 border-b border-slate-800/60 pb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/5 border border-indigo-500/20 text-indigo-400">
                          <FaCode className="text-sm" />
                        </div>
                        <h3 className="font-bold text-sm text-white tracking-wide">
                          {service.title}
                        </h3>
                      </div>
                      <ul className="space-y-2.5 pl-1">
                        {service.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-slate-300 font-light leading-relaxed"
                          >
                            <FaCheckCircle className="h-4 w-4 shrink-0 text-indigo-500/60 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500 text-center py-8">No services listed.</p>
                )}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-4 text-left"
              >
                {/* Categorized Tech Stack */}
                {Object.entries(techCategories).map(([category, items]) => (
                  <div
                    key={category}
                    className="rounded-2xl border border-slate-800 bg-[#0c1222]/40 p-5 space-y-3"
                  >
                    <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-slate-800/80 pb-2">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {items.map((tech) => (
                        <div
                          key={tech}
                          className="px-3.5 py-2 rounded-xl border border-slate-800 bg-slate-900/60 text-xs font-semibold text-slate-300 hover:border-indigo-500/20 hover:text-indigo-300 transition"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-[10px] text-slate-600 tracking-wider font-light">
            © {new Date().getFullYear()} Mudssir Sayyad. All rights reserved.
          </p>
          <p className="text-[9px] text-slate-700 tracking-wider font-light mt-1">
            Digital Card by diigicards.com
          </p>
        </div>
      </main>
    </div>
  );
}
