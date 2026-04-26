'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  company: string;
  message: string;
  createdAt: string;
}

interface ExpandedMessage {
  [key: string]: boolean;
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<ExpandedMessage>({});

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data.reverse());
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        const response = await fetch(`/api/messages?id=${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setMessages(messages.filter((msg) => msg.id !== id));
        }
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.1),_transparent_35%)]" />

      <header className="sticky top-0 z-40 border-b border-sky-300/20 bg-[#060a11]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold tracking-[0.08em] text-sky-300">Admin Panel</h1>
          <Link
            href="/"
            className="rounded-full border border-sky-300/40 px-5 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500/10"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white">Contact Messages</h2>
          <p className="mt-2 text-slate-300">
            Total: {messages.length} message{messages.length !== 1 ? 's' : ''}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <p className="text-slate-300">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <p className="text-slate-300">No messages yet</p>
          </div>
        ) : (
          <div className="space-y-4 overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5">
                <tr>
                  <th className="px-4 py-3 font-medium text-sky-200">Name</th>
                  <th className="px-4 py-3 font-medium text-sky-200">Email</th>
                  <th className="px-4 py-3 font-medium text-sky-200">Company</th>
                  <th className="px-4 py-3 font-medium text-sky-200">Date</th>
                  <th className="px-4 py-3 font-medium text-sky-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message.id} className="border-b border-white/10 hover:bg-white/[0.02]">
                    <td className="px-4 py-3">{message.fullName}</td>
                    <td className="px-4 py-3 text-slate-300">{message.email}</td>
                    <td className="px-4 py-3 text-slate-300">{message.company}</td>
                    <td className="px-4 py-3 text-slate-400">{formatDate(message.createdAt)}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => toggleExpanded(message.id)}
                          className="rounded-md border border-sky-300/40 px-3 py-1 text-xs font-medium text-sky-100 transition hover:bg-sky-500/10"
                        >
                          {expanded[message.id] ? 'Hide' : 'View'}
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteMessage(message.id)}
                          className="rounded-md border border-red-500/40 px-3 py-1 text-xs font-medium text-red-400 transition hover:bg-red-500/10"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {Object.values(expanded).some((v) => v) && (
              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-semibold text-white">Message Details</h3>
                {messages.map((message) => {
                  if (!expanded[message.id]) return null;
                  return (
                    <div
                      key={message.id}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white">{message.fullName}</h4>
                          <p className="text-sm text-slate-400">{message.email}</p>
                        </div>
                        <p className="text-xs text-slate-400">{formatDate(message.createdAt)}</p>
                      </div>
                      <div className="mb-4 rounded-lg bg-white/[0.03] p-4">
                        <p className="text-sm text-slate-300">{message.message}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteMessage(message.id)}
                        className="rounded-full border border-red-500/40 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
                      >
                        Delete This Message
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
