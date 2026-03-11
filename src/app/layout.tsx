import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Glide App Templates',
  url: 'https://www.glideapptemplates.com',
  logo: 'https://www.glideapptemplates.com/Logo_agency.png',
  description: 'Premium Glide templates and custom app development. 40+ team members, 300+ projects delivered since 2020.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'LOW / CODE Agency',
    url: 'https://www.lowcode.agency',
    logo: 'https://www.lowcode.agency/logo.png',
    description: 'Custom app development agency. 40+ team members, 300+ projects delivered since 2020.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '601 Brickell Key, Suite 700',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      postalCode: '33131',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/company/lowcodeagency',
      'https://x.com/lowaboratory',
    ],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '601 Brickell Key, Suite 700',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33131',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.glideapps.com/templates/authors/lowcode-2',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Glide App Templates',
  url: 'https://www.glideapptemplates.com',
  publisher: {
    '@type': 'Organization',
    name: 'LOW / CODE Agency',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-off-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
