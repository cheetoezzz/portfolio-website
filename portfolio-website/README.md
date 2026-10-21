# Arc John Torralba — Portfolio

Static Astro portfolio with TypeScript data, Tailwind CSS 4, optimized project screenshots, and no React runtime.

## Development

Use Node 22.23.4 or newer (Node 24 LTS recommended).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
npm run test:e2e
```

The application root is this existing `portfolio-website` folder inside the Git checkout. Build output is `dist/`. `vercel.json` declares the Astro framework and static build; retain this application folder as the Vercel root directory. No server adapter or environment variables are needed. No account settings were changed.

## Content and maintenance

- `src/data/projects.ts`: real project descriptions, screenshots, technologies, repository and demo URLs.
- `src/data/skills.ts`: primary stack, supporting skills, and expandable additional skills.
- `src/components/`: static Astro sections and small native browser interactions.
- `src/styles/global.css`: shared design tokens, dark/light themes, responsive layouts, and reduced motion support.
- `src/layouts/BaseLayout.astro`: metadata, canonical URL, social tags, structured data, and pre-render theme initialization.
- `public/social-card.png`: social preview; regenerate with `node scripts/create-social-card.mjs` after editing its source.

Original project assets are retained in `src/assets/`. The original logo embeds a background, so the displayed AJ branding and favicon use clean SVG paths. Hero and About photography is stored locally in `src/assets/images/` and optimized by Astro into responsive WebP images, with explicit dimensions and lazy loading below the fold. The photographs are illustrative workspace images, not a claim to depict Arc John's own desk. See `ASSET-CREDITS.md` for source and licensing details. No image hotlinks, hydration, or animation dependencies are used.

Themes default to dark, use the existing `theme` storage key, and work for the current visit even if storage is blocked. Without JavaScript, navigation and all essential content remain available. Footer year is generated at build and refreshed in the browser.

Browser checks use locally installed Google Chrome and run against a separate production preview on port 4322, leaving development on port 4321 available. They cover 320–1440px layouts, expertise card columns, local photograph loading, theme persistence, mobile navigation, keyboard handling, asset and anchor destinations, JavaScript-disabled access, reduced motion, unavailable storage, the 404 page, and axe WCAG A/AA checks for both themes. Screenshots and results are written to ignored `qa-results/`, including desktop and mobile light-mode screenshots. Run `npm run build` before the browser suite.

SEO uses `https://arctorra.vercel.app/` as its canonical domain, with generated sitemap files and robots.txt. Vercel serves the generated `404.html` for unknown routes.
