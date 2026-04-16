import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://glideapptemplates.com'),
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
    url: 'https://glideapptemplates.com',
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
  url: 'https://glideapptemplates.com',
  logo: 'https://glideapptemplates.com/Logo_agency.png',
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
  url: 'https://glideapptemplates.com',
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
        <Script id="posthog" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Ii init Di qi Sr Bi Zi Pi capture calculateEventProperties Yi register register_once register_for_session unregister unregister_for_session Xi getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Ji identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Wi Vi createPersonProfile setInternalOrTestUser Gi Fi Ki opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing $i debug Tr Ui getPageViewId captureTraceFeedback captureTraceMetric Ri".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_ljiB7nsuEGFyfpTUNKFhdA5LDFs3SUBZP7SfOUxhxEa', {
              api_host: 'https://p.lowcode.agency',
              ui_host: 'https://us.posthog.com',
              defaults: '2026-01-30',
              person_profiles: 'identified_only',
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-off-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
