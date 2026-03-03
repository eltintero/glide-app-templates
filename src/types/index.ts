export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: number;
  glideUrl: string;
  icon?: string | null;
  screenshots?: string[];
  features?: string[];
  category?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TemplateMetadata {
  name: string;
  slug: string;
  description: string;
  price: number;
  glideUrl: string;
  icon?: string | null;
}
