# McChord Inc. website (v1 baseline)

Static recreation of [Jay McChord / McChord Inc.](https://www.mcchordinc.com) for public preview on GitHub Pages. Nate Richie (GitHub [@cryptonate2020](https://github.com/cryptonate2020)) owns this repo. Jay McChord is the client.

This is a **plain multi-page static site** (HTML, CSS, and a little JS). There is no CMS and no required build step. Unfinished live-site stubs (Mastermind, empty courses, Wix placeholder pages) are **not** recreated.

## Public preview URL vs custom domain

**GitHub Pages (project site):** [https://cryptonate2020.github.io/mcchord-inc/](https://cryptonate2020.github.io/mcchord-inc/)

That URL is the review/staging site. Custom domain **mcchordinc.com** comes later (DNS at the registrar / Wix, then a CNAME in this repo). Do not point production DNS here until Jay is ready to cut over.

This repo is already configured as a GitHub Pages project site. Pages currently publishes from the `main` branch, folder `/`. After this branch is merged, the HTML/CSS/JS at the repo root is what visitors see. All internal links and images use **relative paths**, so they resolve correctly under `/mcchord-inc/`.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Topics | `topics.html` |
| Testimonials | `testimonials.html` |
| Media / press kit | `media.html` |
| Contact (Calendly + form + planner FAQ) | `contact.html` |
| Speaker one-sheet (print-ready) | `speaker-sheet.html` |
| Speaker one-sheet PDF | `speaker-sheet.pdf` |

Copy, phone (`859-492-6555`), email (`jay@mcchordinc.com`), Calendly (`jaymcchord/exploratory-call-30-minutes`), Lexington address (`781 Sunny Slope Trace`), and client logos were pulled from the live Wix site.

## Local development

No install required:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## GitHub Pages setup

Pages is **already enabled** on this repository:

- Source: `main` branch, folder `/` (legacy / “Deploy from a branch”)
- Public URL: `https://cryptonate2020.github.io/mcchord-inc/`
- HTTPS is on
- Custom domain is not set yet

`/.nojekyll` tells GitHub not to run Jekyll on the files.

### If the preview 404s after merge

1. Open **Settings → Pages**.
2. Confirm **Source** is **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. Wait a minute for the Pages build, then hard-refresh the preview URL.

### Optional: GitHub Actions instead of “deploy from a branch”

Not required for this v1 site (there is no build). If you later add a bundler, add a workflow with `pages: write` and `id-token: write`, then switch **Settings → Pages → Source** to **GitHub Actions**.

### Custom domain (later)

When you are ready to serve `mcchordinc.com` from this repo:

1. Set the custom domain in **Settings → Pages** (GitHub will add/expect a `CNAME` file).
2. Point DNS A/CNAME records away from Wix after a final content check.
3. Relative asset paths can stay as they are.

## Stack notes

- **Contact form** opens a `mailto:` to `jay@mcchordinc.com` (no backend). Booking should go through Calendly.
- **Photos** in `images/` are Jay’s existing McChord Inc. assets (resized for the web). Keep filenames so later shoots can drop into the same slots (`jay-portrait.jpg`, `jay-headshot.jpg`, `jay-about.jpg`, `jay-stage.jpg`, `jay-wildcat.jpg`, `og-image.jpg`). The homepage hero uses Jay’s portrait; the official YouTube overview reel (`d74fKmOc7TY`) is a click-to-play facade in the mid-page `#speaker-reel` section (and on the media kit). Do not replace these with stock.
- Mobile nav is a real hamburger (the live Wix site breaks on small screens). A sticky **Book a call / phone** bar appears on small viewports.

## Next phases

See [`docs/ROADMAP.md`](docs/ROADMAP.md). Phase 1 (proof, copy refresh, reel, one-sheet, planner FAQ) and Phase 2 (photo system, topic takeaways, media kit, Working-with-Jay process) are implemented on this static stack. Phase 3 covers insights, topic URLs, case studies, and the custom domain.
