# Roadmap — after the v1 recreation

This repo now holds a **clean static recreation** of [mcchordinc.com](https://www.mcchordinc.com): Home, Services, Topics, About, Contact, Testimonials, Media/press kit, plus a speaker one-sheet. Stub/orphan Wix pages were left unpublished on purpose. GitHub Pages serves the files from `main` `/` (no build step).

## Already in this baseline

- Personal-brand header (Jay McChord + McChord Inc. legal/footer)
- Sticky header + mobile hamburger (the live Wix nav fails on small screens)
- Primary CTA: Schedule Exploratory Call → live Calendly (topic cards use “Request this session” into Contact, with Calendly still available)
- Named testimonials as published (including Jack Kelly). Other quotes stay first name + last initial; no invented clients.
- Client logo strip from the live site, shown as a compact Trusted-by band directly under the homepage hero
- Meta descriptions, `og:image`, Person + LocalBusiness schema, plus FAQPage on Contact and VideoObject for the overview reel
- GitHub Pages project URL with `/mcchord-inc/` base path
- Official speaker overview reel: [Jay McChord Overview Video](https://www.youtube.com/watch?v=d74fKmOc7TY) (McChord Inc. Marketing & Communications)
- Print-ready speaker one-sheet (`speaker-sheet.html`) and `speaker-sheet.pdf`
- Planner FAQ on Home (short) and Contact (full), with Calendly CTA kept
- Media / press kit (`media.html`): short + long bio, headshot downloads, one-sheet, topics, reel, booking
- Working-with-Jay 3-step process (Brief → Customize → Deliver & debrief) on Home, Services, and Contact

## Phase 0 leftovers (content/ops, not code)

- Keep Wix stubs (`/mastermind-group`, `/live-training-keynote-sessions`, empty courses) unpublished or redirected when DNS cuts over.
- Confirm Calendly still matches Jay’s real availability.

## Phase 1 — quick wins on this stack — done (this pass)

1. **Proof, without inventing clients.** Jack Kelly remains the only full-name testimonial already published. The live-site logo strip is a compact Trusted-by band directly under the hero (same six logos only). The homepage CTA sits next to the Jack Kelly quote. Other attributions still use first name + last initial and the role/org type Jay already publishes. Gerald A. uses the stronger published line from Contact (“Fortune 500 sales leader”). Quotes that only lived on About/Topics (Nancy W., Jim N.) are collected on Testimonials.
2. **Copy refresh.** COVID is no longer the primary frame. Headwinds are multi-generational teams, eight-second attention, and hybrid/AI-era chaos. Relevant Leadership stays the flagship. Sections are shorter and more scannable (headwind cards, split checklists).
3. **Speaker reel near the hero.** Uses the real YouTube overview video (`d74fKmOc7TY`) behind a click-to-play facade in the mid-page `#speaker-reel` section (portrait stays in the hero). Poster + play button; click loads a stripped `youtube-nocookie` iframe in place (`modestbranding=1`, `rel=0`, `iv_load_policy=3`, `playsinline=1`, `disablekb=1`, `controls=1`, `fs=0`, `autoplay=1`) — it does not open YouTube in a new tab. To swap it later: replace the video ID in `data-youtube` (`index.html` `#speaker-reel`; also `media.html`) and the matching `VideoObject` URLs.
4. **Speaker one-sheet.** `speaker-sheet.html` is print-ready (browser Print / Save as PDF). `speaker-sheet.pdf` is the downloadable file. Bio, topics, Jack Kelly quote, logos, contact, and Calendly CTA. Regenerate the PDF after copy changes (headless Chrome against the local HTML).
5. **Planner FAQ** on Contact (with FAQ schema) and a short version on Home. Calendly remains the booking path. Sticky mobile **Book a call** bar is unchanged.
6. **CTA consistency.** Header, hero, bands, and most buttons say **Schedule Exploratory Call**. Topic cards (and the homepage Relevant Leadership secondary) say **Request this session** and open `contact.html?topic=…` so the form prefills; Calendly stays one click away.

## Phase 2 — conversion redesign — done (this pass)

1. **Photo/brand system.** Existing Jay portraits from the live McChord Inc. site are reused in the same slots, with sharper web sizes and cobalt frames. Visible photo captions were removed; meaningful `alt` text stays on the images. Official headshot (`jay-headshot.jpg` / `jay-portrait.jpg`), seated portrait (`jay-stage.jpg` — kept as a studio download on the media kit), environmental (`jay-about.jpg`). Live-session stills (`jay-speaking-01.jpg` … `08`) now supply stage/audience proof on Home, About, and Media. The homepage Relevant Leadership slot uses a real speaking photo instead of the seated studio frame. No stock was added.
2. **Topic cards with takeaways.** Topics page (and homepage topic highlights) now name **who it’s for** and **Monday-morning takeaways** for each of the five published sessions. **Request this session** still opens `contact.html?topic=…` (form prefill); Calendly stays one click away.
3. **Media / press kit.** New `media.html` in header + footer: short bio, long bio, downloadable headshots, one-sheet link, topic list, reel embed, phone/email/Calendly. About page puts credentials up top, story below.
4. **Working with Jay.** Planner-friendly 3-step process on Home, Services, and Contact: Brief (exploratory call) → Customize (30 min–full day, live/virtual/hybrid) → Deliver & debrief.
5. **Mastermind waitlist — skipped.** The live `/mastermind-group` page still ends with author notes (“NEED MORE DESCRIPTIVE INFO Here and a way to sign up to be part of the waiting list”). It is not a ready offer, so no waitlist was invented. Keep the Wix stub unpublished.

## Phase 3 — growth / SEO

1. Insights / field notes (simple HTML or Markdown pages).
2. Individual topic URLs (`topics/relevant-leadership.html`).
3. Case studies (sales team, nonprofit facilitation, association keynote) — only with Jay’s permission and real outcomes.
4. Custom domain `mcchordinc.com` once Jay signs off (see README).
5. Stage/audience stills from Jay’s live sessions are on the site (`jay-speaking-01.jpg` …). Keep adding stronger keynote/audience reaction frames if Jay sends more; do not use stock.

North star from the report: meeting planners should understand *who Jay is, what he delivers Monday morning, who trusts him, and how to book* in under eight seconds of scroll.
