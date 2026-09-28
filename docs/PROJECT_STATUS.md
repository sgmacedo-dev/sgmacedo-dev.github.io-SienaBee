# Siena Bee — Project Status

**Updated:** 2026-09-28 ~13:35 (America/Sao_Paulo)
**Repo:** https://github.com/sgmacedo-dev/sgmacedo-dev.github.io-SienaBee  
**Live (project Pages):** https://sgmacedo-dev.github.io/sgmacedo-dev.github.io-SienaBee/  
**Stack:** Semantic HTML5 · CSS3 · vanilla JavaScript — no framework migration.  
**Identity:** Philosophy · Silence · Slow Living · *Pulchritudo · Silentium · Sapientia*  
**Editorial line:** no astrology / esotericism.

---

## Decisions (current)

| Decision | Choice |
|----------|--------|
| Public URL (until DNS) | GitHub project Pages base above |
| Canonical / sitemap / robots | Use Pages base URL |
| Asset paths | Relative (`../`, `../../`) — required for project Pages |
| CSS source of truth | `css/style.css` + `css/variables.css` |
| Duplicate CSS | `assets/css/style.css` is a deprecated `@import` shim |
| Amazon Prime banner | Discreet placement on **home, library, shop** only; direct `4bee-20` URL (see Affiliate note) |
| Contact | Mailto CTA only; form endpoint deferred |
| Quiet Circle | Honest waitlist stub + mailto (`hello@sienabee.com`); **no** newsletter provider / fake form |
| AdSense | Reserved `.ad-slot` + HTML comments only — **no publisher ID**; **no** root `ads.txt` until real `pub-…` (see `docs/ADSENSE.md`) |
| Library/Shop Amazon links | `.affiliate-cta` + real `data-asin` wired (see `docs/AFFILIATE.md`); tag **`4bee-20`**; Shop music → Spotify only |
| Legal | `/legal/` privacy, terms, cookies, affiliate disclosure (informational templates) |
| Primary nav IA | The House · Editor's Desk · Library · House Shop · Letters · Quiet Circle |

---

## P0 done (this launch pass)

- [x] Remove invalid `<section class="prime-banner">` from `<head>`; keep discreet banner on home/library/shop
- [x] Replace broken `images/hero.jpg`; generate favicon / apple-touch / icons / og-cover
- [x] Legal pages under `/legal/`
- [x] Fix `articles/policies/` dead links → `/legal/`
- [x] Replace empty category stubs with minimal essay indexes; remove `editor/essays` junk
- [x] CSS dedupe strategy
- [x] Full `sitemap.xml` + `robots.txt` aligned to live Pages base
- [x] Canonical / og:url updates on key pages toward Pages base
- [x] AdSense reserved slots (no fake IDs)
- [x] `docs/PROJECT_STATUS.md`, `docs/journalism/` skeleton
- [x] `.env.example`
- [x] Fix wrong `../` depths on House Journal flat essays + philosophy + slow-living duplicate
- [x] Contact: remove fake submit form → mailto
- [x] README structure soft-fix

---

## P1 done (2026-09-27)

- [x] JSON-LD via shared helper in `js/script.js` (`initSchema`): Organization + WebSite on all pages that load the script; Article when `og:type=article`; BreadcrumbList from canonical path. **No SearchAction** (no on-site search yet).
- [x] Accessible mobile nav: `.nav-toggle` injected when `.main-nav` exists; `aria-expanded`, Escape / outside-click / link close; CSS panel ≤900px (nav was previously `display:none` with no toggle).
- [x] Affiliate components: `.affiliate-cta` / `.affiliate-card` / `.affiliate-disclosure-note`; Library + Shop ASINs wired; Shop music via Spotify; tag **`4bee-20`** in `SienaBee.amazon` (see `docs/AFFILIATE.md`).
- [x] Disclosure note visible above product grids on Library/Shop; links use correct `../legal/affiliate-disclosure/` depth.

## P2 done (2026-09-27)

- [x] Unify nav IA on main templates (home, library, shop, about, contact, letters, legal indexes, category indexes)
- [x] *As Time Goes By*: flat `.html` canonical; nested path meta-refresh redirect
- [x] Associates tag `4bee-20` set; Library/Shop ASINs wired; music via Spotify
- [x] Light a11y: skip-link + `main#main-content` on main templates; nav-toggle focus already present; crest alts OK
- [x] Real ASINs on Library/Shop (resolved from Silvana `link.amazon` short links)
- [ ] Full Lighthouse / deeper a11y
- [x] Quiet Circle: dead form → honest waitlist stub + mailto (provider still depends on Silvana)

## P2/P3 shipped (2026-09-28)

- [x] Unify nav IA on **essay/article templates** + incomplete secondary pages (same six primary links; correct `../` depth). Also injected primary nav on reading-room / start / topics / commonplace (headers had brand only).
- [x] Light a11y on remaining key pages: skip-link + `main#main-content` (flat House Journal essays, philosophy essay, policies, editor, music, about/editorial-principles, reading-room, start, topics, commonplace, 404). Crest chrome alts already OK; `.nav-toggle:focus` / `:focus-visible` outline confirmed.
- [x] SEO hygiene spot-check: all existing canonicals / `og:url` still on Pages base; `sitemap.xml` already lists library / shop / legal; **no** leftover `www.sienabee.com` in HTML/XML/JS/txt. Brand emails + console URL `sienabee.com` left intentional.
- [x] Prime banner uses the direct BR Associates URL with tag **`4bee-20`**; no short link; documented in `docs/AFFILIATE.md`.
- [x] This status doc updated.

---


## P3 shipped (2026-09-28 — Quiet Circle / meta / 404)

- [x] Quiet Circle: replace dead newsletter form on Letters with waitlist stub + clear copy; home / start / contact card / philosophy essay CTAs → mailto waitlist (no fake backend).
- [x] Contact: mailto CTAs kept; commented broken form removed (defer note only).
- [x] 404: site header + primary nav (Pages-absolute paths), suggested rooms, OG/twitter, shared CSS/JS.
- [x] OG/twitter consistency on key pages: about, contact, letters, shop, editor, music; library + legal twitter (+ og:url / og:description where missing).
- [x] Perf check: `script.js` already `defer` sitewide; `hero.jpg` preload **only** on home.
- [x] This status doc updated.

## AdSense prep shipped (2026-09-28)

- [x] `docs/ADSENSE.md` — apply URL, where to paste `ca-pub`, `ads.txt` line template
- [x] `docs/snippets/ad-slot.html` — reserved → live unit pattern
- [x] Reserved `.ad-slot` consistently on main content surfaces (no fake `ca-pub`)
- [x] Privacy + Cookie mention advertising **when enabled** (AdSense not active yet)
- [x] **No** root `ads.txt` until real publisher ID (empty/commented ads.txt avoided)
- [x] Secondary OG/twitter + canonical on reading-room / start / topics / commonplace; `404` `og:url`

## Depends on Silvana

1. Custom domain DNS + GitHub Pages `CNAME` for `sienabee.com` / `www`
2. ~~Real Amazon ASINs for Library/Shop cards~~ (done; tag **`4bee-20`**). **Prime URL:** direct `associadosprime` link uses tag `4bee-20`; no short link. Optionally confirm Mere Christianity / Consolations editions.
3. Working inboxes: `hello@sienabee.com`, `partnerships@sienabee.com`
4. Author bio text & photo for About / Editor’s Desk
5. AdSense account → paste real `ca-pub-…` when approved (slots + `ads.txt`; follow `docs/ADSENSE.md`)
6. reCAPTCHA + form endpoint if contact form returns
7. Quiet Circle newsletter / ESP (or keep mailto waitlist)
8. Analytics choice / ID
9. Legal comfort with `/legal/` templates (LGPD) — professional review optional
10. Search Console property for the live URL
11. Which essays are “launch set” vs draft

### How to add AdSense later

Full checklist: **`docs/ADSENSE.md`** (apply URL, paste locations, `ads.txt` template).

1. Apply at [Google AdSense](https://www.google.com/adsense/start/); get approved `ca-pub-…` client ID.  
2. Add the official AdSense script once in `<head>` of templates (or a tiny shared include later).  
3. Replace reserved `.ad-slot` divs with official `<ins class="adsbygoogle">` units (`docs/snippets/ad-slot.html`).  
4. Create root **`ads.txt` only then** — one line: `google.com, pub-XXXXXXXX, DIRECT, f08c47fec0942fa0` (no comment-only / empty file; ads.txt comments can break parsing).  
5. Update Privacy + Cookie pages from “when enabled” to active advertising.  
6. **Never invent `ca-pub` / `pub-` IDs**; never commit secrets. Public site keys may live in HTML when Google marks them public.

**Current:** reserved slots on home, about, editor, letters, library, shop, music, House Journal essays/index, philosophy essay. Privacy/Cookie already mention ads when enabled. **No** `ads.txt` in repo until Silvana pastes a real pub ID.

---

### Amazon Associates (ASINs)

1. [x] Tracking tag confirmed → `4bee-20` in `js/script.js` → `SienaBee.amazon`.
2. [x] Real ASINs on `library/index.html` and `shop/index.html` (music = Spotify).
3. Optional: copy `docs/snippets/affiliate-card.html` for new cards.
4. [x] Sample smoke-test of resolved product URLs; confirm Affiliate Disclosure from Library/Shop as needed.
5. [x] Prime banner uses the direct `4bee-20` URL; no short link.

## Deploy

- Host: GitHub Pages (project site)  
- Branch: `main`  
- Path prefix: `/sgmacedo-dev.github.io-SienaBee/`  
- After push: wait for Pages rebuild, then smoke-test CSS on a deep essay URL.

---

*SHIP > perfection. Preserve maison voice. Do not invent astrology content.*
