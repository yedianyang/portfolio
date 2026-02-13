# CLAUDE.md

## Project Overview

Portfolio website for Yedian Yang (yedianyang.com). A bilingual (English/Chinese) static site showcasing film, interactive, and brand projects. Built with Astro, styled with Tailwind CSS, content managed via Markdown files and Decap CMS, deployed on Netlify.

## Tech Stack

- **Framework:** Astro 5.2 (static site generator, no client-side JS framework)
- **Styling:** Tailwind CSS 3.4 with `@tailwindcss/typography` plugin
- **Language:** TypeScript (strict mode via Astro's config)
- **CMS:** Decap CMS (Git Gateway backend, config at `public/admin/config.yml`)
- **Hosting:** Netlify (auto-deploy from `main` branch)
- **Node:** 22

## Commands

```bash
npm run dev       # Start dev server on port 4321 (accessible on LAN)
npm run build     # Production build → outputs to dist/
npm run preview   # Preview production build locally
```

There are no test, lint, or format commands configured.

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro     # Sticky nav with mobile menu + locale switcher
│   ├── Footer.astro     # Social links (email, Instagram, IMDb, LinkedIn)
│   ├── ProjectCard.astro # Thumbnail card with hover effects
│   └── ImageGallery.astro # 2-column lazy-loaded image grid
├── content/
│   ├── config.ts        # Zod schema for project content collection
│   └── projects/
│       ├── en/          # English project markdown files (29 files)
│       └── zh/          # Chinese project markdown files (29 files)
├── i18n/
│   ├── index.ts         # t(), getLocalePath(), switchLocale() helpers
│   ├── en.json          # English translations
│   └── zh.json          # Chinese translations
├── layouts/
│   └── Layout.astro     # Base layout (SEO meta, OG tags, hreflang, analytics)
├── pages/
│   ├── index.astro      # Root redirect → /en/
│   ├── en/              # English routes
│   │   ├── index.astro           # Home (featured projects)
│   │   ├── film.astro            # Film category gallery
│   │   ├── interactive.astro     # Interactive category gallery
│   │   ├── research.astro        # Research & press links
│   │   ├── sound-library.astro   # Sound library timeline
│   │   ├── about.astro           # Bio & education
│   │   ├── contact.astro         # Contact form (Netlify Forms)
│   │   └── projects/[slug].astro # Dynamic project detail page
│   └── zh/              # Chinese routes (mirrors en/ structure)
└── styles/
    └── global.css       # Tailwind directives, Inter font, base styles
```

## Architecture & Conventions

### Routing

- All routes are locale-prefixed: `/en/...` and `/zh/...`
- Root `/` redirects to `/en/` via Netlify redirect (302)
- Both `prefixDefaultLocale: true` in Astro config
- Dynamic project pages use `[slug].astro` with `getStaticPaths()`

### Content Collection

Projects are Markdown files in `src/content/projects/{en,zh}/`. Schema defined in `src/content/config.ts`:

```typescript
{
  title: string,           // Required
  role: string,            // Optional
  year: number,            // Optional
  category: 'film' | 'interactive' | 'brand',  // Required
  thumbnail: string,       // Optional - path to thumbnail image
  featured: boolean,       // Default: false - shown on homepage
  images: [{ src, alt? }], // Optional - gallery images
  order: number,           // Default: 0 - display sort order
}
```

### i18n

- Two locales: `en` (English) and `zh` (Chinese)
- Translation strings in `src/i18n/en.json` and `src/i18n/zh.json`
- Use `t(locale, 'namespace.key')` for translations (dot-notation lookup)
- Use `getLocalePath(locale, path)` to build locale-prefixed URLs
- Use `switchLocale(locale, currentPath)` for language toggle
- Every page under `/en/` must have a corresponding page under `/zh/`

### Styling

- Tailwind utility classes inline in Astro templates (no CSS modules)
- Custom theme colors: `primary: #111111`, `accent: #555555`
- Font: Inter (loaded via Google Fonts CDN in global.css)
- Design: minimal, light typography with `font-light`/`font-extralight`, generous letter-spacing
- Responsive: mobile-first with Tailwind breakpoints (`md:`, `lg:`)
- Project cards use 3:4 aspect ratio

### Adding a New Project

1. Create a Markdown file in `src/content/projects/en/` and `src/content/projects/zh/`
2. Include required frontmatter fields (`title`, `category`)
3. Place thumbnail/gallery images in `public/images/uploads/`
4. Reference images with paths like `/images/uploads/filename.jpg`

### Adding a New Page

1. Create the `.astro` file in both `src/pages/en/` and `src/pages/zh/`
2. Use `Layout.astro` as the wrapper, passing `title`, `description`, and `locale` props
3. Add navigation link in `Header.astro` for both locales
4. Add translation keys to both `en.json` and `zh.json`

## Path Aliases

- `@/*` maps to `src/*` (configured in `tsconfig.json`)

## Deployment

- Push to `main` triggers Netlify build and deploy
- Build output: `dist/`
- Custom domain: `yedianyang.com` (CNAME file in repo root)
- Netlify services: Identity (CMS auth), Git Gateway (CMS backend), Forms (contact)

## Key Files for Common Changes

| Task | Files |
|------|-------|
| Add/edit project | `src/content/projects/{en,zh}/` |
| Change navigation | `src/components/Header.astro` |
| Update translations | `src/i18n/en.json`, `src/i18n/zh.json` |
| Modify page layout | `src/layouts/Layout.astro` |
| Adjust theme/colors | `tailwind.config.mjs` |
| Change global styles | `src/styles/global.css` |
| Update CMS fields | `public/admin/config.yml` + `src/content/config.ts` |
| Deployment config | `netlify.toml` |
