import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components';
import { ClientLogoCarousel } from '@/components/ClientLogoCarousel';
import { getServiceBySlug, getAllServiceSlugs, getRelatedServices } from '@/lib/services';
import { Service } from '@/types';
import { getTemplateBySlug } from '@/lib/templates';
import { ArrowRight, Check, Clock, DollarSign, Users, Shield } from 'lucide-react';

const CONTACT_URL = 'https://www.lowcode.agency/contact?ref=glideapptemplates.com';

export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: service.title,
    description: service.metaDescription,
    keywords: [service.category, 'custom app development', 'no-code', 'LowCode Agency', ...service.platforms],
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      type: 'website',
      url: `https://glideapptemplates.com/services/${service.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.metaDescription,
    },
    alternates: {
      canonical: `https://glideapptemplates.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return (
      <>
        <Header />
        <main className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-near-black">Service Not Found</h1>
            <p className="mt-4 text-dark-gray">The service you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/services" className="mt-6 inline-block text-purple-primary hover:underline">
              Browse all services
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  const relatedServices = getRelatedServices(slug, 3);
  const relatedTemplates = service.relatedTemplates?.map(t => getTemplateBySlug(t)).filter(Boolean) || [];
  const faqs = generateFAQs(service);
  
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
              <Link href="/services" className="hover:text-purple-primary">Services</Link>
              <span>/</span>
              <span className="text-near-black">{service.category}</span>
            </nav>
          </div>
        </section>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-near-black text-white">
          <div className="absolute top-0 left-0 right-0 h-1 bg-lime-accent" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-block rounded-full border border-lime-accent/30 bg-lime-accent/10 px-4 py-1.5 text-sm text-white mb-6">
                  {service.category}
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {service.h1}
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                  {service.heroOutcome}
                </p>
                <p className="mt-2 text-base text-gray-400">
                  {service.heroSubheadline}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-lime-accent px-6 py-3 text-base font-semibold text-near-black transition-all hover:bg-lime-accent/90"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                {/* Trust signals */}
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-lime-accent" />
                    <span className="text-sm text-gray-300">300+ Apps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-lime-accent" />
                    <span className="text-sm text-gray-300">40+ Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-lime-accent" />
                    <span className="text-sm text-gray-300">Since 2020</span>
                  </div>
                </div>
              </div>
              
              {/* Trust Badges - Hero */}
              <div className="mt-10 lg:mt-0">
                <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
                  <p className="text-sm text-gray-400 mb-4 text-center">Trusted by leading companies</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white/5 p-4 flex items-center justify-center">
                      <img src="/badges/clutch-5-stars.svg" alt="Clutch 5 Stars" className="h-10" />
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 flex items-center justify-center">
                      <img src="/badges/glide-premium-expert.svg" alt="Glide Premium Expert" className="h-10" />
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 flex items-center justify-center">
                      <img src="/badges/50pros-badge.svg" alt="50Pros" className="h-10" />
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 flex items-center justify-center">
                      <img src="/badges/top-glade-agency.svg" alt="Top Glide Agency" className="h-10" />
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    Enterprise clients: Medtronic, American Express, Coca-Cola
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* BLUF Definition Block */}
        <section className="bg-purple-primary/5 border-b border-purple-light/20 py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-xl bg-white border border-purple-light/30 p-6 lg:p-8">
              <p className="text-base lg:text-lg text-near-black leading-relaxed">
                {service.bluf}
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-3">
              {/* Main Column */}
              <div className="lg:col-span-2 space-y-16">
                
                {/* What Does It Include Section */}
                <div>
                  <h2 className="text-2xl font-bold text-near-black mb-4">
                    What Does LowCode Agency&apos;s {service.keyword} Service Include?
                  </h2>
                  <p className="text-dark-gray mb-4">
                    Every project includes the Refinement Phase (requirements & design), Development Phase (building your app), and Maintenance & Growth Phase (ongoing support). Deliverables include a fully functional application, user documentation, training, and post-launch support.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-light-gray bg-white p-4">
                      <h3 className="font-semibold text-near-black flex items-center gap-2">
                        <Clock className="h-5 w-5 text-purple-primary" />
                        {service.timelineWeeks} Delivery
                      </h3>
                      <p className="mt-2 text-sm text-dark-gray">
                        From kickoff to launch, including all phases
                      </p>
                    </div>
                    <div className="rounded-lg border border-light-gray bg-white p-4">
                      <h3 className="font-semibold text-near-black flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-purple-primary" />
                        Starting at ${service.startingPrice.toLocaleString()}
                      </h3>
                      <p className="mt-2 text-sm text-dark-gray">
                        Fixed-price proposals with no hidden costs
                      </p>
                    </div>
                    <div className="rounded-lg border border-light-gray bg-white p-4">
                      <h3 className="font-semibold text-near-black flex items-center gap-2">
                        <Users className="h-5 w-5 text-purple-primary" />
                        Dedicated Team
                      </h3>
                      <p className="mt-2 text-sm text-dark-gray">
                        Project manager, designer, and developers assigned
                      </p>
                    </div>
                    <div className="rounded-lg border border-light-gray bg-white p-4">
                      <h3 className="font-semibold text-near-black flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple-primary" />
                        Post-Launch Support
                      </h3>
                      <p className="mt-2 text-sm text-dark-gray">
                        Bug fixes, updates, and ongoing improvements
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-6 border-l-4 border-lime-accent pl-4 italic text-dark-gray">
                    LowCode Agency projects reduce client development costs by an average of 90% compared to traditional code, based on outcomes across 300+ completed projects since 2020.
                  </blockquote>
                </div>
                
                {/* Pricing Section */}
                <div>
                  <h2 className="text-2xl font-bold text-near-black mb-4">
                    How Much Does {service.keyword} Development Cost in 2026?
                  </h2>
                  <p className="text-dark-gray mb-4">
                    Pricing starts at ${service.startingPrice.toLocaleString()} for {service.keyword}s and scales based on complexity, integrations, and platform choice. Most projects fall into one of three tiers.
                  </p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-near-black text-white">
                        <tr>
                          <th className="px-4 py-3 rounded-tl-lg">Tier</th>
                          <th className="px-4 py-3">Price Range</th>
                          <th className="px-4 py-3">Best For</th>
                          <th className="px-4 py-3 rounded-tr-lg">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-light-gray bg-white">
                        <tr>
                          <td className="px-4 py-3 font-medium">Small & Contained</td>
                          <td className="px-4 py-3">$15,000 - $30,000</td>
                          <td className="px-4 py-3">Single-purpose apps, one team</td>
                          <td className="px-4 py-3">4-6 weeks</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Larger System</td>
                          <td className="px-4 py-3">$30,000 - $70,000</td>
                          <td className="px-4 py-3">Multi-team, integrations, portals</td>
                          <td className="px-4 py-3">6-10 weeks</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">ERP-Like System</td>
                          <td className="px-4 py-3">$70,000 - $100,000+</td>
                          <td className="px-4 py-3">Enterprise-wide, complex workflows</td>
                          <td className="px-4 py-3">10-16 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Process Section */}
                <div>
                  <h2 className="text-2xl font-bold text-near-black mb-4">
                    What Is the Development Process?
                  </h2>
                  <p className="text-dark-gray mb-4">
                    Our three-phase process ensures you get exactly what you need: Refinement (requirements & design), Development (building with weekly demos), and Maintenance & Growth (ongoing support).
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-4 rounded-lg border border-light-gray bg-white p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-primary text-white font-bold">1</div>
                      <div>
                        <h3 className="font-semibold text-near-black">Refinement Phase (2-3 weeks)</h3>
                        <p className="mt-1 text-sm text-dark-gray">Requirements gathering, wireframes, user flows, and fixed-price proposal. You approve before we build.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-lg border border-light-gray bg-white p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-primary text-white font-bold">2</div>
                      <div>
                        <h3 className="font-semibold text-near-black">Development Phase (4-12 weeks)</h3>
                        <p className="mt-1 text-sm text-dark-gray">Building your app with weekly demos. Changes handled through structured process. QA testing included.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-lg border border-light-gray bg-white p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-primary text-white font-bold">3</div>
                      <div>
                        <h3 className="font-semibold text-near-black">Maintenance & Growth (Ongoing)</h3>
                        <p className="mt-1 text-sm text-dark-gray">Post-launch support, bug fixes, feature enhancements. Most clients work with us for years.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Platform Section */}
                <div>
                  <h2 className="text-2xl font-bold text-near-black mb-4">
                    Which Platform Will LowCode Agency Use for My {service.keyword}?
                  </h2>
                  <p className="text-dark-gray mb-4">
                    We recommend the optimal platform based on your requirements — Glide for internal tools, Bubble for complex web apps, FlutterFlow for native mobile, and custom code for enterprise systems with AI integration.
                  </p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-near-black text-white">
                        <tr>
                          <th className="px-4 py-3 rounded-tl-lg">Platform</th>
                          <th className="px-4 py-3">Best For</th>
                          <th className="px-4 py-3">Starting Price</th>
                          <th className="px-4 py-3 rounded-tr-lg">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-light-gray bg-white">
                        <tr>
                          <td className="px-4 py-3 font-medium">Glide</td>
                          <td className="px-4 py-3">Internal business apps, field operations</td>
                          <td className="px-4 py-3">$15,000</td>
                          <td className="px-4 py-3">4-6 weeks</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Bubble</td>
                          <td className="px-4 py-3">Complex web apps, SaaS, marketplaces</td>
                          <td className="px-4 py-3">$25,000</td>
                          <td className="px-4 py-3">8-12 weeks</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">FlutterFlow</td>
                          <td className="px-4 py-3">Native iOS + Android apps</td>
                          <td className="px-4 py-3">$25,000</td>
                          <td className="px-4 py-3">8-12 weeks</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Custom (Next.js + Supabase)</td>
                          <td className="px-4 py-3">Enterprise, AI-powered apps</td>
                          <td className="px-4 py-3">$50,000</td>
                          <td className="px-4 py-3">10-16 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <blockquote className="mt-6 border-l-4 border-lime-accent pl-4 italic text-dark-gray">
                    {service.platforms.join(', ')} {service.platforms.length === 1 ? 'is' : 'are'} well-suited for {service.keyword}s. We&apos;ll recommend the best fit during the Refinement Phase.
                  </blockquote>
                </div>
                
                {/* Comparison Section */}
                <div>
                  <h2 className="text-2xl font-bold text-near-black mb-4">
                    How Does LowCode Agency Compare to Alternatives?
                  </h2>
                  <p className="text-dark-gray mb-4">
                    LowCode Agency delivers apps 90% faster and cheaper than traditional development, with more flexibility than freelancers and more accountability than DIY platforms. You get a dedicated team, fixed pricing, and ongoing support.
                  </p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-near-black text-white">
                        <tr>
                          <th className="px-4 py-3 rounded-tl-lg">Factor</th>
                          <th className="px-4 py-3">LowCode Agency</th>
                          <th className="px-4 py-3">Traditional Dev</th>
                          <th className="px-4 py-3 rounded-tr-lg">DIY Platform</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-light-gray bg-white">
                        <tr>
                          <td className="px-4 py-3 font-medium">Timeline</td>
                          <td className="px-4 py-3">4-12 weeks</td>
                          <td className="px-4 py-3">3-12 months</td>
                          <td className="px-4 py-3">Varies widely</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Cost</td>
                          <td className="px-4 py-3">$15k-$100k</td>
                          <td className="px-4 py-3">$100k-$500k+</td>
                          <td className="px-4 py-3">$0-$50k (time cost)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Team</td>
                          <td className="px-4 py-3">Dedicated PM + devs</td>
                          <td className="px-4 py-3">Requires hiring</td>
                          <td className="px-4 py-3">Self-managed</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Support</td>
                          <td className="px-4 py-3">Ongoing</td>
                          <td className="px-4 py-3">Custom DevOps</td>
                          <td className="px-4 py-3">Self-managed</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Updates</td>
                          <td className="px-4 py-3">Hours</td>
                          <td className="px-4 py-3">Weeks</td>
                          <td className="px-4 py-3">Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* FAQ Section */}
                <div>
                  <h2 className="text-2xl font-bold text-near-black mb-6">
                    Frequently Asked Questions About {service.keyword}s
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details key={index} className="group rounded-lg border border-light-gray bg-white">
                        <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-near-black">
                          {faq.question}
                          <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="border-t border-light-gray px-4 py-3 text-dark-gray">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
                
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* CTA Card */}
                  <div className="rounded-xl bg-near-black p-6 text-white">
                    <h3 className="text-lg font-bold">Ready to Build?</h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Get a free consultation and fixed-price proposal within 48 hours.
                    </p>
                    <a
                      href={CONTACT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex w-full items-center justify-center rounded-lg bg-lime-accent px-4 py-3 text-sm font-semibold text-near-black transition-all hover:bg-lime-accent/90"
                    >
                      Schedule Free Consultation
                    </a>
                  </div>
                  
                  {/* Related Templates */}
                  {relatedTemplates.length > 0 && (
                    <div className="rounded-xl border border-light-gray bg-white p-6">
                      <h3 className="font-semibold text-near-black mb-4">Related Templates</h3>
                      <div className="space-y-3">
                        {relatedTemplates.map((template) => template && (
                          <Link
                            key={template.slug}
                            href={`/templates/${template.slug}`}
                            className="block rounded-lg border border-light-gray p-3 hover:border-purple-primary transition-colors"
                          >
                            <div className="font-medium text-near-black text-sm">{template.name}</div>
                            <div className="text-xs text-dark-gray mt-1">${template.price.toLocaleString()}</div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/templates"
                        className="mt-4 block text-sm text-purple-primary hover:underline"
                      >
                        View all templates →
                      </Link>
                    </div>
                  )}
                  
                  {/* Office */}
                  <div className="rounded-xl border border-light-gray bg-white p-6">
                    <h3 className="font-semibold text-near-black mb-2">Our Office</h3>
                    <p className="text-sm text-dark-gray">
                      601 Brickell Key, Suite 700<br />
                      Miami, FL 33131
                    </p>
                    <a
                      href="https://www.lowcode.agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-purple-primary hover:underline"
                    >
                      lowcode.agency →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="border-t border-light-gray bg-light-gray py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-2xl font-bold text-near-black">Related Services</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex flex-col rounded-xl border border-light-gray bg-white p-6 transition-all hover:border-purple-primary hover:shadow-lg"
                  >
                    <span className="text-xs font-medium text-purple-primary">{s.category}</span>
                    <h3 className="mt-2 font-semibold text-near-black group-hover:text-purple-primary">
                      {s.h1.split('—')[0].trim()}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-dark-gray line-clamp-2">
                      Starting at ${s.startingPrice.toLocaleString()} • {s.timelineWeeks} delivery
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Final CTA */}
        <section className="bg-near-black py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Build Your Custom {service.keyword}?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Join 300+ companies that have launched their apps with LowCode Agency. 
              Get a free consultation and fixed-price proposal within 48 hours.
            </p>
            <div className="mt-8">
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-lime-accent px-8 py-3 text-base font-semibold text-near-black transition-all hover:bg-lime-accent/90"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Last updated: March 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function generateFAQs(service: Service) {
  return [
    {
      question: `How much does a ${service.keyword} cost?`,
      answer: `A {service.keyword} from LowCode Agency start at $${service.startingPrice.toLocaleString()}. Most projects fall in the $${service.startingPrice >= 30000 ? '30,000-$70,000' : '15,000-$50,000'} range depending on complexity, integrations, and platform choice. We provide fixed-price proposals after a free discovery call.`
    },
    {
      question: `How long does it take to build a ${service.keyword}?`,
      answer: `Most ${service.keyword}s are completed in ${service.timelineWeeks} weeks. This includes the Refinement Phase (requirements & design), Development Phase, and launch. Rush timelines are available for additional cost.`
    },
    {
      question: `Which platform is best for my ${service.keyword}?`,
      answer: `We recommend the optimal platform based on your requirements. ${service.platforms.join(', ')} ${service.platforms.length === 1 ? 'is' : 'are'} well-suited for ${service.keyword}s. We'll make a specific recommendation during the Refinement Phase.`
    },
    {
      question: `Can I make changes after the app is launched?`,
      answer: `Yes. No-code and low-code platforms allow rapid iteration — most updates take hours instead of weeks. We also offer ongoing maintenance and growth plans for continuous improvement.`
    },
    {
      question: `Do you work with enterprise clients?`,
      answer: `Yes. We've built apps for Medtronic, American Express, and Coca-Cola alongside hundreds of startups and SMBs. Our process scales to enterprise compliance and security requirements.`
    },
    {
      question: `What happens during the Refinement Phase?`,
      answer: `The Refinement Phase is a 2-3 week process where we analyze your requirements, design wireframes and user flows, define the technical architecture, and provide a fixed-price proposal. You approve everything before development begins.`
    },
    {
      question: `How does LowCode Agency compare to hiring freelancers?`,
      answer: `We provide a dedicated team (project manager, designer, developers), fixed pricing, ongoing support, and accountability that freelancers can't match. Our 40+ person team has completed 300+ projects since 2020.`
    }
  ];
}
