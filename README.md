# StackedPaycheck

Personal finance blog — Build your financial stability, layer by layer.

## Stack
- React + TanStack Router
- Vite
- Tailwind CSS
- Content Collections (markdown blog posts)
- Netlify

## Development
```bash
npm install
npm run dev
```

## Adding Blog Posts
Add markdown files to `content/posts/` with this frontmatter:
```yaml
---
title: "Post Title"
date: "2026-04-22"
summary: "Brief description"
categories: ["Budgeting"]
published: true
slug: "post-slug"
---
```

## Deploy
Push to main branch — Netlify auto-deploys.
