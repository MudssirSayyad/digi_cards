'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteLogo from '@/components/SiteLogo';

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

export default function ContactPage() {
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

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.25),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(2,132,199,0.2),_transparent_40%)]" />

      <header className="sticky top-0 z-40 border-b border-sky-300/20 bg-[#060a11]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="diigicards home">
            <SiteLogo className="h-14 w-auto sm:h-16" priority />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-sky-300/40 px-5 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500/10"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      <section className="relative mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-sky-300">Contact</p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s launch your Digital identity
          </h1>
          <p className="mt-4 text-slate-300">
            Share a few details and our team will help you choose the perfect card setup for your
            brand or team.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm text-slate-200">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-[#0b1222] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-slate-200">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-[#0b1222] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60"
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block text-sm text-slate-200">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-[#0b1222] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-slate-200">
                Project Goals
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your use case"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-white/15 bg-[#0b1222] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Request a Callback'}
            </button>
          </form>
        </div>
      </section>

      <SuccessDialog isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </main>
  );
}
