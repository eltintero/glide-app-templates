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
    longDescription: t.longDescription || generateLongDescription(t.name, t.description),
    features: t.features || generateFeatures(t.name),
    category: t.category || categorizeTemplate(t.name, t.description),
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

// Helper functions
function generateLongDescription(name: string, shortDesc: string): string {
  return `${name} - ${shortDesc}. Built by LOW / CODE Agency, this production-ready Glide template helps you launch faster and save development time. Fully customizable and designed for real business use cases.`;
}

function generateFeatures(name: string): string[] {
  const baseFeatures = [
    'Fully responsive design',
    'Ready to customize',
    'Production-ready',
    'Mobile-friendly',
  ];
  
  // Add specific features based on template name
  if (name.toLowerCase().includes('ai')) {
    baseFeatures.push('AI-powered features', 'Smart automation');
  }
  if (name.toLowerCase().includes('dashboard')) {
    baseFeatures.push('Real-time analytics', 'Visual dashboards');
  }
  if (name.toLowerCase().includes('management') || name.toLowerCase().includes('tracker')) {
    baseFeatures.push('Workflow automation', 'Task management');
  }
  
  return baseFeatures;
}

function categorizeTemplate(name: string, description: string): string {
  const text = `${name} ${description}`.toLowerCase();
  
  if (text.includes('ai') || text.includes('content generator')) return 'AI & Automation';
  if (text.includes('inventory') || text.includes('order')) return 'E-commerce';
  if (text.includes('real estate') || text.includes('property')) return 'Real Estate';
  if (text.includes('hotel') || text.includes('salon') || text.includes('pool')) return 'Service Business';
  if (text.includes('job') || text.includes('hr')) return 'HR & Recruiting';
  if (text.includes('expense') || text.includes('finance') || text.includes('kpi')) return 'Finance & Analytics';
  if (text.includes('support') || text.includes('ticket')) return 'Customer Support';
  if (text.includes('learning') || text.includes('lms')) return 'Education';
  
  return 'Business Operations';
}
