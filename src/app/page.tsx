'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  FaHandshake,
  FaQrcode,
  FaArrowsRotate,
  FaIdCard,
  FaUsers,
  FaChartLine,
  FaPenRuler,
  FaBolt,
  FaWhatsapp,
} from 'react-icons/fa6';

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function SuccessDialog({ isOpen, onClose }: SuccessDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="mx-4 rounded-3xl border border-white/15 bg-[#0a1324]/95 p-8 text-center shadow-2xl sm:max-w-sm">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-green-400/50">
            <svg
              className="h-8 w-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-white">Thank You!</h2>
        <p className="mt-3 text-slate-300">
          We received your message and will get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ fullName: '', email: '', company: '', message: '' });
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.1),_transparent_35%),radial-gradient(circle_at_30%_90%,_rgba(14,116,144,0.18),_transparent_40%)]" />

      <header className="sticky top-0 z-50 border-b border-sky-400/20 bg-[#060a11]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="diigicards home">
            <img src="/assets/web/logo-no-bg.png" alt="Diigicards" className="h-[60px] w-auto" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md border border-sky-300/30 px-3 py-2 text-sm text-slate-100 hover:bg-sky-400/10 md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-300 transition hover:text-sky-300">
              Features
            </a>
            <a href="#services" className="text-sm text-slate-300 transition hover:text-sky-300">
              Services
            </a>
          </div>
        </nav>

        {menuOpen ? (
          <div className="border-t border-sky-400/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-slate-200">
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="z-10 max-w-4xl flex flex-col items-center"
        >
          <p className="mb-5 inline-flex rounded-full border border-sky-300/30 bg-sky-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
            Premium NFC Business Cards
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            We build digital futures.
          </h1>
          <h2 className="mt-6 text-2xl font-semibold text-sky-300 sm:text-3xl lg:text-4xl">
            The Last Business Card You&apos;ll Ever Buy.
          </h2>
          <p className="mt-6 text-lg text-slate-300 lg:text-xl">
            Elevating human connection through modular design and cutting-edge digital experiences.
          </p>
          <p className="mt-4 text-lg text-slate-300 lg:text-xl">
            Share your contact details, social links, and portfolio with a single tap. Built for
            founders, sales teams, and creators who want instant first impressions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="rounded-full bg-sky-400 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.45)]"
            >
              Get Your Card
            </button>
          </div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-sky-300">Features</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Tap. Connect. Share.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            {
              title: 'Tap to Share',
              body: 'Instantly share your profile with a single tap on any NFC-enabled smartphone. No app needed.',
              Icon: FaHandshake,
            },
            {
              title: 'Scan for All Devices',
              body: 'A dynamic QR code ensures seamless sharing and connection for all devices, even without NFC support.',
              Icon: FaQrcode,
            },
            {
              title: 'Instant Updates',
              body: 'Edit your links and details once. Your digital identity updates in real-time forever.',
              Icon: FaArrowsRotate,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-sky-500/10"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/20 ring-1 ring-sky-300/25 text-sky-300">
                <item.Icon size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-sky-300">Our Services</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Solutions for every scale
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From solo entrepreneurs to large enterprises, we provide the tools you need to network
            smarter.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {[
            {
              title: 'Digital Business Cards',
              body: 'A comprehensive web-based profile. Share all your contact details, social links, portfolio, and more in one beautifully designed digital hub.',
              Icon: FaIdCard,
            },
            {
              title: 'Quick Share Cards',
              body: 'Built for speed. With a single tap, only your core vCard details are shared directly to their phone contacts, bypassing the web profile.',
              Icon: FaBolt,
            },
            {
              title: 'Custom Premium Cards',
              body: 'Work with our designers to create premium metal, PVC, or wood physical NFC cards that match your brand identity perfectly.',
              Icon: FaPenRuler,
            },
            {
              title: 'Team Management',
              body: 'Centralized dashboard to manage digital cards for your entire team. Update details, titles, and links instantly at scale.',
              Icon: FaUsers,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-sky-500/10 hover:shadow-[0_8px_30px_rgb(56,189,248,0.12)]"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 ring-1 ring-sky-300/20 text-sky-400 transition duration-300 group-hover:-translate-y-1 group-hover:bg-sky-400 group-hover:text-[#0b1222]">
                  <item.Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact-form" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-sky-300">Get Your Card</p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Let&apos;s launch your <br className="hidden lg:block" /> Digital identity
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Share a few details and our team will help you choose the perfect card setup for your
              brand or team.
            </p>

            <div className="mt-10 hidden flex-col gap-8 lg:flex">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-400/20 text-sky-400">
                  <FaHandshake size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Expert Guidance</h4>
                  <p className="text-slate-400 mt-1">We&apos;ll help you pick the best design.</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-400/20 text-sky-400">
                  <FaQrcode size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Fast Turnaround</h4>
                  <p className="text-slate-400 mt-1">Get your digital profile live in minutes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 lg:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-200">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-[#0b1222] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60 focus:ring-1 focus:ring-sky-300/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-[#0b1222] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60 focus:ring-1 focus:ring-sky-300/60"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-[#0b1222] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60 focus:ring-1 focus:ring-sky-300/60"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Project Goals
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your use case"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-xl border border-white/15 bg-[#0b1222] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60 focus:ring-1 focus:ring-sky-300/60"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-full bg-sky-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Request a Callback'}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm font-medium text-slate-400">
              <span className="h-px w-full bg-white/10"></span>
              <span>OR</span>
              <span className="h-px w-full bg-white/10"></span>
            </div>

            <a
              href="https://wa.me/919503824431"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#20bd5a] hover:shadow-[0_0_25px_rgba(37,211,102,0.35)]"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SuccessDialog isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
          <img src="/assets/web/logo-no-bg.png" alt="Diigicards" className="h-[60px] w-auto" />
        </div>
      </footer>
    </main>
  );
}
