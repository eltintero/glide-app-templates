import { MetadataRoute } from 'next';
import { getAllTemplateSlugs } from '@/lib/templates';
import { getAllServiceSlugs } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glideapptemplates.com';
  const lastUpdated = new Date('2026-03-10');

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Template pages
  const templateSlugs = getAllTemplateSlugs();
  const templatePages: MetadataRoute.Sitemap = templateSlugs.map((slug) => ({
    url: `${baseUrl}/templates/${slug}`,
    lastModified: lastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Template category pages
  const categories = [
    'finance-analytics', 'e-commerce', 'education', 'ai-automation',
    'real-estate', 'customer-support', 'service-business', 'hr-recruiting',
    'business-operations',
  ];
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/templates/category/${cat}`,
    lastModified: lastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Service pages
  const serviceSlugs = getAllServiceSlugs();
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: lastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...templatePages, ...categoryPages, ...servicePages];
}
