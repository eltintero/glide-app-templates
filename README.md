# Glide App Templates

Landing page for **glideapptemplates.com** showcasing LOW / CODE Agency's Glide templates.

## Features

- SEO-optimized individual template pages
- Fast static site generation (SSG)
- Responsive design following LOW / CODE brand guidelines
- Buy buttons linking to Glide
- Custom work CTAs linking to lowcode.agency

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with brand colors
│   └── templates/
│       ├── page.tsx        # All templates listing
│       └── [slug]/
│           └── page.tsx    # Individual template pages (SEO-optimized)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeaturedTemplates.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   └── index.ts
├── lib/
│   └── templates.ts        # Data fetching utilities
├── types/
│   └── index.ts            # TypeScript types
└── data/
    └── templates.json      # Template data
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Option 1: Connect via GitHub

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Custom Domain Setup

After deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `glideapptemplates.com`
4. Add the DNS records shown to your domain registrar

## Brand Guidelines

- **Logo**: LOW / CODE (forward slash is core brand symbol)
- **Primary Purple**: #705CF6
- **Dark Purple**: #38327C
- **Light Purple**: #C5BDFA
- **Lime Accent**: #C5EF48 (use sparingly)
- **Off-white background**: #FAF9F6
- **Near black**: #282828
- **Font**: Inter (Bold for titles, Regular for body, Semi Bold for buttons)

## Adding/Updating Templates

Edit `data/templates.json` to add or modify templates:

```json
{
  "name": "Template Name",
  "slug": "template-slug",
  "description": "Short description",
  "longDescription": "Longer SEO-friendly description",
  "price": 99.99,
  "glideUrl": "https://www.glideapps.com/templates/...",
  "icon": "https://...",
  "features": ["Feature 1", "Feature 2"]
}
```

## Assets

Add logos and images to the `assets/` folder:
- `Logo_agency.png` / `Logo_agency.svg` - Agency logo
- `lowcode_agency_white.svg` - White version for dark backgrounds
- `glide-premium-expert.svg` - Glide partner badge

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript
