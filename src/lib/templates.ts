import fs from 'fs';
import path from 'path';
import { Template, TemplateMetadata } from '@/types';

const dataDirectory = path.join(process.cwd(), 'data');

export function getTemplates(): Template[] {
  const filePath = path.join(dataDirectory, 'templates.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const templates = JSON.parse(fileContents);
  
  return templates.map((t: Template, index: number) => ({
    ...t,
    id: `template-${index}`,
    screenshots: t.screenshots || [],
  }));
}

export function getTemplateBySlug(slug: string): Template | undefined {
  const templates = getTemplates();
  return templates.find((t) => t.slug === slug);
}

export function getAllTemplateSlugs(): string[] {
  const templates = getTemplates();
  return templates.map((t) => t.slug);
}

export function getTemplatesMetadata(): TemplateMetadata[] {
  const templates = getTemplates();
  return templates.map(({ name, slug, description, price, glideUrl, icon }) => ({
    name,
    slug,
    description,
    price,
    glideUrl,
    icon,
  }));
}

