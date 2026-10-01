# BEACH CLUB — concept site (V1)

Private, sponsor-facing concept prototype for BEACH CLUB, Ocho Rios, Summer 2027.
Venue and all brands shown are **conceptual visualizations**, not confirmed partnerships.

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint && npx tsc --noEmit && npm run build
```

Partner mode: `/?view=partner` — injects audience, attendance, inventory, media,
hospitality, deliverables and contact modules between sections.

## Where things live

| Change…                         | Edit                          |
| ------------------------------- | ----------------------------- |
| Event facts, copy, lineup, flags | `src/data/event.ts`          |
| Map zones                       | `src/data/zones.ts`           |
| Activation concepts             | `src/data/activations.ts`     |
| Conceptual partner fits         | `src/data/partners.ts`        |
| Partner-mode modules            | `src/data/partnerMode.ts`     |
| Enquiry form fields             | `src/data/forms.ts`           |
| **Every media slot / shot list** | `src/data/media.ts`          |

## Media

Every image/video/audio slot is declared in `src/data/media.ts` with section,
aspect ratios (desktop + mobile), art direction, mobile crop, alt text,
destination path and whether real photography or a conceptual rendering is
expected. With no `source`, a slot renders a generated SVG "plate"
(`src/components/media/plates`). Add a `source` to ship real media — no
component changes:

```ts
source: { provider: "cloudinary", desktop: "beachclub/reveal/beach", mobile: "beachclub/reveal/beach-v", width: 3840, height: 2160 }
source: { provider: "mux", desktop: "<playbackId>", width: 1920, height: 1080 }
```

Cloudinary needs `NEXT_PUBLIC_CLOUDINARY_CLOUD`. Set `ui.showSlotLabels` to
`false` in `event.ts` to hide slot ids on placeholders.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · GSAP +
ScrollTrigger · Lenis (fine pointers only) · Motion (presence/crossfades only) ·
next/font (Archivo variable width, Instrument Serif, IBM Plex Mono).
Ambient sound is synthesised with Web Audio in V1 (`src/lib/sound.ts`).
