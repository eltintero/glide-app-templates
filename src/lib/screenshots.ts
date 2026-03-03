// Screenshot mapping based on template names
// Files are in /public/ and named like "Template Name · Glide ...png"

type ScreenshotMap = Record<string, string[]>;

// Build mapping from public directory files
const screenshotFiles: ScreenshotMap = {
  'expenses-manager': [
    '/Expenses Manager · Glide 2026-03-03 at 10.09.14 a.m..png',
    '/Expenses Manager · Glide 2026-03-03 at 10.09.21 a.m..png',
    '/Expenses Manager · Glide 2026-03-03 at 10.09.30 a.m..png',
    '/Expenses Manager · Glide 2026-03-03 at 10.09.37 a.m..png',
    '/Expenses Manager · Glide 2026-03-03 at 10.09.49 a.m..png',
  ],
  'inventory-orders-tracker': [
    '/Inventory & Orders Tracker · Glide 2026-03-03 at 10.02.02 a.m..png',
    '/Inventory & Orders Tracker · Glide 2026-03-03 at 10.02.14 a.m..png',
    '/Inventory & Orders Tracker · Glide 2026-03-03 at 10.02.37 a.m..png',
    '/Inventory & Orders Tracker · Glide 2026-03-03 at 10.03.04 a.m..png',
    '/Inventory & Orders Tracker · Glide 2026-03-03 at 10.03.12 a.m..png',
  ],
  'learning-management-system-lms': [
    '/Learning Management System (LMS) · Glide 2026-03-03 at 10.08.27 a.m..png',
    '/Learning Management System (LMS) · Glide 2026-03-03 at 10.08.36 a.m..png',
    '/Learning Management System (LMS) · Glide 2026-03-03 at 10.08.46 a.m..png',
    '/Learning Management System (LMS) · Glide 2026-03-03 at 10.08.58 a.m..png',
  ],
  'lca-faqs': [
    '/LCA FAQs · Glide 2026-03-03 at 10.12.02 a.m..png',
    '/LCA FAQs · Glide 2026-03-03 at 10.12.23 a.m..png',
    '/LCA FAQs · Glide 2026-03-03 at 10.12.33 a.m..png',
  ],
  'real-estate-listings': [
    '/Real Estate Listings · Glide 2026-03-03 at 10.05.54 a.m..png',
    '/Real Estate Listings · Glide 2026-03-03 at 10.06.01 a.m..png',
    '/Real Estate Listings · Glide 2026-03-03 at 10.06.08 a.m..png',
    '/Real Estate Listings · Glide 2026-03-03 at 10.06.15 a.m..png',
    '/Real Estate Listings · Glide 2026-03-03 at 10.06.30 a.m..png',
  ],
  'marketing-ai-content-generator': [
    '/Marketing AI · Glide 2026-03-03 at 10.10.45 a.m..png',
    '/Marketing AI · Glide 2026-03-03 at 10.10.53 a.m..png',
    '/Marketing AI · Glide 2026-03-03 at 10.11.07 a.m..png',
  ],
  'support-ticket-system-ai': [
    '/Ticket System · Glide 2026-03-03 at 10.12.48 a.m..png',
    '/Ticket System · Glide 2026-03-03 at 10.12.57 a.m..png',
  ],
  'my-hotel': [
    '/My Hotel · Glide 2026-03-03 at 10.06.44 a.m..png',
    '/My Hotel · Glide 2026-03-03 at 10.06.50 a.m..png',
    '/My Hotel · Glide 2026-03-03 at 10.06.59 a.m..png',
    '/My Hotel · Glide 2026-03-03 at 10.07.07 a.m..png',
    '/My Hotel · Glide 2026-03-03 at 10.07.16 a.m..png',
  ],
  'match-users': [
    '/Match Users · Glide 2026-03-03 at 10.03.40 a.m..png',
    '/Match Users · Glide 2026-03-03 at 10.03.40 a.m. (1).png',
    '/Match Users · Glide 2026-03-03 at 10.03.50 a.m..png',
    '/Match Users · Glide 2026-03-03 at 10.05.30 a.m..png',
  ],
  'salon-beauty': [
    '/Salon Beauty · Glide 2026-03-03 at 10.07.32 a.m..png',
    '/Salon Beauty · Glide 2026-03-03 at 10.07.40 a.m..png',
    '/Salon Beauty · Glide 2026-03-03 at 10.07.50 a.m..png',
    '/Salon Beauty · Glide 2026-03-03 at 10.08.01 a.m..png',
    '/Salon Beauty · Glide 2026-03-03 at 10.08.09 a.m..png',
  ],
  'jobs-portal': [
    '/Jobs Portal · Glide 2026-03-03 at 10.15.52 a.m..png',
  ],
  'pool-cleaning': [
    '/Pool Cleaning · Glide 2026-03-03 at 10.10.05 a.m..png',
    '/Pool Cleaning · Glide 2026-03-03 at 10.10.13 a.m..png',
    '/Pool Cleaning · Glide 2026-03-03 at 10.10.25 a.m..png',
  ],
  'company-dashboard': [
    '/Company Dashboard · Glide 2026-03-03 at 10.14.05 a.m..png',
    '/Company Dashboard · Glide 2026-03-03 at 10.15.07 a.m..png',
  ],
  'maintenance-portal': [
    '/Maintenance Portal · Glide 2026-03-03 at 10.13.40 a.m..png',
  ],
};

export function getScreenshotsForTemplate(slug: string): string[] {
  return screenshotFiles[slug] || [];
}

export function getFirstScreenshot(slug: string): string | null {
  const screenshots = screenshotFiles[slug];
  return screenshots && screenshots.length > 0 ? screenshots[0] : null;
}

export function hasScreenshots(slug: string): boolean {
  const screenshots = screenshotFiles[slug];
  return screenshots && screenshots.length > 0;
}
