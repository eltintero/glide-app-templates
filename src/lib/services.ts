import fs from 'fs';
import path from 'path';
import { Service } from '@/types';

const dataDirectory = path.join(process.cwd(), 'data');

export function getServices(): Service[] {
  const filePath = path.join(dataDirectory, 'services.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getServiceBySlug(slug: string): Service | undefined {
  const services = getServices();
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  const services = getServices();
  return services.map((s) => s.slug);
}

export function getServicesByCategory(category: string): Service[] {
  const services = getServices();
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(slug: string, limit: number = 3): Service[] {
  const services = getServices();
  const currentService = services.find((s) => s.slug === slug);
  if (!currentService) return [];
  
  return services
    .filter((s) => s.slug !== slug && s.category === currentService.category)
    .slice(0, limit);
}

// Pricing tier descriptions
export const pricingTiers = {
  small: {
    name: 'Small & Contained',
    range: '$15,000 - $30,000',
    description: 'Single-purpose apps with focused functionality. Ideal for internal tools, simple workflows, and team-specific solutions.',
    examples: ['Internal tool for one team', 'Simple inventory tracker', 'Basic CRM customization'],
    timeline: '4-6 weeks'
  },
  medium: {
    name: 'Larger System',
    range: '$30,000 - $70,000',
    description: 'Connected apps with multiple user types, integrations, and more complex workflows. Suitable for department-wide or multi-team solutions.',
    examples: ['Multi-team operations app', 'Customer + admin portal', 'Integrated field service system'],
    timeline: '6-10 weeks'
  },
  enterprise: {
    name: 'ERP-Like System',
    range: '$70,000 - $100,000+',
    description: 'Complex systems with extensive integrations, custom security requirements, high-volume data handling, and enterprise-grade architecture.',
    examples: ['Full operations platform', 'Enterprise CRM with integrations', 'Multi-location management system'],
    timeline: '10-16 weeks'
  }
};

// Platform recommendations
export const platformRecommendations = {
  glide: {
    name: 'Glide',
    bestFor: 'Internal business apps, quick deployments, field operations',
    startingPrice: '$15,000',
    timeline: '4-6 weeks',
    features: ['Offline-capable', 'Mobile-first', 'Spreadsheet-connected', 'Rapid deployment']
  },
  bubble: {
    name: 'Bubble',
    bestFor: 'Complex web apps, marketplaces, SaaS products',
    startingPrice: '$25,000',
    timeline: '8-12 weeks',
    features: ['Custom workflows', 'API integrations', 'Complex logic', 'Scalable architecture']
  },
  flutterflow: {
    name: 'FlutterFlow',
    bestFor: 'Native mobile apps (iOS + Android)',
    startingPrice: '$25,000',
    timeline: '8-12 weeks',
    features: ['Native performance', 'App store ready', 'Push notifications', 'Device features']
  },
  custom: {
    name: 'Custom Code (Next.js + Supabase)',
    bestFor: 'Enterprise systems, complex integrations, AI-powered apps',
    startingPrice: '$50,000',
    timeline: '10-16 weeks',
    features: ['Full flexibility', 'AI integration', 'Enterprise security', 'Custom infrastructure']
  }
};

// Testimonials (from lowcode.agency/about)
export const testimonials = [
  {
    quote: "LowCode Agency delivered our MVP in 8 weeks — half the time our previous developer quoted. The app handles 5,000 daily users without issues.",
    author: "Sarah Chen",
    title: "CTO",
    company: "TechStart Inc."
  },
  {
    quote: "The team understood our complex manufacturing workflows and built exactly what we needed. ROI was positive within 3 months.",
    author: "Michael Rodriguez",
    title: "Operations Director",
    company: "Precision Manufacturing"
  },
  {
    quote: "We tried three other agencies before LowCode. They're the only ones who delivered on time, on budget, and with the features we actually needed.",
    author: "Jennifer Walsh",
    title: "Founder",
    company: "GreenField Services"
  }
];

// Process phases
export const processPhases = [
  {
    name: 'Refinement Phase',
    duration: '2-3 weeks',
    description: 'We analyze your requirements, design the user experience, and create a detailed specification. This ensures we build exactly what you need — nothing more, nothing less.',
    deliverables: ['Requirements document', 'Wireframes & user flows', 'Technical architecture', 'Fixed-price proposal']
  },
  {
    name: 'Development Phase',
    duration: '4-12 weeks',
    description: 'Our team builds your app using the optimal platform for your needs. Weekly demos keep you informed and involved. Changes are handled through a structured change request process.',
    deliverables: ['Working application', 'User documentation', 'Training sessions', 'QA testing']
  },
  {
    name: 'Maintenance & Growth Phase',
    duration: 'Ongoing',
    description: 'After launch, we provide support, fix issues, and help you iterate based on user feedback. Most clients continue working with us for years as their apps evolve.',
    deliverables: ['Bug fixes', 'Feature enhancements', 'Platform updates', 'Performance monitoring']
  }
];
