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
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage
│   │   ├── layout.tsx                  # Root layout with metadata
│   │   ├── globals.css                 # Global styles + Tailwind
│   │   ├── sitemap.ts                  # Dynamic sitemap
│   │   ├── robots.ts                   # Robots.txt
│   │   ├── icon.tsx                    # Dynamic favicon (purple slash)
│   │   ├── apple-icon.tsx              # Apple touch icon
│   │   └── templates/
│   │       ├── page.tsx                # All templates listing
│   │       └── [slug]/
│   │           └── page.tsx            # Individual template pages (SEO-optimized)
│   ├── components/
│   │   ├── Header.tsx                  # Black header with lime accent, logo
│   │   ├── Footer.tsx                  # Logo + links
│   │   ├── Hero.tsx                    # Black background, lime accents
│   │   ├── FeaturedTemplates.tsx       # Top 6 templates by price
│   │   ├── Features.tsx                # Why choose us section
│   │   ├── Testimonials.tsx            # Client testimonials
│   │   ├── FAQ.tsx                     # Accordion FAQ
│   │   ├── CTA.tsx                     # Call to action section
│   │   ├── ScreenshotCarousel.tsx      # Carousel for template screenshots
│   │   └── index.ts                    # Barrel exports
│   ├── lib/
│   │   ├── templates.ts                # Template data fetching + helpers
│   │   └── screenshots.ts              # Screenshot filename mapping
│   └── types/
│       └── index.ts                    # TypeScript interfaces
├── data/
│   └── templates.json                  # Template data (15 templates)
├── public/
│   ├── screenshots/                    # Template screenshots (48 files)
│   ├── Logo_agency.svg                 # Main logo (purple CODE)
│   ├── Logo_agency.png                 # PNG version
│   ├── lowcode_agency_white.svg        # White logo for dark backgrounds
│   ├── Slash_w.svg                     # Slash symbol
│   ├── glide-premium-expert.svg        # Glide expert badge
│   └── llms.txt                        # AI discoverability file
└── README.md                           # This file
```

## Key Files to Edit

### Adding/Updating Templates
- **`data/templates.json`** - Contains all template data
  - Fields: `name`, `slug`, `description`, `price`, `glideUrl`, `icon`
  - Optional: `longDescription`, `features`, `category`, `screenshots`

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
- Canonical URLs
- Sitemap.xml (auto-generated)
- Robots.txt
- llms.txt for AI discoverability
- Semantic HTML structure
- SEO-friendly URLs (`/templates/[slug]`)

### Meta Tags Per Template
- Title: `{Template Name} - Glide Template | LOW / CODE Agency`
- Description: Long description or generated from short description
- Keywords: Template name, category, "Glide template", "LOW CODE Agency"

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

## Quick Reference

### Adding a New Template
1. Add entry to `data/templates.json`
2. Upload screenshots to `/public/screenshots/`
3. Update `src/lib/screenshots.ts` mapping
4. Commit and push

### Changing Colors
1. Update CSS variables in `globals.css`
2. Update Tailwind theme inline config
3. Rebuild

### Updating CTAs
- Header: `src/components/Header.tsx`
- Hero: `src/components/Hero.tsx`
- Template pages: `src/app/templates/[slug]/page.tsx`
- Footer: `src/components/Footer.tsx`

### Adding New Sections
1. Create component in `src/components/`
2. Export from `src/components/index.ts`
3. Import and add to `src/app/page.tsx`

## Troubleshooting

### Build Errors
- Check TypeScript errors: `npm run build`
- Screenshot paths must start with `/`
- Template slugs must match exactly

### Images Not Loading
- Verify files exist in `/public/screenshots/`
- Check mapping in `screenshots.ts`
- Ensure `next.config.ts` allows the domain (for external images)

### Styling Issues
- Check Tailwind classes are correct
- Verify CSS variables in `globals.css`
- Use browser dev tools to inspect

---

**Last Updated**: March 2026
**Maintained By**: LOW / CODE Agency (via Zo Computer AI)
