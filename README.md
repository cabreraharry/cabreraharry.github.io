# Harry Cabrera — Portfolio

Personal portfolio of **Harry Cabrera**, WordPress & full-stack developer and AI engineer.
Live at **https://cabreraharry.github.io**.

Built with Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS v4,
Motion and Lenis. Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run lint
```

## Where the content lives

All text is data; the sections just map over it.

| File | What it holds |
|------|---------------|
| `src/config/site.ts` | name, headline, email, resume link, domain |
| `src/data/projects.ts` | project cards (screenshots in `public/images/projects/`) |
| `src/data/experience.ts` | work history |
| `src/data/skills.ts` | skill groups |
| `src/data/certifications.ts` | certificates (images in `public/images/certs/`) |
| `src/data/education.ts`, `about.ts`, `services.ts` | the rest |

Refresh the project screenshots from the live sites with
`python scripts/capture_screenshots.py [slug ...]` (needs Playwright and Chrome).

## Custom domain later

Buy the domain, add `public/CNAME` containing it, point its DNS at GitHub Pages, and change
`domain` and `siteUrl` in `src/config/site.ts`.
