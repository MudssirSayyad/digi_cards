'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 gradient-neon-text"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>

        <h2 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h2>

        <p className="text-gray-300 mb-8 text-lg">
          Oops! The portfolio you're looking for doesn't exist or has been moved.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
