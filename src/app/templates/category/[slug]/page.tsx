import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components';
import { getTemplates } from '@/lib/templates';
import { getFirstScreenshot } from '@/lib/screenshots';

const categoryMap: Record<string, { name: string; description: string; h1: string }> = {
  'finance-analytics': {
    name: 'Finance & Analytics',
    h1: 'Finance & Analytics Glide Templates',
    description: 'Glide templates for expense tracking, KPI dashboards, financial reporting, and business analytics. Production-ready and customizable.',
  },
  'e-commerce': {
    name: 'E-commerce',
    h1: 'E-commerce & Inventory Glide Templates',
    description: 'Glide templates for inventory management, order tracking, product catalogs, and e-commerce operations. Built for real businesses.',
  },
  'education': {
    name: 'Education',
    h1: 'Education & LMS Glide Templates',
    description: 'Glide templates for learning management systems, course platforms, student tracking, and training programs.',
  },
  'ai-automation': {
    name: 'AI & Automation',
    h1: 'AI & Automation Glide Templates',
    description: 'AI-powered Glide templates for content generation, FAQ chatbots, ticket classification, and smart workflows.',
  },
  'real-estate': {
    name: 'Real Estate',
    h1: 'Real Estate Glide Templates',
    description: 'Glide templates for property listings, real estate CRM, and agent tools. Showcase properties professionally.',
  },
  'customer-support': {
    name: 'Customer Support',
    h1: 'Customer Support Glide Templates',
    description: 'Glide templates for helpdesk ticket systems, AI-powered support, and customer service management.',
  },
  'service-business': {
    name: 'Service Business',
    h1: 'Service Business Glide Templates',
    description: 'Glide templates for salons, hotels, pool cleaning, field service, and other appointment-based businesses.',
  },
  'hr-recruiting': {
    name: 'HR & Recruiting',
    h1: 'HR & Recruiting Glide Templates',
    description: 'Glide templates for job portals, applicant tracking, hiring pipelines, and HR management.',
  },
  'business-operations': {
    name: 'Business Operations',
    h1: 'Business Operations Glide Templates',
    description: 'Glide templates for company dashboards, maintenance portals, team communication, and general operations.',
  },
};

function slugToCategory(slug: string): string | undefined {
  return categoryMap[slug]?.name;
}

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryMap[slug];
  if (!cat) return { title: 'Category Not Found' };

  return {
    title: cat.h1,
    description: cat.description,
    alternates: { canonical: `/templates/category/${slug}` },
    openGraph: {
      title: `${cat.h1} | LOW / CODE Agency`,
      description: cat.description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categoryMap[slug];
  if (!cat) notFound();

  const allTemplates = getTemplates();
  const templates = allTemplates.filter((t) => t.category === cat.name);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Header */}
        <section className="border-b border-light-gray bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <nav className="flex items-center gap-2 text-sm text-dark-gray mb-4">
              <Link href="/" className="hover:text-purple-primary">Home</Link>
              <span>/</span>
              <Link href="/templates" className="hover:text-purple-primary">Templates</Link>
              <span>/</span>
              <span className="text-near-black">{cat.name}</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
              {cat.h1}
            </h1>
            <p className="mt-4 text-lg text-dark-gray max-w-3xl">
              {cat.description}
            </p>
          </div>
        </section>

        {/* Templates grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            {templates.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {templates.map((template) => {
                  const screenshot = getFirstScreenshot(template.slug);
                  return (
                    <Link
                      key={template.id}
                      href={`/templates/${template.slug}`}
                      className="group flex flex-col overflow-hidden rounded-xl border border-light-gray bg-white transition-all hover:border-purple-light hover:shadow-lg"
                    >
                      <div className="relative aspect-[16/10] bg-light-gray">
                        {screenshot ? (
                          <Image
                            src={screenshot}
                            alt={`Screenshot of ${template.name} - ${template.category} Glide template`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover"
                          />
                        ) : template.icon ? (
                          <Image
                            src={template.icon}
                            alt={`${template.name} - ${template.category} Glide template`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-contain p-8"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <div className="h-16 w-16 rounded-xl bg-purple-light/30" />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-lg font-semibold text-near-black group-hover:text-purple-primary">
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
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-dark-gray">No templates in this category yet.</p>
                <Link href="/templates" className="mt-4 inline-block text-purple-primary hover:underline">
                  Browse all templates
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Other categories */}
        <section className="border-t border-light-gray bg-light-gray py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-bold text-near-black mb-6">Browse Other Categories</h2>
            <div className="flex flex-wrap gap-3">
              {Object.entries(categoryMap)
                .filter(([s]) => s !== slug)
                .map(([s, c]) => (
                  <Link
                    key={s}
                    href={`/templates/category/${s}`}
                    className="rounded-full border border-light-gray bg-white px-4 py-2 text-sm font-medium text-dark-gray transition-colors hover:border-purple-primary hover:text-purple-primary"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
