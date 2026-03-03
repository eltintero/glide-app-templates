import { MetadataRoute } from 'next';
import { getAllTemplateSlugs } from '@/lib/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glideapptemplates.com';
  
  // Get all template slugs
  const templateSlugs = getAllTemplateSlugs();
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
  
  // Template pages
  const templatePages: MetadataRoute.Sitemap = templateSlugs.map((slug) => ({
    url: `${baseUrl}/templates/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  
  return [...staticPages, ...templatePages];
}
