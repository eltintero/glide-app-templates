export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: number;
  category?: string;
  features?: string[];
  glideUrl: string;
  icon?: string | null;
  screenshots?: string[];
}

export interface Service {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  bluf: string;
  category: string;
  heroOutcome: string;
  heroSubheadline: string;
  platforms: string[];
  startingPrice: number;
  timelineWeeks: string;
  relatedTemplates?: string[];
}

export interface TemplateMetadata {
  name: string;
  slug: string;
  description: string;
  price: number;
  glideUrl: string;
  icon?: string | null;
}
