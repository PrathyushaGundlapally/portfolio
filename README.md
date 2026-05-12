# Prathyusha Gundlapally Portfolio

A clean, minimal, Vercel-deployable personal portfolio built with Next.js and Tailwind CSS.

## Positioning

This site is designed to present Prathyusha Gundlapally as an AI Engineer focused on production-grade AI chatbots, multi-agent systems, and data products rather than as a generic student or UI/UX portfolio.

## Included sections

* Hero
* About
* Experience
* Production Systems
* Interactive Agent Routing Demo
* Projects
* Skills
* Contact

## Tech stack

* Next.js 14
* React 18
* Tailwind CSS 3
* Frontend-only architecture
* No paid APIs
* No API keys required

## Project structure

* `app/layout.js` — root layout and SEO metadata
* `app/page.js` — full one-page portfolio implementation
* `app/globals.css` — theme tokens and custom styles
* `components/section-heading.js` — reusable section heading UI
* `components/agent-router-demo.js` — browser-based agent routing simulator
* `data/portfolio.js` — portfolio copy, systems, projects, skills, and links
* `public/profile-placeholder.svg` — replaceable hero/about image placeholder
* `public/prathyusha-gundlapally-resume.pdf` — resume download placeholder to replace with the real PDF
* `package.json` — scripts and dependencies
* `tailwind.config.js` — Tailwind theme setup
* `postcss.config.mjs` — PostCSS config
* `next.config.mjs` — Next.js config
* `jsconfig.json` — path alias config

## Local setup

1. Open the project folder.
2. Install dependencies:

   `npm install`

3. Start the development server:

   `npm run dev`

4. Open `http://localhost:3000`

## Build for production

Run:

`npm run build`

Then:

`npm run start`

## Deploy on Vercel

### Option 1: Vercel dashboard

1. Push this folder to a GitHub repository.
2. Log in to Vercel.
3. Import the GitHub repository.
4. Vercel should detect Next.js automatically.
5. Keep the default build settings.
6. Click Deploy.

### Option 2: Vercel CLI

1. Install Vercel CLI:

   `npm i -g vercel`

2. From this folder, run:

   `vercel`

3. Follow the prompts.
4. For production deployment later, run:

   `vercel --prod`

## Replace placeholders

* Replace `public/profile-placeholder.svg` with a real profile image if desired. If you use a new filename, update the image path in `app/page.js`.
* Replace `public/prathyusha-gundlapally-resume.pdf` with the final PDF resume using the exact same filename so the download button keeps working.
* Update GitHub, LinkedIn, email, phone, or copy in `data/portfolio.js` anytime.

## Notes

* The "View Systems" CTA points to the Production Systems section as requested.
* The interactive demo is frontend-only and uses local browser logic for routing questions into structured, semi-structured, unstructured, and BYOD paths.
* The site is intentionally clean, white, and professional, with real work emphasized over hackathons.
