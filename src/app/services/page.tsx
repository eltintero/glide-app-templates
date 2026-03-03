import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components';
import { getServices } from '@/lib/services';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom App Development Services | LOW / CODE Agency',
  description: 'Custom business apps built 90% faster than traditional development. Internal tools, CRMs, field service apps, and more. Starting at $15,000. 300+ apps delivered since 2020.',
  openGraph: {
    title: 'Custom App Development Services | LOW / CODE Agency',
    description: 'Custom business apps built 90% faster than traditional development. Starting at $15,000.',
  },
};

export default function ServicesPage() {
  const services = getServices();
  
  // Group by category
  const categories = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);
  
  const categoryOrder = [
    'Business Operations',
    'Enterprise',
    'Small Business',
    'Field Operations',
    'Sales & Marketing',
    'Human Resources',
    'AI & Automation',
    'Automation',
    'Healthcare',
    'Manufacturing',
    'Logistics',
    'Retail',
    'Real Estate',
    'Hospitality',
    'Professional Services',
    'Legal',
    'Finance',
    'Education',
    'Nonprofit',
    'Fitness & Wellness',
    'Food & Beverage',
    'Events',
    'Project Management',
    'Customer Experience',
    'Business Intelligence',
    'Construction',
    'Operations',
  ];
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-near-black text-white py-16 lg:py-24">
          <div className="absolute top-0 left-0 right-0 h-1 bg-lime-accent" />
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Custom App Development Services
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              Built 90% faster than traditional development. Internal tools, CRMs, field apps, and more — 
              tailored to your workflow, starting at $15,000.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-accent" />
                <span className="text-sm text-gray-300">300+ Apps Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-accent" />
                <span className="text-sm text-gray-300">40+ Person Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-accent" />
                <span className="text-sm text-gray-300">Since 2020</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            {categoryOrder.map((category) => {
              const categoryServices = categories[category];
              if (!categoryServices || categoryServices.length === 0) return null;
              
              return (
                <div key={category} className="mb-16">
                  <h2 className="text-2xl font-bold text-near-black mb-6">{category}</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group flex flex-col rounded-xl border border-light-gray bg-white p-6 transition-all hover:border-purple-primary hover:shadow-lg"
                      >
                        <h3 className="font-semibold text-near-black group-hover:text-purple-primary line-clamp-2">
                          {service.h1.split('—')[0].trim()}
                        </h3>
                        <p className="mt-3 flex-1 text-sm text-dark-gray line-clamp-3">
                          {service.heroOutcome}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-light-gray pt-4">
                          <span className="text-sm font-medium text-near-black">
                            From ${service.startingPrice.toLocaleString()}
                          </span>
                          <span className="text-sm text-purple-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                            Learn More <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-purple-primary/5 py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-2xl font-bold text-near-black">Not Sure What You Need?</h2>
            <p className="mt-4 text-dark-gray max-w-2xl mx-auto">
              Schedule a free consultation and we&apos;ll help you identify the right solution for your business.
            </p>
            <a
              href="https://www.lowcode.agency/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-lg bg-purple-primary px-8 py-3 text-base font-semibold text-white transition-all hover:bg-purple-dark"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
