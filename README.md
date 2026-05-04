# Best Good Friend Training — Website

Premium Next.js landing page for Genna Rittenhouse's in-home dog training business in Charlotte, NC.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to swap content

### Hero video
Replace `/public/hero/hero.mp4` with your optimized video file.

For best performance, encode a web-optimized variant:
```bash
# Requires ffmpeg — install via `brew install ffmpeg`
ffmpeg -i original.mp4 -c:v libx264 -crf 28 -preset slow -movflags +faststart -an public/hero/hero.mp4
ffmpeg -i original.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 -an public/hero/hero.webm
# Extract poster frame at 2 seconds
ffmpeg -i original.mp4 -ss 00:00:02 -vframes 1 public/hero/poster.jpg
```

Then update the `<source>` tags in `src/components/Hero.tsx` to include the `.webm` source before `.mp4`, and add `poster="/hero/poster.jpg"` to the `<video>` elements.

### HoneyBook booking link
Search the project for `HONEYBOOK_URL` — it's defined at the top of:
- `src/components/Nav.tsx`
- `src/components/Hero.tsx`
- `src/components/ServicesGrid.tsx`
- `src/components/FAQ.tsx`
- `src/components/FinalCTA.tsx`

Replace the URL value if your HoneyBook link ever changes.

### Photos to add
All placeholder slots are marked with `{...}` in the code:

| Slot | File to update | Notes |
|---|---|---|
| `{GENNA_PORTRAIT}` | `src/components/FounderSection.tsx` | Tall portrait, warm outdoor light, with a client dog |
| `{SERVICE_PHOTO_1–4}` | `src/components/ServicesGrid.tsx` | 16:10 real photos per service |
| `{COURSE_MOCKUP_IMAGE}` | `src/components/ResetCourse.tsx` | Laptop + phone mockup for the course |
| `{CINDY_PHOTO}` | `src/components/Testimonials.tsx` | Cindy & Saba portrait |
| `{TESTIMONIAL_2–3}` | `src/components/Testimonials.tsx` | Additional client quotes |
| `{CERTIFICATION_1–2}` | `src/components/Testimonials.tsx` | Credential/certification names |
| `{CONTACT_EMAIL}` | `src/components/Footer.tsx` | Contact email address |

Add photo files under `/public/images/` and use Next.js `<Image>` with `fill` or `width`/`height` props.

### Copy edits
All copy lives directly in the component files — no CMS layer. Edit the JSX text directly in `src/components/`.

### Colors and fonts
Color tokens are in `tailwind.config.ts` and mirrored as CSS variables in `src/app/globals.css`.

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` — no external blocking requests.

## Deploying to Vercel

```bash
npm run build   # verify locally first
```

Then connect the repo to Vercel. Set the root directory to the project folder if needed. No additional environment variables are required.

## Tech stack
- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS** — color tokens, responsive layout
- **Framer Motion** — scroll reveals
- **next/font** — self-hosted Playfair Display + Inter
