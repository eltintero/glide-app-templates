type ScreenshotMap = Record<string, string[]>;

const screenshotFiles: ScreenshotMap = {
  'expenses-manager': [
    '/screenshots/expenses-manager/expenses-manager-01.png',
    '/screenshots/expenses-manager/expenses-manager-02.png',
    '/screenshots/expenses-manager/expenses-manager-03.png',
    '/screenshots/expenses-manager/expenses-manager-04.png',
    '/screenshots/expenses-manager/expenses-manager-05.png',
  ],
  'inventory-orders-tracker': [
    '/screenshots/inventory-orders-tracker/inventory-orders-tracker-01.png',
    '/screenshots/inventory-orders-tracker/inventory-orders-tracker-02.png',
    '/screenshots/inventory-orders-tracker/inventory-orders-tracker-03.png',
    '/screenshots/inventory-orders-tracker/inventory-orders-tracker-04.png',
    '/screenshots/inventory-orders-tracker/inventory-orders-tracker-05.png',
  ],
  'learning-management-system-lms': [
    '/screenshots/learning-management-system-lms/learning-management-system-lms-01.png',
    '/screenshots/learning-management-system-lms/learning-management-system-lms-02.png',
    '/screenshots/learning-management-system-lms/learning-management-system-lms-03.png',
    '/screenshots/learning-management-system-lms/learning-management-system-lms-04.png',
  ],
  'lca-faqs': [
    '/screenshots/lca-faqs/lca-faqs-01.png',
    '/screenshots/lca-faqs/lca-faqs-02.png',
    '/screenshots/lca-faqs/lca-faqs-03.png',
  ],
  'real-estate-listings': [
    '/screenshots/real-estate-listings/real-estate-listings-01.png',
    '/screenshots/real-estate-listings/real-estate-listings-02.png',
    '/screenshots/real-estate-listings/real-estate-listings-03.png',
    '/screenshots/real-estate-listings/real-estate-listings-04.png',
    '/screenshots/real-estate-listings/real-estate-listings-05.png',
  ],
  'marketing-ai-content-generator': [
    '/screenshots/marketing-ai-content-generator/marketing-ai-content-generator-01.png',
    '/screenshots/marketing-ai-content-generator/marketing-ai-content-generator-02.png',
    '/screenshots/marketing-ai-content-generator/marketing-ai-content-generator-03.png',
  ],
  'support-ticket-system-ai': [
    '/screenshots/support-ticket-system-ai/support-ticket-system-ai-01.png',
    '/screenshots/support-ticket-system-ai/support-ticket-system-ai-02.png',
  ],
  'my-hotel': [
    '/screenshots/my-hotel/my-hotel-01.png',
    '/screenshots/my-hotel/my-hotel-02.png',
    '/screenshots/my-hotel/my-hotel-03.png',
    '/screenshots/my-hotel/my-hotel-04.png',
    '/screenshots/my-hotel/my-hotel-05.png',
  ],
  'match-users': [
    '/screenshots/match-users/match-users-01.png',
    '/screenshots/match-users/match-users-02.png',
    '/screenshots/match-users/match-users-03.png',
    '/screenshots/match-users/match-users-04.png',
  ],
  'salon-beauty': [
    '/screenshots/salon-beauty/salon-beauty-01.png',
    '/screenshots/salon-beauty/salon-beauty-02.png',
    '/screenshots/salon-beauty/salon-beauty-03.png',
    '/screenshots/salon-beauty/salon-beauty-04.png',
    '/screenshots/salon-beauty/salon-beauty-05.png',
  ],
  'jobs-portal': [
    '/screenshots/jobs-portal/jobs-portal-01.png',
  ],
  'pool-cleaning': [
    '/screenshots/pool-cleaning/pool-cleaning-01.png',
    '/screenshots/pool-cleaning/pool-cleaning-02.png',
    '/screenshots/pool-cleaning/pool-cleaning-03.png',
  ],
  'company-dashboard': [
    '/screenshots/company-dashboard/company-dashboard-01.png',
    '/screenshots/company-dashboard/company-dashboard-02.png',
  ],
  'maintenance-portal': [
    '/screenshots/maintenance-portal/maintenance-portal-01.png',
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
