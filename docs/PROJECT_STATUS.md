# Siena Bee — Project Status

**Updated:** 2026-09-27 (America/Sao_Paulo)  
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
| Amazon Prime banner | Discreet placement on **home, library, shop** only |
| Contact | Mailto CTA; form endpoint deferred |
| AdSense | Reserved `.ad-slot` + HTML comments only — **no publisher ID** |
| Library/Shop Amazon links | `.affiliate-cta` + real `data-asin` wired (see `docs/AFFILIATE.md`); tag **`4bee-20`**; Shop music → Spotify only |
| Legal | `/legal/` privacy, terms, cookies, affiliate disclosure (informational templates) |

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

## P2 (this pass)

- [x] Unify nav IA on main templates (home, library, shop, about, contact, letters, legal indexes, category indexes)
- [x] *As Time Goes By*: flat `.html` canonical; nested path meta-refresh redirect
- [x] Associates tag `4bee-20` set; Library/Shop ASINs wired; music via Spotify
- [x] Light a11y: skip-link + `main#main-content` on main templates; nav-toggle focus already present; crest alts OK
- [ ] Full Lighthouse / deeper a11y
- [ ] Quiet Circle newsletter provider
- [x] Real ASINs on Library/Shop (resolved from Silvana `link.amazon` short links)

---

## Depends on Silvana

1. Custom domain DNS + GitHub Pages `CNAME` for `sienabee.com` / `www`
2. ~~Real Amazon ASINs for Library/Shop cards~~ (done; tag **`4bee-20`**). Verify `amzn.to` Prime link still maps to Associates account; optionally confirm Mere Christianity / Consolations editions.
3. Working inboxes: `hello@sienabee.com`, `partnerships@sienabee.com`
4. Author bio text & photo for About / Editor’s Desk
5. AdSense account → paste real `ca-pub-…` when approved (into reserved slots)
6. reCAPTCHA + form endpoint if contact form returns
7. Analytics choice / ID
8. Legal comfort with `/legal/` templates (LGPD) — professional review optional
9. Search Console property for the live URL
10. Which essays are “launch set” vs draft

### How to add AdSense later

1. Get approved `ca-pub-…` client ID.  
2. Add the official AdSense script once in `<head>` of templates (or a tiny shared include later).  
3. Replace reserved `.ad-slot` divs with official `<ins class="adsbygoogle">` units.  
4. Update Privacy + Cookie pages.  
5. **Never commit secrets**; site keys that Google marks public may live in HTML.

---


### Amazon Associates (ASINs)

1. [x] Tracking tag confirmed → `4bee-20` in `js/script.js` → `SienaBee.amazon`.
2. [x] Real ASINs on `library/index.html` and `shop/index.html` (music = Spotify).
3. Optional: copy `docs/snippets/affiliate-card.html` for new cards.
4. [x] Sample smoke-test of resolved product URLs; confirm Affiliate Disclosure from Library/Shop as needed.

## Deploy

- Host: GitHub Pages (project site)  
- Branch: `main`  
- Path prefix: `/sgmacedo-dev.github.io-SienaBee/`  
- After push: wait for Pages rebuild, then smoke-test CSS on a deep essay URL.

---

*SHIP > perfection. Preserve maison voice. Do not invent astrology content.*
