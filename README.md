# Jingxi Guo | Studio

Personal portfolio website for Jingxi Guo — sound designer, artist & engineer for film, brands, and emerging media.

**Live site:** [yedianyang.com](https://yedianyang.com)

## Tech Stack

- **[Astro](https://astro.build/)** — Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** — Styling
- **[Decap CMS](https://decapcms.org/)** — Content management (accessed at `/admin`)
- **[Netlify](https://www.netlify.com/)** — Hosting, forms, and identity

## Local Development

```bash
npm install
npm run dev
```

Site will be available at `http://localhost:4321`.

## Adding Projects

**Via CMS:** Go to `yedianyang.com/admin` and log in with your Netlify Identity account.

**Via code:** Create a new `.md` file in `src/content/projects/en/` (and `zh/` for Chinese).

Project frontmatter:

```yaml
---
title: "Project Title"
role: "Sound Designer"
year: 2023
category: "film"        # film | interactive | brand
thumbnail: "/images/uploads/project-thumb.jpg"
featured: true
images:
  - src: "/images/uploads/project-1.jpg"
    alt: "Description"
order: 1
---
```

## Deployment

Push to `main` branch — Netlify auto-builds and deploys.

## Setup Checklist (one-time)

1. Connect repo to Netlify
2. Enable Netlify Identity (for CMS login)
3. Enable Git Gateway (Settings > Identity > Services)
4. Set custom domain to `yedianyang.com`
5. Replace `G-XXXXXXXXXX` in `src/layouts/Layout.astro` with your Google Analytics ID
