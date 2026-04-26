'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { FaHandshake, FaQrcode, FaArrowsRotate } from 'react-icons/fa6';

const previewProfiles = [
  {
    name: 'Aarav Mehta',
    role: 'Growth Consultant',
    company: 'Diigicards Pro',
    taps: '1,284',
    links: ['Website', 'LinkedIn', 'Calendly'],
  },
  {
    name: 'Neha Kapoor',
    role: 'UX Strategist',
    company: 'Nexa Labs',
    taps: '932',
    links: ['Portfolio', 'Instagram', 'Behance'],
  },
  {
    name: 'Rohan Iyer',
    role: 'Sales Director',
    company: 'Orbit Systems',
    taps: '2,011',
    links: ['Company Site', 'WhatsApp', 'Book Demo'],
  },
];

export default function Home() {
  const [activePreview, setActivePreview] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.1),_transparent_35%),radial-gradient(circle_at_30%_90%,_rgba(14,116,144,0.18),_transparent_40%)]" />

      <header className="sticky top-0 z-50 border-b border-sky-400/20 bg-[#060a11]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.08em] text-sky-300 sm:text-xl"
          >
            diigicards.com
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
            <a href="#benefits" className="text-sm text-slate-300 transition hover:text-sky-300">
              Benefits
            </a>
            <Link
              href="https://app.diigicards.com/login"
              className="rounded-full border border-sky-300/40 px-5 py-2 text-sm font-medium text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/10"
            >
              Login
            </Link>
          </div>
        </nav>

        {menuOpen ? (
          <div className="border-t border-sky-400/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-slate-200">
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </a>
              <a href="#benefits" onClick={() => setMenuOpen(false)}>
                Benefits
              </a>
              <Link href="https://app.diigicards.com/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="z-10"
        >
          <p className="mb-5 inline-flex rounded-full border border-sky-300/30 bg-sky-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
            Premium NFC Business Cards
          </p>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            The Last Business Card You&apos;ll Ever Buy.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Share your contact details, social links, and portfolio with a single tap. Built for
            founders, sales teams, and creators who want instant first impressions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#pricing"
              className="rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.45)]"
            >
              Get Your Card
            </Link>
            <a
              href="#live-preview"
              className="rounded-full border border-sky-300/40 px-7 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-400/10"
            >
              View Demo Profile
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur-sm sm:grid-cols-4">
            <div>
              <p className="text-sky-300">50K+</p>
              <p className="text-slate-400">Cards Sold</p>
            </div>
            <div>
              <p className="text-sky-300">4.9/5</p>
              <p className="text-slate-400">User Rating</p>
            </div>
            <div>
              <p className="text-sky-300">1 Tap</p>
              <p className="text-slate-400">Share Profile</p>
            </div>
            <div>
              <p className="text-sky-300">0 Apps</p>
              <p className="text-slate-400">Required</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="live-preview"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/20 to-white/5 p-3 shadow-[0_24px_80px_rgba(4,12,28,0.7)] backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#091120] p-4">
              <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/20" />
              <div className="rounded-2xl bg-[#0f1a30] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-sky-300/90">Live Preview</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {previewProfiles[activePreview].name}
                </h3>
                <p className="text-sm text-slate-300">{previewProfiles[activePreview].role}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {previewProfiles[activePreview].company}
                </p>

                <div className="mt-5 rounded-xl border border-sky-300/25 bg-sky-500/10 p-3">
                  <p className="text-xs text-slate-400">Total Taps</p>
                  <p className="text-2xl font-semibold text-sky-200">
                    {previewProfiles[activePreview].taps}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {previewProfiles[activePreview].links.map((link) => (
                    <span
                      key={link}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200"
                    >
                      {link}
                    </span>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                  Save Contact
                </button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {previewProfiles.map((profile, index) => (
                  <button
                    key={profile.name}
                    type="button"
                    onClick={() => setActivePreview(index)}
                    className={`rounded-xl px-2 py-2 text-xs transition ${
                      activePreview === index
                        ? 'border border-sky-300/60 bg-sky-500/20 text-sky-100'
                        : 'border border-white/10 bg-white/5 text-slate-400 hover:border-sky-300/40 hover:text-slate-200'
                    }`}
                  >
                    Profile {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -left-10 top-8 hidden h-48 w-48 rounded-full bg-sky-500/25 blur-3xl sm:block" />
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-sky-300">Features</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Built for speed and trust
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Tap-to-Share',
              body: 'One tap instantly opens your profile on any smartphone. No app needed.',
              Icon: FaHandshake,
            },
            {
              title: 'QR Backup',
              body: 'Printed dynamic QR code ensures sharing works even without NFC support.',
              Icon: FaQrcode,
            },
            {
              title: 'Instant Profile Updates',
              body: 'Edit your links and details once. Your card updates in real-time forever.',
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

      <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a1324]/80 shadow-[0_16px_56px_rgba(2,8,24,0.45)]">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Traditional Paper vs. Diigicards
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-white/5 text-slate-300">
                <tr>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Traditional Paper</th>
                  <th className="px-6 py-4 font-medium text-sky-200">Diigicards</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10 text-slate-300">
                  <td className="px-6 py-4">Cost</td>
                  <td className="px-6 py-4">Recurring print costs every reorder</td>
                  <td className="px-6 py-4 text-sky-100">One-time purchase, lifelong updates</td>
                </tr>
                <tr className="border-t border-white/10 text-slate-300">
                  <td className="px-6 py-4">Sustainability</td>
                  <td className="px-6 py-4">Paper waste and frequent disposal</td>
                  <td className="px-6 py-4 text-sky-100">Reusable card with zero reprints</td>
                </tr>
                <tr className="border-t border-white/10 text-slate-300">
                  <td className="px-6 py-4">Lead Capture</td>
                  <td className="px-6 py-4">Manual data entry and lost contacts</td>
                  <td className="px-6 py-4 text-sky-100">Save contact instantly with analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-sky-300">How It Works</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            From checkout to connections in minutes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Order',
              body: 'Choose your premium NFC card style and complete checkout.',
            },
            {
              step: '02',
              title: 'Setup Profile',
              body: 'Add your brand, contact info, links, and portfolio in your dashboard.',
            },
            {
              step: '03',
              title: 'Tap & Connect',
              body: 'Tap your card on a phone and share your profile instantly at every meeting.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-xs tracking-[0.2em] text-sky-300">STEP {item.step}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-sky-300">Dashboard Preview</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Client Analytics Dashboard</h2>
              <p className="mt-4 text-slate-300">
                Track profile taps, monitor top-performing links, and optimize your conversions with
                real-time visibility.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full border border-sky-300/40 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-400/10"
              >
                Get in Touch
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1730]/90 p-5 shadow-[0_15px_45px_rgba(3,8,22,0.5)]">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-sky-500/15 p-4">
                  <p className="text-xs text-slate-300">Today&apos;s Taps</p>
                  <p className="mt-2 text-2xl font-semibold text-sky-100">174</p>
                </div>
                <div className="rounded-xl bg-sky-500/15 p-4">
                  <p className="text-xs text-slate-300">Lead Saves</p>
                  <p className="mt-2 text-2xl font-semibold text-sky-100">53</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-slate-300">Top Links</p>
                <div className="mt-3 space-y-2 text-sm text-slate-200">
                  <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
                    <span>Portfolio</span>
                    <span className="text-sky-200">41%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
                    <span>WhatsApp</span>
                    <span className="text-sky-200">27%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
                    <span>Book Meeting</span>
                    <span className="text-sky-200">18%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
          <p>diigicards.com</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-sky-200">
              Contact
            </Link>
            <Link href="https://app.diigicards.com/login" className="hover:text-sky-200">
              Login
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
