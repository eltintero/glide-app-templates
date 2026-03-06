import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.glideapptemplates.com'),
  title: {
    default: 'Glide App Templates | LOW / CODE Agency',
    template: '%s | LOW / CODE Agency',
  },
  description: 'Premium Glide templates for business apps. Production-ready, customizable, and built by LOW / CODE Agency. Launch your app in hours, not weeks.',
  keywords: ['Glide', 'Glide templates', 'no-code', 'low-code', 'app templates', 'business apps', 'LOW CODE Agency'],
  authors: [{ name: 'LOW / CODE Agency', url: 'https://www.lowcode.agency' }],
  creator: 'LOW / CODE Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.glideapptemplates.com',
    siteName: 'Glide App Templates',
    title: 'Glide App Templates | LOW / CODE Agency',
    description: 'Premium Glide templates for business apps. Production-ready, customizable, and built by LOW / CODE Agency.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Glide App Templates by LOW / CODE Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glide App Templates | LOW / CODE Agency',
    description: 'Premium Glide templates for business apps. Production-ready, customizable, and built by LOW / CODE Agency.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-off-white antialiased">
        {children}
      </body>
    </html>
  );
}
