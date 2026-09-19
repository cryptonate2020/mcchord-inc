# McChord Inc. website (v1 baseline)

Static recreation of [Jay McChord / McChord Inc.](https://www.mcchordinc.com) for public preview on GitHub Pages. Nate Richie (GitHub [@cryptonate2020](https://github.com/cryptonate2020)) owns this repo. Jay McChord is the client.

This is a **clean multi-page static site** (Vite + vanilla HTML/CSS/JS). It is not a CMS. Unfinished live-site stubs (Mastermind, empty courses, Wix placeholder pages) are **not** recreated.

## Public preview URL

**GitHub Pages (project site):** [https://cryptonate2020.github.io/mcchord-inc/](https://cryptonate2020.github.io/mcchord-inc/)

That URL is the review/staging site. Custom domain **mcchordinc.com** comes later (DNS at the registrar / Wix, then a CNAME in this repo). Do not point production DNS here until Jay is ready to cut over.

The Vite `base` is `/mcchord-inc/` in production builds so CSS, JS, images, and internal links work under the project Pages path.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Topics | `topics.html` |
| Testimonials | `testimonials.html` |
| Contact (Calendly + form) | `contact.html` |

Copy, phone (`859-492-6555`), email (`jay@mcchordinc.com`), Calendly (`jaymcchord/exploratory-call-30-minutes`), Lexington address, and client logos were pulled from the live Wix site.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/`.

Production-like preview (includes the `/mcchord-inc/` base path):

```bash
npm run build
npm run preview
```

Then open `http://localhost:4173/mcchord-inc/`.

## GitHub Pages setup

A GitHub Actions workflow (`.github/workflows/pages.yml`) builds the site and deploys to GitHub Pages on every push to `main`.

### One-time click for Nate (if Pages is not already enabled)

1. Open **Settings → Pages** on this repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the **Deploy GitHub Pages** workflow from the Actions tab).
4. Confirm the site at `https://cryptonate2020.github.io/mcchord-inc/`.

The workflow needs `pages: write` and `id-token: write` (already set in the YAML). If the first deploy fails with a Pages permissions error, check **Settings → Actions → General → Workflow permissions**.

`public/.nojekyll` is copied into the build output so GitHub does not process the site with Jekyll.

### Custom domain (later)

When you are ready to serve `mcchordinc.com` from this repo:

1. Add a `CNAME` file (or set the custom domain in **Settings → Pages**).
2. Change `base` in `vite.config.js` from `/mcchord-inc/` to `/`.
3. Update canonical URLs in the HTML (or introduce a small site-url constant).
4. Point DNS A/CNAME records away from Wix after a final content check.

## Stack notes

- **Why Vite?** Shared CSS/JS, correct `/mcchord-inc/` asset prefix, and a simple GitHub Actions build. The pages themselves are ordinary HTML.
- **Contact form** opens a `mailto:` to `jay@mcchordinc.com` (no backend). Booking should go through Calendly.
- **Photos** in `public/images/` are Jay’s existing site assets (resized for the web). Keep filenames so later shoots can drop into the same slots (`jay-portrait.jpg`, `jay-about.jpg`, `jay-stage.jpg`, `jay-wildcat.jpg`, `og-image.jpg`).

## Next phases

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for redesign recommendations (proof, copy refresh, topic productization). This v1 commit is the recreation baseline only.
