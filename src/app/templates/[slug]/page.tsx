import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer, FeaturedTemplates } from '@/components';
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel';
import { getTemplateBySlug, getTemplates, getAllTemplateSlugs } from '@/lib/templates';
import { getScreenshotsForTemplate, getFirstScreenshot } from '@/lib/screenshots';
import { ArrowLeft, ExternalLink, Check } from 'lucide-react';

// Generate static params for all templates
export function generateStaticParams() {
  const slugs = getAllTemplateSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  
  if (!template) {
    return {
      title: 'Template Not Found',
    };
  }
  
  return {
    title: `${template.name} - Glide Template`,
    description: template.longDescription || `${template.name} - ${template.description}`,
    keywords: [template.name, 'Glide template', template.category || 'business app', 'LOW CODE Agency'],
    openGraph: {
      title: `${template.name} - Glide Template | LOW / CODE Agency`,
      description: template.description,
      type: 'website',
      images: template.icon ? [{ url: template.icon, alt: template.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${template.name} - Glide Template`,
      description: template.description,
    },
    alternates: {
      canonical: `/templates/${template.slug}`,
    },
  };
}

export default async function TemplatePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  
  if (!template) {
    return (
      <>
        <Header />
        <main className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-near-black">Template Not Found</h1>
            <p className="mt-4 text-dark-gray">The template you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/templates" className="mt-6 inline-block text-purple-primary hover:underline">
              Browse all templates
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  const screenshots = getScreenshotsForTemplate(slug);
  const allTemplates = getTemplates();
  const relatedTemplates = allTemplates
    .filter((t) => t.slug !== template.slug)
    .slice(0, 3);
  
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="border-b border-light-gray bg-white py-4">
          <div className="mx-auto max-w-7xl px-6">
            <nav className="flex items-center gap-2 text-sm text-dark-gray">
              <Link href="/" className="hover:text-purple-primary">Home</Link>
              <span>/</span>
              <Link href="/templates" className="hover:text-purple-primary">Templates</Link>
              <span>/</span>
              <span className="text-near-black">{template.name}</span>
            </nav>
          </div>
        </section>
        
        {/* Main content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Screenshot Carousel */}
              <div>
                {screenshots.length > 0 ? (
                  <ScreenshotCarousel 
                    screenshots={screenshots} 
                    templateName={template.name} 
                  />
                ) : template.icon ? (
                  <div className="overflow-hidden rounded-xl border border-light-gray bg-white">
                    <div className="flex aspect-[4/3] items-center justify-center p-12">
                      <img 
                        src={template.icon} 
                        alt={template.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-light-gray bg-light-gray">
                    <div className="h-24 w-24 rounded-xl bg-purple-light/30" />
                  </div>
                )}
              </div>
              
              {/* Right: Details */}
              <div>
                <span className="inline-block rounded-full bg-purple-light/30 px-3 py-1 text-sm font-medium text-purple-dark">
                  {template.category}
                </span>
                
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
                  {template.name}
                </h1>
                
                <p className="mt-4 text-lg text-dark-gray">
                  {template.description}
                </p>
                
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-near-black">
                    ${template.price.toLocaleString()}
                  </span>
                  <span className="text-dark-gray">USD</span>
                </div>
                
                {/* CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={template.glideUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-purple-primary px-8 py-3 text-base font-semibold text-white transition-all hover:bg-purple-dark hover:shadow-lg"
                  >
                    Buy Template
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="https://www.lowcode.agency/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-light-gray px-8 py-3 text-base font-semibold text-near-black transition-all hover:border-purple-primary hover:text-purple-primary"
                  >
                    Need Custom Work?
                  </a>
                </div>
                
                {/* Features */}
                {template.features && template.features.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-semibold text-near-black">Included Features:</h3>
                    <ul className="mt-3 space-y-2">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-dark-gray">
                          <Check className="h-5 w-5 text-lime-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Long description */}
                {template.longDescription && (
                  <p className="mt-6 text-dark-gray leading-relaxed">
                    {template.longDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Related templates */}
        {relatedTemplates.length > 0 && (
          <section className="border-t border-light-gray bg-light-gray py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-2xl font-bold text-near-black">More Templates</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedTemplates.map((t) => {
                  const relatedScreenshot = getFirstScreenshot(t.slug);
                  return (
                  <Link
                    key={t.id}
                    href={`/templates/${t.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-light-gray bg-white transition-all hover:border-purple-light hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] bg-light-gray">
                      {relatedScreenshot ? (
                        <Image
                          src={relatedScreenshot}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      ) : t.icon ? (
                        <Image
                          src={t.icon}
                          alt={t.name}
                          fill
                          className="object-contain p-6"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <div className="h-12 w-12 rounded-lg bg-purple-light/30" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-semibold text-near-black group-hover:text-purple-primary">
                        {t.name}
                      </h3>
                      <p className="mt-1 flex-1 text-sm text-dark-gray line-clamp-1">
                        {t.description}
                      </p>
                      <div className="mt-2 text-sm font-medium text-near-black">
                        ${t.price.toLocaleString()}
                      </div>
                    </div>
                  </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
