# Glide App Templates - Project Documentation

## Overview
Landing page for **glideapptemplates.com** showcasing LowCode Agency's Glide templates. Built with Next.js 16, deployed on Vercel.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (auto-deploys from GitHub main branch)

## Project Structure

```
glide-app-templates/
├── data/
│   ├── templates.json      # Template data (15 templates)
│   └── services.json       # Service landing pages (34 services)
├── public/
│   ├── badges/             # Trust badges (Clutch, Glide, etc.)
│   └── screenshots/        # Template screenshots
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   ├── page.tsx         # Services index
│   │   │   └── [slug]/page.tsx  # Individual service pages
│   │   └── ...
│   ├── lib/
│   │   ├── templates.ts         # Template utilities
│   │   ├── services.ts          # Service utilities
│   │   └── screenshots.ts       # Screenshot mapping
│   └── types/
│       └── index.ts             # TypeScript types (Template, Service)
├── public/
│   ├── screenshots/                    # Template screenshots (48 files)
│   ├── badges/                         # Trust badges (Clutch, Glide, 50+ projects, etc.)
│   ├── Logo_agency.svg                 # Main logo (purple CODE)
│   ├── Logo_agency.png                 # PNG version
│   ├── lowcode_agency_white.svg        # White logo for dark backgrounds
│   ├── Slash_w.svg                     # Slash symbol
│   ├── glide-premium-expert.svg        # Glide expert badge
│   └── llms.txt                        # AI discoverability file
└── README.md
```

## Key Files to Edit

### Adding/Updating Templates
- **`data/templates.json`** - Contains all template data
  - Fields: `name`, `slug`, `description`, `price`, `glideUrl`, `icon`
  - Optional: `longDescription`, `features`, `category`, `screenshots`

### Adding/Updating Services (IMPORTANT)
- **`data/services.json`** - Contains all service landing pages
  - **Required Fields:**
    - `slug` - URL-friendly identifier (e.g., "supply-chain-apps")
    - `title` - Meta title in format: `{X} App Development Services` (e.g., "Supply Chain App Development Services")
    - `metaDescription` - SEO meta description (150-160 chars)
    - `h1` - H1 heading for the page
    - `bluf` - Bottom Line Up Front definition (50-80 words) - used for AI citation
    - `keyword` - Primary SEO keyword (e.g., "supply chain app", "manufacturing app")
    - `category` - Category name (e.g., "Operations", "Healthcare", "Real Estate")
    - `heroOutcome` - Outcome-focused headline
    - `heroSubheadline` - Supporting subheadline with metrics
    - `platforms` - Array of platforms (e.g., ["Glide", "Bubble", "FlutterFlow"])
    - `startingPrice` - Starting price in dollars (number)
    - `timelineWeeks` - Timeline range (e.g., "4-8")
    - `relatedTemplates` - Array of template slugs to show as related

  - **Title Format Convention:**
    - MUST follow: `{X} App Development Services`
    - Examples:
      - Supply Chain App Development Services
      - Manufacturing App Development Services
      - Inventory Management App Development Services
      - Real Estate App Development Services

  - **Keyword Guidelines:**
    - Use specific, searchable terms
    - Lowercase (e.g., "supply chain app", not "Supply Chain App")
    - Used throughout page content for SEO consistency
    - Examples: "manufacturing app", "healthcare app", "field service app"

### Adding Screenshots
1. Add screenshot files to `/public/screenshots/`
2. Naming convention: `{Template Name} · Glide {timestamp}.png`
3. Update mapping in **`src/lib/screenshots.ts`**
4. The `screenshotFiles` object maps template slugs to screenshot arrays

### Updating Brand/Styling
- **`src/app/globals.css`** - CSS variables for brand colors:
  - `--purple-primary: #705CF6`
  - `--purple-dark: #38327C`
  - `--purple-light: #C5BDFA`
  - `--lime-accent: #C5EF48`
  - `--off-white: #FAF9F6`
  - `--near-black: #282828`

### Common Component Edits
- **Header**: Logo, navigation links, CTA button
- **Hero**: Headline, subheadline, CTAs
- **FeaturedTemplates**: Sorting logic, card layout
- **ScreenshotCarousel**: Arrow styles, counter, autoplay
- **Template detail page**: Layout, sections, CTAs

## Data Flow

### Homepage (`/`)
1. `getTemplates()` fetches from `templates.json`
2. Templates are enriched with generated fields (category, features, longDescription)
3. `FeaturedTemplates` shows top 6 by price
4. Screenshots loaded via `getFirstScreenshot(slug)`

### Templates Listing (`/templates`)
1. `getTemplates()` returns all templates
2. Categories extracted for filter buttons (UI only, not functional yet)
3. Cards use screenshots (fallback to icons)

### Template Detail (`/templates/[slug]`)
1. `generateStaticParams()` creates all 15 pages at build time
2. `getTemplateBySlug(slug)` fetches template data
3. `getScreenshots(slug)` returns array of screenshot paths
4. `ScreenshotCarousel` displays with navigation
5. Related templates shown at bottom (excludes current)

### Services Listing (`/services`)
1. `getServices()` returns all 34 services
2. Services grouped by category
3. Cards show price and timeline

### Service Detail (`/services/[slug]`)
1. `generateStaticParams()` creates all 34 pages at build time
2. `getServiceBySlug(slug)` fetches service data
3. Page follows AEO (Answer Engine Optimization) structure:
   - BLUF definition block for AI citation
   - Trust badges in hero (Clutch, Glide, 50+ projects)
   - Question-based H2 headers
   - Answers under 40 words
   - Quotable blocks with metrics
   - Comparison tables (pricing tiers, platforms)
   - FAQ section (7 questions)
4. All CTAs link to `lowcode.agency/contact?ref=glideapptemplates.com`
5. Uses `keyword` field throughout content (e.g., "supply chain app" instead of generic "operations app")

## Service Page Content Structure (AEO Guidelines)

Each service page follows this structure:

### 1. Hero Section
- Trust badges (Clutch Top Developer, Glide Premium Expert, 50+ Projects, Since 2020)
- H1 with keyword
- Outcome-focused subheadline
- Price range and timeline
- CTA button

### 2. BLUF (Bottom Line Up Front)
- Definition of what the app type is
- Who it's for
- Key metrics
- Quotable for AI citation

### 3. Problem/Solution Sections
- "Why Build a Custom {Keyword}?"
- "What Can a Custom {Keyword} Do?"
- Question-based headers
- Answers under 40 words
- Bullet points for scannability

### 4. Pricing & Timeline
- Three-tier pricing table
- Small & Contained ($15k-$30k, 4-6 weeks)
- Larger System ($30k-$70k, 6-10 weeks)
- ERP-Like System ($70k-$100k+, 10-16 weeks)

### 5. Platform Comparison
- Glide, Bubble, FlutterFlow, Custom Code
- Best for, starting price, timeline, features

### 6. Process Phases
- Refinement Phase (2-3 weeks)
- Development Phase (4-12 weeks)
- Maintenance & Growth Phase (ongoing)

### 7. FAQ Section
- 7 questions with answers under 40 words
- Focus on cost, timeline, platform choice, integrations

### 8. Related Templates
- Shows 2-4 related Glide templates
- Links to template detail pages

## Adding New Service Landing Pages

### Step 1: Add to services.json
```json
{
  "slug": "new-service-apps",
  "title": "New Service App Development Services",
  "metaDescription": "Custom new service apps built by LowCode Agency. Starting at $15,000. 300+ apps delivered.",
  "h1": "New Service Apps — Custom Solutions That Scale",
  "bluf": "New service apps are custom software solutions designed to [what they do]. LowCode Agency builds [keyword] apps in [timeline] weeks using [platforms]. Starting at $[price] with [metric].",
  "keyword": "new service app",
  "category": "Category Name",
  "heroOutcome": "Outcome-focused headline here.",
  "heroSubheadline": "Timeline, metrics, and trust signals.",
  "platforms": ["Glide", "Bubble"],
  "startingPrice": 15000,
  "timelineWeeks": "4-8",
  "relatedTemplates": ["template-slug-1", "template-slug-2"]
}
```

### Step 2: Verify Build
```bash
npm run build
```

### Step 3: Commit and Push
```bash
git add data/services.json
git commit -m "Add new service landing page: {Service Name}"
git push
```

The page will auto-generate at `/services/new-service-apps` with all sections.

## Screenshot Mapping

Screenshots are mapped by template slug in `src/lib/screenshots.ts`:

```typescript
const screenshotFiles: Record<string, string[]> = {
  'match-users': [
    '/Match Users · Glide 2026-03-03 at 10.03.40 a.m. (1).png',
    '/Match Users · Glide 2026-03-03 at 10.03.40 a.m. (1) (1).png',
  ],
  // ... more templates
};
```

To add new screenshots:
1. Drop files in `/public/screenshots/`
2. Add to mapping in `screenshots.ts`
3. Rebuild/redeploy

## Brand Guidelines Summary

From LowCode Agency brand guidelines:

### Logo
- Written as **LOW / CODE** (slash is essential)
- Use white logo on dark backgrounds
- Use colored logo (purple CODE) on light backgrounds

### Colors
- Primary: Purple (`#705CF6`)
- Accent: Lime (`#C5EF48`) - use sparingly for emphasis
- Backgrounds: Off-white (`#FAF9F6`) or Black
- No gradients (or extremely subtle)

### Typography
- Typeface: Inter
- Titles: Bold
- Body: Regular
- Buttons: Semi-bold

### Tone
- Clear, direct, professional
- No hype, clichés, or buzzwords
- Confident but not aggressive

## Deployment

### GitHub
- Repository: https://github.com/eltintero/glide-app-templates
- Branch: `main` (protected)

### Vercel
- Auto-deploys from GitHub `main` branch
- Project connected to GitHub integration
- Domain: glideapptemplates.com (configure in Vercel dashboard)

### Build Commands
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
```

### Manual Deploy
```bash
vercel --prod
```

## SEO Features

### Implemented
- Dynamic metadata per page
- Open Graph tags
- Twitter cards
- Canonical URLs (no trailing slashes enforced via next.config.ts)
- Sitemap.xml (auto-generated, includes services)
- Robots.txt
- llms.txt for AI discoverability
- Semantic HTML structure
- SEO-friendly URLs (`/templates/[slug]`, `/services/[slug]`)
- Ref tracking on CTAs (`?ref=glideapptemplates.com`)

### Meta Tags Per Template
- Title: `{Template Name} - Glide Template | LOW / CODE Agency`
- Description: Long description or generated from short description
- Keywords: Template name, category, "Glide template", "LOW CODE Agency"

### Meta Tags Per Service
- Title: `{X} App Development Services | LOW / CODE Agency`
- Description: From `metaDescription` field
- Keywords: Service keyword, category, "custom app", "LowCode Agency"

## Current Services List (34 Total)

### Business Operations
- Internal Business Apps
- Small Business Apps
- Enterprise Business Apps
- Supply Chain Apps
- Manufacturing Apps

### Industry-Specific
- Retail Apps
- Real Estate Apps
- Hospitality Apps
- Professional Services Apps
- Healthcare Apps
- Construction Contractor Apps
- Legal Law Firm Apps
- Financial Services Apps
- Fitness Apps
- Food & Beverage Apps
- Education Apps
- Nonprofit Apps

### Operations & Logistics
- Inventory Management Apps
- Field Service Apps
- Inspection Apps
- Asset Tracking Apps
- Logistics & Delivery Apps

### Sales & Marketing
- Custom CRM Apps
- Sales CRM Apps
- AI Business Apps

### HR & Management
- HR & Hiring Apps
- Project Management Apps
- Portal & Dashboard Apps
- Customer Portal Apps
- Employee Portal Apps

### Specialized
- Operational Field Apps
- Event Management Apps
- Property Management Apps
- Workflow Automation Apps

## Future Enhancements (Not Implemented)

- [ ] Category filtering on `/templates` page
- [ ] Search functionality
- [ ] Blog section
- [ ] Template preview in iframe
- [ ] Price filtering
- [ ] Template comparison
- [ ] User reviews/ratings
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] Service category filtering on `/services` page

## Quick Reference

### Adding a New Template
1. Add entry to `data/templates.json`
2. Upload screenshots to `/public/screenshots/`
3. Update `src/lib/screenshots.ts` mapping
4. Commit and push

### Adding a New Service
1. Add entry to `data/services.json`
2. Follow title format: `{X} App Development Services`
3. Include keyword field (lowercase)
4. Set related templates
5. Commit and push

### Changing Colors
1. Update CSS variables in `globals.css`
2. Update Tailwind theme inline config
3. Rebuild

### Updating CTAs
- Header: `src/components/Header.tsx`
- Hero: `src/components/Hero.tsx`
- Template pages: `src/app/templates/[slug]/page.tsx`
- Service pages: `src/app/services/[slug]/page.tsx`
- Footer: `src/components/Footer.tsx`

### Adding New Sections
1. Create component in `src/components/`
2. Export from `src/components/index.ts`
3. Import and add to `src/app/page.tsx`

## Troubleshooting

### Build Errors
- Check TypeScript errors: `npm run build`
- Screenshot paths must start with `/`
- Template/service slugs must match exactly
- Service titles must follow format: `{X} App Development Services`
- Keyword field is required for services

### Images Not Loading
- Verify files exist in `/public/screenshots/`
- Check mapping in `screenshots.ts`
- Ensure `next.config.ts` allows the domain (for external images)

### Styling Issues
- Check Tailwind classes are correct
- Verify CSS variables in `globals.css`
- Use browser dev tools to inspect

### SEO Issues
- Check canonical URLs are consistent
- Verify meta descriptions are 150-160 chars
- Ensure keyword is used in content
- Check title format follows convention

---

**Last Updated**: March 2026
**Maintained By**: LOW / CODE Agency (via Zo Computer AI)
**Total Templates**: 15
**Total Services**: 34

## Service Landing Pages

**Total Services**: 249

### Service Page Structure
Each service landing page follows AEO (Answer Engine Optimization) principles:

1. **Hero Section**
   - Category badge
   - H1 with service title
   - Hero outcome statement
   - Hero subheadline with metrics
   - CTA button (links to lowcode.agency/contact with ref)
   - **Client logo carousel** (right side, rotating every 3 seconds)
   - **Client names** (bottom of hero: Medtronic, American Express, Coca-Cola, HP, Citi, Verizon)
   - **Trust signals** (300+ Apps, 40+ Team, Since 2020)

2. **BLUF Section**
   - Definition block for AI citation
   - Under 40 words
   - Includes keyword with capitalized "Glide"

3. **Pricing Table**
   - Small & Contained: \$15k-\$30k
   - Larger System: \$30k-\$70k
   - ERP-Like System: \$70k-\$100k+

4. **Platform Comparison**
   - Glide, Bubble, FlutterFlow, Custom Code
   - Best for, starting price, timeline

5. **Process Section**
   - Refinement Phase (2-3 weeks)
   - Development Phase (4-12 weeks)
   - Maintenance & Growth Phase (ongoing)

6. **FAQ Section** (7 questions)
   - Question-based H2 headers
   - Answers under 40 words
   - Pricing: \$15k starting, \$20k-\$40k typical, \$40k-\$100k+ for complex

7. **Related Templates** (if applicable)

### ClientLogoCarousel Component
Located at `src/components/ClientLogoCarousel.tsx`
- Displays rotating client logos
- Auto-advances every 3 seconds
- Clickable dots for manual navigation
- Shows client name below logo
