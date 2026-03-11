import { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer, Hero, FeaturedTemplates, Features, Testimonials, FAQ, CTA, ClientLogos } from '@/components';
import { getTemplates } from '@/lib/templates';

export const metadata: Metadata = {
  title: 'Premium Glide App Templates | LOW / CODE Agency',
  description: 'Browse 15+ production-ready Glide templates for business apps. Expense trackers, CRMs, dashboards, AI tools, and more. Built by LOW / CODE Agency. Launch your app in hours, not weeks.',
  alternates: {
    canonical: '/',
  },
};

const badges = [
  { name: 'Clutch Top Developer', src: '/badges/clutch-top-developer.svg' },
  { name: 'Glide Premium Expert', src: '/badges/glide-premium-expert.svg' },
  { name: 'Clutch 5 Stars', src: '/badges/clutch-5-stars.svg' },
  { name: 'Top Glide Agency', src: '/badges/top-glade-agency.svg' },
  { name: '50Pros', src: '/badges/50pros-badge.svg' },
];

function TrustBar() {
  return (
    <section className="border-b border-light-gray bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-dark-gray mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
          {[
            { name: 'Sotheby\'s', logo: '/clients/sothebys.svg' },
            { name: 'American Express', logo: '/clients/americanexpress.svg' },
            { name: 'Coca-Cola', logo: '/clients/cocacola.svg' },
            { name: 'Medtronic', logo: '/clients/medtronic.svg' },
            { name: 'Zapier', logo: '/clients/zapier.svg' },
            { name: 'Margaritaville', logo: '/clients/margaritaville.svg' },
            { name: 'Dataiku', logo: '/clients/dataiku.svg' },
          ].map((client) => (
            <Image
              key={client.name}
              src={client.logo}
              alt={`${client.name} logo`}
              width={120}
              height={40}
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {badges.map((badge) => (
            <Image
              key={badge.name}
              src={badge.src}
              alt={badge.name}
              width={80}
              height={80}
              className="h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const templates = getTemplates();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedTemplates templates={templates} />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
