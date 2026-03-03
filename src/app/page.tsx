import { Header, Footer, Hero, FeaturedTemplates, Features, Testimonials, FAQ, CTA } from '@/components';
import { getTemplates } from '@/lib/templates';

export default function Home() {
  const templates = getTemplates();
  
  return (
    <>
      <Header />
      <main>
        <Hero />
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
