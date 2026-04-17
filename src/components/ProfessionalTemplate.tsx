'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ClientProfile } from '@/types';
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

      <main className="mt-6 px-4 space-y-6 max-w-md mx-auto relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-[2rem] p-6 border border-[#5f3f3a]/30 bg-gradient-to-b from-[#1f1f1f] to-[#171717]"
        >
          <div className="flex items-center justify-center mb-5">
            <div className="px-3 py-1 rounded-full border border-[#5f3f3a]/40 bg-[#2a2a2a] text-[10px] uppercase tracking-[0.16em] text-[#ffb4a8] font-semibold">
              Premium Service Profile
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-20 h-20 bg-[#2a2a2a] rounded-full flex items-center justify-center shadow-inner border border-[#5f3f3a]/30 overflow-hidden"
            >
              {profile.logoImage ? (
                <div className="relative w-full h-full">
                  <Image
                    src={profile.logoImage}
                    alt={`${profile.company} logo`}
                    fill
                    className="object-fill"
                    sizes="80px"
                  />
                </div>
              ) : (
                <span className="text-4xl">
                  {iconMap[profile.icon || 'precision_manufacturing']}
                </span>
              )}
            </motion.div>

            <div className="space-y-1">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">
                {profile.company}
              </h2>
              {profile.tagline && (
                <p className="text-[#ffb4a8] text-sm uppercase tracking-[0.15em]">
                  {profile.tagline}
                </p>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full rounded-[1.75rem] border border-[#5f3f3a]/25 bg-[#1c1b1b] p-6"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-[3px] border-[#e60000] ring-4 ring-[#e60000]/20 shadow-2xl">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="text-[11px] text-[#ffb4a8] uppercase font-bold tracking-[0.2em] mt-1">
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
          className="grid grid-cols-1 gap-4"
        >
          <div className="bg-[#202020] rounded-[1.75rem] p-6 border border-[#5f3f3a]/25 shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
            <div className="flex gap-6">
              <div className="flex flex-col justify-between py-2 text-[#e60000] text-2xl">
                <span>{iconMap.call}</span>
                <span>{iconMap.mail}</span>
                <span>{iconMap.location_on}</span>
              </div>
              <div className="space-y-4 flex-1">
                <div className="space-y-1">
                  <p className="text-[10px] text-[#c4c6cc] font-bold uppercase tracking-widest">
                    Primary Contact
                  </p>
                  <p className="text-lg font-bold text-[#e5e2e1]">{profile.phone}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-[#c4c6cc] font-bold uppercase tracking-widest">
                    Email Inquiry
                  </p>
                  <p className="text-[#e5e2e1] font-medium">{profile.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-[#c4c6cc] font-bold uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-[#e5e2e1] font-medium text-sm leading-relaxed">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Action Buttons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-3"
        >
          <motion.button
            onClick={handleSaveContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#e60000] to-[#b80000] text-white py-4 rounded-xl font-bold text-sm shadow-[0_8px_20px_rgba(230,0,0,0.35)] active:scale-95 transition-all"
          >
            {iconMap.person_add} ADD TO PHONEBOOK
          </motion.button>

          <div className="grid grid-cols-2 gap-3">
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-[#2a2a2a] text-[#e5e2e1] py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest border border-[#5f3f3a]/20 active:scale-95 transition-all"
            >
              <span className="text-green-500">{iconMap.chat}</span> WhatsApp
            </motion.button>

            <motion.a
              href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || '')}`}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-[#2a2a2a] text-[#e5e2e1] py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest border border-[#5f3f3a]/20 active:scale-95 transition-all"
            >
              <span className="text-[#ffb4a8]">{iconMap.map}</span> Location
            </motion.a>
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
              <span className="text-[10px] font-bold text-[#ffb4a8] uppercase">
                Specialized Units
              </span>
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

        {/* Aesthetic Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative h-40 rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#1b1b1b] border border-[#5f3f3a]/25 flex items-center justify-center p-8"
        >
          <div className="flex flex-col text-center">
            <p className="text-xl font-bold text-white leading-tight">
              {profile.tagline || 'Excellence in Service'}
            </p>
          </div>
        </motion.div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center px-4 pt-3 pb-6 bg-[#1c1b1b] border-t border-[#5f3f3a]/20 shadow-2xl z-50 rounded-t-[2rem]">
        <motion.a
          href={`tel:${profile.phone}`}
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveNav('call')}
          className="flex flex-col items-center justify-center text-[#c4c6cc] px-4 py-2 hover:bg-[#2a2a2a] transition-all active:scale-90 duration-150 rounded-lg"
        >
          <span className="text-xl">{iconMap.call}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Call</span>
        </motion.a>

        <motion.a
          href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || '')}`}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveNav('location')}
          className="flex flex-col items-center justify-center bg-gradient-to-br from-[#e60000] to-[#b30000] text-white rounded-xl px-6 py-2 shadow-lg active:scale-90 transition-all duration-150"
        >
          <span className="text-xl">{iconMap.location_on}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Location</span>
        </motion.a>

        <motion.a
          href={generateWhatsAppLink(profile.phone, whatsappMessage)}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveNav('whatsapp')}
          className="flex flex-col items-center justify-center text-[#c4c6cc] px-4 py-2 hover:bg-[#2a2a2a] transition-all active:scale-90 duration-150 rounded-lg"
        >
          <span className="text-xl">{iconMap.chat}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">WhatsApp</span>
        </motion.a>
      </nav>
    </div>
  );
}
