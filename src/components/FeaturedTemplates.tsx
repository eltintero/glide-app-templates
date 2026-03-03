import Image from 'next/image';
import Link from 'next/link';
import { Template } from '@/types';
import { ArrowRight } from 'lucide-react';

interface FeaturedTemplatesProps {
  templates: Template[];
}

export function FeaturedTemplates({ templates }: FeaturedTemplatesProps) {
  // Get top 6 templates by price (premium first)
  const featured = [...templates]
    .sort((a, b) => b.price - a.price)
    .slice(0, 6);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
            Premium Templates
          </h2>
          <p className="mt-4 text-lg text-dark-gray">
            Built for real businesses. Ready to customize. Deploy in minutes.
          </p>
        </div>

        {/* Templates grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/templates"
            className="inline-flex items-center text-base font-semibold text-purple-primary transition-colors hover:text-purple-dark"
          >
            View All Templates
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-light-gray bg-white transition-all hover:border-purple-light hover:shadow-lg"
    >
      {/* Image placeholder */}
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
        {/* Category badge */}
        <span className="text-xs font-medium text-purple-primary">
          {template.category}
        </span>
        
        <h3 className="mt-1 text-lg font-semibold text-near-black group-hover:text-purple-primary">
          {template.name}
        </h3>
        
        <p className="mt-2 flex-1 text-sm text-dark-gray line-clamp-2">
          {template.description}
        </p>
        
        {/* Price */}
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
