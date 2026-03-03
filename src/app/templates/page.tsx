import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components';
import { getTemplates } from '@/lib/templates';

export const metadata: Metadata = {
  title: 'All Glide Templates',
  description: 'Browse our collection of premium Glide templates. Business apps, AI tools, dashboards, and more. Production-ready and fully customizable.',
  openGraph: {
    title: 'All Glide Templates | LOW / CODE Agency',
    description: 'Browse our collection of premium Glide templates. Business apps, AI tools, dashboards, and more.',
  },
};

export default function TemplatesPage() {
  const templates = getTemplates();
  
  // Get unique categories
  const categories = [...new Set(templates.map(t => t.category).filter(Boolean))];
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Header section */}
        <section className="border-b border-light-gray bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
              All Templates
            </h1>
            <p className="mt-4 text-lg text-dark-gray">
              Browse our collection of {templates.length} premium Glide templates
            </p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="border-b border-light-gray bg-white py-4">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-dark-gray">Categories:</span>
              <button className="rounded-full bg-purple-primary px-4 py-1.5 text-sm font-medium text-white">
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-light-gray px-4 py-1.5 text-sm font-medium text-dark-gray transition-colors hover:border-purple-primary hover:text-purple-primary"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Templates grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TemplateCard({ template }: { template: ReturnType<typeof getTemplates>[0] }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-light-gray bg-white transition-all hover:border-purple-light hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] bg-light-gray">
        {template.icon ? (
          <Image
            src={template.icon}
            alt={template.name}
            fill
            className="object-contain p-8"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="h-16 w-16 rounded-xl bg-purple-light/30" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium text-purple-primary">
          {template.category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-near-black group-hover:text-purple-primary">
          {template.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-dark-gray line-clamp-2">
          {template.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-near-black">
            ${template.price.toLocaleString()}
          </span>
          <span className="text-sm font-medium text-purple-primary opacity-0 transition-opacity group-hover:opacity-100">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
