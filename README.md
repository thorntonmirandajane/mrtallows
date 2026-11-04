# Mr. Tallow's

Homepage for Mr. Tallow's, a fast-casual restaurant launching in Florida.

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Lenis (smooth scroll)

```bash
npm install
npm run dev   # http://localhost:3000
```

## Editing content

All copy, menu items, hotspot positions, burger annotations, location and social links live in
`src/content/site.ts`. Location fields are `null` until confirmed: fill in `street`, `cityState`,
`hours` and `mapsUrl`, and set `status: "open"`, and the Visit section and Restaurant structured data update automatically.

## Assets

- `public/brand/logo-mask.png`: the logo lockup as an alpha mask (lifted from the brand sheet, recolored via CSS). Replace with the vector master when available.
- `public/brand/icon-*.png`: feature line illustrations.
- `public/images/`: hero, slider pair (annotations removed and aligned so the burger registers across both), menu cutouts, packaging, interior and map imagery.
