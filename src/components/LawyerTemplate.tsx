'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { ClientProfile } from '@/types';
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserPlus,
  FaWhatsapp,
  FaGavel,
  FaRegEnvelope,
  FaBalanceScale,
  FaChevronDown,
} from 'react-icons/fa';
import { getProfileUrl } from '@/lib/profile-routes';
import { downloadVCard, generateWhatsAppLink } from '@/lib/vcard-generator';

interface LawyerTemplateProps {
  profile: ClientProfile & {
    services?: Array<{
      title: string;
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

export default function LawyerTemplate({ profile }: LawyerTemplateProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const whatsappMessage = `Hi Advocate Tabesh, I found your digital card and would like to connect for a legal consultation.`;

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

  const websiteUrl = profile.socialLinks.find((social) => social.platform === 'website')?.url;

  // Custom icon map for legal template with elegant dark gold color
  const iconMap: Record<string, React.ReactNode> = {
    work: <FaGavel className="text-[#c5a059]" />,
    business: <FaBalanceScale className="text-[#c5a059]" />,
    handshake: <span className="text-[#c5a059]">🤝</span>,
  };

  return (
    <div className="min-h-screen bg-[#080809] text-[#e4e4e7] pb-32 font-sans selection:bg-[#c5a059]/30 selection:text-amber-200">
      {/* Background gradients for luxury dark theme */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.06),_transparent_45%)]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#c5a059]/[0.01] blur-3xl" />
      
      <main className="mx-auto max-w-md px-4 pt-8 relative z-10 space-y-6">
        
        {/* Profile Card Header */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl border border-[#c5a059]/20 bg-gradient-to-b from-[#141416] via-[#0f0f10] to-[#0c0c0d] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
          {/* Subtle gold visual flair */}
          <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-[#c5a059]/40 to-transparent" />
          <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-[#c5a059]/40 to-transparent" />
          
          <div className="flex flex-col items-center text-center space-y-4">
            
            {/* Monogram / Legal Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a059]/30 bg-[#c5a059]/[0.07] text-[#c5a059]/90 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
              <FaBalanceScale className="text-lg" />
            </div>

            {/* Profile Image with luxury gold double border */}
            {profile.profileImage ? (
              <div className="relative h-32 w-32 rounded-full p-1.5 border border-[#c5a059]/25 bg-[#121214] shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                <div className="relative h-full w-full overflow-hidden rounded-full border border-[#c5a059]/40">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ) : null}

            {/* Name and Designation */}
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-white font-serif bg-gradient-to-r from-white via-[#ebd197] to-[#d4b26f] bg-clip-text text-transparent">
                {profile.firstName} {profile.lastName}
              </h1>
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#c5a059]/90 font-serif">
                {profile.title}
              </p>
              {profile.company && (
                <p className="text-xs text-zinc-400 pt-1 font-medium">
                  Associated with <span className="text-zinc-300 font-semibold">{profile.company}</span>
                </p>
              )}
            </div>

            {/* Primary Action: Save Contact */}
            <motion.button
              onClick={handleSaveContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#ebd197] to-[#c5a059] hover:from-[#b89047] hover:to-[#d4b26f] py-3.5 px-6 text-black font-bold tracking-wider uppercase text-xs shadow-[0_4px_20px_rgba(197,160,89,0.2)] transition duration-200"
            >
              <FaUserPlus className="text-sm" /> Save Contact Card
            </motion.button>

          </div>
        </motion.section>

        {/* Quick Contact Actions Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          <a
            href={`tel:${profile.phone}`}
            className="flex flex-col items-center justify-center p-4 rounded-2xl border border-zinc-800 bg-[#0f0f11]/70 hover:border-[#c5a059]/30 transition-all group"
          >
            <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c5a059]/80 group-hover:text-[#e5c158] group-hover:border-[#c5a059]/20 transition-all">
              <FaPhoneAlt />
            </div>
            <span className="text-xs font-semibold text-zinc-400 mt-2">Call</span>
            <span className="text-[10px] text-zinc-500 mt-0.5 truncate max-w-full px-1">{profile.phone}</span>
          </a>

          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center justify-center p-4 rounded-2xl border border-zinc-800 bg-[#0f0f11]/70 hover:border-[#c5a059]/30 transition-all group"
          >
            <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:brightness-110 transition-all">
              <FaWhatsapp className="text-lg" />
            </div>
            <span className="text-xs font-semibold text-zinc-400 mt-2">WhatsApp</span>
            <span className="text-[10px] text-zinc-500 mt-0.5">Send message</span>
          </button>

          <a
            href={`mailto:${profile.email}`}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border border-zinc-800 bg-[#0f0f11]/70 hover:border-[#c5a059]/30 transition-all group ${!websiteUrl ? 'col-span-2' : ''}`}
          >
            <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c5a059]/80 group-hover:text-[#e5c158] group-hover:border-[#c5a059]/20 transition-all">
              <FaRegEnvelope />
            </div>
            <span className="text-xs font-semibold text-zinc-400 mt-2">Email</span>
            <span className="text-[10px] text-zinc-500 mt-0.5 truncate max-w-full px-1">{profile.email}</span>
          </a>

          {websiteUrl ? (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-2xl border border-zinc-800 bg-[#0f0f11]/70 hover:border-[#c5a059]/30 transition-all group"
            >
              <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c5a059]/80 group-hover:text-[#e5c158] group-hover:border-[#c5a059]/20 transition-all">
                <FaGlobe />
              </div>
              <span className="text-xs font-semibold text-zinc-400 mt-2">Website</span>
              <span className="text-[10px] text-zinc-500 mt-0.5">Visit website</span>
            </a>
          ) : null}
        </motion.section>

        {/* Bio / Profile Section */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-zinc-800 bg-[#0f0f11]/70 p-5 space-y-3"
        >
          <h2 className="text-base font-bold font-serif text-[#c5a059] uppercase tracking-widest border-b border-zinc-800 pb-2">
            Professional Profile
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed font-light font-sans">
            {profile.bio}
          </p>
        </motion.section>

        {/* Highlights Section */}
        {profile.businessHighlights && profile.businessHighlights.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h2 className="text-xs font-extrabold text-zinc-500 uppercase tracking-[0.25em] px-1">
              Key Credentials
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {profile.businessHighlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 text-lg">
                    {iconMap[highlight.icon] || <FaGavel className="text-[#c5a059]" />}
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-sm font-semibold text-zinc-100">{highlight.title}</p>
                    <p className="text-xs text-zinc-400 truncate">{highlight.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Practice Areas / Service Accordion */}
        {profile.services && profile.services.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h2 className="text-base font-bold font-serif text-[#c5a059] uppercase tracking-widest border-b border-zinc-800 pb-2">
              Practice Areas
            </h2>
            
            <div className="space-y-2">
              {profile.services.map((service, idx) => {
                const isOpen = activeAccordion === idx;
                return (
                  <div 
                    key={idx}
                    className="overflow-hidden rounded-xl border border-zinc-800 bg-[#0f0f11]/70"
                  >
                    <button
                      onClick={() => setActiveAccordion(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-serif font-bold text-sm text-zinc-100 hover:bg-zinc-900/50 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[#c5a059]/80"><FaGavel className="text-xs" /></span>
                        {service.title}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-zinc-500"
                      >
                        <FaChevronDown className="text-xs" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden border-t border-zinc-900"
                        >
                          <div className="p-4 bg-zinc-900/20 text-sm text-zinc-400 space-y-2">
                            <ul className="grid grid-cols-1 gap-2 pl-3">
                              {service.items.map((item, i) => (
                                <li key={i} className="flex items-center gap-2.5">
                                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]/60" />
                                  <span className="text-zinc-300 font-light">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Office Location Section */}
        {profile.location && (
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-800 bg-[#0f0f11]/70 p-5 space-y-4"
          >
            <h2 className="text-base font-bold font-serif text-[#c5a059] uppercase tracking-widest border-b border-zinc-800 pb-2">
              Chamber Location
            </h2>
            <div className="space-y-3">
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {profile.location}
              </p>
              <motion.a
                href={`https://maps.google.com/?q=${encodeURIComponent(profile.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#c5a059]/20 bg-[#c5a059]/5 hover:bg-[#c5a059]/10 py-3 text-[#c5a059] text-xs font-bold tracking-wider uppercase transition-all"
              >
                <FaMapMarkerAlt /> View on Google Maps
              </motion.a>
            </div>
          </motion.section>
        )}

        {/* Association disclaimer */}
        <div className="text-center pt-4">
          <p className="text-[10px] text-zinc-500 tracking-wider font-light">
            © {new Date().getFullYear()} Advocate Tabesh Shaikh. All rights reserved.
          </p>
          <p className="text-[9px] text-zinc-600 tracking-wider font-light mt-1">
            Digital Card by diigicards.com
          </p>
        </div>

      </main>
    </div>
  );
}
