import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Diigicards',
    default: 'Diigicards | Premium NFC Business Cards',
  },
  description:
    'Diigicards offers premium NFC business cards with live profile sharing, real-time updates, and lead analytics.',
  keywords: ['NFC business card', 'digital card', 'lead capture', 'tap to share'],
  authors: [{ name: 'diigicards.com' }],
  creator: 'diigicards.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diigicards.com',
    siteName: 'diigicards.com',
    images: [
      {
        url: 'https://diigicards.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'diigicards.com - Premium NFC Business Cards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diigicards | Premium NFC Business Cards',
    description: 'Share your contact details, socials, and portfolio with a single tap.',
    creator: '@digicards',
    images: ['https://diigicards.com/og-image.png'],
  },
  icons: {
    icon: '/assets/web/logo-no-bg.png',
    shortcut: '/assets/web/logo-no-bg.png',
    apple: '/assets/web/logo-no-bg.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          {/* Main content */}
          {children}
        </div>
      </body>
    </html>
  );
}
