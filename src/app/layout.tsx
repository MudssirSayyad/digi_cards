import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: {
    template: '%s | DigiCards - NFC Digital Business Cards',
    default: 'DigiCards - NFC Digital Business Cards & Portfolios',
  },
  description:
    'Create beautiful, shareable NFC digital business cards and professional portfolios. Tap to connect, share instantly.',
  keywords: ['NFC', 'digital business card', 'portfolio', 'vCard', 'contact sharing'],
  authors: [{ name: 'Agency' }],
  creator: 'Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digicards.app',
    siteName: 'DigiCards',
    images: [
      {
        url: 'https://digicards.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DigiCards - Professional Digital Business Cards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiCards - NFC Digital Business Cards',
    description: 'Create beautiful, shareable digital business cards with NFC technology',
    creator: '@digicards',
    images: ['https://digicards.app/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
      <body className="bg-black text-white antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Main content */}
          {children}
        </div>
      </body>
    </html>
  );
}
